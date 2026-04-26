import { assets } from "@/config/assets";
import type { Dictionary } from "@/i18n/types";

export const lv: Dictionary = {
  common: {
    brand: "Handmade Studio",
    languageSwitcher: "Valodas izvēle",
    footer: {
      copyright: "Projekta pamatstruktūra",
    },
  },
  metadata: {
    title: "Handmade Studio",
    description:
      "Individuāli izstrādājumi un telpu noformējums no koka, metāla, ģipša un kombinētiem materiāliem.",
  },
  navigation: [
    {
      href: "/",
      label: "Sākums",
    },
    {
      href: "#about",
      label: "Par studiju",
    },
    {
      href: "#work-directions",
      label: "Virzieni",
    },
    {
      href: "#materials",
      label: "Materiāli",
    },
    {
      href: "#featured-projects",
      label: "Projekti",
    },
    {
      href: "#process",
      label: "Process",
    },
    {
      href: "#contact",
      label: "Kontakti",
    },
  ],
  home: {
    hero: {
      title: "Handmade Studio",
      subtitle:
        "Individuāli izstrādājumi un telpu noformējums no koka, metāla, ģipša un kombinētiem materiāliem.",
      primaryCta: "Apspriest projektu",
      primaryCtaHref: "#contact",
      secondaryCta: "Skatīt darbus",
      secondaryCtaHref: "#featured-projects",
    },
    about: {
      title: "Par studiju",
      description:
        "Handmade Studio veido individuālus izstrādājumus un telpu noformējumu no koka, metāla, ģipša un kombinētiem materiāliem privātām un komerciālām telpām.",
      advantages: [
        {
          id: "custom-projects",
          highlight: "Pielāgots uzdevumam",
          title: "Individuāli projekti",
          description:
            "Projektējam atbilstoši klienta uzdevumam, objekta izmēriem un telpas raksturam, nevis pēc gatavas veidnes.",
        },
        {
          id: "materials",
          highlight: "Koks, metāls, ģipsis",
          title: "Materiāli",
          description:
            "Izvēlamies koku, metālu, ģipsi un jauktus risinājumus tā, lai izstrādājums būtu izturīgs, iederīgs un izteiksmīgs.",
        },
        {
          id: "space-approach",
          highlight: "Daļa no vides",
          title: "Pieeja telpai",
          description:
            "Ņemam vērā interjeru, eksterjeru, lietošanas scenārijus un montāžu, lai priekšmets darbotos kā vides daļa.",
        },
      ],
    },
    whyChooseUs: {
      title: "Kāpēc izvēlēties mūs",
      subtitle:
        "Mierīgs process, godīgi materiāli un individuāla pieeja darbiem, kas iederas savā telpā.",
      benefits: [
        {
          id: "individual-work",
          title: "Individuāls darbs",
          description:
            "Katrs izstrādājums sākas no uzdevuma, nevis no standarta kataloga formas.",
        },
        {
          id: "material-honesty",
          title: "Godīgi materiāli",
          description:
            "Koks, metāls un ģipsis tiek izvēlēti pēc mērķa, faktūras un lietošanas.",
        },
        {
          id: "spatial-fit",
          title: "Saderība ar telpu",
          description:
            "Ņemam vērā telpu, fasādi vai terasi, lai objekts iederētos vidē.",
        },
        {
          id: "calm-process",
          title: "Mierīgs process",
          description:
            "Skaidra saruna, praktiski soļi un rūpīga izgatavošana līdz nodošanai.",
        },
      ],
    },
    workDirections: {
      title: "Darba virzieni",
      description:
        "Veidojam gan atsevišķus izstrādājumus, gan kompleksu telpu noformējumu, kur svarīgs ir materiāls, izmērs, uzdevums un apkārtne.",
      items: [
        {
          id: "wood-products",
          title: "Koka izstrādājumi",
          description:
            "Izgatavojam koka elementus mājām, dārziem, terasēm un komerctelpām.",
          category: "Koks",
          href: "#wood-products",
        },
        {
          id: "custom-furniture",
          title: "Mēbeles pēc pasūtījuma",
          description:
            "Veidojam mēbeles konkrētiem izmēriem, lietošanas scenārijiem un interjera raksturam.",
          category: "Mēbeles",
          href: "#custom-furniture",
        },
        {
          id: "home-garden-decor",
          title: "Dekors mājai un dārzam",
          description:
            "Izstrādājam dekoratīvus elementus interjeram, eksterjeram un āra zonām.",
          category: "Dekors",
          href: "#home-garden-decor",
        },
        {
          id: "address-signs",
          title: "Adreses plāksnes",
          description:
            "Izgatavojam adreses un ielu plāksnes, ņemot vērā fasādi, salasāmību un materiālu.",
          category: "Plāksnes",
          href: "#address-signs",
        },
        {
          id: "homes-saunas-terraces",
          title: "Māju, pirtu un terašu noformējums",
          description:
            "Piemeklējam risinājumus dzīvojamām un ārpilsētas telpām, kur izstrādājumam jākļūst par objekta daļu.",
          category: "Telpas",
          href: "#homes-saunas-terraces",
        },
        {
          id: "restaurants-themed-spaces",
          title: "Restorānu un tematisku telpu noformējums",
          description:
            "Veidojam noformējuma elementus kafejnīcām, restorāniem, viesu namiem un atmosfēriskiem komercprojektiem.",
          category: "Komercija",
          href: "#restaurants-themed-spaces",
        },
      ],
    },
    materials: {
      title: "Materiāli",
      description:
        "Izvēlamies materiālu atbilstoši uzdevumam, lietošanas apstākļiem un telpas raksturam, lai izstrādājums izskatītos iederīgi un kalpotu ilgi.",
      items: [
        {
          id: "wood",
          title: "Koks",
          description:
            "Silts dabīgs materiāls mēbelēm, dekoratīviem elementiem, terasēm un noformējuma detaļām.",
          usage: "Mēbeles, dekors, āra un interjera elementi",
          href: "#wood",
        },
        {
          id: "metal",
          title: "Metāls",
          description:
            "Izturīgs materiāls karkasiem, akcentiem, plāksnēm un konstruktīvām detaļām.",
          usage: "Karkasi, izkārtnes, plāksnes, kombinēti izstrādājumi",
          href: "#metal",
        },
        {
          id: "gypsum",
          title: "Ģipsis",
          description:
            "Plastisks materiāls faktūrām, dekoratīvām formām un izteiksmīgiem interjera risinājumiem.",
          usage: "Dekors, reljefi, interjera elementi",
          href: "#gypsum",
        },
        {
          id: "combined-materials",
          title: "Kombinēti materiāli",
          description:
            "Apvienojam koku, metālu, ģipsi un citus pamatus, ja projektam vajadzīga īpaša forma, izturība vai faktūra.",
          usage: "Individuāli projekti, komerctelpas, sarežģīts dekors",
          href: "#combined-materials",
        },
      ],
    },
    featuredProjects: {
      title: "Izvēlētie projekti",
      description:
        "Daži demo projekti rāda nākotnes portfolio formātu: no nelieliem izstrādājumiem līdz telpu noformējumam.",
      viewLabel: "Skatīt projektu",
      items: [
        {
          id: "address-sign-demo",
          title: "Adreses plāksne",
          description:
            "Lakonska fasādes plāksne, veidota ar salasāmību, materiālu un mājas kopskatu prātā.",
          category: "Plāksnes",
          material: "Koks un metāls",
          href: "#address-sign-demo",
          imageSrc: assets.projects.house,
          imageAlt: "Koka pagalma mājiņas un roku darba āra detaļas",
        },
        {
          id: "terrace-wood-decor-demo",
          title: "Koka dekors terasei",
          description:
            "Dekoratīvi koka elementi, kas papildina terases arhitektūru un iederas apkārtējā vidē.",
          category: "Dekors",
          material: "Koks",
          href: "#terrace-wood-decor-demo",
          imageSrc: assets.projects.statue,
          imageAlt: "Roku darba kapuces skulptūra dārza vidē",
        },
        {
          id: "custom-furniture-demo",
          title: "Mēbeles pēc pasūtījuma",
          description:
            "Mēbele, kas izgatavota konkrētiem telpas izmēriem, lietošanas scenārijiem un izvēlētajai materiāla faktūrai.",
          category: "Mēbeles",
          material: "Koks",
          href: "#custom-furniture-demo",
          imageSrc: assets.projects.bench,
          imageAlt: "Koka sols pagalma zonai",
        },
        {
          id: "restaurant-design-demo",
          title: "Restorāna noformējums",
          description:
            "Kompleksi noformējuma elementi komerctelpai ar uzsvaru uz atmosfēru un ilgmūžību.",
          category: "Komerctelpa",
          material: "Kombinēti materiāli",
          href: "#restaurant-design-demo",
          imageSrc: assets.projects.wall,
          imageAlt: "Reljefa siena ar ūdenskrituma iedvesmotu faktūru",
        },
      ],
    },
    process: {
      title: "Kā notiek pasūtījums",
      description:
        "No pirmā pieprasījuma virzāmies uz skaidru risinājumu, termiņiem un izgatavošanu bez liekas sarežģītības sākumā.",
      steps: [
        {
          id: "request",
          number: "01",
          title: "Pieteikums caur formu, WhatsApp vai Telegram",
          description:
            "Pirmajā solī pietiek īsi aprakstīt uzdevumu, objektu un ērtāko saziņas veidu.",
        },
        {
          id: "discussion",
          number: "02",
          title: "Idejas, izmēru, materiālu un atsauču apspriešana",
          description:
            "Precizējam izstrādājuma mērķi, izmērus, vēlamos materiālus, stilu un piemērus, pēc kuriem orientēties.",
        },
        {
          id: "approval",
          number: "03",
          title: "Risinājuma un aptuvenā termiņa saskaņošana",
          description:
            "Fiksējam darba virzienu, pamata parametrus, orientējošos termiņus un nākamo soli.",
        },
        {
          id: "production",
          number: "04",
          title: "Izgatavošana",
          description:
            "Izgatavojam izstrādājumu vai noformējuma elementus atbilstoši saskaņotajiem materiāliem, izmēriem un detaļām.",
        },
        {
          id: "handover",
          number: "05",
          title: "Nodošana, piegāde vai montāža",
          description:
            "Nododam gatavo darbu, organizējam piegādi vai apspriežam montāžu objektā, ja projekts to prasa.",
        },
      ],
    },
    contact: {
      id: "contact",
      title: "Apspriest projektu",
      description:
        "Aprakstiet uzdevumu, materiālu, izmērus vai objektu. Šajā posmā forma vēl nesūta datus, bet rāda nākotnes pieteikuma struktūru.",
      channels: [
        {
          id: "whatsapp",
          label: "WhatsApp",
          href: "#",
          description:
            "Ātrs kanāls pirmajam pieprasījumam un īsai konsultācijai.",
        },
        {
          id: "telegram",
          label: "Telegram",
          href: "#",
          description:
            "Ērti detaļu, fotogrāfiju, izmēru un atsauču apspriešanai.",
        },
        {
          id: "instagram",
          label: "Instagram",
          href: "#",
          description:
            "Noder nākotnes portfolio, procesa un svaigu darbu apskatei.",
        },
        {
          id: "facebook",
          label: "Facebook",
          href: "#",
          description:
            "Papildu saziņas kanāls ziņām un iepazīšanai ar studiju.",
        },
      ],
      fields: [
        {
          id: "name",
          label: "Vārds",
          placeholder: "Kā pie jums vērsties",
          type: "text",
        },
        {
          id: "contact",
          label: "Kontakts",
          placeholder: "Tālrunis, email vai mesendžeris",
          type: "text",
        },
        {
          id: "projectType",
          label: "Projekta tips",
          placeholder: "Piemēram: mēbeles, plāksne, dekors, terase",
          type: "text",
        },
        {
          id: "message",
          label: "Uzdevuma apraksts",
          placeholder:
            "Īsi aprakstiet ideju, izmērus, materiālus vai objektu",
          type: "textarea",
        },
      ],
      submitLabel: "Nosūtīt pieteikumu",
    },
  },
};
