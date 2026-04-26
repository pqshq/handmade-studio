import type { FeaturedProjectsContent } from "@/types";

export function FeaturedProjects({
  title,
  description,
  items,
}: FeaturedProjectsContent) {
  return (
    <section className="bg-[#f8f4ed] px-6 py-20 sm:py-24 [&>*]:mx-auto [&>*]:max-w-[1200px]">
      <div className="max-w-3xl">
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#211b16] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5f5347]">
          {description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <a
            className="block rounded-lg border border-[#ded2c2] bg-[#fffdf8] p-8 text-[#211b16] shadow-[0_24px_76px_rgba(64,48,31,0.10)] transition-colors hover:border-[#b99b70] hover:bg-white"
            href={item.href}
            key={item.id}
          >
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase text-[#9a7644]">
              <span>{item.category}</span>
              <span>{item.material}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#6f6254]">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
