interface SectionHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHero({ eyebrow, title, description }: SectionHeroProps) {
  return (
    <section className="shell pt-12 sm:pt-16">
      <div className="section-card bg-floral animate-fadeUp overflow-hidden border-none">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-forest sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink/80 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
