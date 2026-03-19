import Link from 'next/link';
import {
  aboutFeatures,
  heroStats,
  serviceHighlights,
  siteInfo,
  terrazaCategories,
  trustPoints,
} from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

export default function HomePage() {
  return (
    <>
      <section className="shell pt-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white shadow-soft">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(31, 42, 35, 0.88) 0%, rgba(31, 42, 35, 0.66) 45%, rgba(31, 42, 35, 0.35) 100%), url(${siteInfo.heroImage})`,
            }}
          />
          <div className="relative grid gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="animate-fadeUp">
              <p className="eyebrow !text-sand">Confitería tradicional en La Plata</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">{siteInfo.name}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">{siteInfo.tagline}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{siteInfo.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/la-terraza"
                  className="rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sand hover:text-ink"
                >
                  Ver menú
                </Link>
                <Link
                  href="/contacto"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                >
                  Contacto
                </Link>
                <Link
                  href="/catering"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                >
                  Catering
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {heroStats.map((item, index) => (
                <article
                  key={item.label}
                  className="animate-fadeUp rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="font-display text-3xl text-sand">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-14">
        <SectionHeading
          eyebrow="Qué ofrecemos"
          title="Tres formas de vivir San Luis según tu momento del día"
          description="Desde un desayuno rápido hasta un evento completo, la propuesta está pensada para que la experiencia se vea profesional, cercana y consistente en cada servicio."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((item, index) => (
            <article
              key={item.title}
              className="section-card animate-fadeUp flex h-full flex-col"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="eyebrow">Servicio</p>
              <h2 className="mt-4 font-display text-3xl text-forest">{item.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-ink/75">{item.description}</p>
              <Link href={item.href} className="mt-6 text-sm font-semibold text-terracotta transition hover:text-forest">
                {item.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="section-card animate-fadeUp bg-floral-strong border-none">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Más de 30 años siendo un punto de encuentro gastronómico en La Plata"
            description="La historia de San Luis está asociada a la rutina real de la ciudad: cafés tempranos, almuerzos al paso, meriendas compartidas y eventos que necesitan un servicio cumplidor. Por eso la identidad visual y el contenido priorizan confianza, cercanía y producto real."
          />
        </div>
        <div className="grid gap-5">
          {aboutFeatures.map((item, index) => (
            <article
              key={item.title}
              className="section-card animate-fadeUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="font-display text-2xl text-forest">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card animate-fadeUp">
          <SectionHeading
            eyebrow="Menú destacado"
            title="Una vista rápida de La Terraza para abrir el apetito"
            description="La carta mezcla platos de salón, opciones rápidas, desayunos y postres para que la web comunique variedad real, no una plantilla genérica."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {terrazaCategories.slice(0, 4).map((section) => (
              <div key={section.title} className="rounded-[1.5rem] border border-forest/10 bg-sand/30 p-5">
                <p className="eyebrow">{section.badge}</p>
                <h3 className="mt-3 font-display text-2xl text-forest">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/80">
                  {section.items.slice(0, 3).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/la-terraza" className="mt-8 inline-flex text-sm font-semibold text-terracotta transition hover:text-forest">
            Ver la carta completa →
          </Link>
        </div>

        <div className="section-card animate-fadeUp">
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title="Una experiencia clara, profesional y lista para crecer"
            description="La nueva estructura mejora la navegación, transmite confianza y deja preparada la base para sumar reservas o pedidos online más adelante."
          />
          <ul className="mt-8 space-y-4 text-sm leading-6 text-ink/80">
            {trustPoints.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-[1.25rem] border border-forest/10 bg-white p-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-terracotta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell mt-14 pb-4">
        <div className="section-card animate-fadeUp overflow-hidden border-none bg-forest text-cream">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow !text-sand">Reservas y eventos</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">¿Buscás una opción confiable para una reunión o celebración?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-cream/80">
                Escribinos y armamos una propuesta simple, bien presentada y acorde al tipo de evento, desde una bandeja de miga hasta un lunch completo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href={siteInfo.whatsappUrl}
                target="_blank"
                className="rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
              >
                Consultar por WhatsApp
              </Link>
              <Link
                href="/catering"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
              >
                Ver catering
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
