import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { MediaItem } from '@/components/media-item';
import { siteInfo, terrazaCategories, terrazaIntro, terrazaMoments } from '@/data/site';

/* Fotos destacadas para integrar en el contenido */
const heroImages = [
  { src: '/instagram-media/terraza/18304612939265084.jpg', alt: 'Terraza al atardecer' },
  { src: '/instagram-media/terraza/18079865375079935.jpg', alt: 'Terraza con sillones y vegetación' },
];

const dishImages = [
  { src: '/instagram-media/terraza/18021903137557414.jpg', alt: 'Ensalada caesar con pollo crocante' },
  { src: '/instagram-media/terraza/17994970235657151.jpg', alt: 'Platos servidos en La Terraza' },
  { src: '/instagram-media/terraza/18016453129490780.jpg', alt: 'Café con galletita casera' },

  { src: '/instagram-media/terraza/17869848435230401.jpg', alt: 'Detalle del ambiente de La Terraza' },
];

const galleryImages = [
  { src: '/instagram-media/terraza/17870040447466825.jpg', alt: 'Vista de La Terraza al aire libre' },
  { src: '/instagram-media/terraza/18080172466816603.jpg', alt: 'Espacio interior del restaurante' },
];

const galleryVideos = [
  { src: '/instagram-media/terraza/17967461240544601.mp4', alt: 'Recorrido por La Terraza' },
  { src: '/instagram-media/terraza/18013320803766499.mp4', alt: 'Momentos en La Terraza' },
  { src: '/instagram-media/terraza/18016857482115368.mp4', alt: 'El ambiente de La Terraza' },
  { src: '/instagram-media/terraza/18086557459392825.mp4', alt: 'Un día en La Terraza' },
];

export default function LaTerrazaPage() {
  return (
    <>
      <SectionHero
        eyebrow="La Terraza"
        title="Restaurante con platos caseros, meriendas abundantes y una carta pensada para disfrutar"
        description={terrazaIntro.description}
        primaryCta={{ href: siteInfo.whatsappUrl, label: 'Reservar mesa' }}
        secondaryCta={{ href: '/contacto', label: 'Cómo llegar' }}
      />

      {/* Fotos del ambiente – justo después del hero */}
      <section className="shell mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {heroImages.map((img, i) => (
            <div key={img.src} className="animate-fadeUp overflow-hidden rounded-[1.75rem] shadow-soft" style={{ animationDelay: `${i * 100}ms` }}>
              <MediaItem src={img.src} alt={img.alt} className="aspect-[16/9] h-full w-full object-cover" loading="eager" />
            </div>
          ))}
        </div>
      </section>

      <section className="shell mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-card animate-fadeUp bg-floral-strong border-none">
          <SectionHeading
            eyebrow="La carta"
            title={terrazaIntro.title}
            description="Cada categoría está pensada para cubrir almuerzos ejecutivos, encuentros informales y meriendas largas con una estética moderna y fácil de recorrer desde el celular."
          />
        </div>
        <div className="grid gap-4">
          {terrazaMoments.map((item, index) => (
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

      {/* Fotos de platos intercaladas con el menú */}
      <section className="shell mt-10">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {dishImages.map((img, i) => (
            <div key={img.src} className="animate-fadeUp overflow-hidden rounded-[1.5rem]" style={{ animationDelay: `${i * 80}ms` }}>
              <MediaItem src={img.src} alt={img.alt} className="aspect-square w-full object-cover transition duration-500 hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      </section>

      <section className="shell mt-10">
        <MenuGrid sections={terrazaCategories} />
      </section>

      <section className="shell mt-12 pb-4">
        <SectionHeading
          eyebrow="Galería"
          title="Así se vive La Terraza"
          description="Fotos y videos reales de nuestro restaurante, sus platos y su ambiente."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className="group animate-fadeUp overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80 shadow-soft"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/3] bg-sand/40">
                <MediaItem src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <p className="eyebrow">La Terraza</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">{image.alt}</p>
              </div>
            </article>
          ))}
          {galleryVideos.map((video, index) => (
            <article
              key={video.src}
              className="group animate-fadeUp overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80 shadow-soft"
              style={{ animationDelay: `${(galleryImages.length + index) * 80}ms` }}
            >
              <div className="relative aspect-[4/3] bg-sand/40">
                <MediaItem src={video.src} alt={video.alt} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="eyebrow">La Terraza</p>
                <p className="mt-2 text-sm leading-6 text-ink/75">{video.alt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
