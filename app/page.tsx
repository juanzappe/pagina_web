import Link from 'next/link';
import {
  aboutFeatures,
  heroStats,
  serviceHighlights,
  siteInfo,
  terrazaCategories,
} from '@/data/site';
import { fallbackHeroImage } from '@/data/instagram-gallery';
import { InstagramGallery } from '@/components/instagram-gallery';
import { SectionHeading } from '@/components/section-heading';

export default function HomePage() {
  return (
    <>
      <section className="shell pt-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest text-white shadow-soft">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(42, 31, 26, 0.85) 0%, rgba(74, 100, 128, 0.70) 45%, rgba(74, 100, 128, 0.40) 100%), url(${fallbackHeroImage || siteInfo.heroImage})`,
            }}
          />
          <div className="relative grid gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="animate-fadeUp">
              <p className="eyebrow !text-sand">Cosas ricas y más · La Plata</p>
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
          title="Cuatro formas de vivir San Luis según tu momento del día"
          description="Desde un desayuno rápido hasta un evento completo, la propuesta está pensada para que la experiencia se vea profesional, cercana y consistente en cada servicio."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="shell mt-14">
        <div className="section-card animate-fadeUp">
          <SectionHeading
            eyebrow="Menú destacado"
            title="Una vista rápida de La Terraza para abrir el apetito"
            description="La carta mezcla platos de salón, opciones rápidas, desayunos y postres para que la web comunique variedad real, no una plantilla genérica."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
      </section>

      <section className="shell mt-14">
        <SectionHeading
          eyebrow="Nuestro espacio"
          title="Un lugar con identidad propia para cada momento"
          description="Cerámica artesanal, ambientación cálida y rincones diseñados para que cada visita sea una experiencia."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: '/instagram-media/decoracion/17848302642535331.jpg', label: 'Ambiente' },
            { src: '/instagram-media/decoracion/17926472615846851.jpg', label: 'Detalles' },
            { src: '/instagram-media/terraza/18079865375079935.jpg', label: 'Terraza' },
            { src: '/instagram-media/decoracion/18054635804449453.jpg', label: 'Rincones' },
          ].map((photo, index) => (
            <article
              key={photo.src}
              className="group animate-fadeUp overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80 shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] bg-sand/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-forest">{photo.label}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/decoracion" className="mt-8 inline-flex text-sm font-semibold text-terracotta transition hover:text-forest">
          Ver todo el espacio →
        </Link>
      </section>

      <InstagramGallery />

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
