import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
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
  return (
    <header className="border-b border-neutral-200 px-6 py-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="font-semibold text-neutral-950" href={`/${locale}`}>
          {brand}
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-neutral-700">
          {navigation.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={locale} label={languageSwitcher} />
      </div>
    </header>
  );
}
