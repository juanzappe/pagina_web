import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { siteInfo, terrazaCategories, terrazaIntro, terrazaMoments } from '@/data/site';

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

      <section className="shell mt-10">
        <MenuGrid sections={terrazaCategories} />
      </section>
    </>
  );
}
