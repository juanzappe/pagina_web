import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { cateringSections } from '@/data/site';

export default function CateringPage() {
  return (
    <>
      <SectionHero
        eyebrow="Catering"
        title="Propuestas gastronómicas para eventos memorables"
        description="Ofrecemos lunchs en distintos formatos y un servicio flexible para celebraciones sociales, reuniones corporativas y coffee breaks personalizados."
      />
      <MenuGrid sections={cateringSections} />
      <section className="shell mt-10">
        <div className="section-card animate-fadeUp text-center">
          <p className="eyebrow">Servicios personalizados</p>
          <p className="mt-4 font-display text-3xl text-forest sm:text-4xl">
            Eventos y servicios de café personalizados
          </p>
        </div>
      </section>
    </>
  );
}
