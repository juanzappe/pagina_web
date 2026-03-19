import Link from 'next/link';
import { siteInfo } from '@/data/site';

export function ContactCard() {
  return (
    <section className="shell mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="section-card animate-fadeUp">
        <p className="eyebrow">Visitanos</p>
        <div className="mt-6 space-y-5 text-ink/80">
          <div>
            <h2 className="font-display text-2xl text-forest">Dirección</h2>
            <p className="mt-2 leading-7">{siteInfo.address}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-forest">WhatsApp</h2>
            <Link href={siteInfo.whatsappUrl} target="_blank" className="mt-2 inline-block transition hover:text-rose">
              {siteInfo.whatsapp}
            </Link>
          </div>
          <div>
            <h2 className="font-display text-2xl text-forest">Instagram</h2>
            <Link href={siteInfo.instagramUrl} target="_blank" className="mt-2 inline-block transition hover:text-rose">
              {siteInfo.instagram}
            </Link>
          </div>
        </div>
      </div>
      <div className="section-card animate-fadeUp p-3 sm:p-4">
        <iframe
          title="Mapa de Confitería San Luis"
          src={siteInfo.mapsEmbed}
          loading="lazy"
          className="h-[320px] w-full rounded-[1.5rem] border-0 sm:h-full sm:min-h-[420px]"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
