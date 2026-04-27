import Image from "next/image";
import { assets } from "@/config/assets";
import type { AboutContent } from "@/types";

export function About({ title, description, advantages }: AboutContent) {
  return (
    <section className="section-shell section-light" id="about">
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <div className="section-rule mb-8" aria-hidden="true" />
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-7 max-w-3xl text-lg leading-9">
            {description}
          </p>

          <div className="mt-12 grid gap-0">
            {advantages.map((advantage) => (
              <article
                className="about-story-row grid gap-4 border-t border-[#fff4e2]/12 py-6 sm:grid-cols-[8rem_1fr]"
                key={advantage.id}
              >
                <p className="studio-eyebrow">{advantage.highlight}</p>
                <div>
                  <h3 className="studio-card-title">{advantage.title}</h3>
                  <p className="studio-card-copy mt-3 max-w-2xl">
                    {advantage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="story-visual about-visual relative overflow-hidden rounded-[2rem] border border-[#fff4e2]/14">
          <Image
            alt=""
            aria-hidden="true"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            src={assets.hero.workshop}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,5,0.1),rgba(12,8,5,0.5))]" />
          {advantages[0] ? (
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-[#fff4e2]/14 bg-[#120b07]/72 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.3)]">
              <p className="studio-eyebrow">{advantages[0].highlight}</p>
              <p className="mt-3 max-w-md text-xl font-semibold leading-tight text-[#fff7ea]">
                {advantages[0].title}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
