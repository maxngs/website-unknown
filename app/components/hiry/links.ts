// ============================================================
// Destinations des CTA — source unique.
// Reprises de l'ancien site (lib/silos.ts et composants existants) pour
// que la refonte pointe exactement vers les mêmes actions.
// ============================================================

/** Application Hiry (hors site vitrine). */
export const APP = {
  signup: "https://app.hiry.fr/auth/signup",
  signin: "https://app.hiry.fr/auth/signin",
} as const;

/** Page contact migrée : chemin interne, localisé par <Link>. */
export const CONTACT = "/contact";
/** Glossaire migré : chemin interne, localisé par <Link>. */
export const GLOSSARY = "/glossaire";
/** Page « à propos » migrée. */
export const ABOUT = "/a-propos";
/** Espace presse. */
export const PRESS = "/presse";

/** Pages légales migrées : chemins internes, localisés par <Link>. */
export const LEGAL = {
  legalNotice: "/mentions-legales",
  terms: "/cgu",
  privacy: "/politique-confidentialite",
} as const;

/**
 * Pages de l'ancien site encore en place, hors arborescence /[locale].
 * `isLegacyPath` empêche <Link> de leur coller un préfixe de locale.
 * Ne reste ici que ce qui n'est pas migré.
 */
export const LEGACY = {
  /** CGV : gabarit « en cours de rédaction » côté ancien site. */
  sales: "/cgv",
  features: "/fonctionnalites",
  pricing: "/tarifs",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/hiry-recrutement",
  instagram: "https://www.instagram.com/hiry.app",
  // x: le compte @hiry_fr renvoie une 404 — réactiver avec le bon identifiant.
} as const;

/**
 * Un chemin pointe-t-il vers une page de l'ancien site (hors /[locale]) ?
 * Utilisé par <Link> pour ne jamais leur coller un préfixe de locale.
 */
export function isLegacyPath(href: string): boolean {
  const path = href.split(/[#?]/)[0];
  return (Object.values(LEGACY) as string[]).includes(path);
}

/** Un href est-il externe (ou un mailto) ? */
export function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}
