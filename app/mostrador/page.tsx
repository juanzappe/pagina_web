import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { mostradorBenefits, mostradorCategories, mostradorIntro, siteInfo } from '@/data/site';

const mostradorImages = [
  { src: '/instagram-media/mostrador/17842463046590883.jpg', alt: 'Sándwiches de miga artesanales' },
  { src: '/instagram-media/mostrador/17858932260209016.jpg', alt: 'Variedad del mostrador' },
  { src: '/instagram-media/mostrador/17871686739545012.jpg', alt: 'Productos de panadería fresca' },
  { src: '/instagram-media/mostrador/17888000526348692.jpg', alt: 'Facturas y medialunas del día' },
  { src: '/instagram-media/mostrador/17947883604096466.jpg', alt: 'Bandeja de sándwiches surtidos' },
  { src: '/instagram-media/mostrador/17964643994357567.jpg', alt: 'Opciones para llevar' },
  { src: '/instagram-media/mostrador/17998960259714530.jpg', alt: 'Productos recién elaborados' },
  { src: '/instagram-media/mostrador/18007905125056224.jpg', alt: 'Viandas y comidas rápidas' },
  { src: '/instagram-media/mostrador/18010965719668965.jpg', alt: 'Detalle del mostrador' },
  { src: '/instagram-media/mostrador/18012075838564251.jpg', alt: 'Pastelería artesanal' },
  { src: '/instagram-media/mostrador/18034540535497703.jpg', alt: 'Empanadas y tartas del día' },
  { src: '/instagram-media/mostrador/18054498449578087.jpg', alt: 'Preparación de productos frescos' },
  { src: '/instagram-media/mostrador/18076244878516918.jpg', alt: 'Chipá y panificados calientes' },
  { src: '/instagram-media/mostrador/18079937426482680.jpg', alt: 'Selección de panadería' },
  { src: '/instagram-media/mostrador/18095787884494400.jpg', alt: 'Exhibición del mostrador' },
  { src: '/instagram-media/mostrador/18124468570362587.jpg', alt: 'Productos dulces y salados' },
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

      <section className="shell mt-10">
        <MenuGrid sections={mostradorCategories} />
      </section>

      <section className="shell mt-12 pb-4">
        <SectionHeading
          eyebrow="Galería"
          title="Nuestro mostrador en fotos"
          description="Productos frescos, elaborados a diario con la calidad de siempre."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {mostradorImages.map((image, index) => (
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
                <p className="eyebrow">Mostrador</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">{image.alt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
