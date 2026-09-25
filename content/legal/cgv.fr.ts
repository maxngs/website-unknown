// ============================================================
// Texte juridique — cgv (français, version de référence).
// Conditions de l'abonnement entreprise (modèle « plans »).
// ⚠️ Montants et quotas alignés sur functions/config/plans.config.js
// (app Hiry) et sur app/components/hiry/entreprises/Tarifs.tsx.
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

  // ── 2. LES ABONNEMENTS ──
  {
    title: "2. Les abonnements",
    content: `Un abonnement donne un nombre d'offres en ligne simultanées, sans limite de durée tant qu'il est payé. Il n'y a ni crédit, ni achat à l'unité, ni offre qui expire au bout de soixante jours.

Trois plans sont proposés, aux prix hors taxes suivants :`,
    list: [
      "Essentiel : 49 € par mois ou 470 € par an — 1 offre en ligne, 1 utilisateur, 1 veille de profils ;",
      "Croissance : 149 € par mois ou 1 430 € par an — 5 offres en ligne, 3 utilisateurs, 2 veilles de profils ;",
      "Entreprise : 399 € par mois ou 3 830 € par an — offres en ligne illimitées, 10 utilisateurs, veilles de profils illimitées.",
    ],
    after: `Une veille est un besoin permanent : elle est appariée aux profils en continu, sans date ni candidature directe, et ne consomme pas le quota d'offres.

Les comptes en lecture seule sont gratuits et illimités, quel que soit le plan : ils consultent sans agir.

Sans abonnement, le quota est de zéro offre en ligne, sous réserve des deux exceptions décrites à l'article 3. Il n'existe pas de plan gratuit.

Au-delà du quota, la publication est refusée et le plan supérieur est proposé. Il n'existe pas d'option à l'offre supplémentaire.`,
  },

  // ── 3. L'OFFRE INCLUSE ET LES JARDINS PARTENAIRES ──
  {
    title: "3. L'offre incluse et les jardins partenaires",
    content: `Il existe deux façons de publier sans abonnement, et deux seulement.`,
  },
  {
    title: "3.1 L'offre incluse",
    level: 2,
    content: `Toute entreprise nouvellement inscrite peut mettre une première offre en ligne pendant quatorze jours, sans carte bancaire et sans engagement. Cette possibilité n'est utilisable qu'une fois par entreprise.

Passé ce délai, l'offre sort de ligne ; elle n'est pas supprimée et peut être republiée en souscrivant un plan.`,
  },
  {
    title: "3.2 Les jardins école et salon",
    level: 2,
    content: `Une entreprise venue par une école partenaire ou un salon publie gratuitement et sans limite de durée auprès du public de ce partenaire. Ces offres ne consomment aucun quota. En sortir — rendre l'offre visible de tous les candidats — suppose un abonnement.

Une entreprise de jardin dispose également d'une veille gratuite.`,
  },

  // ── 4. PRIX, FACTURATION ET TVA ──
  {
    title: "4. Prix, facturation et TVA",
    content: `Les prix affichés sont hors taxes, en euros. La TVA française au taux de 20 % s'y ajoute. Un abonnement Essentiel mensuel est donc facturé 58,80 € TTC.

Le paiement s'effectue par carte bancaire ou par prélèvement automatique, via notre prestataire de paiement Stripe. Les coordonnées bancaires ne transitent pas par Hiry et n'y sont pas conservées.

L'abonnement mensuel est prélevé chaque mois à la date anniversaire de la souscription. L'abonnement annuel est prélevé en une fois, d'avance, pour douze mois.

Chaque paiement donne lieu à une facture, disponible à tout moment depuis l'espace de facturation du compte.

Les prix peuvent être modifiés. Un changement de tarif ne s'applique jamais à une période déjà payée : il prend effet au renouvellement suivant, et le Client en est informé par courriel au moins trente jours avant. S'il n'accepte pas le nouveau tarif, il peut résilier avant cette échéance.`,
  },

  // ── 5. DURÉE, CHANGEMENT DE PLAN ET RÉSILIATION ──
  {
    title: "5. Durée, changement de plan et résiliation",
    content: `L'abonnement mensuel est conclu pour un mois, reconduit tacitement de mois en mois. L'abonnement annuel est conclu pour douze mois, payé d'avance, reconduit tacitement pour douze mois.

Trente jours avant chaque reconduction annuelle, le Client reçoit un courriel récapitulant son année et annonçant la date et le montant du prochain prélèvement.`,
  },
  {
    title: "5.1 Changer de plan",
    level: 2,
    content: `Le changement de plan se fait depuis l'espace de facturation, à tout moment :`,
    list: [
      "une montée de gamme prend effet immédiatement ; la différence est facturée au prorata du temps restant ;",
      "une descente de gamme prend effet à la fin de la période en cours. Le Client conserve jusque-là les droits du plan qu'il a payé.",
    ],
  },
  {
    title: "5.2 Résilier",
    level: 2,
    content: `La résiliation se fait depuis l'espace de facturation, sans motif et sans frais. Elle prend effet à la fin de la période en cours : le service reste accessible jusqu'à cette date, et aucun nouveau prélèvement n'intervient ensuite.

Une période entamée n'est pas remboursable, y compris pour un abonnement annuel résilié en cours d'année.`,
  },

  // ── 6. DÉFAUT DE PAIEMENT ──
  {
    title: "6. Défaut de paiement, et ce qui n'est jamais supprimé",
    content: `En cas d'échec de prélèvement, le compte entre dans une période de grâce de sept jours, pendant laquelle il conserve tous ses droits. Le Client est prévenu par courriel le jour même, puis relancé au quatrième et au sixième jour. Notre prestataire de paiement représente la carte pendant cette semaine.

Si le paiement n'a pas abouti au terme des sept jours, les offres en trop sortent de ligne — c'est-à-dire celles qui dépassent le quota du plan vers lequel le compte redescend, en commençant par les plus récentes.

La même règle s'applique après une résiliation ou une descente de gamme laissant plus d'offres en ligne que le nouveau quota ne l'autorise.

Rien n'est supprimé. Les offres sorties de ligne, les candidatures reçues, les échanges, les notes et l'historique restent intacts et consultables. Republier une offre suffit à la remettre en ligne, dans la limite du quota du plan repris.

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
