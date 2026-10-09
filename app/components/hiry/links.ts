// ============================================================
// Destinations des CTA — source unique.
// Reprises de l'ancien site (lib/silos.ts et composants existants) pour
// que la refonte pointe exactement vers les mêmes actions.
// ============================================================

/**
 * Application Hiry (hors site vitrine).
 * Tout bouton entreprise mène à l'abonnement (`subscribe`), ou à la formule
 * choisie dans le panneau tarifaire. `signup` reste la porte
 * d'entrée neutre, pour les CTA qui ne tranchent pas (nav, glossaire…).
 *
 * ⚠️ Ne pas utiliser app.hiry.fr/entreprise sur le site : cette entrée est
 * réservée aux inscriptions sans paiement immédiat (écoles, salons,
 * partenaires).
 */
export const APP = {
  signup: "https://app.hiry.fr/auth/signup",
  signupCandidate: "https://app.hiry.fr/auth/signup?role=candidate",
  subscribe: "https://app.hiry.fr/abonnement",
  subscribeLiberte: "https://app.hiry.fr/abonnement/liberte",
  subscribeSaison: "https://app.hiry.fr/abonnement/saison",
  subscribeSaisonUneFois: "https://app.hiry.fr/abonnement/saison-une-fois",
  subscribeHorizon: "https://app.hiry.fr/abonnement/horizon",
  subscribeHorizonUneFois: "https://app.hiry.fr/abonnement/horizon-une-fois",
  signin: "https://app.hiry.fr/auth/signin",
} as const;

/** Contrat sur mesure : plusieurs entités, gros volume, école ou salon. */
export const SALES = "mailto:contact@hiry.fr";

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
  sales: "/cgv",
} as const;

/**
 * Pages de l'ancien site encore en place, hors arborescence /[locale].
 * `isLegacyPath` empêche <Link> de leur coller un préfixe de locale.
 * Ne reste ici que ce qui n'est pas migré.
 */
export const LEGACY = {
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
