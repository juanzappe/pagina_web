import { ContactCard } from '@/components/contact-card';
import { SectionHero } from '@/components/section-hero';

export default function ContactoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Contacto"
        title="Estamos cerca para recibirte"
        description="Te esperamos en La Plata para desayunar, almorzar o planificar tu próximo evento. También podés escribirnos por WhatsApp o seguirnos en Instagram."
      />
      <ContactCard />
    </>
  );
}
