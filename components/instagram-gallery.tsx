import { instagramGallery, type InstagramAsset } from '@/data/instagram-gallery';
import { SectionHeading } from '@/components/section-heading';

function GalleryCard({ item, priority = false }: { item: InstagramAsset; priority?: boolean }) {
  const image = item.webPath;

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80 shadow-soft">
      <div className="relative aspect-[4/3] bg-sand/40">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={item.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading={priority ? 'eager' : 'lazy'}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm leading-6 text-ink/60">
            Asset listo para usar cuando el export de Instagram esté disponible.
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="eyebrow">{item.category}</p>
        <h3 className="mt-3 font-display text-2xl text-forest">{item.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/75">{item.caption || 'Contenido seleccionado para la web comercial.'}</p>
      </div>
    </article>
  );
}

export function InstagramGallery() {
  const { sections, summary } = instagramGallery;

  return (
    <section className="shell mt-14 pb-4">
      <div className="section-card animate-fadeUp overflow-hidden border-none bg-white/75">
        <SectionHeading
          eyebrow="Galería curada"
          title="Contenido seleccionado desde Instagram para Inicio, Productos, Servicios y Galería"
          description="El pipeline prioriza imágenes de producto, servicios y local; excluye promociones vencidas, videos, stories sin contexto y material con baja señal comercial."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-[1.5rem] border border-forest/10 bg-sand/25 p-5">
            <p className="eyebrow">Inicio</p>
            <p className="mt-3 font-display text-3xl text-forest">{sections.inicio.length}</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">Mejores imágenes para hero o destacados principales.</p>
          </article>
          <article className="rounded-[1.5rem] border border-forest/10 bg-sand/25 p-5">
            <p className="eyebrow">Productos</p>
            <p className="mt-3 font-display text-3xl text-forest">{summary.productos}</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">Tortas, facturas, café, viandas y otras tomas de producto.</p>
          </article>
          <article className="rounded-[1.5rem] border border-forest/10 bg-sand/25 p-5">
            <p className="eyebrow">Servicios</p>
            <p className="mt-3 font-display text-3xl text-forest">{summary.servicios}</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">Catering, eventos, coffee breaks y mesas dulces.</p>
          </article>
          <article className="rounded-[1.5rem] border border-forest/10 bg-sand/25 p-5">
            <p className="eyebrow">Local</p>
            <p className="mt-3 font-display text-3xl text-forest">{summary.local}</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">Terraza, mostrador, salón y ambiente del espacio.</p>
          </article>
        </div>

        {summary.notes.length ? (
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-forest/15 bg-floral-strong p-5 text-sm leading-7 text-ink/75">
            {summary.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <SectionHeading
            eyebrow="Inicio"
            title="Selección principal para hero y destacados"
            description="Estas piezas son las primeras candidatas para la cabecera y para bloques visuales de alto impacto comercial."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sections.inicio.length ? (
              sections.inicio.map((item, index) => <GalleryCard key={item.id} item={item} priority={index === 0} />)
            ) : (
              <p className="text-sm leading-7 text-ink/70">Todavía no hay assets seleccionados para Inicio.</p>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Productos"
              title="Contenido listo para menúes, cartas y destacados"
              description="Material útil para mostrar variedad, apetitosidad y calidad visual del mostrador y la cocina."
            />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {sections.productos.slice(0, 4).map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Servicios"
              title="Contenido para eventos, catering y propuestas especiales"
              description="La selección privilegia escenas que transmiten capacidad de servicio y presentación profesional."
            />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {sections.servicios.slice(0, 4).map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading
            eyebrow="Galería"
            title="Banco visual general para la web"
            description="La galería consolidada mezcla productos, servicios y local para reutilizar en home, fichas o sliders futuros."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sections.galeria.length ? (
              sections.galeria.map((item) => <GalleryCard key={item.id} item={item} />)
            ) : (
              <p className="text-sm leading-7 text-ink/70">No se encontraron imágenes listas para la galería con los criterios configurados.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
