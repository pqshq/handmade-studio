import Link from "next/link";
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
              className="header-nav-link"
              key={item.href}
              href={
                item.href === "/" ? topHref : localizedPath(locale, item.href)
              }
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
