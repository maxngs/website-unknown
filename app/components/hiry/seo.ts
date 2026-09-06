// ============================================================
// Réglages SEO de la refonte v3.
// ============================================================

export const SITE_URL = "https://hiry.fr";

/**
 * Bascule effectuée : l'arborescence /[locale] détient désormais les URLs
 * canoniques, les anciennes redirigent en 301 (cf. next.config.ts).
 *
 * Repasser à `false` remettrait tout le site en noindex — à ne faire que pour
 * remettre la refonte en préproduction.
 */
export const V3_INDEXABLE = true;

/** Métadonnées `robots` à appliquer à toutes les pages de /[locale]. */
export const v3Robots = V3_INDEXABLE
  ? undefined
  : { index: false, follow: true };
