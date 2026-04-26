type AboutProps = {
  title: string;
  description: string;
  advantages: {
    id: string;
    highlight: string;
    title: string;
    description: string;
  }[];
};

export function About({ title, description, advantages }: AboutProps) {
  return (
    <section className="section-shell section-light" id="about">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-7 md:grid-cols-3">
        {advantages.map((advantage) => (
          <article
            className="studio-card studio-interactive-card p-8"
            key={advantage.id}
          >
            <p className="studio-eyebrow relative">{advantage.highlight}</p>
            <h3 className="studio-card-title relative mt-4">
              {advantage.title}
            </h3>
            <p className="studio-card-copy relative mt-4">
              {advantage.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
