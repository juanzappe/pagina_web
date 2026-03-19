import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { terrazaSections } from '@/data/site';

export default function LaTerrazaPage() {
  return (
    <>
      <SectionHero
        eyebrow="La Terraza"
        title="Menú pensado para disfrutar con calma"
        description="Una carta con propuestas del día, principales caseros, ensaladas frescas, desayunos completos y postres artesanales para acompañar cada encuentro."
      />
      <MenuGrid sections={terrazaSections} />
    </>
  );
}
