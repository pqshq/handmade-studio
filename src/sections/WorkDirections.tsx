import Link from "next/link";
import type { WorkDirectionsContent } from "@/types";

export function WorkDirections({
  title,
  description,
  items,
}: WorkDirectionsContent) {
  const visibleItems = items.filter((item) => item.isVisible !== false);

  return (
    <section className="section-shell section-wood" id="work-directions">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy mt-6">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-7 md:auto-rows-fr md:grid-cols-2">
        {visibleItems.map((item, index) => (
          <Link
            className={[
              "work-direction-card studio-card studio-link-card flex h-full flex-col p-8",
              index === 0 ? "md:col-span-2 lg:p-10" : "",
            ].join(" ")}
            href={item.href}
            key={item.id}
          >
            <p className="studio-eyebrow relative">{item.category}</p>
            <h3
              className={[
                "studio-card-title relative mt-4",
                index === 0 ? "text-[clamp(1.65rem,3vw,2.4rem)]" : "",
              ].join(" ")}
            >
              {item.title}
            </h3>
            <p
              className={[
                "studio-card-copy relative mt-4",
                index === 0 ? "max-w-2xl text-base" : "",
              ].join(" ")}
            >
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
