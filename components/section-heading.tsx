interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={alignment}>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`mt-3 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-terracotta/40" />
        <span className="text-terracotta/50">&#10045;</span>
        <span className="h-px w-8 bg-terracotta/40" />
      </div>
      <h2 className="mt-4 max-w-3xl font-display text-3xl leading-snug text-forest sm:text-4xl sm:leading-snug">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70 sm:text-lg sm:leading-relaxed">{description}</p>
    </div>
  );
}
