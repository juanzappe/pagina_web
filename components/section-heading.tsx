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
      <h2 className="mt-4 max-w-3xl font-display text-3xl text-forest sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-ink/75 sm:text-lg">{description}</p>
    </div>
  );
}
