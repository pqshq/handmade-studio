import type { MaterialsContent } from "@/types";

export function Materials({ title, description, items }: MaterialsContent) {
  return (
    <section className="section-shell section-material" id="materials">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy mt-6">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-7 md:grid-cols-2">
        {items.map((item) => (
          <a
            className="studio-card studio-link-card block p-8"
            href={item.href}
            key={item.id}
          >
            <h3 className="studio-card-title relative">{item.title}</h3>
            <p className="studio-card-copy relative mt-4">
              {item.description}
            </p>
            <p className="studio-eyebrow relative mt-5">{item.usage}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
