import { assets } from "@/config/assets";
import type { Dictionary } from "@/i18n/types";

export const en: Dictionary = {
  common: {
    brand: "Handmade Studio",
    languageSwitcher: "Language selection",
    footer: {
      copyright: "Base project structure",
    },
  },
  metadata: {
    title: "Handmade Studio",
    description:
      "Custom pieces and spatial design made from wood, metal, gypsum and combined materials.",
  },
  navigation: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#work-directions",
      label: "Directions",
    },
    {
      href: "#materials",
      label: "Materials",
    },
    {
      href: "#featured-projects",
      label: "Projects",
    },
    {
      href: "#process",
      label: "Process",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ],
  home: {
    hero: {
      title: "Handmade Studio",
      subtitle:
        "Custom pieces and spatial design made from wood, metal, gypsum and combined materials.",
      primaryCta: "Discuss a project",
      primaryCtaHref: "#contact",
      secondaryCta: "View work",
      secondaryCtaHref: "#featured-projects",
    },
    about: {
      title: "About the studio",
      description:
        "Handmade Studio creates custom pieces and spatial design from wood, metal, gypsum and combined materials for private and commercial spaces.",
      advantages: [
        {
          id: "custom-projects",
          highlight: "Made for the task",
          title: "Custom projects",
          description:
            "We design around the client's goal, object dimensions and the character of the space instead of forcing a ready-made template.",
        },
        {
          id: "materials",
          highlight: "Wood, metal, gypsum",
          title: "Materials",
          description:
            "We choose wood, metal, gypsum and mixed solutions so the piece is durable, relevant and expressive.",
        },
        {
          id: "space-approach",
          highlight: "Part of the environment",
          title: "Approach to space",
          description:
            "We consider the interior, exterior, usage scenarios and installation so the object works as part of its surroundings.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose us",
      subtitle:
        "A calm process, honest materials and custom thinking for pieces that feel natural in their space.",
      benefits: [
        {
          id: "individual-work",
          title: "Individual work",
          description:
            "Every piece starts from the task, not from a standard catalog shape.",
        },
        {
          id: "material-honesty",
          title: "Honest materials",
          description:
            "Wood, metal and gypsum are chosen for purpose, texture and long-term use.",
        },
        {
          id: "spatial-fit",
          title: "Spatial fit",
          description:
            "We consider the room, facade or terrace so the object belongs to the place.",
        },
        {
          id: "calm-process",
          title: "Calm process",
          description:
            "Clear discussion, practical steps and careful making from idea to handover.",
        },
      ],
    },
    workDirections: {
      title: "Work directions",
      description:
        "We take on individual pieces and complete spatial design where material, size, purpose and surroundings all matter.",
      items: [
        {
          id: "wood-products",
          title: "Wood products",
          description:
            "We make wooden elements for homes, gardens, terraces and commercial spaces.",
          category: "Wood",
          href: "#wood-products",
        },
        {
          id: "custom-furniture",
          title: "Custom furniture",
          description:
            "We create furniture for specific dimensions, usage scenarios and the character of a particular interior.",
          category: "Furniture",
          href: "#custom-furniture",
        },
        {
          id: "home-garden-decor",
          title: "Home and garden decor",
          description:
            "We develop decorative elements for interiors, exteriors and outdoor areas.",
          category: "Decor",
          href: "#home-garden-decor",
        },
        {
          id: "address-signs",
          title: "Address signs",
          description:
            "We make address and street signs with the facade, readability and material in mind.",
          category: "Signs",
          href: "#address-signs",
        },
        {
          id: "homes-saunas-terraces",
          title: "Design for homes, saunas and terraces",
          description:
            "We select solutions for residential and countryside spaces where the object needs to belong to the place.",
          category: "Spaces",
          href: "#homes-saunas-terraces",
        },
        {
          id: "restaurants-themed-spaces",
          title: "Design for restaurants and themed spaces",
          description:
            "We create design elements for cafes, restaurants, guest houses and atmospheric commercial projects.",
          category: "Commercial",
          href: "#restaurants-themed-spaces",
          // TODO: confirm commercial direction with client before enabling
          isVisible: false,
        },
      ],
    },
    materials: {
      title: "Materials",
      description:
        "We choose materials for the task, usage conditions and character of the space so the piece looks right and lasts.",
      items: [
        {
          id: "wood",
          title: "Wood",
          description:
            "A warm natural material for furniture, decorative elements, terraces and design details.",
          usage: "Furniture, decor, exterior and interior elements",
          href: "#wood",
        },
        {
          id: "metal",
          title: "Metal",
          description:
            "A strong material for frames, accents, signs and structural details.",
          usage: "Frames, signage, signs, combined pieces",
          href: "#metal",
        },
        {
          id: "gypsum",
          title: "Gypsum",
          description:
            "A flexible material for textures, decorative forms and expressive interior solutions.",
          usage: "Decor, reliefs, interior elements",
          href: "#gypsum",
        },
        {
          id: "combined-materials",
          title: "Combined materials",
          description:
            "We combine wood, metal, gypsum and other bases when a project needs a special form, strength or texture.",
          usage: "Custom projects, commercial spaces, complex decor",
          href: "#combined-materials",
        },
      ],
    },
    featuredProjects: {
      title: "Featured projects",
      description:
        "A few demo projects show the format of the future portfolio: from small pieces to spatial design.",
      viewLabel: "View project",
      items: [
        {
          id: "address-sign-demo",
          title: "Address sign",
          description:
            "A clean facade sign designed with readability, material and the overall look of the house in mind.",
          category: "Signs",
          material: "Wood and metal",
          href: "#address-sign-demo",
          imageSrc: assets.projects.house,
          imageAlt: "Wooden yard houses and outdoor handmade details",
        },
        {
          id: "terrace-wood-decor-demo",
          title: "Wooden decor for a terrace",
          description:
            "Decorative wooden elements that support the terrace architecture and feel natural in the surroundings.",
          category: "Decor",
          material: "Wood",
          href: "#terrace-wood-decor-demo",
          imageSrc: assets.projects.statue,
          imageAlt: "Handmade hooded statue in a garden setting",
        },
        {
          id: "custom-furniture-demo",
          title: "Custom furniture",
          description:
            "A furniture piece made for room dimensions, usage scenarios and the selected material texture.",
          category: "Furniture",
          material: "Wood",
          href: "#custom-furniture-demo",
          imageSrc: assets.projects.bench,
          imageAlt: "Wooden bench made for an outdoor yard",
        },
        {
          id: "restaurant-design-demo",
          title: "Restaurant design",
          description:
            "Integrated design elements for a commercial space with a focus on atmosphere and durability.",
          category: "Commercial space",
          material: "Combined materials",
          href: "#restaurant-design-demo",
          imageSrc: assets.projects.wall,
          imageAlt: "Relief wall artwork with waterfall-inspired texture",
        },
      ],
    },
    process: {
      title: "How an order works",
      description:
        "We move from the first request to a clear solution, timeline and production without adding unnecessary complexity at the start.",
      steps: [
        {
          id: "request",
          number: "01",
          title: "Request through the form, WhatsApp or Telegram",
          description:
            "At the first step, it is enough to briefly describe the task, object and preferred way to contact you.",
        },
        {
          id: "discussion",
          number: "02",
          title: "Discussion of the idea, dimensions, materials and references",
          description:
            "We clarify the purpose of the piece, dimensions, preferred materials, style and examples to use as reference.",
        },
        {
          id: "approval",
          number: "03",
          title: "Approval of the solution and approximate timeline",
          description:
            "We agree on the direction, base parameters, estimated timing and the next step.",
        },
        {
          id: "production",
          number: "04",
          title: "Production",
          description:
            "We make the piece or design elements according to the agreed materials, dimensions and details.",
        },
        {
          id: "handover",
          number: "05",
          title: "Handover, delivery or installation",
          description:
            "We hand over the finished work, arrange delivery or discuss installation on site if the project needs it.",
        },
      ],
    },
    contact: {
      id: "contact",
      title: "Discuss a project",
      description:
        "Describe the task, material, dimensions or object. At this stage the form does not send data yet, but shows the future request structure.",
      channels: [
        {
          id: "whatsapp",
          label: "WhatsApp",
          href: "#",
          description:
            "A quick channel for the first request and a short consultation.",
        },
        {
          id: "telegram",
          label: "Telegram",
          href: "#",
          description:
            "Convenient for discussing details, photos, dimensions and references.",
        },
        {
          id: "instagram",
          label: "Instagram",
          href: "#",
          description:
            "Useful for viewing the future portfolio, process and recent work.",
        },
        {
          id: "facebook",
          label: "Facebook",
          href: "#",
          description:
            "An additional contact channel for messages and getting to know the studio.",
        },
      ],
      fields: [
        {
          id: "name",
          label: "Name",
          placeholder: "How should we address you",
          type: "text",
        },
        {
          id: "contact",
          label: "Contact",
          placeholder: "Phone, email or messenger",
          type: "text",
        },
        {
          id: "projectType",
          label: "Project type",
          placeholder: "For example: furniture, sign, decor, terrace",
          type: "text",
        },
        {
          id: "message",
          label: "Task description",
          placeholder:
            "Briefly describe the idea, dimensions, materials or object",
          type: "textarea",
        },
      ],
      submitLabel: "Send request",
    },
  },
};
