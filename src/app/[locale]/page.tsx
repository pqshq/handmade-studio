import { notFound } from "next/navigation";
import { getHomeContent } from "@/content/home";
import { isLocale } from "@/i18n/locales";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Hero } from "@/sections/Hero";
import { Materials } from "@/sections/Materials";
import { Process } from "@/sections/Process";
import { WorkDirections } from "@/sections/WorkDirections";
import type { Locale } from "@/types";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const content = getHomeContent(localeParam as Locale);

  return (
    <>
      <Hero {...content.hero} />
      <About {...content.about} />
      <WorkDirections {...content.workDirections} />
      <Materials {...content.materials} />
      <FeaturedProjects {...content.featuredProjects} />
      <Process {...content.process} />
      <Contact {...content.contact} />
    </>
  );
}
