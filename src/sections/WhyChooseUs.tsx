import type { WhyChooseUsContent } from "@/types";

export function WhyChooseUs({
  title,
  subtitle,
  benefits,
}: WhyChooseUsContent) {
  return (
    <section className="section-shell section-why" id="why">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-6">{subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              className="studio-card studio-interactive-card why-card p-7"
              key={benefit.id}
            >
              <h3 className="studio-card-title relative">{benefit.title}</h3>
              <p className="studio-card-copy relative mt-4">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
