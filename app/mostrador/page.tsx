import { MenuGrid } from '@/components/menu-grid';
import { SectionHero } from '@/components/section-hero';
import { mostradorSections } from '@/data/site';

export default function MostradorPage() {
  return (
    <>
      <SectionHero
        eyebrow="Mostrador"
        title="Sabores listos para compartir o llevar"
        description="Encontrá sándwiches de miga, opciones de almuerzo y propuestas de desayuno o merienda para resolver el día con calidad artesanal."
      />
      <MenuGrid sections={mostradorSections} />
    </>
  );
}
