type WorkDirectionsProps = {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    category: string;
    href: string;
  }[];
};

export function WorkDirections({
  title,
  description,
  items,
}: WorkDirectionsProps) {
  return (
    <section className="section-shell section-wood" id="work-directions">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy mt-6">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a
            className="studio-card studio-link-card block p-8"
            href={item.href}
            key={item.id}
          >
            <p className="studio-eyebrow relative">{item.category}</p>
            <h3 className="studio-card-title relative mt-4">{item.title}</h3>
            <p className="studio-card-copy relative mt-4">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
