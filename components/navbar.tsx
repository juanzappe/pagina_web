'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, siteInfo } from '@/data/site';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/85 backdrop-blur-xl">
      <div className="shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="group w-fit">
          <p className="font-display text-2xl text-forest transition group-hover:text-rose">{siteInfo.name}</p>
          <p className="text-sm text-forest/70">La Plata · tradición y calidez</p>
        </Link>
        <nav className="flex flex-wrap gap-2 md:justify-end">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                  isActive
                    ? 'bg-forest text-cream shadow-soft'
                    : 'bg-white/70 text-forest hover:bg-sand hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
