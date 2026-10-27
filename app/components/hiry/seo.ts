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

/**
 * `alternates` d'une page : canonical + hreflang fr / en / x-default.
 *
 * À utiliser dans chaque generateMetadata : Next remplace l'objet
 * `alternates` du layout au lieu de le fusionner, donc une page qui ne
 * déclare que son canonical perd ses hreflang.
 * `frenchOnly` : page sans version anglaise (Mag, glossaire, /candidats).
 */
export function alternates(
  locale: string,
  path = "",
  { frenchOnly = false }: { frenchOnly?: boolean } = {}
) {
  return {
    canonical: `/${locale}${path}`,
    languages: frenchOnly
      ? { fr: `/fr${path}`, "x-default": `/fr${path}` }
      : { fr: `/fr${path}`, en: `/en${path}`, "x-default": `/fr${path}` },
  };
}
