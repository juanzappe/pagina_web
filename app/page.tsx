import Link from 'next/link';
import {
  aboutFeatures,
  serviceHighlights,
  siteInfo,
  terrazaCategories,
} from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

/* Fotos seleccionadas por sección */
const sectionPhotos: Record<string, { src: string; alt: string }[]> = {
  'La Terraza': [
    { src: '/instagram-media/terraza/18021903137557414.jpg', alt: 'Ensalada caesar con pollo crocante' },
    { src: '/instagram-media/terraza/18079865375079935.jpg', alt: 'Terraza con sillones y vegetación' },
    { src: '/instagram-media/terraza/18304612939265084.jpg', alt: 'Terraza al atardecer' },
  ],
  Mostrador: [
    { src: '/instagram-media/mostrador/17947883604096466.jpg', alt: 'Medialunas de manteca recién hechas' },
    { src: '/instagram-media/mostrador/18007905125056224.jpg', alt: 'Chipá en canastas' },
    { src: '/instagram-media/mostrador/18124468570362587.jpg', alt: 'Facturas con membrillo y crema' },
  ],
  Catering: [
    { src: '/instagram-media/catering/18171804703276988.jpg', alt: 'Picada gourmet con fiambres y quesos' },
    { src: '/instagram-media/catering/18011055421576585.jpg', alt: 'Canapés para eventos' },
    { src: '/instagram-media/catering/18368010715070271.jpg', alt: 'Shots dulces para eventos' },
  ],
  'Decoración': [
    { src: '/instagram-media/decoracion/18015459773616821.jpg', alt: 'Pared de tazas artesanales' },
    { src: '/instagram-media/decoracion/17926472615846851.jpg', alt: 'Jarras de cerámica pintadas a mano' },
    { src: '/instagram-media/decoracion/18533019187014871.jpg', alt: 'Tetera y vajilla artesanal' },
  ],
};

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
                <h1 className="mt-5 font-display text-5xl italic leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                  San Luis
                </h1>
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
                    href="/contacto"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              {/* Pilares */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: '🍰', label: 'Confitería' },
                  { icon: '🍽️', label: 'Restaurante' },
                  { icon: '🥐', label: 'Panadería' },
                  { icon: '🎉', label: 'Catering' },
                  { icon: '☕', label: 'Servicios de café' },
                  { icon: '🏡', label: 'Decoración' },
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

      {/* Qué ofrecemos – con fotos por sección */}
      <section className="shell mt-14">
        <SectionHeading
          eyebrow="Qué ofrecemos"
          title="Todo lo que necesitás en un solo lugar"
          description="Desde un desayuno rápido hasta un evento completo, la propuesta está pensada para que la experiencia se vea profesional, cercana y consistente en cada servicio."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((item, index) => {
            const photos = sectionPhotos[item.title] ?? [];
            return (
              <article
                key={item.title}
                className="section-card animate-fadeUp flex h-full flex-col overflow-hidden"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Foto principal de la sección */}
                {photos[0] && (
                  <div className="-mx-6 -mt-6 mb-5 aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photos[0].src}
                      alt={photos[0].alt}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="eyebrow">Servicio</p>
                <h2 className="mt-4 font-display text-3xl text-forest sm:text-4xl">
                  {item.title === 'La Terraza' ? 'La Terraza (Restaurant)' : item.title}
                </h2>
                <p className="mt-4 flex-1 text-base leading-7 text-ink/75 sm:text-lg">{item.description}</p>

                {/* Mini galería de 2 fotos extras */}
                {photos.length > 1 && (
                  <div className="-mx-6 mt-5 grid grid-cols-2 gap-1">
                    {photos.slice(1).map((photo) => (
                      <div key={photo.src} className="aspect-square overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <Link href={item.href} className="mt-6 text-sm font-semibold text-terracotta transition hover:text-forest sm:text-base">
                  {item.cta} →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Sobre nosotros – con foto de Andrea y Fabián */}
      <section className="shell mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="section-card animate-fadeUp border-none bg-floral-strong">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Más de 30 años siendo un punto de encuentro gastronómico en La Plata"
            description="San Luis fue fundado por Andrea y Fabián, quienes apostaron a construir un espacio con identidad propia en la esquina de 7 y 63. Lo que empezó como un sueño compartido se transformó en una confitería de referencia para los platenses: un lugar donde la calidez del trato, la cocina casera y la atención al detalle son parte de cada día."
          />
          {/* Foto de los fundadores */}
          <div className="mt-6 overflow-hidden rounded-[1.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/instagram-media/ANDREAYFABIAN.jpg"
              alt="Andrea y Fabián, fundadores de Confitería San Luis"
              className="w-full object-cover"
              loading="lazy"
            />
            <p className="mt-3 text-center text-sm font-semibold text-forest/70">
              Andrea y Fabián – Fundadores
            </p>
          </div>
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

      {/* Menú destacado – con fotos de platos */}
      <section className="shell mt-14">
        <div className="section-card animate-fadeUp">
          <SectionHeading
            eyebrow="Menú destacado"
            title="Una vista rápida de La Terraza para abrir el apetito"
            description="La carta mezcla platos de salón, opciones rápidas, desayunos y postres para que la web comunique variedad real, no una plantilla genérica."
          />

          {/* Strip de fotos de comida */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { src: '/instagram-media/terraza/17994970235657151.jpg', alt: 'Hamburguesa con batatas' },
              { src: '/instagram-media/terraza/18016453129490780.jpg', alt: 'Café con galletita casera' },
              { src: '/instagram-media/mostrador/17871686739545012.jpg', alt: 'Cheesecake de frutillas' },
              { src: '/instagram-media/mostrador/17964643994357567.jpg', alt: 'Pastelería con medallón San Luis' },
            ].map((photo) => (
              <div key={photo.src} className="aspect-square overflow-hidden rounded-[1.25rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

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
