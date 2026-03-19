import fs from 'node:fs';
import path from 'node:path';

const SOURCE_DIR = process.env.INSTAGRAM_EXPORT_DIR || '/data/instagram';
const OUTPUT_JSON = process.env.INSTAGRAM_OUTPUT_JSON || path.join(process.cwd(), 'data', 'instagram-gallery.generated.json');
const OUTPUT_DIR = process.env.INSTAGRAM_PUBLIC_DIR || path.join(process.cwd(), 'public', 'instagram-gallery');
const ROOT = process.cwd();

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const VIDEO_EXTENSIONS = new Set(['.mp4', '.mov', '.avi', '.m4v', '.webm']);
const PRODUCT_KEYWORDS = [
  'torta', 'torta', 'cake', 'pastel', 'factura', 'facturas', 'medialuna', 'croissant', 'cafe', 'café',
  'vianda', 'viandas', 'sandwich', 'sándwich', 'panader', 'pasteler', 'postre', 'desayuno', 'merienda',
  'almuerzo', 'brunch', 'cookie', 'alfajor', 'miga', 'chipá', 'chipa', 'budin', 'budín', 'tarta', 'pizza',
  'empanada', 'cheesecake', 'tiramisu', 'tiramisú', 'flan'
];
const SERVICE_KEYWORDS = [
  'catering', 'evento', 'eventos', 'mesa dulce', 'mesa dulce', 'coffee break', 'corporativo', 'corporativos',
  'cumple', 'cumpleaños', 'aniversario', 'casamiento', 'bautismo', 'servicio', 'lunch', 'desayuno de trabajo'
];
const LOCAL_KEYWORDS = [
  'local', 'terraza', 'mostrador', 'salon', 'salón', 'ambiente', 'barra', 'interior', 'fachada', 'espacio',
  'esquina', 'confiteria', 'confitería', 'cafeteria', 'cafetería'
];
const EXCLUDE_KEYWORDS = [
  'promo', 'promoción', 'promocion', '2x1', 'descuento', 'oferta', 'precio', '$', 'ars', 'usd', 'venc',
  'feliz cumpleaños', 'familia', 'amigos', 'vacaciones', 'selfie', 'cumple de', 'personal'
];
const HERO_PREFERRED = ['torta', 'cake', 'café', 'cafe', 'factura', 'medialuna', 'terraza', 'mostrador', 'catering'];

function safeReadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function walk(dir) {
  const entries = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      entries.push(...walk(fullPath));
    } else {
      entries.push(fullPath);
    }
  }
  return entries;
}

function normalizeText(value) {
  return (value || '')
    .toString()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

function scoreKeywords(text, keywords) {
  return keywords.reduce((acc, keyword) => acc + (text.includes(normalizeText(keyword)) ? 1 : 0), 0);
}

function gatherStrings(value, bucket = []) {
  if (value == null) return bucket;
  if (typeof value === 'string') {
    bucket.push(value);
    return bucket;
  }
  if (Array.isArray(value)) {
    for (const item of value) gatherStrings(item, bucket);
    return bucket;
  }
  if (typeof value === 'object') {
    for (const nested of Object.values(value)) gatherStrings(nested, bucket);
  }
  return bucket;
}

function extractMediaCandidates(node, sourceFile, results = []) {
  if (Array.isArray(node)) {
    for (const item of node) extractMediaCandidates(item, sourceFile, results);
    return results;
  }
  if (!node || typeof node !== 'object') return results;

  const directUri = typeof node.uri === 'string' ? node.uri : null;
  const mediaList = Array.isArray(node.media) ? node.media : [];
  const title = typeof node.title === 'string' ? node.title : '';
  const caption = typeof node.caption === 'string' ? node.caption : '';
  const creationTimestamp = node.creation_timestamp ?? node.taken_at_timestamp ?? null;

  if (directUri || mediaList.length) {
    const strings = gatherStrings(node).slice(0, 200);
    const context = strings.join(' | ');
    const mediaItems = mediaList.length ? mediaList : [{ uri: directUri }];
    for (const mediaItem of mediaItems) {
      if (!mediaItem || typeof mediaItem !== 'object' || typeof mediaItem.uri !== 'string') continue;
      results.push({
        sourceFile,
        uri: mediaItem.uri,
        title,
        caption,
        context,
        creationTimestamp,
      });
    }
  }

  for (const value of Object.values(node)) extractMediaCandidates(value, sourceFile, results);
  return results;
}

function classifyItem(candidate) {
  const fullText = normalizeText([candidate.sourceFile, candidate.uri, candidate.title, candidate.caption, candidate.context].join(' | '));
  const ext = path.extname(candidate.uri).toLowerCase();
  const isVideo = VIDEO_EXTENSIONS.has(ext) || fullText.includes('video_versions') || fullText.includes('/videos/');
  const isStory = fullText.includes('story') || fullText.includes('stories') || fullText.includes('historia');
  const hasPriceLikeText = /(^|\s)(\$\s?\d|\d+\s?(ars|usd|pesos))(\s|$)/i.test(candidate.context || '');
  const isPromo = scoreKeywords(fullText, EXCLUDE_KEYWORDS) > 0 || hasPriceLikeText;
  const productScore = scoreKeywords(fullText, PRODUCT_KEYWORDS);
  const serviceScore = scoreKeywords(fullText, SERVICE_KEYWORDS);
  const localScore = scoreKeywords(fullText, LOCAL_KEYWORDS);
  const hasCommercialSignals = productScore + serviceScore + localScore > 0;

  if (!IMAGE_EXTENSIONS.has(ext)) {
    return { include: false, category: 'otros', reason: 'not-image' };
  }
  if (isVideo) {
    return { include: false, category: 'otros', reason: 'video' };
  }
  if (isStory && !hasCommercialSignals) {
    return { include: false, category: 'otros', reason: 'story-without-context' };
  }
  if (isPromo) {
    return { include: false, category: 'otros', reason: 'promotion-or-price' };
  }
  if (!hasCommercialSignals) {
    return { include: false, category: 'otros', reason: 'irrelevant-or-personal' };
  }

  let category = 'otros';
  if (productScore >= serviceScore && productScore >= localScore) category = 'productos';
  else if (serviceScore >= localScore) category = 'servicios';
  else if (localScore > 0) category = 'local';

  const heroBoost = scoreKeywords(fullText, HERO_PREFERRED);
  const qualityScore = productScore * 3 + serviceScore * 3 + localScore * 2 + heroBoost * 2 + (candidate.caption ? 1 : 0);
  return { include: true, category, reason: 'selected', qualityScore };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyForWeb(absoluteSource, category, timestamp) {
  if (!fs.existsSync(absoluteSource)) return null;
  const ext = path.extname(absoluteSource).toLowerCase();
  const stamp = timestamp || Date.now();
  const filename = `${category}-${stamp}-${path.basename(absoluteSource).replace(/[^a-zA-Z0-9_.-]/g, '-')}`;
  const destination = path.join(OUTPUT_DIR, filename);
  ensureDir(OUTPUT_DIR);
  if (!fs.existsSync(destination)) {
    fs.copyFileSync(absoluteSource, destination);
  }
  return `/instagram-gallery/${filename}`;
}

function resolveAbsoluteMediaPath(candidate) {
  const maybeRelative = candidate.uri.replace(/^\/+/, '');
  const direct = path.join(SOURCE_DIR, maybeRelative);
  if (fs.existsSync(direct)) return direct;
  const fromJsonFolder = path.resolve(path.dirname(candidate.sourceFile), candidate.uri);
  if (fs.existsSync(fromJsonFolder)) return fromJsonFolder;
  return null;
}

function buildOutput(selectedItems, meta = {}) {
  const categories = {
    productos: [],
    servicios: [],
    local: [],
    otros: [],
  };

  for (const item of selectedItems) {
    categories[item.category].push(item);
  }

  for (const key of Object.keys(categories)) {
    categories[key].sort((a, b) => b.qualityScore - a.qualityScore || b.timestamp - a.timestamp);
  }

  const hero = [
    ...categories.productos.slice(0, 2),
    ...categories.local.slice(0, 1),
    ...categories.servicios.slice(0, 1),
  ].slice(0, 4);

  const gallery = [...categories.productos, ...categories.servicios, ...categories.local].slice(0, 18);

  return {
    generatedAt: new Date().toISOString(),
    sourceDir: SOURCE_DIR,
    summary: {
      totalSelected: selectedItems.length,
      productos: categories.productos.length,
      servicios: categories.servicios.length,
      local: categories.local.length,
      otros: categories.otros.length,
      notes: meta.notes || [],
    },
    sections: {
      inicio: hero,
      productos: categories.productos,
      servicios: categories.servicios,
      galeria: gallery,
    },
    categories,
  };
}

function main() {
  ensureDir(path.dirname(OUTPUT_JSON));
  ensureDir(OUTPUT_DIR);

  if (!fs.existsSync(SOURCE_DIR)) {
    const empty = buildOutput([], {
      notes: [`No se encontró el directorio de exportación: ${SOURCE_DIR}`],
    });
    fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(empty, null, 2)}\n`);
    console.log(`Instagram export no encontrado en ${SOURCE_DIR}. Se generó salida vacía en ${OUTPUT_JSON}`);
    return;
  }

  const files = walk(SOURCE_DIR).filter((file) => file.toLowerCase().endsWith('.json'));
  const candidates = [];
  for (const file of files) {
    const json = safeReadJson(file);
    if (json) extractMediaCandidates(json, file, candidates);
  }

  const dedup = new Map();
  for (const candidate of candidates) {
    const key = `${candidate.uri}::${candidate.caption || ''}`;
    if (!dedup.has(key)) dedup.set(key, candidate);
  }

  const selectedItems = [];
  for (const candidate of dedup.values()) {
    const decision = classifyItem(candidate);
    if (!decision.include) continue;
    const absolutePath = resolveAbsoluteMediaPath(candidate);
    const publicPath = absolutePath ? copyForWeb(absolutePath, decision.category, candidate.creationTimestamp) : null;
    selectedItems.push({
      id: `${decision.category}-${candidate.creationTimestamp || 'na'}-${path.basename(candidate.uri)}`,
      category: decision.category,
      title: candidate.title || path.basename(candidate.uri),
      caption: candidate.caption || '',
      sourceJson: path.relative(ROOT, candidate.sourceFile),
      sourceMedia: candidate.uri,
      timestamp: Number(candidate.creationTimestamp) || 0,
      qualityScore: decision.qualityScore,
      webPath: publicPath,
      alt: candidate.caption || candidate.title || `Imagen de ${decision.category}`,
    });
  }

  const output = buildOutput(selectedItems, {
    notes: selectedItems.length
      ? ['Se excluyeron videos, stories sin contexto, promociones con precios y contenido sin señales comerciales.']
      : ['No se encontraron assets seleccionables en la exportación disponible.'],
  });

  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Generado ${OUTPUT_JSON} con ${selectedItems.length} items seleccionados.`);
}

main();
