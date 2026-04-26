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
    <header className="sticky top-0 z-20 border-b border-[#ded2c2]/80 bg-[#f8f4ed]/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="text-sm font-semibold uppercase tracking-[0.18em] text-[#211b16]"
          href={topHref}
        >
          {brand}
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-[#6f6254]">
          {navigation.map((item) => (
            <Link
              className="transition-colors hover:text-[#211b16]"
              key={item.href}
              href={item.href === "/" ? topHref : localizedPath(locale, item.href)}
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
