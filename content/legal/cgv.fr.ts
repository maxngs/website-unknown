// ============================================================
// Texte juridique — cgv (français, version de référence).
// Conditions de l'abonnement entreprise (trois formules : Liberté, Saison,
// Horizon).
// ⚠️ Montants alignés sur la page de paiement Stripe (app Hiry) et sur
// app/components/hiry/entreprises/Tarifs.tsx.
// ============================================================

import type { LegalSection } from "@/app/components/shared/LegalContent";

export const sections: LegalSection[] = [
  // ── 1. OBJET ET ACCEPTATION ──
  {
    title: "1. Objet et acceptation",
    content: `Les présentes conditions générales de vente (ci-après « CGV ») régissent l'accès payant à la plateforme Hiry et l'usage des services de recrutement qu'elle propose aux entreprises.

La plateforme est éditée par la société Hiry SAS, immatriculée au Registre du Commerce et des Sociétés de Nanterre sous le numéro 104 764 493, dont le siège social est situé 36-40 rue Raspail – L'Escalator, 92300 Levallois-Perret (ci-après « Hiry »).

Les CGV s'adressent exclusivement à des professionnels agissant dans le cadre de leur activité (ci-après « le Client »). Hiry n'est pas vendu à des consommateurs.

Souscrire un abonnement vaut acceptation des présentes CGV. Elles complètent les Conditions Générales d'Utilisation de la plateforme, qui restent applicables ; en cas de contradiction sur un point commercial — prix, durée, résiliation — ce sont les présentes CGV qui s'appliquent.

La version applicable est celle en vigueur au jour de la souscription.`,
  },

  // ── 2. L'ABONNEMENT ──
  {
    title: "2. L'abonnement",
    content: `Hiry propose un abonnement en trois formules, qui donnent accès aux mêmes services et ne diffèrent que par la durée d'engagement. Chacune permet de mettre en ligne un nombre illimité d'offres, sans limite de durée tant que l'abonnement est actif. Il n'y a ni crédit, ni achat à l'unité, ni offre qui expire au bout de soixante jours.

Les formules sont proposées aux prix hors taxes suivants :`,
    list: [
      "Liberté : 119 € par mois, sans engagement ;",
      "Saison : engagement de trois mois, au choix 89 € par mois prélevés chaque mois, ou 267 € réglés en une fois pour les trois mois ;",
      "Horizon : engagement de douze mois, au choix 75 € par mois prélevés chaque mois, ou 890 € réglés en une fois pour les douze mois.",
    ],
    after: `Chaque formule comprend des offres en ligne illimitées, trois utilisateurs, le Smart Matching, le pipeline de candidatures, la messagerie et deux veilles de profils.

Une veille est un besoin permanent : elle est appariée aux profils en continu, sans date ni candidature directe.

Les comptes en lecture seule sont gratuits et illimités : ils consultent sans agir.

Il n'existe ni plan gratuit, ni période d'essai : l'abonnement démarre dès la souscription. Sans abonnement, aucune offre ne peut être mise en ligne, sous réserve de l'exception décrite à l'article 3.

Les besoins qui sortent de ce cadre — plusieurs entités, volume important — font l'objet d'un contrat sur mesure, conclu séparément.

Les abonnements souscrits avant le [DATE] aux tarifs antérieurs — 89 € par mois sans engagement, ou 75 € par mois avec un engagement de douze mois — conservent ce tarif et leurs conditions tant que le Client ne change pas de formule.`,
  },

  // ── 3. LES JARDINS PARTENAIRES ──
  {
    title: "3. Les jardins école et salon",
    content: `Une entreprise venue par une école partenaire ou un salon publie gratuitement et sans limite de durée auprès du public de ce partenaire. En sortir — rendre l'offre visible de tous les candidats — suppose un abonnement.

Une entreprise de jardin dispose également d'une veille gratuite.`,
  },

  // ── 4. PRIX, FACTURATION ET TVA ──
  {
    title: "4. Prix, facturation et TVA",
    content: `Les prix affichés sont hors taxes, en euros. La TVA française au taux de 20 % s'y ajoute. Toutes taxes comprises, Liberté est facturée 142,80 € par mois ; Saison 106,80 € par mois, ou 320,40 € pour trois mois ; Horizon 90 € par mois, ou 1 068 € pour douze mois.

Le paiement s'effectue par carte bancaire ou par prélèvement automatique, via notre prestataire de paiement Stripe. Les coordonnées bancaires ne transitent pas par Hiry et n'y sont pas conservées.

Un abonnement payé chaque mois est prélevé à la date anniversaire mensuelle de la souscription. Un engagement réglé en une fois est prélevé à la souscription, puis à chaque reconduction.

Chaque paiement donne lieu à une facture, disponible à tout moment depuis l'espace de facturation du compte.

Les prix peuvent être modifiés. Un changement de tarif ne s'applique jamais à une période déjà payée, ni en cours d'engagement : il prend effet au renouvellement suivant, et le Client en est informé par courriel au moins trente jours avant. S'il n'accepte pas le nouveau tarif, il peut résilier avant cette échéance.`,
  },

  // ── 5. DURÉE ET RÉSILIATION ──
  {
    title: "5. Durée, engagement et résiliation",
    content: `La formule Liberté est conclue pour un mois, reconduite tacitement de mois en mois.

La formule Saison est conclue pour une durée ferme de trois mois, et la formule Horizon pour une durée ferme de douze mois, payées au choix du Client chaque mois ou en une fois. À leur terme, elles sont reconduites tacitement pour une période de même durée, sauf résiliation.

Trente jours avant chaque reconduction de la formule Horizon, le Client reçoit un courriel lui rappelant la date de reconduction et le montant des prochains prélèvements.

Le Client peut passer à tout moment à une formule d'engagement plus long. Pendant un engagement, il ne peut pas passer à une formule d'engagement plus court ni, pour une formule réglée en une fois, revenir à un paiement mensuel.`,
  },
  {
    title: "5.1 Résilier",
    level: 2,
    content: `La résiliation se fait depuis l'espace de facturation, sans motif et sans frais :`,
    list: [
      "formule Liberté : elle prend effet à la fin du mois en cours, et aucun prélèvement n'intervient ensuite ;",
      "formules Saison et Horizon : elle prend effet au terme de l'engagement en cours. D'ici là, l'abonnement reste actif et, s'il est payé chaque mois, continue d'être prélevé ; la date de fin et les prélèvements restants sont indiqués au Client avant qu'il confirme. Faute de résiliation avant ce terme, l'engagement est reconduit pour la même durée.",
    ],
    after: `Une période entamée n'est pas remboursable.`,
  },

  // ── 6. DÉFAUT DE PAIEMENT ──
  {
    title: "6. Défaut de paiement, et ce qui n'est jamais supprimé",
    content: `En cas d'échec de prélèvement, le compte entre dans une période de grâce de sept jours, pendant laquelle il conserve tous ses droits. Le Client est prévenu par courriel le jour même, puis relancé au quatrième et au sixième jour. Notre prestataire de paiement représente la carte pendant cette semaine.

Si le paiement n'a pas abouti au terme des sept jours, les offres en ligne sortent de ligne, à l'exception de celles publiées dans un jardin école ou salon.

La même règle s'applique à la fin d'un abonnement résilié.

Rien n'est supprimé. Les offres sorties de ligne, les candidatures reçues, les échanges, les notes et l'historique restent intacts et consultables. Republier une offre suffit à la remettre en ligne, dès que l'abonnement est repris.

Cette clause vaut engagement de la part de Hiry : la fin d'un abonnement n'entraîne aucune perte de données. Seule la suppression du compte, demandée par le Client, les efface.`,
  },

  // ── 7. OBLIGATIONS, IA ET DONNÉES ──
  {
    title: "7. Obligations du Client, intelligence artificielle et données",
    content: `Le Client garantit que les offres qu'il publie sont réelles, exactes, et conformes au droit du travail et aux règles de non-discrimination. Il répond du contenu qu'il dépose et de l'usage que son équipe fait de la plateforme. Les identifiants sont personnels ; le Client signale sans délai tout accès non autorisé.`,
  },
  {
    title: "7.1 Ce que fait l'intelligence artificielle, et ce qu'elle ne fait pas",
    level: 2,
    content: `Hiry utilise des modèles d'intelligence artificielle pour conduire un entretien écrit ou oral avec les candidats, analyser les profils et proposer un rapprochement avec les offres.

Ces résultats sont une aide à la décision. Aucune décision de recrutement n'est prise automatiquement : c'est le recruteur qui écarte, retient ou contacte, et chacune de ces décisions est journalisée avec son auteur et la date, dans un registre consultable depuis l'espace entreprise.

La plateforme n'infère aucun état émotionnel à partir de la voix, du ton ou du visage, et ne le fera pas.`,
  },
  {
    title: "7.2 Données personnelles",
    level: 2,
    content: `Chaque partie agit comme responsable de traitement pour ce qui la concerne : Hiry pour le fonctionnement de la plateforme, le Client pour le recrutement qu'il mène.

Les candidats disposent des droits prévus par le règlement européen sur la protection des données — accès, rectification, effacement, opposition — qu'ils exercent directement auprès de Hiry depuis leur compte.

La suppression d'un compte entreprise, demandée par son propriétaire, efface définitivement ses données dans les délais annoncés par la politique de confidentialité, consultable à l'adresse https://www.hiry.fr/politique-confidentialite, à l'exception des pièces comptables, conservées le temps légal.`,
  },

  // ── 8. DISPOSITIONS GÉNÉRALES ──
  {
    title: "8. Disponibilité, responsabilité et droit applicable",
  },
  {
    title: "8.1 Disponibilité",
    level: 2,
    content: `Hiry s'engage à mettre en œuvre les moyens raisonnables pour maintenir le service accessible en continu. Des interruptions peuvent survenir pour maintenance ou du fait d'un prestataire technique ; les interruptions programmées sont annoncées à l'avance lorsque c'est possible.`,
  },
  {
    title: "8.2 Responsabilité",
    level: 2,
    content: `Hiry fournit un outil ; il ne garantit ni un volume de candidatures, ni un recrutement abouti. La responsabilité de Hiry ne peut être engagée à raison des décisions de recrutement prises par le Client, qui en demeure seul auteur.`,
  },
  {
    title: "8.3 Propriété intellectuelle",
    level: 2,
    content: `La plateforme, ses modèles et ses contenus restent la propriété de Hiry. Le Client conserve la propriété des contenus qu'il dépose, et concède à Hiry le droit de les héberger et de les afficher aux fins du service.`,
  },
  {
    title: "8.4 Confidentialité",
    level: 2,
    content: `Chaque partie garde confidentielles les informations de l'autre auxquelles elle accède à l'occasion du contrat.`,
  },
  {
    title: "8.5 Modification des CGV",
    level: 2,
    content: `Les présentes CGV peuvent être modifiées. Toute modification substantielle est portée à la connaissance du Client au moins trente jours avant son entrée en vigueur ; il peut résilier d'ici là s'il ne l'accepte pas.`,
  },
  {
    title: "8.6 Droit applicable et juridiction",
    level: 2,
    content: `Les présentes CGV sont soumises au droit français. À défaut de règlement amiable, tout litige relatif à leur formation, leur exécution ou leur interprétation relève de la compétence exclusive du tribunal de commerce de Nanterre, ou de la juridiction qui lui succède, y compris en cas de pluralité de défendeurs ou d'appel en garantie.`,
  },
];
