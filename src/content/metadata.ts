import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/types";

export function getSiteMetadata(locale: Locale) {
  return getDictionary(locale).metadata;
}
