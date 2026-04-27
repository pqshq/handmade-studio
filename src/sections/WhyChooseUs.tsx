"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { WhyChooseUsContent } from "@/types";

export function WhyChooseUs({
  title,
  subtitle,
  benefits,
}: WhyChooseUsContent) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealedCards, setRevealedCards] = useState<Set<string>>(
    () => new Set(),
  );
  const [activeCard, setActiveCard] = useState(0);
  const displayedActiveCard =
    benefits.length > 0 ? activeCard % benefits.length : 0;

  useEffect(() => {
    if (benefits.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveCard((currentCard) => (currentCard + 1) % benefits.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [benefits.length]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".why-card"),
    );

    if (!("IntersectionObserver" in window)) {
      setRevealedCards(new Set(cards.map((card) => card.dataset.cardId ?? "")));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const card = entry.target;

          if (!(card instanceof HTMLElement)) {
            return;
          }

          const cardId = card.dataset.cardId;

          if (!cardId) {
            return;
          }

          setRevealedCards((currentCards) => {
            const nextCards = new Set(currentCards);
            nextCards.add(cardId);
            return nextCards;
          });
          observer.unobserve(card);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-shell section-why" id="why" ref={sectionRef}>
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-6">{subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              className="studio-card studio-interactive-card why-card p-7"
              data-active={index === displayedActiveCard}
              data-card-id={benefit.id}
              data-revealed={revealedCards.has(benefit.id)}
              key={benefit.id}
              style={
                {
                  "--why-reveal-delay": `${index * 120}ms`,
                } as CSSProperties
              }
            >
              <span aria-hidden="true" className="why-card-accent" />
              <h3 className="studio-card-title relative">{benefit.title}</h3>
              <p className="studio-card-copy relative mt-4">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
