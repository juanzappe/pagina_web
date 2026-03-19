import Link from 'next/link';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { cateringPlans, cateringProcess, cateringServices, siteInfo } from '@/data/site';

export default function CateringPage() {
  return (
    <>
      <SectionHero
        eyebrow="Catering y eventos"
        title="Servicio gastronómico profesional para eventos sociales, corporativos y coffee breaks"
        description="Diseñamos propuestas fáciles de contratar, prolijas de presentar y flexibles para distintos tamaños de evento, siempre con el estilo cálido de Confitería San Luis."
        primaryCta={{ href: siteInfo.whatsappUrl, label: 'Consultar por evento' }}
        secondaryCta={{ href: '/contacto', label: 'Ver contacto' }}
      />

      <section className="shell mt-12">
        <SectionHeading
          eyebrow="Servicios"
          title="Formatos pensados para eventos reales"
          description="La propuesta pone foco en claridad comercial: qué hacemos, para quién sirve y cómo se consulta sin fricción."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cateringServices.map((service, index) => (
            <article
              key={service.title}
              className="section-card animate-fadeUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="eyebrow">Servicio</p>
              <h2 className="mt-4 font-display text-3xl text-forest">{service.title}</h2>
              <p className="mt-4 leading-7 text-ink/75">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-12">
        <SectionHeading
          eyebrow="Promos"
          title="Tres propuestas para cotizar más rápido"
          description="Los packs ayudan a comunicar valor y ordenar la consulta inicial según el tipo de evento y el nivel de servicio esperado."
        />
        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {cateringPlans.map((plan, index) => (
            <article
              key={plan.title}
              className="section-card animate-fadeUp flex h-full flex-col"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="eyebrow">{plan.subtitle}</p>
              <h2 className="mt-4 font-display text-3xl text-forest">{plan.title}</h2>
              <p className="mt-4 leading-7 text-ink/75">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-forest/10 pt-5 text-sm leading-6 text-ink/80">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-terracotta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-12 pb-4">
        <div className="section-card animate-fadeUp border-none bg-floral-strong">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Un proceso simple para avanzar rápido"
            description="La página deja claro el paso a paso para transformar una visita en una consulta real."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {cateringProcess.map((step, index) => (
              <article key={step} className="rounded-[1.5rem] border border-forest/10 bg-white/80 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">0{index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-ink/80">{step}</p>
              </article>
            ))}
          </div>
          <Link
            href={siteInfo.whatsappUrl}
            target="_blank"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Consultar por evento
          </Link>
        </div>
      </section>
    </>
  );
}
