import type { ProcessContent } from "@/types";

export function Process({ title, description, steps }: ProcessContent) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-neutral-950">{title}</h2>
        <p className="mt-4 text-base leading-8 text-neutral-700">
          {description}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article className="border border-neutral-200 p-5" key={step.id}>
            <p className="text-xs font-medium uppercase text-neutral-500">
              {step.number}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-950">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
