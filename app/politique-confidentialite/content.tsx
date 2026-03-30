// ============================================================
// app/politique-confidentialite/content.tsx
// Contenu complet Politique de Confidentialité Hiry V1.0 — 30/03/2026
// ============================================================
"use client";

import { Shield } from "lucide-react";
import LegalContent, { LegalSection } from "../components/shared/LegalContent";

const sections: LegalSection[] = [
  // ── 1. Présentation générale ──
  {
    title: "1. Présentation générale",
    content: `Le Service Hiry est édité et exploité de manière transitoire par la société MNGS, agissant au nom et pour le compte de la société Hiry SAS actuellement en cours de formation (ci-après « Nous » ou « Hiry »). La société MNGS est une SASU, dont le siège social est situé au 06 Les Vergers de la Ranchère, 78860 Saint-Nom-La-Bretèche, immatriculée au Registre du Commerce et des Sociétés de Versailles sous le numéro 992 187 674. En conséquence, MNGS agit temporairement en qualité de responsable de traitement. La présente Politique sera automatiquement mise à jour et la responsabilité des traitements sera transférée à la société Hiry SAS dès son immatriculation définitive.

Dans le cadre du Service Hiry que nous proposons depuis le site https://app.hiry.fr, nous sommes le « responsable de traitement » (au sens de la réglementation en matière de protection des données personnelles) des données à caractère personnel traitées à l'occasion de l'utilisation de ce Service.

Hiry propose un écosystème intégré dédié aux démarches d'insertion professionnelle des étudiants et alumni qui y sont inscrits. Ce Service peut également être accessible directement au sein d'établissements d'enseignement supérieur partenaires (les « Établissements » ou « Établissements Partenaires »), proposant des contenus exclusifs et des fonctionnalités additionnelles.

Les entreprises qui recrutent via Hiry sont les responsables de traitement des données traitées dans le cadre des procédures de recrutement qu'elles mettent en place. Elles sont donc naturellement destinataires des données issues de Hiry concernant les candidats postulant à leurs offres.

Le Service Hiry utilise des technologies d'intelligence artificielle (incarnées par Hiron et propulsées par Google Gemini) pour l'analyse de profils, le matching prédictif entre candidats et offres, la conduite d'entretiens conversationnels et la génération de contenus enrichis. Les traitements liés à l'IA font l'objet de dispositions spécifiques détaillées dans la présente Politique.`,
  },

  // ── 2. Champ d'application ──
  {
    title: "2. Champ d'application",
    content: `La présente Politique de Confidentialité s'applique aux informations personnelles que nous sommes amenés à recueillir dans le cadre de notre Service. Elle s'applique ainsi aux Utilisateurs Candidats, aux Utilisateurs Entreprises et aux Utilisateurs Établissements. Ces Utilisateurs sont définis dans les Conditions Générales d'Utilisation (CGU) auxquelles cette Politique est annexée.

La présente Politique a été rédigée conformément à la réglementation applicable en matière de protection des données, et notamment le Règlement européen général sur la protection des données personnelles n°2016-679 du 27 avril 2016 (RGPD) et la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.`,
  },

  // ── 3. Types de données collectées ──
  {
    title: "3. Types de données collectées",
  },
  {
    title: "3.1 Données communes à tous les Utilisateurs",
    level: 2,
    list: [
      "Données d'identification : noms, prénoms, adresse email, numéro de téléphone, photo de profil ;",
      "Données de connexion : adresse IP, date et heure de connexion, pages consultées, type de navigateur et d'appareil ;",
      "Données d'authentification : identifiant (email), mot de passe chiffré (géré par Firebase Authentication).",
    ],
  },
  {
    title: "3.2 Données spécifiques aux Utilisateurs Candidats",
    level: 2,
    list: [
      "Données académiques : établissement fréquenté, formation, niveau d'études, année de diplôme, domaine d'études ;",
      "Données professionnelles : CV, expériences professionnelles, compétences techniques et comportementales, langues parlées, préférences de recherche (type de contrat, localisation, politique de télétravail), centres d'intérêt ;",
      "Données d'onboarding : réponses aux questions de personnalité et de préférences professionnelles (Q1 à Q13 et P1 à P3) ;",
      "Données d'entretien avec Hiron : transcription textuelle des échanges vocaux avec Hiron, réponses au questionnaire post-entretien. Aucun enregistrement audio n'est conservé au-delà de la session en temps réel ;",
      "Données d'analyse par Hiron : archétype professionnel généré, cartographie des soft skills, axes de motivation, recommandations de développement, profil comportemental ;",
      "Données de compétences normalisées : compétences techniques et transversales normalisées selon la taxonomie européenne ESCO ;",
      "Données de matching : scores de compatibilité avec les offres, dimensions d'analyse (13 axes), explications de matching ;",
      "Données de candidature : offres auxquelles vous avez postulé, lettre de motivation, statut de suivi des candidatures ;",
      "Données de messagerie : messages échangés avec les recruteurs via la messagerie intégrée ;",
      "Données événementielles : événements auxquels vous vous êtes inscrit ;",
      "Données de liaison école : identifiant de l'école rattachée, code promotion utilisé.",
    ],
  },
  {
    title: "3.3 Données spécifiques aux Utilisateurs Entreprises",
    level: 2,
    list: [
      "Données d'identification entreprise : numéro SIREN/SIRET, raison sociale, forme juridique, code NAF, date de création, adresse du siège, tranche d'effectifs, catégorie d'entreprise (données issues de l'API INSEE) ;",
      "Données commerciales : nom commercial, secteur d'activité, taille, site web ;",
      "Données du contact principal : nom, prénom, email, téléphone, rôle dans l'entreprise ;",
      "Données de questionnaire stratégique : réponses textuelles et vocales aux 5 questions stratégiques d'onboarding ;",
      "Données audio : flux vocal des réponses au questionnaire stratégique, non conservé, uniquement transcrit par Hiron pour analyse ;",
      "Données d'analyse par Hiron entreprise : archétype organisationnel, fingerprint culturel, profil du candidat idéal ;",
      "Données visuelles : logo d'entreprise, photos des locaux et de l'équipe ;",
      "Données d'achats : achats à l'acte (missions matching) ou packs souscrits, statut, dates, identifiants Stripe (aucune donnée bancaire n'est stockée par Hiry — elles sont gérées exclusivement par Stripe).",
    ],
  },
  {
    title: "3.4 Données spécifiques aux Utilisateurs Établissement",
    level: 2,
    list: [
      "Nom de l'établissement, fonction du représentant, logo ;",
      "Données de configuration : lien partenaire (slug), promotions créées ;",
      "Données analytiques agrégées : statistiques d'insertion professionnelle des étudiants (anonymisées).",
    ],
  },

  // ── 4. Finalités et bases légales des traitements ──
  {
    title: "4. Finalités et bases légales des traitements",
    content: `Chaque traitement réalisé par Hiry dispose d'une base légale. Les principales finalités et bases légales sont les suivantes :`,
    list: [
      "Fourniture du Service (création de compte, onboarding, accès aux fonctionnalités) — Base légale : exécution du contrat (CGU acceptées lors de l'inscription) ;",
      "Entretien avec Hiron (conduite d'un entretien conversationnel, transcription, analyse comportementale) — Base légale : consentement explicite du Candidat (opt-in avant l'entretien) ;",
      "Analyse de profil par Hiron (génération d'archétypes, cartographie soft skills, profil comportemental) — Base légale : consentement explicite + exécution du contrat ;",
      "Matching prédictif (calcul de scores de compatibilité multi-dimensionnels entre candidats et offres) — Base légale : exécution du contrat ;",
      "Analyse profil entreprise (analyse des réponses texte + audio pour générer empreinte culturelle) — Base légale : exécution du contrat + consentement (audio) ;",
      "Suivi insertion par l'école (transmission de données d'activité agrégées à l'Établissement de rattachement) — Base légale : intérêt légitime de l'Établissement + consentement (rattachement) ;",
      "Notifications email (emails transactionnels et alertes) — Base légale : exécution du contrat ;",
      "Sécurité (protection contre les accès non autorisés, détection de fraude, journalisation) — Base légale : intérêt légitime de Hiry ;",
      "Amélioration du Service (statistiques anonymisées d'usage, amélioration des algorithmes) — Base légale : intérêt légitime de Hiry ;",
      "Paiement (gestion des achats des entreprises via Stripe) — Base légale : exécution du contrat ;",
      "Obligations légales (conservation des données de connexion, réponse aux réquisitions judiciaires) — Base légale : obligation légale.",
    ],
  },

  // ── 5. Traitements spécifiques liés à l'intelligence artificielle ──
  {
    title: "5. Traitements spécifiques liés à l'intelligence artificielle",
    content: `Hiry utilise l'IA comme outil central de son Service. Cette section détaille les traitements IA, les données impliquées, et vos droits spécifiques.`,
  },
  {
    title: "5.1 Entretien conversationnel avec Hiron",
    level: 2,
    content: `Le Service propose un entretien vocal en temps réel avec Hiron (technologie Google Gemini). Le fonctionnement technique est le suivant :`,
    list: [
      "Votre voix est captée par le microphone de votre appareil et transmise en flux continu (streaming WebSocket) au modèle d'IA Google Gemini ;",
      "La transcription textuelle de vos réponses est assurée en parallèle par le service tiers Deepgram ;",
      "Hiron génère des réponses vocales en temps réel, créant une conversation naturelle ;",
      "La durée de l'entretien est limitée à 10 minutes maximum.",
    ],
    after: `Données traitées : flux audio en temps réel (non conservé), transcription textuelle (conservée), analyse comportementale générée (conservée).

Aucun enregistrement audio n'est conservé après la fin de la session. Seules la transcription textuelle et l'analyse générée sont stockées.

Base légale : consentement explicite, recueilli avant le début de l'entretien.

Droit de retrait : vous pouvez à tout moment interrompre l'entretien. Vous pouvez demander la suppression de la transcription et de l'analyse en contactant dataprotection@hiry.fr.`,
  },
  {
    title: "5.2 Analyse de profil candidat",
    level: 2,
    content: `À l'issue de l'entretien et/ou du questionnaire d'onboarding, Hiron analyse vos réponses pour générer :`,
    list: [
      "Un archétype professionnel (ex : Explorateur, Bâtisseur, Stratège, etc.) ;",
      "Une cartographie des soft skills avec niveaux de maîtrise ;",
      "Des axes de motivation et drivers professionnels ;",
      "Des recommandations de développement personnalisées.",
    ],
    after: `Cette analyse est communiquée au Candidat dans son tableau de bord et peut être partagée avec les Entreprises dans le cadre du processus de candidature.`,
  },
  {
    title: "5.3 Extraction et normalisation ESCO",
    level: 2,
    content: `Les compétences mentionnées dans votre profil, votre CV et vos réponses sont normalisées automatiquement à l'aide de la taxonomie européenne ESCO (European Skills, Competences, Qualifications and Occupations). Ce traitement permet un matching sémantique de qualité entre candidats et offres. Les identifiants ESCO sont des données publiques de la Commission Européenne.`,
  },
  {
    title: "5.4 Analyse de profil entreprise",
    level: 2,
    content: `Les réponses fournies par l'Entreprise lors de l'onboarding (texte et audio) sont analysées par Hiron pour générer :`,
    list: [
      "Un archétype organisationnel et un fingerprint culturel ;",
      "Un profil du candidat idéal ;",
      "Des contenus enrichis pour les offres d'emploi.",
    ],
    after: `Les enregistrements vocaux de l'entreprise ne sont pas conservés dans Firebase Storage, ils sont uniquement transcrits par Hiron.`,
  },
  {
    title: "5.5 Matching prédictif",
    level: 2,
    content: `Le moteur de matching calcule des scores de compatibilité sur 13 dimensions pondérées : compétences techniques (ESCO 3-tiers), soft skills, archétype/culture fit, géographie, télétravail, contrat, diplôme, langues, secteur, salaire, expérience, et culture d'entreprise.

Les scores sont fournis à titre indicatif. Hiry ne prend aucune décision automatisée au sens de l'article 22 du RGPD. Les scores de matching sont des outils d'aide à la décision : la décision finale d'embauche ou de candidature appartient exclusivement aux Utilisateurs.`,
  },
  {
    title: "5.6 Garanties et transparence IA",
    level: 2,
    list: [
      "Non-discrimination : les modèles d'IA utilisés ne prennent en compte aucun critère discriminatoire (origine, sexe, âge, religion, orientation sexuelle, handicap, situation familiale) ;",
      "Pas de décision automatisée : aucune candidature n'est rejetée ou acceptée automatiquement par l'IA ;",
      "Droit d'explication : vous pouvez demander des informations sur la logique sous-jacente du matching en contactant dataprotection@hiry.fr ;",
      "Droit d'opposition : vous pouvez vous opposer au traitement IA de vos données en contactant dataprotection@hiry.fr. Dans ce cas, certaines fonctionnalités (matching, entretien avec Hiron) ne seront plus disponibles.",
    ],
  },

  // ── 6. Destinataires des données ──
  {
    title: "6. Destinataires des données",
    content: `Nous partageons vos données avec notre personnel habilité et nos sous-traitants. Selon les services utilisés, vos données sont susceptibles d'être transmises aux Entreprises et aux Établissements.`,
  },
  {
    title: "6.1 Partage avec les Établissements",
    level: 2,
    content: `Si votre Compte Candidat est rattaché à un Établissement partenaire, les données d'activité suivantes sont transmises à l'Établissement : statut du profil (complété/incomplet), nombre de candidatures envoyées, nombre de matches, statut des entretiens, placement éventuel (embauche). Ces données permettent à l'Établissement d'assurer le suivi de l'insertion professionnelle de ses étudiants.

Vous pouvez vous opposer à cette transmission en vous désinscrivant de votre Établissement depuis les paramètres de votre compte (onglet « École »). Vous conserverez l'accès au Service mais perdrez l'accès aux offres exclusives de votre école.`,
  },
  {
    title: "6.2 Partage dans le cadre d'une candidature",
    level: 2,
    content: `Lorsque vous postulez à une offre, les données suivantes sont transmises à l'Entreprise : votre nom, prénom, email, photo de profil, école, formation, archétype IA, score de matching, lettre de motivation et CV. L'Entreprise devient responsable de traitement de ces données dans le cadre de son processus de recrutement.`,
  },

  // ── 7. Sous-traitants et prestataires techniques ──
  {
    title: "7. Sous-traitants et prestataires techniques",
    content: `Hiry fait appel aux sous-traitants suivants pour le fonctionnement du Service :`,
    list: [
      "Google Cloud / Firebase : hébergement, authentification, base de données Firestore, stockage fichiers — UE (europe-west1, Belgique) ;",
      "Google Gemini : intelligence artificielle (analyse de profils, matching sémantique, entretien vocal, transcription audio entreprise) — UE (europe-west1) ;",
      "Deepgram : transcription audio en texte (Speech-to-Text) durant l'entretien avec Hiron — USA (clauses contractuelles types) ;",
      "Stripe : traitement des paiements (achats à l'acte ou packs entreprises) — UE + USA (certifié). Aucune donnée bancaire n'est stockée par Hiry ;",
      "Resend : envoi d'emails transactionnels (bienvenue, notifications, matches) — USA (clauses contractuelles types) ;",
      "API INSEE / Entreprise : vérification SIREN/SIRET lors de l'onboarding entreprise — France.",
    ],
  },

  // ── 8. Transferts en dehors de l'Union européenne ──
  {
    title: "8. Transferts en dehors de l'Union européenne",
    content: `L'infrastructure principale de Hiry (Firebase/Google Cloud) est hébergée dans la région europe-west1 (Belgique) au sein de l'Union Européenne.

Certains sous-traitants (Deepgram, Resend) sont établis aux États-Unis. Pour ces transferts, des garanties appropriées sont mises en place conformément au RGPD :`,
    list: [
      "Clauses contractuelles types (SCC) approuvées par la Commission européenne ;",
      "Mesures techniques complémentaires (chiffrement en transit et au repos) ;",
      "Évaluation d'impact des transferts (Transfer Impact Assessment) réalisée pour chaque prestataire.",
    ],
    after: `Concernant Stripe, le prestataire bénéficie de certifications et de mesures de conformité reconnues pour les transferts internationaux de données de paiement.`,
  },

  // ── 9. Durée de conservation ──
  {
    title: "9. Durée de conservation",
    content: `Les données personnelles sont conservées pour les durées suivantes :`,
    list: [
      "Données de compte (profil, préférences) : jusqu'à fermeture du compte ou 2 ans d'inactivité ;",
      "Transcription entretien avec Hiron + analyse : jusqu'à fermeture du compte ou 2 ans d'inactivité. Supprimable sur demande à tout moment ;",
      "Scores de matching : recalculés périodiquement. Anciens scores supprimés à chaque recalcul ;",
      "Messages (messagerie) : jusqu'à fermeture du compte ou 2 ans d'inactivité ;",
      "Candidatures : jusqu'à fermeture du compte ou 2 ans d'inactivité ;",
      "Données de connexion (logs) : 1 an (obligation légale LCEN) ;",
      "Données de paiement (Stripe) : conformément aux obligations comptables (10 ans pour les pièces comptables).",
    ],
    after: `À l'issue de la clôture effective de votre compte, vos données seront irrémédiablement anonymisées. Elles serviront alors exclusivement à des fins statistiques et d'amélioration du Service.

Quelques semaines avant l'échéance des 2 ans d'inactivité, nous vous contacterons par email pour vous informer de la suppression imminente de votre compte.`,
  },

  // ── 10. Sécurité et confidentialité ──
  {
    title: "10. Sécurité et confidentialité",
    content: `Nous mettons en place des mesures organisationnelles et techniques afin d'assurer la sécurité et la confidentialité de vos données.

Au plan technique :`,
    list: [
      "Chiffrement en transit : toutes les communications utilisent le protocole TLS (HTTPS) ;",
      "Chiffrement au repos : les données stockées dans Firestore et Firebase Storage sont chiffrées au repos par Google Cloud ;",
      "Contrôle d'accès : Firebase Authentication avec gestion des rôles (RBAC) — chaque utilisateur n'accède qu'aux données de son rôle ;",
      "Règles de sécurité Firestore : règles déclaratives empêchant tout accès non autorisé aux collections de données ;",
      "Isolation des environnements : séparation stricte entre l'environnement de développement et l'environnement de production ;",
      "Secrets managés : les clés d'API sensibles sont stockées dans Firebase Secrets Manager, jamais dans le code source ;",
      "Journalisation : les accès aux données et les opérations sensibles sont journalisés via Cloud Logging.",
    ],
    after: `Au plan organisationnel : accès restreint aux données de production au personnel strictement habilité, sensibilisation de l'équipe à la protection des données personnelles, et revue régulière des règles de sécurité Firestore et des accès.`,
  },

  // ── 11. Vos droits ──
  {
    title: "11. Vos droits",
    content: `Conformément au RGPD, vous disposez des droits suivants :`,
    list: [
      "Droit d'accès (art. 15) : obtenir la confirmation que vos données sont traitées et en recevoir une copie ;",
      "Droit de rectification (art. 16) : faire corriger vos données inexactes ou incomplètes ;",
      "Droit d'effacement (art. 17) : demander la suppression de vos données dans les conditions prévues par le RGPD ;",
      "Droit à la portabilité (art. 20) : recevoir vos données dans un format structuré et lisible par machine ;",
      "Droit de limitation (art. 18) : demander la limitation du traitement de vos données ;",
      "Droit d'opposition (art. 21) : vous opposer au traitement de vos données fondé sur l'intérêt légitime ;",
      "Retrait du consentement : retirer à tout moment votre consentement pour les traitements fondés sur celui-ci (entretien avec Hiron, analyse de profil, interaction vocale) ;",
      "Droit d'explication IA : obtenir des informations claires sur la logique du matching prédictif et de l'analyse par Hiron ;",
      "Directives post-mortem : définir des directives relatives à la conservation et la communication de vos données après votre décès.",
    ],
    after: `Pour exercer vos droits, contactez-nous à : dataprotection@hiry.fr ou par courrier à l'adresse de la société garante : MNGS, 06 Les Vergers de la Ranchère, 78860 Saint-Nom-La-Bretèche.

Nous nous engageons à répondre à votre demande dans un délai d'un mois. En cas de doute sur votre identité, nous pourrons vous demander un justificatif.

Si vous n'êtes pas satisfait de notre réponse, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : https://www.cnil.fr.`,
  },

  // ── 12. Cookies ──
  {
    title: "12. Cookies",
    content: `Le Service Hiry utilise Firebase Authentication pour la gestion des sessions. Les cookies ou mécanismes de stockage local utilisés sont strictement nécessaires au fonctionnement du Service :`,
    list: [
      "Cookie d'authentification Firebase : maintien de votre session connectée ;",
      "localStorage : préférences d'interface, données temporaires d'onboarding, paramètres de rattachement école (lien partenaire).",
    ],
    after: `Hiry n'utilise pas de cookies publicitaires ni de trackers tiers à des fins de profilage marketing. Aucune donnée n'est transmise à des régies publicitaires.`,
  },

  // ── 13. Modification de la Politique de Confidentialité ──
  {
    title: "13. Modification de la Politique de Confidentialité",
    content: `Nous nous réservons le droit de modifier la présente Politique de Confidentialité pour refléter les évolutions du Service ou de la réglementation. Si les modifications sont substantielles, nous vous en informerons par un avis visible sur le Service ou par email.

Vous reconnaissez que si vous continuez à utiliser le Service après la publication des modifications, cela vaut acceptation de la version mise à jour de la Politique de Confidentialité.`,
  },

  // ── 14. Contact ──
  {
    title: "14. Contact",
    content: `Pour toute question relative à la présente Politique de Confidentialité ou à l'exercice de vos droits :

Email : dataprotection@hiry.fr

Courrier : MNGS, 06 Les Vergers de la Ranchère, 78860 Saint-Nom-La-Bretèche.`,
  },
];

export default function PolitiqueConfidentialiteContent() {
  return (
    <LegalContent
      icon={<Shield size={22} className="text-indigo-600" />}
      title="Politique de confidentialité"
      lastUpdated="30 mars 2026"
      intro="Nous souhaitons répondre aux questions que vous pourriez vous poser concernant la gestion de vos données personnelles et vous présenter les mesures mises en place au sein de Hiry afin de vous assurer le meilleur niveau de protection de ces données."
      sections={sections}
      contactEmail="dataprotection@hiry.fr"
      contactLabel="Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous à"
    />
  );
}
