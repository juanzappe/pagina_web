import Link from 'next/link';
import { siteInfo } from '@/data/site';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-forest/10 bg-white/60">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-forest">{siteInfo.name}</p>
          <p className="mt-2 max-w-md text-sm text-forest/70">{siteInfo.description}</p>
        </div>
        <div className="space-y-2 text-sm text-forest/80">
          <Link className="block transition hover:text-rose" href={siteInfo.instagramUrl} target="_blank">
            Instagram · {siteInfo.instagram}
          </Link>
          <Link className="block transition hover:text-rose" href={siteInfo.whatsappUrl} target="_blank">
            WhatsApp · {siteInfo.whatsapp}
          </Link>
          <p>{siteInfo.address}</p>
        </div>
      </div>
    </footer>
  );
}
