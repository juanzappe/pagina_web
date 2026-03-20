import Link from 'next/link';
import { contactHighlights, siteInfo } from '@/data/site';

export function ContactCard() {
  return (
    <section className="shell mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="section-card animate-fadeUp">
        <p className="eyebrow">Contacto directo</p>
        <div className="mt-6 space-y-6 text-ink/80">
          <div>
            <h2 className="font-display text-2xl text-forest">Dirección</h2>
            <p className="mt-2 leading-7">{siteInfo.address}</p>
            <p className="text-sm text-ink/65">{siteInfo.neighborhood}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">Horarios</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {siteInfo.hours.map((slot) => (
                <li key={slot.label} className="flex items-center justify-between gap-4 border-b border-forest/10 pb-2">
                  <span>{slot.label}</span>
                  <span className="font-semibold text-forest">{slot.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href={siteInfo.whatsappUrl}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-ink"
            >
              WhatsApp
            </Link>
            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-forest"
            >
              Email
            </a>
            <Link
              href={siteInfo.instagramUrl}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-forest/15 bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
            >
              Instagram
            </Link>
          </div>

          <ul className="space-y-3 border-t border-forest/10 pt-5 text-sm leading-6">
            {contactHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-terracotta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-card animate-fadeUp p-3 sm:p-4">
        <iframe
          title="Mapa de Confitería San Luis"
          src={siteInfo.mapsEmbed}
          loading="lazy"
          className="h-[320px] w-full rounded-[1.5rem] border-0 sm:h-full sm:min-h-[460px]"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="px-2 pb-2 pt-4">
          <Link href={siteInfo.mapsUrl} target="_blank" className="text-sm font-semibold text-forest transition hover:text-terracotta">
            Abrir en Google Maps →
          </Link>
        </div>
      </div>
    </section>
  );
}
