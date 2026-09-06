// ============================================================
// Identité de marque — fichiers du logo.
// ============================================================

/**
 * Le wordmark officiel est le mot « hiry » en gras arrondi, avec la silhouette
 * de Lupo découpée dans le « h ». Tant que le fichier n'est pas fourni, les
 * composants retombent sur un rendu typographique (« hiry. » en Google Sans),
 * qui est celui des maquettes mais PAS le logo réel.
 *
 * POUR ACTIVER : déposez les fichiers dans public/brand/ puis renseignez leur
 * chemin ici. Nav, footer et carte du kit presse basculent d'un coup.
 */
export const LOGO = {
  /** Version encre, pour fond clair. */
  wordmark: "", // ex. "/brand/hiry-wordmark.svg"
  /** Version claire, pour fond encre (footer, kit presse). */
  wordmarkLight: "", // ex. "/brand/hiry-wordmark-blanc.svg"
} as const;

/** Proportions réelles du wordmark (boîte englobante), pour réserver la place. */
export const LOGO_RATIO = 249.773438 / 128.144531; // 1,9493

export const HAS_LOGO = Boolean(LOGO.wordmark);
