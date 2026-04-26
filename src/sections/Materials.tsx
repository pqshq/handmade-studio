import type { MaterialsContent } from "@/types";

export function Materials({ title, description, items }: MaterialsContent) {
  return (
    <section className="border-y border-[#eadfce] bg-[#fffaf2]/70 px-6 py-20 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:py-24 [&>*]:mx-auto [&>*]:max-w-[1200px]">
      <div className="max-w-3xl">
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#211b16] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5f5347]">
          {description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            className="block rounded-lg border border-[#ded2c2] bg-[#fffdf8] p-7 text-[#211b16] shadow-[0_22px_70px_rgba(64,48,31,0.09)] transition-colors hover:border-[#b99b70] hover:bg-white"
            href={item.href}
            key={item.id}
          >
            <h3 className="text-xl font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#6f6254]">
              {item.description}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase text-[#9a7644]">
              {item.usage}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
