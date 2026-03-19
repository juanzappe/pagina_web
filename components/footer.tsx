import Link from 'next/link';
import { navLinks, siteInfo } from '@/data/site';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-forest/10 bg-white/70">
      <div className="shell grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl text-forest">{siteInfo.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-forest/75">{siteInfo.description}</p>
          <p className="mt-4 text-sm text-forest/65">Próximamente: pedidos online, take away programado y novedades semanales.</p>
        </div>

        <div>
          <p className="eyebrow">Secciones</p>
          <div className="mt-4 space-y-3 text-sm text-forest/80">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block transition hover:text-terracotta">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <div className="mt-4 space-y-3 text-sm text-forest/80">
            <p>{siteInfo.address}</p>
            <Link href={siteInfo.instagramUrl} target="_blank" className="block transition hover:text-terracotta">
              Instagram · {siteInfo.instagram}
            </Link>
            <Link href={siteInfo.whatsappUrl} target="_blank" className="block transition hover:text-terracotta">
              WhatsApp · {siteInfo.whatsapp}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
