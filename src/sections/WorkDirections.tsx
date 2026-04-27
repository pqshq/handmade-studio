import Link from "next/link";
import type { WorkDirectionsContent } from "@/types";

export function WorkDirections({
  title,
  description,
  items,
}: WorkDirectionsContent) {
  return (
    <section className="section-shell section-wood" id="work-directions">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy mt-6">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-6">
        {items.map((item, index) => (
          <Link
            className={[
              "studio-card studio-link-card block",
              index === 0
                ? "p-8 md:col-span-2 lg:col-span-3 lg:p-10"
                : index > 2
                  ? "p-8 lg:col-span-2"
                  : "p-8 lg:col-span-3",
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
