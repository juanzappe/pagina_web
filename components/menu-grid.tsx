interface MenuSection {
  title: string;
  badge?: string;
  description: string;
  items: string[];
}

interface MenuGridProps {
  sections: MenuSection[];
}

export function MenuGrid({ sections }: MenuGridProps) {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section, index) => (
        <article
          key={section.title}
          className="section-card animate-fadeUp h-full overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {section.badge ? <p className="eyebrow">{section.badge}</p> : null}
          <h3 className="mt-3 font-display text-2xl text-forest">{section.title}</h3>
          <p className="mt-3 leading-7 text-ink/75">{section.description}</p>
          <ul className="mt-6 space-y-3 border-t border-forest/10 pt-5 text-sm leading-6 text-ink/85">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-terracotta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
