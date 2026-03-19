import Link from 'next/link';

interface SectionHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export function SectionHero({ eyebrow, title, description, primaryCta, secondaryCta }: SectionHeroProps) {
  return (
    <section className="shell pt-8 sm:pt-12">
      <div className="section-card animate-fadeUp overflow-hidden border-none bg-floral-strong px-6 py-10 sm:px-10 sm:py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-forest sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink/80 sm:text-lg">{description}</p>
        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-ink"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-forest/15 bg-white/80 px-6 py-3 text-sm font-semibold text-forest transition duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
