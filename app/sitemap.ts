import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://confiteriasanluis.com.ar';

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/la-terraza`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/mostrador`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/catering`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/decoracion`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), priority: 0.9 },
  ];
}
