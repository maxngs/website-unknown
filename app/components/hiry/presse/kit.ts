// ============================================================
// Disponibilité du kit média.
// ============================================================

/**
 * Chemin du fichier pour chaque pièce du kit, dans /public/presse/.
 * Une chaîne vide = pièce non encore fournie : la carte s'affiche en
 * « Bientôt », sans lien, et les boutons qui promettent un téléchargement
 * portent le même signalement.
 *
 * POUR ACTIVER : déposez le fichier dans public/presse/ puis renseignez
 * son chemin ici. Le reste (libellés, liens, badges) suit tout seul.
 */
export const KIT_FILES = {
  logos: "", // ex. "/presse/hiry-logos.zip"
  photos: "", // ex. "/presse/hiry-photos.zip"
  boiler: "", // ex. "/presse/hiry-boilerplate.pdf"
} as const;

export type KitPiece = keyof typeof KIT_FILES;

/** Au moins une pièce est-elle téléchargeable ? */
export const KIT_READY = Object.values(KIT_FILES).some(Boolean);
