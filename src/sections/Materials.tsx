import type { MaterialsContent } from "@/types";

export function Materials({ title, description, items }: MaterialsContent) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-neutral-950">{title}</h2>
        <p className="mt-4 text-base leading-8 text-neutral-700">
          {description}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            className="block border border-neutral-200 p-5 text-neutral-950"
            href={item.href}
            key={item.id}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              {item.description}
            </p>
            <p className="mt-4 text-xs font-medium uppercase text-neutral-500">
              {item.usage}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
