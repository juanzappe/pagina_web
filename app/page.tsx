import Link from 'next/link';
import {
  aboutFeatures,
  serviceHighlights,
  siteInfo,
  terrazaCategories,
} from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

export default function HomePage() {
  return (
    <>
      {/* Hero: split layout – logo + texto + foto del edificio */}
      <section className="shell pt-6 sm:pt-10">
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            {/* Lado izquierdo: contenido */}
            <div className="flex flex-col justify-center bg-forest px-6 py-12 text-white sm:px-10 sm:py-16 lg:py-20">
              <div className="animate-fadeUp">
                {/* Logo arriba a la izquierda */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-san-luis.svg"
                  alt="San Luis – Confitería & Catering"
                  className="h-20 w-auto sm:h-24 lg:h-28"
                />
                <p className="mt-6 max-w-lg text-lg leading-8 text-white/85 sm:text-xl">
                  {siteInfo.tagline}
                </p>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                  {siteInfo.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/la-terraza"
                    className="rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sand hover:text-ink"
                  >
                    Ver menú
                  </Link>
                  <Link
                    href="/decoracion"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                  >
                    Conocer el espacio
                  </Link>
                  <Link
                    href="/contacto"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              {/* Pilares: Catering, Restaurante, Panadería, Confitería */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: '🍰', label: 'Confitería' },
                  { icon: '🍽️', label: 'Restaurante' },
                  { icon: '🥐', label: 'Panadería' },
                  { icon: '🎉', label: 'Catering' },
                ].map((pillar, index) => (
                  <article
                    key={pillar.label}
                    className="animate-fadeUp rounded-[1.25rem] border border-white/10 bg-white/8 p-4 text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-2xl">{pillar.icon}</p>
                    <p className="mt-2 text-sm font-semibold text-sand">{pillar.label}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Lado derecho: foto del edificio */}
            <div className="relative min-h-[400px] bg-sand/40 lg:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/instagram-media/CONFITERIA.jpg"
                alt="Fachada de Confitería San Luis – esquina clásica con flores pintadas a mano"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="shell mt-14">
        <SectionHeading
          eyebrow="Qué ofrecemos"
          title="Todo lo que necesitás en un solo lugar"
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
              <h2 className="mt-4 font-display text-3xl text-forest sm:text-4xl">
                {item.title === 'La Terraza' ? 'La Terraza (Restaurant)' : item.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-7 text-ink/75 sm:text-lg">{item.description}</p>
              <Link href={item.href} className="mt-6 text-sm font-semibold text-terracotta transition hover:text-forest sm:text-base">
                {item.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="shell mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="section-card animate-fadeUp border-none bg-floral-strong">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Más de 30 años siendo un punto de encuentro gastronómico en La Plata"
            description="San Luis fue fundado por Andrea y Fabián, quienes apostaron a construir un espacio con identidad propia en la esquina de 7 y 63. Lo que empezó como un sueño compartido se transformó en una confitería de referencia para los platenses: un lugar donde la calidez del trato, la cocina casera y la atención al detalle son parte de cada día."
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
              <p className="mt-3 leading-7 text-ink/75">
                {item.title === 'Tradición platense'
                  ? 'San Luis nació de la mano de Andrea y Fabián como un punto de encuentro barrial. Juntos levantaron el negocio con esfuerzo, pasión y atención cercana, y hoy sigue siendo una referencia para quienes buscan calidad constante, cerámica artesanal y trato familiar.'
                  : item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Menú destacado */}
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

      {/* Reservas y eventos */}
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
