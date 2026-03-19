'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, siteInfo } from '@/data/site';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/85 backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link href="/" className="group min-w-0">
          <p className="truncate font-display text-2xl text-forest transition group-hover:text-terracotta sm:text-3xl">
            {siteInfo.name}
          </p>
          <p className="truncate text-xs text-forest/70 sm:text-sm">Panadería · restaurante · catering</p>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <nav className="flex flex-wrap justify-end gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                    isActive
                      ? 'bg-forest text-cream shadow-soft'
                      : 'bg-white/75 text-forest hover:bg-sand hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href={siteInfo.whatsappUrl}
            target="_blank"
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-forest"
          >
            Pedidos y reservas
          </Link>
        </div>
      </div>

      <div className="shell flex gap-2 overflow-x-auto pb-3 lg:hidden">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition duration-300 ${
                isActive ? 'bg-forest text-cream shadow-soft' : 'bg-white/80 text-forest hover:bg-sand'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
