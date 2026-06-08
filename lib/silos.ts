// lib/silos.ts
// Source de vérité pour les silos SEO du blog Hiry.
// Chaque silo a son slug d'URL, sa landing page pilier, son code couleur et son CTA par défaut.

export type SiloSlug = "entreprises" | "candidats" | "ecoles" | "etudes";

export interface Silo {
  slug: SiloSlug;
  /** Nom complet affiché (titre de catégorie). */
  name: string;
  /** Nom court (badges, breadcrumb). */
  shortName: string;
  /** Description courte (cards, meta). */
  description: string;
  /** Description longue (page index du silo). */
  longDescription: string;
  /** Audience ciblée (référence éditoriale). */
  audience: string;
  /** Landing page pilier liée à ce silo (lien interne obligatoire dans chaque article). */
  landingHref: string;
  /** CTA par défaut adapté à l'audience du silo. */
  cta: { label: string; href: string };
  /** Sujets phares traités dans le silo (affichés en "vitrine" sur la tuile XXL du hub). */
  highlights: string[];
}

export const SILOS: Record<SiloSlug, Silo> = {
  entreprises: {
    slug: "entreprises",
    name: "Entreprises & Recruteurs",
    shortName: "Entreprises",
    description:
      "Guides, outils et stratégies pour les TPE/PME qui recrutent",
    longDescription:
      "Recruter en PME sans DRH, c'est un défi. On décortique les aides, les outils, la conformité IA et les méthodes pour sécuriser chaque embauche — alternance comme CDI.",
    audience: "Dirigeants et RH de TPE/PME",
    landingHref: "/entreprises",
    cta: {
      label: "Tester Hiry pour recruter",
      href: "https://app.hiry.fr/auth/signup",
    },
    highlights: [
      "Aides à l'embauche en alternance 2026",
      "EU AI Act et conformité du recrutement IA",
      "Comparatif ATS pour PME : Taleez, Flatchr, Hiry",
      "Le vrai coût d'un recrutement raté",
    ],
  },
  candidats: {
    slug: "candidats",
    name: "Candidats & Étudiants",
    shortName: "Candidats",
    description:
      "Conseils, méthodes et ressources pour trouver ton stage ou ton alternance",
    longDescription:
      "Tout ce qu'il faut pour décrocher un stage, une alternance ou un premier emploi en 2026 : CV, lettre, entretiens, soft skills, red flags et matching IA.",
    audience: "Étudiants, jeunes diplômés et alternants",
    landingHref: "/candidats",
    cta: {
      label: "Révéler mon potentiel sur Hiry",
      href: "https://app.hiry.fr/auth/signup",
    },
    highlights: [
      "Trouver une alternance en 2026 — guide complet",
      "CV étudiant sans expérience : se démarquer",
      "Soft skills les plus recherchées en stage",
      "Red flags en entretien : entreprises à fuir",
    ],
  },
  ecoles: {
    slug: "ecoles",
    name: "Écoles & Enseignement supérieur",
    shortName: "Écoles",
    description:
      "Pilotage de l'insertion, données et outils pour les établissements",
    longDescription:
      "Pour les directions pédagogiques et relations entreprises : data, dashboards, RNCP, marque école et outils pour piloter l'insertion professionnelle de vos promos.",
    audience: "Directions d'écoles et services relations entreprises",
    landingHref: "/ecoles",
    cta: {
      label: "Demander une démo Hiry pour mon école",
      href: "/contact",
    },
    highlights: [
      "Pilotage de l'insertion par la data",
      "Enquêtes RNCP : automatiser la collecte",
      "Comparatif Jobteaser et alternatives",
      "Marque école et classements d'insertion",
    ],
  },
  etudes: {
    slug: "etudes",
    name: "Études & Baromètres",
    shortName: "Études",
    description: "Données exclusives du marché de l'emploi étudiant",
    longDescription:
      "Baromètres, observatoires et cartographies — les données exclusives Hiry sur le recrutement, les soft skills et l'insertion des jeunes diplômés.",
    audience: "RH, écoles, presse et observateurs du marché",
    landingHref: "/",
    cta: {
      label: "Recevoir nos prochaines études",
      href: "/contact",
    },
    highlights: [
      "Baromètre soft skills en PME 2026",
      "Observatoire des attentes de la Gen Z",
      "Cartographie des métiers en tension",
      "Données exclusives Hiry — promos 2025-2026",
    ],
  },
};

export const SILO_SLUGS: SiloSlug[] = [
  "entreprises",
  "candidats",
  "ecoles",
  "etudes",
];

export function isSiloSlug(value: string): value is SiloSlug {
  return (SILO_SLUGS as string[]).includes(value);
}

export function getSilo(slug: SiloSlug): Silo {
  return SILOS[slug];
}

/**
 * Retourne le jeu de classes Tailwind pour un silo donné.
 * Les classes sont écrites en toutes lettres pour que Tailwind les détecte au build.
 */
export interface SiloTheme {
  /** Couleur de texte principale (ex: "text-blue-600"). */
  text: string;
  /** Texte hover (ex: "hover:text-blue-700"). */
  textHover: string;
  /** Fond doux (ex: "bg-blue-50"). */
  bgSoft: string;
  /** Fond fort (ex: "bg-blue-600"). */
  bgStrong: string;
  /** Bordure douce (ex: "border-blue-100"). */
  border: string;
  /** Bordure forte au hover. */
  borderHover: string;
  /** Gradient diagonal (ex: "from-blue-500 to-blue-700"). */
  gradient: string;
  /** Halo/ring (ex: "ring-blue-200"). */
  ring: string;
  /** Pastille (ex: "bg-blue-500"). */
  dot: string;
  /** Couleur HEX brute (utile pour SVG ou JSON-LD). */
  hex: string;
}

export function siloTheme(slug: SiloSlug): SiloTheme {
  switch (slug) {
    case "entreprises":
      return {
        text: "text-blue-700",
        textHover: "hover:text-blue-800",
        bgSoft: "bg-blue-50",
        bgStrong: "bg-blue-600",
        border: "border-blue-100",
        borderHover: "group-hover:border-blue-300",
        gradient: "from-blue-500 to-blue-700",
        ring: "ring-blue-200",
        dot: "bg-blue-500",
        hex: "#2563EB",
      };
    case "candidats":
      return {
        text: "text-violet-700",
        textHover: "hover:text-violet-800",
        bgSoft: "bg-violet-50",
        bgStrong: "bg-violet-600",
        border: "border-violet-100",
        borderHover: "group-hover:border-violet-300",
        gradient: "from-violet-500 to-violet-700",
        ring: "ring-violet-200",
        dot: "bg-violet-500",
        hex: "#7C3AED",
      };
    case "ecoles":
      return {
        text: "text-emerald-700",
        textHover: "hover:text-emerald-800",
        bgSoft: "bg-emerald-50",
        bgStrong: "bg-emerald-600",
        border: "border-emerald-100",
        borderHover: "group-hover:border-emerald-300",
        gradient: "from-emerald-500 to-emerald-700",
        ring: "ring-emerald-200",
        dot: "bg-emerald-500",
        hex: "#059669",
      };
    case "etudes":
      return {
        text: "text-amber-700",
        textHover: "hover:text-amber-800",
        bgSoft: "bg-amber-50",
        bgStrong: "bg-amber-600",
        border: "border-amber-100",
        borderHover: "group-hover:border-amber-300",
        gradient: "from-amber-500 to-amber-700",
        ring: "ring-amber-200",
        dot: "bg-amber-500",
        hex: "#D97706",
      };
  }
}
