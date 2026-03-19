import Link from 'next/link';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { decoracionHighlights, decoracionFeatures, siteInfo } from '@/data/site';

const decoracionImages = [
  { src: '/instagram-media/decoracion/17848302642535331.jpg', alt: 'Decoración del local - ambiente interior' },
  { src: '/instagram-media/decoracion/17876936811399098.jpg', alt: 'Detalles decorativos del salón' },
  { src: '/instagram-media/decoracion/17879137104290469.jpg', alt: 'Rincón decorado del local' },
  { src: '/instagram-media/decoracion/17926472615846851.jpg', alt: 'Ambientación cálida del espacio' },
  { src: '/instagram-media/decoracion/17980419476748235.jpg', alt: 'Decoración floral y detalles' },
  { src: '/instagram-media/decoracion/17990877713645726.jpg', alt: 'Vista del espacio decorado' },
  { src: '/instagram-media/decoracion/17996215199599061.jpg', alt: 'Elementos decorativos artesanales' },
  { src: '/instagram-media/decoracion/18015459773616821.jpg', alt: 'Iluminación y ambientación' },
  { src: '/instagram-media/decoracion/18031211909221373.jpg', alt: 'Detalle de decoración interior' },
  { src: '/instagram-media/decoracion/18054635804449453.jpg', alt: 'Terraza y decoración exterior' },
  { src: '/instagram-media/decoracion/18256969588147425.jpg', alt: 'Estilo y diseño del espacio' },
  { src: '/instagram-media/decoracion/18265253032132335.jpg', alt: 'Mobiliario y decoración' },
  { src: '/instagram-media/decoracion/18533019187014871.jpg', alt: 'Ambiente general del local' },
];

export default function DecoracionPage() {
  return (
    <>
      <SectionHero
        eyebrow="Decoración y ambiente"
        title="Cada rincón de San Luis está pensado para que disfrutes la experiencia completa"
        description="La decoración no es solo estética: es parte de lo que hace que un desayuno sea especial, que un almuerzo se sienta distinto y que un evento tenga la calidez justa."
        primaryCta={{ href: siteInfo.whatsappUrl, label: 'Reservar una mesa' }}
        secondaryCta={{ href: '/contacto', label: 'Ver contacto' }}
      />

      <section className="shell mt-12">
        <SectionHeading
          eyebrow="Nuestro espacio"
          title="Un lugar con personalidad propia"
          description="Combinamos tradición y diseño contemporáneo para crear un ambiente donde cada detalle suma a la experiencia gastronómica."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {decoracionHighlights.map((item, index) => (
            <article
              key={item.title}
              className="section-card animate-fadeUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="eyebrow">Espacio</p>
              <h2 className="mt-4 font-display text-3xl text-forest">{item.title}</h2>
              <p className="mt-4 leading-7 text-ink/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-12">
        <SectionHeading
          eyebrow="Galería"
          title="Así se ve San Luis por dentro"
          description="Fotos reales de nuestro espacio, tomadas en el día a día del local."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {decoracionImages.map((image, index) => (
            <article
              key={image.src}
              className="group animate-fadeUp overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80 shadow-soft"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/3] bg-sand/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-5">
                <p className="eyebrow">Decoración</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">{image.alt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-12 pb-4">
        <div className="section-card animate-fadeUp border-none bg-floral-strong">
          <SectionHeading
            eyebrow="Detalles"
            title="Lo que hace especial al espacio"
            description="Cada elemento fue elegido para sumar a una experiencia gastronómica cómoda y memorable."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {decoracionFeatures.map((feature, index) => (
              <article key={feature} className="rounded-[1.5rem] border border-forest/10 bg-white/80 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                  <p className="text-sm leading-7 text-ink/80">{feature}</p>
                </div>
              </article>
            ))}
          </div>
          <Link
            href={siteInfo.whatsappUrl}
            target="_blank"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </section>
    </>
  );
}
