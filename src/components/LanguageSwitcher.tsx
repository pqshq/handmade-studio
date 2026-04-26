import Link from "next/link";
import { locales } from "@/i18n/locales";
import type { Locale } from "@/types";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  return (
    <div
      aria-label={label}
      className="flex items-center gap-1 rounded-full border border-[#ded2c2] bg-[#fffaf2] p-1 text-xs font-medium"
    >
      {locales.map((locale) => (
        <Link
          aria-current={locale === currentLocale ? "page" : undefined}
          className={
            locale === currentLocale
              ? "rounded-full bg-[#211b16] px-3 py-1.5 text-white"
              : "rounded-full px-3 py-1.5 text-[#7c6d5d] transition-colors hover:text-[#211b16]"
          }
          href={`/${locale}`}
          key={locale}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
