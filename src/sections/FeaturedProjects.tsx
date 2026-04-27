import Image from "next/image";
import Link from "next/link";
import type { FeaturedProjectsContent } from "@/types";

export function FeaturedProjects({
  title,
  description,
  viewLabel,
  items,
}: FeaturedProjectsContent) {
  return (
    <section className="section-shell portfolio-section" id="featured-projects">
      <div className="section-container grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy">{description}</p>
      </div>

      <div className="section-container mt-16 grid gap-7 md:grid-cols-2">
        {items.map((item) => (
          <Link
            className="portfolio-card group block p-2"
            href={item.href}
            key={item.id}
          >
            <div className="portfolio-placeholder relative aspect-[16/11] overflow-hidden rounded-[1.55rem]">
              <Image
                alt={item.imageAlt}
                className="portfolio-image object-cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={item.imageSrc}
              />
              <div className="portfolio-placeholder-overlay absolute inset-0" />
            </div>

            <div className="p-5 sm:p-6">
              <div className="studio-eyebrow flex flex-wrap gap-2">
                <span>{item.category}</span>
                <span>{item.material}</span>
              </div>
              <h3 className="studio-card-title mt-3">{item.title}</h3>
              <p className="studio-card-copy portfolio-card-copy mt-3 max-w-xl">
                {item.description}
              </p>
              <span className="portfolio-text-cta mt-5 inline-flex text-sm font-semibold">
                {viewLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
