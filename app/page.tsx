import Link from 'next/link';
import {
  googleReviews,
  serviceHighlights,
  siteInfo,
  terrazaCategories,
} from '@/data/site';
import { SectionDivider } from '@/components/section-divider';
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
                  src="/LOGO.webp"
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
                    className="animate-fadeUp rounded-[1.25rem] border border-white/10 bg-white/10 p-4 text-center"
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

      <SectionDivider />

      {/* Qué ofrecemos – con fotos por sección */}
      <section className="shell mt-16">
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

      <SectionDivider />

      {/* Nosotros – Quiénes somos, Misión y Valores */}
      <section className="shell mt-16">
        <SectionHeading
          eyebrow="Nosotros"
          title="Más de 34 años transformando pasión en experiencias memorables"
          description="Calidad, calidez y tradición en cada producto y servicio, porque creemos que los mejores momentos se disfrutan alrededor de una buena mesa."
        />

        {/* Quiénes somos + foto fundadores */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="section-card animate-fadeUp">
            <p className="eyebrow">Quiénes somos</p>
            <h3 className="mt-4 font-display text-2xl leading-snug text-forest sm:text-3xl">Una empresa familiar nacida de la amistad</h3>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                Somos una empresa familiar con más de 34 años de trayectoria en el mundo gastronómico, fundada por dos amigos que, desde el primer día, compartieron la pasión por el trabajo bien hecho y el compromiso con la calidad.
              </p>
              <p>
                Nuestra historia es también la de un equipo: muchos de nuestros colaboradores nos acompañan desde el primer día, formando parte esencial de esta gran familia. Creemos que la dedicación, el esfuerzo diario y la confianza mutua son los ingredientes que nos permiten ofrecer productos y servicios de excelencia a cada cliente, sin importar si se trata de una gran empresa, una entidad gubernamental o un particular.
              </p>
              <p>
                La calidad no se negocia: cuidamos cada detalle y nos esforzamos en mantener los valores que nos guiaron desde el comienzo. Somos una empresa donde el respeto, la amistad y el espíritu de familia se reflejan tanto puertas adentro como en cada uno de nuestros servicios.
              </p>
              <p>
                Agradecemos a quienes nos eligen, y especialmente a nuestro equipo, que con su compromiso y experiencia, hacen posible que sigamos creciendo, aprendiendo y ofreciendo lo mejor de nosotros cada día.
              </p>
            </div>
          </div>

          {/* Foto de los fundadores */}
          <div className="section-card animate-fadeUp border-none bg-floral-strong" style={{ animationDelay: '120ms' }}>
            <div className="overflow-hidden rounded-[1.5rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/instagram-media/ANDREAYFABIAN.jpg"
                alt="Andrea y Fabián, fundadores de Confitería San Luis"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center font-display text-xl text-forest">Andrea y Fabián</p>
            <p className="mt-1 text-center text-sm text-forest/70">Fundadores · Desde 1991</p>

            {/* Misión */}
            <div className="mt-6 rounded-[1.25rem] border border-forest/10 bg-white/60 p-5">
              <p className="eyebrow">Nuestra misión</p>
              <p className="mt-3 text-sm leading-6 text-ink/75">
                Brindar productos y servicios gastronómicos de la más alta calidad, combinando tradición, innovación y atención personalizada, para crear experiencias memorables en nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-8">
          <h3 className="font-display text-2xl text-forest sm:text-3xl">Nuestros valores</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: 'Calidad innegociable', description: 'No hacemos concesiones en la calidad de nuestros productos y servicios. Buscamos la excelencia en cada detalle.' },
              { title: 'Esfuerzo y dedicación', description: 'Ponemos el corazón en cada proyecto, cuidando cada detalle con la pasión que nos caracteriza.' },
              { title: 'Amistad y confianza', description: 'Nuestra sociedad nació de la amistad y el respeto mutuo, y esos valores guían todas nuestras relaciones.' },
              { title: 'Compromiso', description: 'Cumplimos con cada cliente, sea grande o pequeño, del sector privado o público. Cumplimos con lo que prometemos.' },
              { title: 'Tradición e innovación', description: 'Valoramos nuestras raíces y recetas de siempre, pero nos adaptamos y renovamos constantemente.' },
              { title: 'Familia', description: 'El espíritu familiar está presente en cómo trabajamos y nos relacionamos con colaboradores y clientes.' },
              { title: 'Pasión', description: 'Amamos lo que hacemos y lo transmitimos en cada producto, cada servicio y cada encuentro.' },
              { title: 'Atención personalizada', description: 'Cada cliente es único y merece una experiencia especial. Tratamos a todos con consideración y honestidad.' },
            ].map((valor, index) => (
              <article
                key={valor.title}
                className="animate-fadeUp rounded-[1.5rem] border border-forest/10 bg-sand/30 p-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h4 className="font-display text-lg text-forest">{valor.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink/70">{valor.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Menú destacado – con fotos de platos */}
      <section className="shell mt-16">
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

      <SectionDivider />

      {/* Reseñas de Google Maps */}
      <section className="shell mt-16">
        <SectionHeading
          eyebrow="Reseñas"
          title="Lo que dicen nuestros clientes"
          description="Opiniones reales de quienes nos eligen para desayunar, almorzar, merendar o celebrar."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, index) => (
            <article
              key={index}
              className="animate-fadeUp rounded-[1.5rem] border border-forest/10 bg-white/80 p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-lg text-terracotta">&#9733;</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/80">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-forest">{review.name}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href={siteInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition hover:text-forest"
          >
            Ver todas las reseñas en Google Maps &#8594;
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
                rel="noopener noreferrer"
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
