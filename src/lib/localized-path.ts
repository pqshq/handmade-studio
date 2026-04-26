import type { Locale } from "@/types";

export function localizedPath(locale: Locale, path = "/") {
  return `/${locale}${path === "/" ? "" : path}`;
}
