export const siteInfo = {
  name: 'San Luis',
  tagline: 'Cosas ricas y más · Confitería en La Plata',
  description:
    'Desde hace más de 30 años acompañamos desayunos, almuerzos, meriendas y celebraciones con cocina casera, pastelería artesanal, cerámica pintada a mano y atención cercana en la zona de 7 y 63.',
  shortDescription:
    'Un clásico platense para comer rico, llevarte algo del mostrador, encontrar objetos artesanales para tu hogar o resolver un evento con servicio profesional.',
  address: 'Zona 7 y 63, La Plata, Buenos Aires',
  neighborhood: 'Ubicados en una esquina tradicional de La Plata, con salón, terraza y mostrador para llevar.',
  whatsapp: '+54 221 357-0076',
  whatsappUrl: 'https://wa.me/542213570076?text=Hola%20Confiter%C3%ADa%20San%20Luis%2C%20quiero%20hacer%20una%20consulta.',
  email: 'confiteriasanluis@gmail.com',
  emailUrl: 'mailto:confiteriasanluis@gmail.com',
  instagram: '@confiteriasanluislp',
  instagramUrl: 'https://instagram.com/confiteriasanluislp',
  mapsUrl: 'https://maps.google.com/?q=Confiter%C3%ADa+San+Luis+La+Plata',
  mapsEmbed: 'https://www.google.com/maps?q=Confiter%C3%ADa+San+Luis+La+Plata&z=16&output=embed',
  heroImage:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
  hours: [
    { label: 'Lunes a sábados', value: '8:00 a 20:00' },
    { label: 'Domingos', value: 'Cerrado' },
  ],
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/la-terraza', label: 'La Terraza' },
  { href: '/mostrador', label: 'Mostrador' },
  { href: '/catering', label: 'Catering' },
  { href: '/decoracion', label: 'Decoración' },
  { href: '/contacto', label: 'Contacto' },
];

export const heroStats = [
  { value: '30+', label: 'años de historia' },
  { value: '7 y 63', label: 'ubicación clásica en La Plata' },
  { value: '4', label: 'formas de disfrutar: salón, mostrador, eventos y ambiente' },
];

export const serviceHighlights = [
  {
    title: 'La Terraza',
    description:
      'Restaurante con platos caseros, plato del día, meriendas abundantes y postres artesanales en un ambiente relajado.',
    href: '/la-terraza',
    cta: 'Explorar carta',
  },
  {
    title: 'Mostrador',
    description:
      'Sándwiches de miga, panadería fresca y opciones rápidas para llevar o resolver una comida sin perder calidad.',
    href: '/mostrador',
    cta: 'Ver opciones',
  },
  {
    title: 'Catering',
    description:
      'Servicios para eventos sociales, corporativos y coffee breaks con propuestas flexibles, presentación cuidada y sabor casero.',
    href: '/catering',
    cta: 'Consultar evento',
  },
  {
    title: 'Decoración',
    description:
      'Un espacio con identidad propia: ambientación cálida, detalles artesanales y rincones diseñados para hacer de cada visita una experiencia memorable.',
    href: '/decoracion',
    cta: 'Ver el espacio',
  },
];

export const trustPoints = [
  'Producción propia de panadería, pastelería y cocina diaria.',
  'Atención ágil para quienes almuerzan en el salón o pasan a buscar.',
  'Propuestas adaptables para reuniones de trabajo, cumpleaños y celebraciones familiares.',
  'Estructura lista para sumar pedidos online y take away programado próximamente.',
];

export const aboutFeatures = [
  {
    title: 'Tradición platense',
    description:
      'San Luis nació como un punto de encuentro barrial y hoy sigue siendo una referencia para quienes buscan calidad constante, cerámica artesanal y trato cercano.',
  },
  {
    title: 'Cocina y objetos con identidad',
    description:
      'La carta combina clásicos de confitería con platos de restaurante, y el espacio suma vajilla pintada a mano, textiles artesanales y objetos para el hogar.',
  },
  {
    title: 'Cosas ricas y más',
    description:
      'Desayunos, almuerzos, meriendas, catering y además un rincón con cosas lindas para tu hogar: tazas, platos y cerámicas que podés llevar.',
  },
];

export interface MenuCategory {
  title: string;
  badge: string;
  description: string;
  items: string[];
}

export const terrazaIntro = {
  title: 'Una carta completa para almorzar, merendar o quedarse un rato más',
  description:
    'La Terraza reúne platos principales, opciones livianas y clásicos de confitería para quienes buscan una experiencia cómoda, rica y bien presentada en pleno ritmo de la ciudad.',
};

export const terrazaCategories: MenuCategory[] = [
  {
    title: 'Principales',
    badge: 'Platos de salón',
    description: 'Recetas caseras con impronta de restaurante y porciones pensadas para un almuerzo completo.',
    items: [
      'Pastel de papas',
      'Ravioles de ricotta (salsa filetto, cuatro quesos, mixta o bolognesa)',
      'Tallarines con verduras al wok con pollo (opcional camarones)',
      'Canelones (verdura / jamón y queso) con salsa mixta',
      'Medallón de lomo con reducción de Malbec y papines',
      'Bifecitos de lomo a la criolla con arroz',
      'Matambrito de cerdo a la fugazzeta con puré',
      'Bondiola braseada con batatas y zanahorias caramelizadas',
      'Ribs de cerdo con puré de batatas',
      'Filet de merluza empanado con verduras de estación',
      'Lenguado al roquefort con puré',
      'Supremas rellenas con papas gratinadas',
      'Milanesa napolitana (pollo o carne) con papas, batatas o calabaza',
      'Milanesa napolitana con tallarines',
      'Suprema de pollo a la plancha con verduras',
      'Tiritas crocantes de pollo con avena y semillas más papas',
    ],
  },
  {
    title: 'Irresistibles',
    badge: 'Sándwiches especiales',
    description: 'Opciones abundantes, frescas y fáciles de disfrutar en una pausa corta.',
    items: [
      'Ciabatta de bondiola braseada con queso fontina, batatas y cebolla caramelizada',
      'Árabe 100% integral capresse con mix de semillas y papas',
      'Sándwich de milanesa (pollo o ternera) con champiñones, cheddar y coleslaw',
      'Focaccia con jamón crudo, rúcula y fontina',
      'Sandwich pan tortuga con ternera, hojas verdes, fontina y tomates confitados con papas',
      'Baguel (ternera / bondiola / vegetales / pollo) con verdeo, fontina y morrón',
      'Sandwich veggie con berenjenas grilladas, morrón, cebolla morada y muzzarella',
      'Sandwich de hamburguesa de ternera, completa con papas fritas',
      'Wrap (ternera / pollo / jamón y queso / vegetales)',
    ],
  },
  {
    title: 'Ensaladas',
    badge: 'Frescas y completas',
    description: 'Alternativas livianas con proteína, vegetales de estación y aderezos caseros.',
    items: [
      'César',
      'Mediterránea',
      'De mar: arroz, zanahoria, olivas, hojas verdes, huevo y atún',
      'De camarones: rúcula, camarones, cherrys y parmesano',
    ],
  },
  {
    title: 'Bruschettas',
    badge: 'Pan de masa madre',
    description: 'Combinaciones gourmet sobre pan de masa madre, ideales para compartir o acompañar.',
    items: [
      'Ternera, fontina y tomates confitados',
      'Jamón crudo, rúcula y parmesano',
      'Vegetales grillados gratinados',
    ],
  },
  {
    title: 'Algo salado',
    badge: 'Panadería y salados',
    description: 'Clásicos de confitería salados para acompañar cualquier momento del día.',
    items: [
      'Paquetitos de filo de jamón y queso',
      'Croissant de jamón y queso',
      'Fosforitos',
      'Chipá x unidad',
      'Chipá relleno',
      'Scon de queso',
      'Medialunas con jamón y queso',
      'Tostados jamón y queso (3 u.) pan blanco o negro',
      'Tostado de campo de jamón y queso',
      'Triple de crudo y queso (pan negro)',
      'Triple de jamón y queso',
      'Pebete jamón y queso / primavera',
      'Tarta (jamón y queso, atún, verdura o pollo)',
      'Pizzetas de mozzarella',
      'Pizzeta rica (rúcula, tomate, parmesano y jamón)',
      'Tequeños con salsa tartara (3 u.)',
      'Papas rústicas con verdeo, panceta y cheddar',
      'Empanada (consultar variedad)',
    ],
  },
  {
    title: 'Desayunos y meriendas',
    badge: 'Todo el día',
    description: 'Combinaciones clásicas de confitería con infusiones, jugos y panificados recién hechos.',
    items: [
      'Exprés: café o cortado en jarrito + 2 medialunas',
      'San Luis: café con leche + 2 tostadas de campo + queso crema o manteca + budín o muffin + dulce casero o miel + 1 medialuna con jamón y queso',
      'Proteico: café con leche + jugo exprimido chico + 1 tostada de campo con jamón y queso + frutas de estación fileteadas + huevos revueltos',
      'Desayuno / Merienda Golosa (para 3): café jarrito, té o mate + 3 facturas + 1 croissant + 1 fosforito + 1 frolita + 1 porción de budín + 1 pastel + 1 alfajor',
    ],
  },
  {
    title: 'Algo dulce',
    badge: 'Final dulce',
    description: 'Pastelería artesanal para cerrar la comida o acompañar la merienda.',
    items: [
      'Scon dulce',
      'Medialunas',
      'Tostaditas (3 u.) con queso crema, dulce de leche, miel o mermelada',
      'Alfajores (maicena o chocolate)',
      'Pasteles (membrillo o batata)',
      'Yogurt con fruta y granola',
      'Cuadraditos dulces (coco y dulce de leche, ricotta, frutilla, tofi, brownie, pionono, chocotorta, imperial, lemon pie, carrot cake, red velvet)',
      'Budín / Mil hojas (porción)',
      'Muffin',
      'Brownie tibio con americana',
      'Trifle frutal (americana, merengue, frutos rojos y salsa)',
      'Trifle goloso (dulce de leche, helado, oreo y chispitas de chocolate)',
      'Postre semifrío para compartir (consultar variedad)',
      'Shot dulce (consultar variedad)',
      'Crumble de manzana con helado',
    ],
  },
  {
    title: 'Bebidas sin alcohol',
    badge: 'Infusiones y más',
    description: 'Desde clásicos como el café con leche hasta licuados de estación y limonada con menta.',
    items: [
      'Agua',
      'Gaseosa',
      'Té o mate cocido',
      'Café',
      'Café con leche (op. leche de almendras)',
      'Capuccino',
      'Mate',
      'Chocolate (op. leche de almendras)',
      'Licuado (frutas de estación)',
      'Limonada (con menta y jengibre)',
      'Exprimido de naranja',
    ],
  },
  {
    title: 'Bebidas con alcohol',
    badge: 'Para acompañar',
    description: 'Opciones para brindar o acompañar tu comida en La Terraza.',
    items: [
      'Copa de vino',
      'Stella Artois 1000 cc.',
      'Corona / Patagonia 750 cc.',
      'Andes lata',
      'Andes 1000 cc.',
    ],
  },
  {
    title: 'Picadita La Terraza',
    badge: 'Para compartir',
    description: 'La picada ideal para compartir en La Terraza con amigos o en familia.',
    items: [
      'Fiambres, quesos, escabeche y frutos secos',
    ],
  },
];

export const terrazaMoments = [
  'Menú ejecutivo al mediodía con plato, bebida y postre o café.',
  'Opciones vegetarianas y platos livianos para reuniones de trabajo.',
  'Meriendas abundantes ideales para compartir después de la oficina o la facultad.',
];

export const mostradorIntro = {
  title: 'El sector más práctico para llevarte calidad al paso',
  description:
    'Pensado para quienes necesitan resolver desayunos, almuerzos o reuniones informales con rapidez, sin resignar presentación ni sabor.',
};

export const mostradorCategories: MenuCategory[] = [
  {
    title: 'Sándwiches de miga',
    badge: 'Clásicos de la casa',
    description: 'Variedades tradicionales y combinaciones especiales, elaboradas a diario.',
    items: [
      'Jamón cocido y queso',
      'Jamón cocido, tomate y lechuga',
      'Jamón cocido, tomate y huevo',
      'Jamón cocido y aceitunas',
      'Jamón cocido y choclo',
      'Jamón cocido y berenjena',
      'Jamón cocido y remolacha',
      'Jamón cocido, huevo y lechuga',
      'Jamón cocido, huevo y morrón',
      'Jamón cocido y palmitos',
      'Jamón cocido y roquefort',
      'Jamón cocido y ananá',
      'Jamón crudo y queso',
      'Jamón crudo, rúcula y parmesano',
      'Queso, atún, huevo y morrón',
      'Queso, anchoas, huevo y morrón',
    ],
  },
  {
    title: 'Opciones rápidas',
    badge: 'Panadería y viandas',
    description: 'Productos listos para acompañar la rutina, desde temprano hasta media tarde.',
    items: [
      'Tartas individuales con ensalada',
      'Empanadas al horno y porciones de pizza',
      'Viandas caseras para recalentar',
      'Medialunas, chipá, fosforitos y facturas surtidas',
    ],
  },
];

export const mostradorBenefits = [
  'Ideal para compras rápidas antes del trabajo, la facultad o reuniones informales.',
  'Posibilidad de encargar bandejas de miga y panificados para encuentros chicos.',
  'Rotación diaria para encontrar propuestas frescas y recién elaboradas.',
];

export interface CateringPlan {
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
}

export const cateringServices = [
  {
    title: 'Eventos sociales',
    description:
      'Cumpleaños, aniversarios, bautismos y celebraciones familiares con menú a medida, presentación cálida y logística simple.',
  },
  {
    title: 'Eventos corporativos',
    description:
      'Desayunos de trabajo, capacitaciones, lanzamientos y reuniones de equipo con opciones prácticas y prolijas para servir.',
  },
  {
    title: 'Servicio de café',
    description:
      'Coffee breaks con pastelería, mini salados, infusiones y reposición para jornadas largas o encuentros breves.',
  },
];

export const cateringPlans: CateringPlan[] = [
  {
    title: 'Sándwiches de miga',
    subtitle: 'Clásicos de la casa en bandeja',
    description:
      'Variedad de triples elaborados a diario con ingredientes frescos, ideales para reuniones, eventos y celebraciones.',
    includes: [
      'Jamón cocido y queso',
      'Jamón cocido, tomate y lechuga',
      'Jamón cocido, tomate y huevo',
      'Jamón cocido y aceitunas',
      'Jamón cocido y choclo',
      'Jamón cocido y berenjena',
      'Jamón cocido y remolacha',
      'Jamón cocido, huevo y lechuga',
      'Jamón cocido, huevo y morrón',
      'Jamón cocido y palmitos',
      'Jamón cocido y roquefort',
      'Jamón cocido y ananá',
      'Jamón crudo y queso',
      'Jamón crudo, rúcula y parmesano',
      'Queso, atún, huevo y morrón',
      'Queso, anchoas, huevo y morrón',
    ],
  },
  {
    title: 'Salados y Principales',
    subtitle: 'Panadería, platos calientes y opciones frescas',
    description:
      'Desde fosforitos y empanadas hasta platos de salón, ensaladas y sándwiches especiales para armar tu evento a medida.',
    includes: [
      'Paquetitos de filo, croissant, fosforitos y chipá',
      'Medialunas, tostados y triples de jamón y queso',
      'Tartas, pizzetas, tequeños y empanadas',
      'Papas rústicas con verdeo, panceta y cheddar',
      'Principales: pastas, carnes, milanesas y pescados',
      'Irresistibles: ciabatta, focaccia, wraps y baguel',
      'Ensaladas: césar, mediterránea, de mar y de camarones',
      'Bruschettas de pan de masa madre',
      'Picadita: fiambres, quesos, escabeche y frutos secos',
    ],
  },
  {
    title: 'Dulces y Bebidas',
    subtitle: 'Pastelería artesanal e infusiones',
    description:
      'Mesa dulce completa con opciones de pastelería, postres y bebidas para acompañar cualquier evento.',
    includes: [
      'Scon dulce, medialunas y facturas',
      'Alfajores, pasteles y muffins',
      'Cuadraditos dulces (coco, ricotta, brownie, lemon pie y más)',
      'Budín, mil hojas y brownie tibio con americana',
      'Trifle frutal y trifle goloso',
      'Crumble de manzana con helado',
      'Café, café con leche, capuccino y chocolate',
      'Licuados, limonada y exprimido de naranja',
      'Copa de vino, cervezas y bebidas sin alcohol',
    ],
  },
];

export const cateringProcess = [
  'Nos contás el tipo de evento, la fecha y la cantidad de invitados.',
  'Armamos una propuesta con formato, variedad y rango estimado según tu necesidad.',
  'Coordinamos producción, entrega y servicio para que el evento salga prolijo de punta a punta.',
];

export const decoracionIntro = {
  title: 'Un espacio pensado para que cada detalle cuente',
  description:
    'La ambientación de San Luis combina calidez, estilo y funcionalidad. Cada rincón está diseñado para que te sientas cómodo, ya sea en un desayuno tranquilo, un almuerzo de trabajo o una merienda con amigos.',
};

export const decoracionHighlights = [
  {
    title: 'Ambiente cálido',
    description:
      'Iluminación tenue, materiales nobles y detalles florales que generan un clima acogedor desde que entrás.',
  },
  {
    title: 'Espacios versátiles',
    description:
      'Terraza al aire libre, salón interior y rincones íntimos que se adaptan a distintos momentos del día y tipos de encuentro.',
  },
  {
    title: 'Identidad visual',
    description:
      'Cada elemento de la decoración refuerza la personalidad de San Luis: tradición platense con un toque contemporáneo y atención al detalle.',
  },
];

export const decoracionFeatures = [
  'Terraza con vegetación natural y mobiliario de diseño.',
  'Salón interior con iluminación cálida y detalles artesanales.',
  'Vajilla seleccionada para una presentación cuidada en cada servicio.',
  'Rincones fotogénicos que reflejan la identidad del local.',
];

export const googleReviews = [
  {
    name: 'Cliente verificado',
    rating: 5,
    text: 'La San Luis es una confitería excelente. Salones hermosamente ambientados, muy cómodos y luminosos. Terraza recomendable. Comida de muy buena calidad, facturas enormes. Relación precio-calidad buenísima.',
  },
  {
    name: 'Cliente verificado',
    rating: 5,
    text: 'Hablamos con su dueño, Fabián, para el catering de nuestro casamiento. Fue un placer organizarlo con él. Práctico, resolutivo y dándonos la confianza necesaria para dejarlo en sus manos.',
  },
  {
    name: 'Cliente verificado',
    rating: 5,
    text: 'Excelente opción para disfrutar solo, con pareja, con amigos o en familia. Posee una terraza con moderada música y excelente vista. Productos exquisitos y atención esmerada.',
  },
  {
    name: 'Cliente verificado',
    rating: 5,
    text: 'La Panadería y Confitería San Luis abrió un salón arriba. Es muy bonito y a eso hay que agregarle la calidad de sus productos. Las masas hojaldradas, una delicia. Y la atención, como siempre, impecable.',
  },
  {
    name: 'Cliente verificado',
    rating: 5,
    text: 'Excelente servicio!! Los conozco desde el servicio de mi casamiento, el de mi hermana y el bautismo de mi sobrina. ¡Geniales!',
  },
  {
    name: 'Cliente verificado',
    rating: 5,
    text: 'Excelente servicio y buenos precios, se nota la calidad de los productos ni bien los probás. Mucha variedad y muy buena atención.',
  },
];

export const contactHighlights = [
  'Atención por WhatsApp para reservas, pedidos y eventos.',
  'Instagram activo para novedades, bandejas y propuestas del día.',
  'Email disponible para consultas formales, presupuestos y eventos corporativos.',
  'Zona accesible de La Plata para desayunar, almorzar o retirar pedidos.',
];
