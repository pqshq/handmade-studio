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
    <div aria-label={label} className="flex items-center gap-2 text-sm">
      {locales.map((locale) => (
        <Link
          aria-current={locale === currentLocale ? "page" : undefined}
          className={
            locale === currentLocale
              ? "font-semibold text-neutral-950"
              : "text-neutral-500"
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
