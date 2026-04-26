import Image from "next/image";
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

      <div className="section-container mt-16 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <a
            className="portfolio-card group block p-2.5 sm:p-3"
            href={item.href}
            key={item.id}
          >
            <div className="portfolio-placeholder relative aspect-[16/10] overflow-hidden rounded-[1.65rem]">
              <Image
                alt={item.imageAlt}
                className="portfolio-image object-cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={item.imageSrc}
              />
              <div className="portfolio-placeholder-overlay absolute inset-0" />
              <div className="portfolio-card-cta absolute bottom-5 left-5 rounded-full border border-white/28 bg-[#1b120c]/44 px-4 py-2 text-xs font-semibold text-[#fff8ee] shadow-[0_14px_34px_rgba(0,0,0,0.26)] backdrop-blur-md">
                {viewLabel}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="studio-eyebrow flex flex-wrap gap-2">
                <span>{item.category}</span>
                <span>{item.material}</span>
              </div>
              <h3 className="studio-card-title mt-3">{item.title}</h3>
              <p className="studio-card-copy mt-3 max-w-xl">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
