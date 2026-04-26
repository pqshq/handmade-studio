import type { ProcessContent } from "@/types";

export function Process({ title, description, steps }: ProcessContent) {
  return (
    <section className="section-shell section-light" id="process">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy mt-6">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-7 md:grid-cols-2">
        {steps.map((step) => (
          <article
            className="studio-card studio-interactive-card p-8"
            key={step.id}
          >
            <p className="studio-eyebrow relative">{step.number}</p>
            <h3 className="studio-card-title relative mt-4">{step.title}</h3>
            <p className="studio-card-copy relative mt-4">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
