"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { FeaturedProjectItem, FeaturedProjectsContent } from "@/types";

export function FeaturedProjects({
  title,
  description,
  items,
}: FeaturedProjectsContent) {
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section className="section-shell portfolio-section" id="featured-projects">
      <div className="section-container grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy">{description}</p>
      </div>

      <div className="section-container mt-14 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <button
            className="portfolio-card group"
            key={item.id}
            onClick={() => setSelectedProject(item)}
            type="button"
          >
            <div className="portfolio-card-image">
              <Image
                alt={item.imageAlt}
                className="portfolio-image object-cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={item.imageSrc}
              />
            </div>

            <div className="portfolio-card-content">
              <div className="studio-eyebrow portfolio-meta">
                <span>{item.category}</span>
                <span>{item.material}</span>
              </div>
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p className="portfolio-card-copy">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedProject ? (
        <div
          aria-modal="true"
          className="portfolio-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
        >
          <div
            className="portfolio-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="portfolio-modal-close"
              onClick={() => setSelectedProject(null)}
              type="button"
            >
              x
            </button>

            <div className="portfolio-modal-image">
              <Image
                alt={selectedProject.imageAlt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 62vw, 92vw"
                src={selectedProject.imageSrc}
              />
            </div>

            <div className="portfolio-modal-content">
              <div className="studio-eyebrow portfolio-meta">
                <span>{selectedProject.category}</span>
                <span>{selectedProject.material}</span>
              </div>
              <h3 className="portfolio-modal-title">
                {selectedProject.title}
              </h3>
              <p className="portfolio-modal-copy">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
