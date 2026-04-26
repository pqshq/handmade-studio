import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/locales";
import type { Locale } from "@/types";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Header
        brand={dictionary.common.brand}
        locale={locale}
        navigation={dictionary.navigation}
        languageSwitcher={dictionary.common.languageSwitcher}
      />
      <main>{children}</main>
      <Footer
        brand={dictionary.common.brand}
        copyright={dictionary.common.footer.copyright}
      />
    </>
  );
}
