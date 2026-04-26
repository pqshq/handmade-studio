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
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-neutral-950">{title}</h2>
        <p className="mt-4 text-base leading-8 text-neutral-700">
          {description}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {advantages.map((advantage) => (
          <article
            className="border border-neutral-200 p-5"
            key={advantage.id}
          >
            <p className="text-xs font-medium uppercase text-neutral-500">
              {advantage.highlight}
            </p>
            <h3 className="text-lg font-semibold text-neutral-950">
              {advantage.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              {advantage.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
