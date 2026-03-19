import galleryData from './instagram-gallery.generated.json';

export type InstagramCategory = 'productos' | 'servicios' | 'local' | 'otros';

export interface InstagramAsset {
  id: string;
  category: InstagramCategory;
  title: string;
  caption: string;
  sourceJson: string;
  sourceMedia: string;
  timestamp: number;
  qualityScore: number;
  webPath: string | null;
  alt: string;
}

export interface InstagramGalleryData {
  generatedAt: string;
  sourceDir: string;
  summary: {
    totalSelected: number;
    productos: number;
    servicios: number;
    local: number;
    otros: number;
    notes: string[];
  };
  sections: {
    inicio: InstagramAsset[];
    productos: InstagramAsset[];
    servicios: InstagramAsset[];
    galeria: InstagramAsset[];
  };
  categories: Record<InstagramCategory, InstagramAsset[]>;
}

export const instagramGallery = galleryData as InstagramGalleryData;

export const fallbackHeroImage =
  instagramGallery.sections.inicio.find((item) => item.webPath)?.webPath ||
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80';
