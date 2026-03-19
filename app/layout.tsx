import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
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
  title: 'San Luis · Cosas Ricas y Más | Confitería en La Plata',
  description:
    'Confitería San Luis: cosas ricas y más. Panadería artesanal, restaurante, mostrador, catering y objetos de diseño en 7 y 63, La Plata.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
