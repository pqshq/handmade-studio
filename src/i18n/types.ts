import type { HomeContent, NavigationItem } from "@/types";

export type Dictionary = {
  common: {
    brand: string;
    languageSwitcher: string;
    footer: {
      copyright: string;
    };
  };
  metadata: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  home: HomeContent;
};
