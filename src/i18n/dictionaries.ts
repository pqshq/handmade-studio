import { defaultLocale } from "@/i18n/locales";
import { en } from "@/i18n/messages/en";
import { lv } from "@/i18n/messages/lv";
import { ru } from "@/i18n/messages/ru";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/types";

const dictionaries: Record<Locale, Dictionary> = {
  ru,
  lv,
  en,
};

function mergeDictionary(dictionary: Partial<Dictionary>): Dictionary {
  return {
    ...ru,
    ...dictionary,
    common: {
      ...ru.common,
      ...dictionary.common,
      footer: {
        ...ru.common.footer,
        ...dictionary.common?.footer,
      },
    },
    navigation: dictionary.navigation ?? ru.navigation,
    metadata: {
      ...ru.metadata,
      ...dictionary.metadata,
    },
    home: {
      ...ru.home,
      ...dictionary.home,
    },
  };
}

export function getDictionary(locale: Locale): Dictionary {
  return mergeDictionary(dictionaries[locale] ?? dictionaries[defaultLocale]);
}
