"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localizedPath } from "@/lib/localized-path";
import type { Locale, NavigationItem } from "@/types";

type HeaderProps = {
  brand: string;
  locale: Locale;
  navigation: NavigationItem[];
  languageSwitcher: string;
};

export function Header({
  brand,
  locale,
  navigation,
  languageSwitcher,
}: HeaderProps) {
  const topHref = `${localizedPath(locale)}#top`;
  const navTargets = useMemo(
    () =>
      navigation.map((item) => ({
        href: item.href,
        sectionId: item.href === "/" ? "hero" : item.href.replace(/^#/, ""),
      })),
    [navigation],
  );
  const [activeHref, setActiveHref] = useState(navigation[0]?.href ?? "/");

  useEffect(() => {
    const targetBySectionId = new Map(
      navTargets.map((target) => [target.sectionId, target.href]),
    );
    const visibleSections = new Map<string, number>();
    const observedSections = navTargets
      .map((target) => document.getElementById(target.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    function setActiveFromHash() {
      const hash = window.location.hash;

      if (!hash || hash === "#top") {
        setActiveHref("/");
        return;
      }

      const matchingHref = targetBySectionId.get(hash.replace(/^#/, ""));

      if (matchingHref) {
        setActiveHref(matchingHref);
      }
    }

    setActiveFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;

          if (!(section instanceof HTMLElement)) {
            return;
          }

          if (entry.isIntersecting) {
            visibleSections.set(section.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(section.id);
          }
        });

        const [activeSectionId] = [...visibleSections.entries()].sort(
          (a, b) => b[1] - a[1],
        )[0] ?? [undefined];

        if (!activeSectionId) {
          return;
        }

        const matchingHref = targetBySectionId.get(activeSectionId);

        if (matchingHref) {
          setActiveHref(matchingHref);
        }
      },
      {
        rootMargin: "-24% 0px -48% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    observedSections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", setActiveFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", setActiveFromHash);
    };
  }, [navTargets]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#120d09]/72 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 lg:flex-nowrap">
        <Link
          className="header-logo min-w-0 font-semibold uppercase text-[#fff7ea]"
          href={topHref}
        >
          {brand}
        </Link>
        <nav className="order-3 hidden w-full min-w-0 flex-wrap items-center gap-x-4 gap-y-2 text-[#d8c8b8] lg:order-none lg:flex lg:w-auto lg:justify-center">
          {navigation.map((item) => (
            <Link
              aria-current={item.href === activeHref ? "location" : undefined}
              className={[
                "header-nav-link",
                item.href === activeHref ? "header-nav-link-active" : "",
              ].join(" ")}
              key={item.href}
              href={
                item.href === "/" ? topHref : localizedPath(locale, item.href)
              }
              onClick={() => setActiveHref(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={locale} label={languageSwitcher} />
      </div>
    </header>
  );
}
