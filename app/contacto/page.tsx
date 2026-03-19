import { ContactCard } from '@/components/contact-card';
import { SectionHero } from '@/components/section-hero';
import { SectionHeading } from '@/components/section-heading';
import { siteInfo } from '@/data/site';

export default function ContactoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Contacto"
        title="Estamos en La Plata para recibirte, ayudarte con tu pedido o planificar tu próximo evento"
        description="La sección prioriza confianza y acción directa: ubicación clara, horarios visibles, WhatsApp, Instagram y mapa embebido para llegar sin vueltas."
        primaryCta={{ href: siteInfo.whatsappUrl, label: 'Escribir por WhatsApp' }}
        secondaryCta={{ href: siteInfo.instagramUrl, label: 'Ver Instagram' }}
      />

      <section className="shell mt-12">
        <div className="section-card animate-fadeUp bg-floral-strong border-none">
          <SectionHeading
            eyebrow="Visitanos"
            title="Confitería San Luis, zona 7 y 63"
            description="Desayunos tempranos, almuerzos de trabajo, meriendas y catering: toda la información importante está ordenada para que el contacto sea inmediato desde cualquier dispositivo."
            align="center"
          />
        </div>
      </section>

      <ContactCard />
    </>
  );
}
