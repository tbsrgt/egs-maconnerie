// Coordonnées et réglages de l'entreprise.
// Sources : ancien site Wix (egsabdelguenniche.wixsite.com/egsentreprise13) et
// annuaire maconnerieinfo.com. Ce qui reste « À compléter » n'y figurait pas.

export const site = {
  name: "EGS Maçonnerie",
  shortName: "EGS",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://egs-maconnerie.vercel.app").replace(/\/$/, ""),
  baseline: "Bâtir d'aplomb",
  description:
    "EGS Maçonnerie, entreprise de maçonnerie, charpente et rénovation à Salon-de-Provence, Aix-en-Provence et alentour : construction de maisons, extensions, rénovation en pierre, murs, terrasses, piscines et charpentes bois. Devis gratuit sous 48 h.",

  owner: "Abdel Guenniche",
  phone: "07 62 01 23 89",
  phoneHref: "+33762012389",
  email: "egs.entreprise13@gmail.com",
  street: "46 rue de Moscou",
  city: "Salon-de-Provence",
  postalCode: "13300",
  region: "Provence-Alpes-Côte d'Azur",
  department: "Bouches-du-Rhône",
  geo: { lat: 43.6403, lng: 5.0973 },
  hours: "Du lundi au vendredi, de 7 h 30 à 18 h",
  openingHours: ["Mo-Fr 07:30-18:00"],
  siret: "881 746 275 00018",
  // Année d'installation à Salon-de-Provence (l'activité a débuté en Ardèche en 2007).
  founded: 2020,
  socials: [{ label: "Facebook", href: "https://www.facebook.com/egsguenniche/" }],
} as const;

export const nav = [
  { href: "/savoir-faire", label: "Savoir-faire" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/entreprise", label: "L'entreprise" },
  { href: "/zones-intervention", label: "Secteur" },
  { href: "/questions", label: "Questions" },
];

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
