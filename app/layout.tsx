import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://confiteriasanluis.com.ar'),
  title: 'San Luis · Cosas Ricas y Más | Confitería en La Plata',
  description:
    'Confitería San Luis: cosas ricas y más. Panadería artesanal, restaurante, mostrador, catering y objetos de diseño en 7 y 63, La Plata.',
  openGraph: {
    title: 'San Luis · Cosas Ricas y Más',
    description:
      'Confitería San Luis: panadería artesanal, restaurante, mostrador, catering y objetos de diseño en 7 y 63, La Plata.',
    url: 'https://confiteriasanluis.com.ar',
    siteName: 'Confitería San Luis',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'San Luis · Cosas Ricas y Más',
    description:
      'Confitería San Luis: panadería artesanal, restaurante, mostrador, catering y objetos de diseño en 7 y 63, La Plata.',
  },
  icons: {
    icon: '/logo-san-luis.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
