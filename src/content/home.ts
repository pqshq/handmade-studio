import { getDictionary } from "@/i18n/dictionaries";
import type { HomeContent, Locale } from "@/types";

export function getHomeContent(locale: Locale): HomeContent {
  return getDictionary(locale).home;
}
