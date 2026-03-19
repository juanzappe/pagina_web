import Link from 'next/link';
import { highlights, siteInfo } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <section className="shell pt-10 sm:pt-16">
        <div className="section-card bg-floral animate-fadeUp relative overflow-hidden border-none px-6 py-12 sm:px-10 sm:py-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65),transparent_65%)] lg:block" />
          <p className="eyebrow">Bienvenidos</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-forest sm:text-6xl">{siteInfo.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80 sm:text-xl">{siteInfo.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">{siteInfo.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/la-terraza"
              className="rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-ink"
            >
              Ver menú
            </Link>
            <Link
              href="/contacto"
              className="rounded-full border border-forest/15 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-forest transition duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-rose"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>

      <section className="shell mt-10 grid gap-6 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <article
            key={item.title}
            className="section-card animate-fadeUp"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="eyebrow">Especialidad</p>
            <h2 className="mt-4 font-display text-3xl text-forest">{item.title}</h2>
            <p className="mt-4 leading-7 text-ink/75">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="shell mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="section-card animate-fadeUp">
          <p className="eyebrow">Nuestra experiencia</p>
          <h2 className="mt-4 font-display text-3xl text-forest sm:text-4xl">
            Un rincón elegante y cálido para cada momento del día.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-ink/75">
            Diseñamos una identidad visual delicada, con tonos verdes, beige y detalles florales para transmitir cercanía,
            tradición y una experiencia cuidada tanto en salón como en eventos.
          </p>
        </div>
        <div className="section-card animate-fadeUp bg-white/70">
          <p className="eyebrow">Explorá</p>
          <ul className="mt-5 space-y-4 text-sm text-ink/80">
            <li>• La Terraza para almuerzos y meriendas con estilo.</li>
            <li>• Mostrador con opciones listas para llevar.</li>
            <li>• Catering a medida para eventos sociales y corporativos.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
