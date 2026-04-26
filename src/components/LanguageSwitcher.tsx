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
      className="flex shrink-0 items-center gap-0.5 rounded-full border border-white/15 bg-white/10 p-1 text-[0.68rem] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:gap-1 sm:text-xs"
    >
      {locales.map((locale) => (
        <Link
          aria-current={locale === currentLocale ? "page" : undefined}
          className={
            locale === currentLocale
              ? "rounded-full bg-[#fff7ea] px-2.5 py-1.5 text-[#211b16] shadow-sm sm:px-3"
              : "rounded-full px-2.5 py-1.5 text-[#d8c8b8] transition-colors hover:bg-white/10 hover:text-[#fff7ea] sm:px-3"
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
