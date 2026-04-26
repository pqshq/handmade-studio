import type { Locale } from "@/types";

export const locales = ["ru", "lv", "en"] as const;

export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
