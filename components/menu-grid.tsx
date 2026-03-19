interface MenuSection {
  title: string;
  items?: string[];
  description?: string;
}

interface MenuGridProps {
  sections: MenuSection[];
}

export function MenuGrid({ sections }: MenuGridProps) {
  return (
    <section className="shell mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section, index) => (
        <article
          key={section.title}
          className="section-card animate-fadeUp"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <h2 className="font-display text-2xl text-forest">{section.title}</h2>
          {section.description ? (
            <p className="mt-4 leading-7 text-ink/75">{section.description}</p>
          ) : null}
          {section.items ? (
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/80">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </section>
  );
}
