"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { assets } from "@/config/assets";
import type { MaterialItem, MaterialsContent } from "@/types";

const materialImages: Record<string, string> = {
  wood: assets.materials.wood,
  metal: assets.materials.metal,
  gypsum: assets.materials.gypsum,
  "combined-materials": assets.materials.combined,
};

function getMaterialImage(item: MaterialItem) {
  return materialImages[item.id] ?? assets.materials.wood;
}

export function Materials({ title, description, items }: MaterialsContent) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [activeId, items],
  );

  if (!activeItem) {
    return null;
  }

  return (
    <section className="section-shell section-material" id="materials">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <div className="mb-10 max-w-3xl">
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-6">{description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div className="material-list" role="tablist" aria-label={title}>
            {items.map((item) => (
              <button
                aria-controls="material-preview"
                aria-selected={item.id === activeItem.id}
                className="material-tab group"
                key={item.id}
                onClick={() => setActiveId(item.id)}
                role="tab"
                type="button"
              >
                <span className="material-tab-title">{item.title}</span>
                <span className="material-tab-usage">{item.usage}</span>
              </button>
            ))}
          </div>

          <div
            className="material-preview"
            id="material-preview"
            role="tabpanel"
          >
            <div className="material-preview-image-wrap">
              <Image
                alt=""
                aria-hidden="true"
                className="material-preview-image object-cover"
                fill
                key={activeItem.id}
                priority={false}
                sizes="(min-width: 1024px) 68vw, 100vw"
                src={getMaterialImage(activeItem)}
              />
              <div className="material-preview-shade" />
            </div>

            <div className="material-preview-copy" key={`${activeItem.id}-copy`}>
              <p className="studio-eyebrow">{activeItem.usage}</p>
              <h3 className="material-preview-title">{activeItem.title}</h3>
              <p className="material-preview-text">{activeItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
