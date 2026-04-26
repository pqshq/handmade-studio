import { locales } from "@/i18n/locales";

export type Locale = (typeof locales)[number];

export type NavigationItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
};

export type AboutAdvantage = {
  id: string;
  highlight: string;
  title: string;
  description: string;
};

export type AboutContent = {
  title: string;
  description: string;
  advantages: AboutAdvantage[];
};

export type WorkDirectionItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
};

export type WorkDirectionsContent = {
  title: string;
  description: string;
  items: WorkDirectionItem[];
};

export type MaterialItem = {
  id: string;
  title: string;
  description: string;
  usage: string;
  href: string;
};

export type MaterialsContent = {
  title: string;
  description: string;
  items: MaterialItem[];
};

export type FeaturedProjectItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  material: string;
  href: string;
};

export type FeaturedProjectsContent = {
  title: string;
  description: string;
  items: FeaturedProjectItem[];
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type ProcessContent = {
  title: string;
  description: string;
  steps: ProcessStep[];
};

export type ContactChannel = {
  id: string;
  label: string;
  href: string;
  description: string;
};

export type ContactFormField = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

export type ContactContent = {
  id: string;
  title: string;
  description: string;
  channels: ContactChannel[];
  fields: ContactFormField[];
  submitLabel: string;
};

export type HomeContent = {
  hero: HeroContent;
  about: AboutContent;
  workDirections: WorkDirectionsContent;
  materials: MaterialsContent;
  featuredProjects: FeaturedProjectsContent;
  process: ProcessContent;
  contact: ContactContent;
};
