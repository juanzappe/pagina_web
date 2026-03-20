import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { MediaItem } from '@/components/media-item';
import { mostradorBenefits, mostradorCategories, mostradorIntro, siteInfo } from '@/data/site';

/* Foto hero grande */
const heroMedia = [
  { src: '/instagram-media/mostrador/18095787884494400.jpg', alt: 'Exhibición del mostrador' },
  { src: '/instagram-media/mostrador/17947883604096466.jpg', alt: 'Bandeja de sándwiches surtidos' },
];

/* Videos para distribuir entre secciones */
const videos = [
  { src: '/instagram-media/mostrador/18328595929135637.mp4', alt: 'Preparación de productos en el mostrador' },
  { src: '/instagram-media/mostrador/17888236566426401.mp4', alt: 'Elaboración artesanal de panadería' },
];

/* Fotos entre secciones de menú */
const midImages = [
  { src: '/instagram-media/mostrador/17842463046590883.jpg', alt: 'Sándwiches de miga artesanales' },
  { src: '/instagram-media/mostrador/18124468570362587.jpg', alt: 'Productos dulces y salados' },
  { src: '/instagram-media/mostrador/18076244878516918.jpg', alt: 'Chipá y panificados calientes' },
  { src: '/instagram-media/mostrador/17888000526348692.jpg', alt: 'Facturas y medialunas del día' },
];

/* Videos adicionales + fotos para la galería final */
const galleryMedia = [
  { src: '/instagram-media/mostrador/17911190595147064.mp4', alt: 'Video del mostrador del día' },
  { src: '/instagram-media/mostrador/18028305692456813.mp4', alt: 'Novedades del mostrador' },
  { src: '/instagram-media/mostrador/17858932260209016.jpg', alt: 'Variedad del mostrador' },
  { src: '/instagram-media/mostrador/17871686739545012.jpg', alt: 'Productos de panadería fresca' },
  { src: '/instagram-media/mostrador/17964643994357567.jpg', alt: 'Opciones para llevar' },
  { src: '/instagram-media/mostrador/17998960259714530.jpg', alt: 'Productos recién elaborados' },
  { src: '/instagram-media/mostrador/18007905125056224.jpg', alt: 'Viandas y comidas rápidas' },
  { src: '/instagram-media/mostrador/18010965719668965.jpg', alt: 'Detalle del mostrador' },
  { src: '/instagram-media/mostrador/18012075838564251.jpg', alt: 'Pastelería artesanal' },
  { src: '/instagram-media/mostrador/18034540535497703.jpg', alt: 'Empanadas y tartas del día' },
  { src: '/instagram-media/mostrador/18054498449578087.jpg', alt: 'Preparación de productos frescos' },
  { src: '/instagram-media/mostrador/18079937426482680.jpg', alt: 'Selección de panadería' },
  { src: '/instagram-media/mostrador/18352095400044172.jpg', alt: 'Bandejas listas para eventos' },
  { src: '/instagram-media/mostrador/18364379014060552.jpg', alt: 'Lo mejor del mostrador del día' },
];

export default function MostradorPage() {
  return (
    <>
      <SectionHero
        eyebrow="Mostrador"
        title="Opciones rápidas, frescas y bien resueltas para llevar"
        description={mostradorIntro.description}
        primaryCta={{ href: siteInfo.whatsappUrl, label: 'Encargar por WhatsApp' }}
        secondaryCta={{ href: '/contacto', label: 'Horarios y ubicación' }}
      />

      {/* Fotos hero del mostrador */}
      <section className="shell mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {heroMedia.map((img, i) => (
            <div key={img.src} className="animate-fadeUp overflow-hidden rounded-[1.75rem] shadow-soft" style={{ animationDelay: `${i * 100}ms` }}>
              <MediaItem src={img.src} alt={img.alt} className="aspect-[16/9] h-full w-full object-cover" loading="eager" />
            </div>
          ))}
        </div>
      </section>

      <section className="shell mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-card animate-fadeUp">
          <SectionHeading
            eyebrow="Qué encontrás"
            title={mostradorIntro.title}
            description="La navegación se enfoca en resolver rápido lo que el cliente quiere ver: sándwiches de miga y productos de panadería para sumar al paso."
          />
        </div>
        <div className="grid gap-4">
          {mostradorBenefits.map((item, index) => (
            <article
              key={item}
              className="section-card animate-fadeUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-sm leading-7 text-ink/75">{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Videos del mostrador */}
      <section className="shell mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {videos.map((vid, i) => (
            <div key={vid.src} className="animate-fadeUp overflow-hidden rounded-[1.75rem] shadow-soft" style={{ animationDelay: `${i * 100}ms` }}>
              <MediaItem src={vid.src} alt={vid.alt} className="aspect-[16/9] w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Fotos de productos intercaladas antes del menú */}
      <section className="shell mt-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {midImages.map((img, i) => (
            <div key={img.src} className="animate-fadeUp overflow-hidden rounded-[1.5rem]" style={{ animationDelay: `${i * 80}ms` }}>
              <MediaItem src={img.src} alt={img.alt} className="aspect-square w-full object-cover transition duration-500 hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      </section>

      <section className="shell mt-10">
        <MenuGrid sections={mostradorCategories} />
      </section>

      <section className="shell mt-12 pb-4">
        <SectionHeading
          eyebrow="Galería"
          title="Nuestro mostrador en fotos y videos"
          description="Productos frescos, elaborados a diario con la calidad de siempre."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryMedia.map((item, index) => (
            <article
              key={item.src}
              className="group animate-fadeUp overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80 shadow-soft"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/3] bg-sand/40">
                <MediaItem src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <p className="eyebrow">Mostrador</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">{item.alt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
