import type { ProcessContent } from "@/types";

export function Process({ title, description, steps }: ProcessContent) {
  return (
    <section className="section-shell section-light" id="process">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="section-rule mb-8" aria-hidden="true" />
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-6">{description}</p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-4 top-6 w-px bg-gradient-to-b from-[#f0ad61]/0 via-[#f0ad61]/28 to-[#f0ad61]/0"
          />
          <div className="grid gap-8">
            {steps.map((step) => (
              <article className="relative pl-12" key={step.id}>
                <span
                  aria-hidden="true"
                  className="absolute left-[0.55rem] top-1.5 h-3 w-3 rounded-full border border-[#f0ad61] bg-[#130c08]"
                />
                <p className="studio-eyebrow">{step.number}</p>
                <h3 className="studio-card-title mt-3">{step.title}</h3>
                <p className="studio-card-copy mt-3 max-w-2xl">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
