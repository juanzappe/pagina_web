import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { mostradorBenefits, mostradorCategories, mostradorIntro, siteInfo } from '@/data/site';

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
    </>
  );
}
