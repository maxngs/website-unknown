// ============================================================
// app/cgu/content.tsx
// Contenu complet des CGU Hiry V2.1 — 08/06/2026
// ============================================================
"use client";

import { FileText } from "lucide-react";
import LegalContent, { LegalSection } from "../components/shared/LegalContent";

const sections: LegalSection[] = [
  // ── PRÉAMBULE ──
  {
    title: "Préambule",
    content: `Pour faciliter la lecture des présentes Conditions Générales d'Utilisation (ci-après « CGU »), nous désignerons sous le terme « Service Hiry », « le Service » ou « les Services » le ou les sites web, applications mobiles et interfaces accueillant les services que nous proposons.

Le Service est accessible à l'adresse https://app.hiry.fr ainsi qu'à partir des espaces dédiés des Établissements partenaires du réseau Hiry.

Le Service Hiry est édité et exploité par la société Hiry SAS, dont le siège social est situé au 36-40 rue Raspail – L'Escalator, 92 300 Levallois Perret, immatriculée au Registre du Commerce et des Sociétés de Nanterre sous le numéro 104 764 493.

Le téléchargement de la totalité ou d'une partie quantitativement substantielle de tout ou partie du Service par utilisation de robots ou de tout autre procédé d'extraction automatique est interdit.

Sauf accord préalable et écrit de Hiry, il est interdit de vendre, revendre ou monnayer autrement les Services ou données associées.

Le Service Hiry repose sur des technologies d'intelligence artificielle, incarnées par notre assistant virtuel nommé Hiron (ci-après « Hiron » ou « l'IA »), et propulsées par Google (Gemini) pour l'analyse de profils, le matching prédictif, la conduite d'entretiens et la génération de contenus.`,
  },

  // ── 1. LES COMPTES UTILISATEURS ──
  {
    title: "1. Les comptes utilisateurs",
    content: `Hiry propose plusieurs catégories de comptes, chacun étant associé à des droits et obligations spécifiques en fonction du rôle défini :`,
  },
  {
    title: "1.1 Compte Utilisateur Candidat",
    level: 2,
    content: `Le Compte Utilisateur Candidat (ci-après « Utilisateur Candidat » ou « Candidat ») est exclusivement réservé aux étudiants et diplômés en recherche d'emploi, de stage ou d'alternance. Le Compte Candidat peut être rattaché à un Établissement partenaire du réseau Hiry si l'Utilisateur est inscrit dans un tel Établissement.

Le Candidat accède à un espace personnel comprenant un profil enrichi par Hiron, un tableau de bord de suivi de ses candidatures, un moteur de recherche d'offres prédictif, un système de messagerie avec les entreprises et un accès aux événements carrière de son école.`,
  },
  {
    title: "1.2 Compte Utilisateur Entreprise",
    level: 2,
    content: `Le Compte Utilisateur Entreprise (ci-après « Utilisateur Entreprise » ou « Recruteur ») est exclusivement réservé à tout représentant dûment habilité d'une personne physique ou morale souhaitant accéder aux services de recrutement de Hiry. Le Compte Utilisateur Entreprise est associé à un Compte Entreprise qui constitue le compte principal de l'Entreprise.

L'Entreprise accède à un espace de gestion comprenant la publication d'offres d'emploi, un pipeline de suivi des candidatures (Kanban), un système de matching prédictif de Hiron, une messagerie avec les candidats, un calendrier d'entretiens et un module de gestion des partenariats avec les Établissements.

Hiry propose des options de diffusion et de matching facturées à l'acte ou par packs, dont les conditions tarifaires sont détaillées sur le Service. L'accès à certaines fonctionnalités est conditionné au paiement de ces frais.`,
  },
  {
    title: "1.3 Compte Utilisateur Établissement",
    level: 2,
    content: `Le Compte Utilisateur Établissement (ci-après « Utilisateur Établissement » ou « École ») est exclusivement réservé à tout représentant dûment habilité d'un établissement d'enseignement supérieur partenaire du réseau Hiry. L'Établissement accède à un tableau de bord 360° de suivi de l'insertion professionnelle de ses étudiants, un module de gestion des partenariats entreprises, un espace événements carrière et un système de messagerie.`,
  },
  {
    title: "1.4 Rôles et administration",
    level: 2,
    content: `Chaque Utilisateur rattaché à un Compte Entreprise ou Établissement se voit attribuer un rôle spécifique (Administrateur, Recruteur, Membre, ou tout autre rôle prévu par le Service) déterminé et paramétré sous la responsabilité exclusive de l'Administrateur du Compte.

L'Administrateur du Compte est seul habilité à créer ou modifier les accès des Utilisateurs liés au Compte, ainsi qu'à définir leurs rôles respectifs sur le Service. Chaque Utilisateur s'engage à n'utiliser le Service que dans les limites des droits qui lui sont accordés.

Dans le cadre des présentes CGU, le terme « Utilisateurs » désigne indifféremment les Utilisateurs Candidats, Utilisateurs Entreprises ou Utilisateurs Établissement.`,
  },

  // ── 2. LES SERVICES PROPOSÉS PAR HIRY ──
  {
    title: "2. Les services proposés par Hiry",
  },
  {
    title: "2.1 Services proposés aux Utilisateurs Candidats",
    level: 2,
  },
  {
    title: "2.1.1 Présentation générale",
    level: 3,
    content: `Hiry vous propose un écosystème intégré dédié à vos démarches d'insertion professionnelle en vous permettant notamment :`,
    list: [
      "de créer un profil enrichi par intelligence artificielle à travers un processus d'onboarding guidé comprenant la collecte de vos informations personnelles, vos préférences de recherche et un entretien conversationnel avec Hiron ;",
      "de bénéficier d'un matching prédictif vous proposant les offres les plus compatibles avec votre profil, vos compétences et vos aspirations ;",
      "de postuler à des offres d'emploi, de stage ou d'alternance publiées par les Entreprises du réseau ;",
      "de suivre vos candidatures en temps réel via un tableau de bord dédié ;",
      "de communiquer directement avec les recruteurs via notre messagerie intégrée ;",
      "de vous inscrire à des événements de recrutement ou d'orientation organisés par votre Établissement ou les Entreprises partenaires ;",
      "d'accéder à des offres exclusives réservées aux étudiants de votre Établissement lorsque celui-ci est partenaire d'une Entreprise sur Hiry ;",
      "de recevoir des alertes et notifications concernant les offres et événements correspondant à vos critères.",
    ],
  },
  {
    title: "2.1.2 Entretien avec Hiron",
    level: 3,
    content: `Le Service propose un entretien conversationnel conduit par Hiron (technologie Google Gemini). Cet entretien a pour objectif d'enrichir votre profil candidat en analysant vos compétences comportementales (soft skills), vos motivations et votre personnalité professionnelle.

En acceptant de participer à cet entretien, vous consentez expressément à ce que :`,
    list: [
      "votre voix soit captée et transmise en temps réel au moteur d'intelligence artificielle ;",
      "la transcription textuelle de vos réponses soit conservée et associée à votre profil ;",
      "une analyse IA soit réalisée à partir de vos réponses pour générer votre profil comportemental (archétype, compétences transversales, axes de développement).",
    ],
    after: `L'entretien est nécessaire pour débloquer certaines fonctionnalités du Service, notamment le matching prédictif et l'affichage des scores de compatibilité avec les offres.

Aucun enregistrement audio n'est conservé. Seules la transcription textuelle et l'analyse générée sont stockées.`,
  },
  {
    title: "2.1.3 Matching prédictif et scores de compatibilité",
    level: 3,
    content: `Le moteur de matching de Hiry analyse la compatibilité entre votre profil et les offres disponibles en se fondant sur quatre grandes familles : compatibilité métier (compétences techniques normalisées et soft skills), compatibilité comportementale et culturelle (archétypes de personnalité, motivations, alignement culturel), compatibilité formation (niveau et domaine analysés en contexte) et compatibilité pratique (localisation, modalités contractuelles, langues, secteur, expérience).

Les scores de compatibilité sont fournis à titre indicatif et ne constituent en aucun cas une garantie d'embauche ou de sélection. Hiry ne garantit pas l'exactitude absolue des analyses de Hiron et invite les Utilisateurs à exercer leur propre jugement.`,
  },
  {
    title: "2.1.4 Classement des offres",
    level: 3,
    content: `L'ordre dans lequel les offres sont affichées est déterminé en fonction du score de matching prédictif lorsque celui-ci est disponible, puis par date de publication. Aucun critère publicitaire ou commercial n'intervient dans le classement des offres présentées aux Candidats.`,
  },
  {
    title: "2.1.5 Offres exclusives école",
    level: 3,
    content: `Certaines offres peuvent être réservées exclusivement aux étudiants d'un ou plusieurs Établissements partenaires (offres dites « school_exclusive »). Ces offres ne sont visibles que par les Candidats dont le profil est rattaché à l'Établissement concerné.`,
  },
  {
    title: "2.2 Services proposés aux Utilisateurs Entreprises",
    level: 2,
  },
  {
    title: "2.2.1 Présentation générale",
    level: 3,
    content: `En fonction de vos achats (à la Mission Matching ou par packs) et de votre rôle au sein du Compte Entreprise, vous avez la possibilité de :`,
    list: [
      "créer et publier des offres d'emploi, de stage ou d'alternance accessibles à l'ensemble des Candidats du réseau ou réservées aux étudiants de vos Établissements partenaires ;",
      "bénéficier d'une analyse par Hiron de votre profil entreprise (culture, ADN, valeurs) générée à partir de vos réponses à notre questionnaire d'onboarding ;",
      "accéder au matching prédictif pour identifier les Candidats les plus compatibles avec vos offres ;",
      "gérer votre pipeline de recrutement (Kanban) pour suivre l'avancement des candidatures ;",
      "communiquer avec les Candidats via la messagerie intégrée ;",
      "gérer vos partenariats avec les Établissements du réseau Hiry ;",
      "planifier et gérer des entretiens via le module calendrier ;",
      "organiser et promouvoir des événements de recrutement visibles par les Candidats.",
    ],
  },
  {
    title: "2.2.2 Modalités de publication de missions matching",
    level: 3,
    content: `Hiry permet aux Entreprises de publier des offres bénéficiant du matching prédictif complet sur l'ensemble de la base de Candidats du réseau (ci-après désignées « missions matching »). La publication de ces missions matching est facturée à l'acte (pour une mission unique) ou via l'achat de packs prépayés.

Les détails (limites, tarifs) sont décrits sur la page de tarification du Service et rappelés au moment de la publication de la mission ou de l'achat du pack. La validation et la diffusion d'une mission matching sont conditionnées au paiement du tarif correspondant via le prestataire de paiement Stripe.

Une formule Early Adopter gratuite et temporaire peut être proposée lors du lancement du Service. Les conditions de cette formule (durée, limites, transition vers le modèle payant) sont communiquées lors de l'inscription.`,
  },
  {
    title: "2.2.3 Entreprise partenaire d'un Établissement (Walled Garden)",
    level: 3,
    content: `Une Entreprise peut devenir partenaire d'un Établissement du réseau Hiry, soit par demande directe, soit via un lien d'invitation émis par l'Établissement (Magic Link). L'Entreprise partenaire bénéficie d'une visibilité exclusive auprès des étudiants de l'Établissement concerné.

Les offres publiées par une Entreprise partenaire sont, par défaut, réservées aux étudiants de l'Établissement partenaire (visibilité « school_exclusive »). L'Entreprise peut, moyennant le paiement des frais correspondants au tarif en vigueur, élargir la diffusion de ses offres à l'ensemble du réseau Hiry.`,
  },
  {
    title: "2.2.4 Responsabilité du contenu des offres",
    level: 3,
    content: `L'Entreprise que vous représentez reconnaît explicitement que Hiry n'est pas tenu de contrôler le contenu des offres publiées, ce contenu étant de la seule et unique responsabilité de l'Entreprise. Hiry se réserve néanmoins le droit de retirer toute offre contraire aux CGU, à la législation en vigueur ou à l'ordre public.

Il est interdit de publier simultanément plusieurs offres pour une même opportunité professionnelle. Une offre doit permettre aux Candidats de postuler gratuitement. Une offre ne doit pas proposer de services de placement payants.`,
  },
  {
    title: "2.3 Services proposés aux Utilisateurs Établissement",
    level: 2,
    content: `Les Établissements du réseau Hiry accèdent à un espace dédié leur permettant de :`,
    list: [
      "suivre l'insertion professionnelle de leurs étudiants via un tableau de bord analytique 360° ;",
      "gérer les partenariats entreprises (acceptation/refus des demandes, suivi des relations) ;",
      "valider les offres ciblant leur établissement avant publication auprès de leurs étudiants ;",
      "organiser des événements carrière (forums, ateliers, conférences) et gérer les inscriptions ;",
      "accéder aux statistiques d'activité de leurs étudiants sur la plateforme (candidatures, matches, entretiens) ;",
      "communiquer avec les Entreprises partenaires via la messagerie intégrée.",
    ],
    after: `En acceptant les présentes CGU, l'Établissement reconnaît que les données d'activité de ses étudiants lui sont transmises conformément à la politique de confidentialité et dans le strict cadre de l'accompagnement à l'insertion professionnelle.`,
  },

  // ── 3. ACCÈS AU SERVICE ──
  {
    title: "3. Accès au service",
    content: `Afin de pouvoir accéder au Service, vous devez disposer du matériel informatique adéquat (ordinateur, smartphone, tablette), d'une connexion à Internet et, le cas échéant, d'un navigateur web compatible et à jour. Les frais d'accès et d'utilisation du réseau de télécommunications restent à votre charge.

Pour les fonctionnalités d'entretien avec Hiron, un accès au microphone de votre appareil est requis. Vous serez explicitement sollicité pour autoriser cet accès. Aucune fonctionnalité de la plateforme n'utilise votre caméra.

Nous mettons en œuvre tous les moyens raisonnables à notre disposition pour assurer un accès de qualité au Service, mais ne sommes tenus à aucune obligation de résultat. Nous nous réservons la possibilité de modifier, d'interrompre ou de suspendre momentanément l'accès au Service, notamment pour des opérations de maintenance, sans que cela n'ouvre droit à une quelconque indemnisation.`,
  },

  // ── 4. CRÉATION D'UN COMPTE UTILISATEUR ──
  {
    title: "4. Création d'un compte utilisateur",
    content: `Toute utilisation de robots ou de toute autre méthode visant à la création automatisée d'un compte sur le Service est interdite. Hiry pourra supprimer ou bloquer tout compte en infraction avec les présentes conditions.`,
  },
  {
    title: "4.1 Création d'un Compte Utilisateur Candidat",
    level: 2,
    content: `Pour créer un Compte Candidat, vous devez compléter le formulaire d'inscription en ligne ou vous inscrire via le lien d'invitation de votre Établissement.

Le processus d'inscription comprend :`,
    list: [
      "la création d'un compte avec une adresse email et un mot de passe ;",
      "un onboarding guidé comprenant la collecte de vos informations personnelles, préférences de recherche et données académiques ;",
      "un entretien conversationnel avec Hiron (nécessaire pour débloquer certaines fonctionnalités).",
    ],
    after: `Votre mot de passe doit être strictement personnel, confidentiel et ne devra pas être communiqué ni partagé avec des tiers. Nous vous recommandons de choisir un mot de passe complexe.`,
  },
  {
    title: "4.2 Création d'un Compte Utilisateur Entreprise",
    level: 2,
    content: `Pour créer un Compte Entreprise, vous devez compléter le formulaire d'inscription dédié. Le processus d'onboarding comprend :`,
    list: [
      "la vérification de votre entreprise via son numéro SIREN auprès de l'API de l'INSEE ;",
      "un questionnaire stratégique sur votre culture d'entreprise, votre fonctionnement interne et vos valeurs (avec possibilité de réponse textuelle ou vocale) ;",
      "le renseignement de votre politique de télétravail, logo et photos ;",
      "la définition de votre processus de recrutement type.",
    ],
    after: `En créant un Compte Entreprise, vous vous engagez à disposer de l'ensemble des pouvoirs et habilitations nécessaires pour engager valablement la personne morale que vous représentez.`,
  },
  {
    title: "4.3 Création d'un Compte Utilisateur Établissement",
    level: 2,
    content: `La création du Compte Établissement est réalisée après contractualisation avec Hiry. L'Établissement désigne un Administrateur qui sera responsable de la gestion du compte et des accès de ses collaborateurs.`,
  },
  {
    title: "4.4 Inscription via lien d'invitation (Magic Link)",
    level: 2,
    content: `Les Établissements peuvent générer un lien d'invitation unique permettant aux Entreprises de créer directement un Compte Entreprise rattaché à l'Établissement en tant que partenaire. Les offres publiées par une Entreprise inscrite via ce mécanisme seront, par défaut, réservées aux étudiants de l'Établissement concerné.`,
  },

  // ── 5. UTILISATION DE L'INTELLIGENCE ARTIFICIELLE ──
  {
    title: "5. Utilisation de l'intelligence artificielle",
    content: `Le Service Hiry utilise des technologies d'intelligence artificielle fournies par Google (modèles Gemini) pour les fonctionnalités suivantes :`,
  },
  {
    title: "5.1 Entretien conversationnel avec Hiron",
    level: 2,
    content: `Hiron conduit un entretien vocal en temps réel avec le Candidat. L'audio est transmis en flux continu (streaming) au modèle d'IA qui génère des réponses vocales en temps réel. La transcription textuelle est assurée par un service tiers (Deepgram). Aucun enregistrement audio n'est conservé au-delà de la session. Seules la transcription textuelle et l'analyse générée sont stockées.`,
  },
  {
    title: "5.2 Analyse de profil candidat",
    level: 2,
    content: `À l'issue de l'entretien et du questionnaire post-entretien, Hiron génère une analyse comportementale du Candidat incluant un archétype professionnel, une cartographie des soft skills, des axes de motivation et des recommandations de développement. Cette analyse est communiquée au Candidat et peut être partagée avec les Entreprises dans le cadre du processus de candidature.`,
  },
  {
    title: "5.3 Analyse de profil entreprise",
    level: 2,
    content: `Les réponses fournies par l'Entreprise lors de l'onboarding (texte et audio) sont analysées par Hiron pour générer une empreinte culturelle comprenant un archétype organisationnel, un fingerprint culturel et un profil du candidat idéal. Les réponses vocales sont transcrites par Hiron avant analyse.`,
  },
  {
    title: "5.4 Matching prédictif",
    level: 2,
    content: `Le moteur de matching utilise les profils enrichis par Hiron pour calculer des scores de compatibilité multi-dimensionnels entre Candidats et offres. Ces scores sont fournis à titre indicatif et ne constituent pas une recommandation ou une garantie.`,
  },
  {
    title: "5.5 Extraction et normalisation de compétences",
    level: 2,
    content: `Les compétences mentionnées dans les offres et les profils sont normalisées à l'aide d'une taxonomie européenne de référence des compétences professionnelles, afin de permettre un matching sémantique de qualité.`,
  },
  {
    title: "5.6 Limitations et transparence",
    level: 2,
    content: `Les analyses produites par Hiron sont générées automatiquement et peuvent contenir des inexactitudes. Hiry ne garantit pas l'exactitude, l'exhaustivité ou la pertinence des résultats produits par Hiron. Les Utilisateurs sont invités à exercer leur propre jugement et à ne pas se fier exclusivement aux résultats de Hiron pour prendre des décisions d'embauche ou de candidature.

Hiry s'engage à ne pas utiliser Hiron à des fins de discrimination. Les modèles d'IA utilisés ne prennent en compte aucun critère discriminatoire (origine, sexe, âge, religion, orientation sexuelle, handicap, etc.) dans l'analyse des profils ou le calcul des scores de matching.`,
  },

  // ── 6. RESPONSABILITÉ ──
  {
    title: "6. Responsabilité",
  },
  {
    title: "6.1 Votre responsabilité",
    level: 2,
    content: `De façon générale, vous êtes responsable :`,
    list: [
      "du bon fonctionnement de votre matériel et de votre accès Internet ;",
      "de tous les dommages, directs ou indirects, causés par un contenu que vous auriez déposé sur le Service ;",
      "des contenus que vous pourriez être amenés à publier sur le Service, quelle qu'en soit la nature.",
    ],
    after: `Il est interdit de publier sur le Service toute information personnelle sensible telle qu'un numéro de sécurité sociale, un numéro de passeport, un numéro de carte d'identité ou tout autre identifiant similaire.

Plus globalement, vous vous engagez à respecter les dispositions légales et réglementaires en vigueur et vous vous interdisez notamment :`,
  },
  {
    title: "",
    level: 3,
    list: [
      "d'usurper l'identité d'un tiers ;",
      "de publier ou de valider intentionnellement du contenu faux, erroné ou trompeur ;",
      "d'entraver l'accès au Service ou son bon fonctionnement ;",
      "de publier des contenus portant atteinte aux droits de propriété intellectuelle de tiers ;",
      "de publier des contenus à caractère raciste, xénophobe, antisémite, homophobe, négationniste, pornographique ou portant atteinte à la dignité humaine ;",
      "de publier des contenus incitant à la violence, au suicide, au terrorisme ou à la commission de crimes ;",
      "de publier des informations à caractère commercial ou publicitaire sans notre autorisation ;",
      "d'utiliser les données personnelles accessibles sur le Service en violation de la réglementation en matière de protection des données personnelles ;",
      "de pratiquer toute discrimination en matière de recrutement ;",
      "de tenter de contourner, désactiver ou interférer avec les fonctionnalités de sécurité du Service ;",
      "d'utiliser les résultats de l'IA comme seul critère de décision en matière de recrutement.",
    ],
    after: `En cas de manquement aux CGU, nous nous réservons le droit de bloquer votre accès à tout ou partie des services, voire de supprimer votre compte de façon temporaire ou définitive, sans contrepartie ni notification préalable.`,
  },
  {
    title: "6.2 Notre responsabilité",
    level: 2,
    content: `Nous vous rappelons que :`,
    list: [
      "nous ne vérifions pas l'ensemble des contenus publiés via le Service, qui le sont sous la propre responsabilité de leurs auteurs ;",
      "nous ne sommes en rien responsables de toute décision d'embauche ou de non-embauche découlant d'une offre publiée via le Service ou d'un score de matching affiché ;",
      "Hiry est un tiers aux correspondances et relations entre les Utilisateurs Entreprises et les Utilisateurs Candidats et exclut toute responsabilité à cet égard ;",
      "les résultats produits par Hiron (analyses, scores, archétypes) sont fournis à titre indicatif et ne sauraient engager la responsabilité de Hiry ;",
      "le Service comporte des informations provenant de sources tierces dont nous ne garantissons pas l'exactitude.",
    ],
    after: `Nous ne saurions être tenus pour responsables de tout dysfonctionnement du réseau, des serveurs, ou de tout événement échappant à notre contrôle raisonnable qui empêcherait ou dégraderait l'accès au Service.`,
  },

  // ── 7. DONNÉES PERSONNELLES ET CONFIDENTIALITÉ ──
  {
    title: "7. Données personnelles et confidentialité",
  },
  {
    title: "7.1 Traitement des données",
    level: 2,
    content: `Les données personnelles collectées et traitées par Hiry sont détaillées dans la Politique de Confidentialité annexée aux présentes CGU. En synthèse, Hiry collecte et traite les données suivantes :`,
    list: [
      "Données d'identification : nom, prénom, adresse email, numéro de téléphone ;",
      "Données académiques : établissement, formation, niveau d'études ;",
      "Données professionnelles : compétences, expériences, préférences de recherche, CV ;",
      "Données d'entretien avec Hiron : transcription textuelle des échanges, analyse comportementale générée ;",
      "Données d'entreprise : SIREN/SIRET, raison sociale, secteur d'activité, réponses au questionnaire stratégique, enregistrements audio des réponses vocales ;",
      "Données d'usage : connexions, interactions, candidatures, messages ;",
      "Données de matching : scores de compatibilité, dimensions d'analyse.",
    ],
  },
  {
    title: "7.2 Base légale des traitements",
    level: 2,
    content: `Les traitements de données sont fondés sur :`,
    list: [
      "l'exécution du contrat (fourniture du Service) ;",
      "le consentement explicite (entretien avec Hiron, analyse de profil, enregistrement vocal) ;",
      "l'intérêt légitime (amélioration du Service, statistiques anonymisées) ;",
      "les obligations légales le cas échéant.",
    ],
  },
  {
    title: "7.3 Partage des données avec les Établissements",
    level: 2,
    content: `Si votre Compte Candidat est rattaché à un Établissement, des données d'activité peuvent lui être transmises (statut de votre profil, nombre de candidatures, nombre de matches, statut des entretiens). En faisant le choix délibéré de rattacher votre Compte Candidat à un Établissement partenaire (par exemple via un lien d'invitation ou l'ajout manuel dans vos paramètres), vous acceptez expressément que ces données d'activité lui soient transmises de manière nominative (associées à votre nom et prénom). L'Établissement s'engage à n'utiliser ces données nominatives qu'aux seules fins d'accompagnement à votre insertion professionnelle. Si vous ne souhaitez pas partager ces informations nominatives avec votre école, vous êtes libre de ne pas rattacher votre compte ou d'annuler ce rattachement à tout moment depuis vos paramètres.`,
  },
  {
    title: "7.4 Hébergement et sécurité",
    level: 2,
    content: `Les données sont hébergées sur l'infrastructure Google Cloud Platform (Firebase) au sein de l'Union Européenne (région europe-west1). Hiry met en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger les données : chiffrement en transit (TLS) et au repos, contrôle d'accès par rôle (RBAC), règles de sécurité Firestore, journalisation des accès.`,
  },
  {
    title: "7.5 Sous-traitants",
    level: 2,
    content: `Hiry fait appel aux sous-traitants suivants pour le traitement des données :`,
    list: [
      "Google Cloud / Firebase : hébergement, authentification, base de données, stockage ;",
      "Google Gemini : intelligence artificielle (analyse de profils, matching, entretien) ;",
      "Deepgram : transcription audio en texte (entretien) ;",
      "Stripe : traitement des paiements ;",
      "Resend : envoi d'emails transactionnels.",
    ],
  },
  {
    title: "7.6 Droits des Utilisateurs",
    level: 2,
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants : accès, rectification, effacement, limitation, portabilité, opposition. Vous disposez également du droit de retirer votre consentement à tout moment pour les traitements fondés sur celui-ci.

Pour exercer vos droits, vous pouvez nous contacter à l'adresse : dataprotection@hiry.fr.`,
  },

  // ── 8. CONDITIONS DE PAIEMENT ──
  {
    title: "8. Conditions de paiement",
  },
  {
    title: "8.1 Pour les Utilisateurs Entreprises",
    level: 2,
    content: `L'accès à la diffusion élargie des offres et au matching prédictif complet est payant et s'effectue à l'acte (par mission publiée) ou via l'achat de « packs » prépayés. Les paiements sont gérés par le prestataire Stripe. Les tarifs applicables sont ceux affichés sur le Service au moment de la publication de la mission matching ou de l'achat du pack.

Cas spécifique des Entreprises Partenaires d'un Établissement : La diffusion d'une offre est gratuite si elle est exclusivement restreinte aux étudiants de l'Établissement partenaire (inscription via le lien d'invitation transmis par l'Établissement). Si l'Entreprise souhaite étendre la visibilité de cette offre à l'ensemble des étudiants inscrits sur Hiry, elle devra s'acquitter des frais correspondants au tarif en vigueur.`,
  },
  {
    title: "8.2 Pour les Utilisateurs Établissements",
    level: 2,
    content: `L'accès aux fonctionnalités du Service dédiées aux Établissements est soumis à tarification. Les tarifs applicables sont communiqués directement à chaque Établissement préalablement à la contractualisation. Le paiement s'effectue par facturation directe émise par Hiry, selon les modalités et délais définis dans la convention conclue entre l'Établissement et Hiry.`,
  },
  {
    title: "8.3 Dispositions communes",
    level: 2,
    content: `Hiry se réserve le droit de modifier ses tarifs à tout moment, étant entendu que les modifications ne s'appliqueront qu'aux nouveaux achats de packs ou de publications ainsi qu'aux nouveaux contrats avec les Établissements. En cas de défaut de paiement, Hiry se réserve le droit de suspendre la diffusion des missions matching en cours jusqu'à régularisation.`,
  },
  {
    title: "8.4 Gratuité pour les Candidats",
    level: 2,
    content: `Le Service est gratuit pour les Utilisateurs Candidats.`,
  },

  // ── 9. MODÉRATION ET SIGNALEMENTS ──
  {
    title: "9. Modération et signalements",
  },
  {
    title: "9.1 Identification et suppression des comptes frauduleux",
    level: 2,
    content: `Hiry emploie des moyens automatiques et manuels pour identifier et supprimer les comptes frauduleux ou agissant en violation des présentes CGU.`,
  },
  {
    title: "9.2 Signalement des contenus",
    level: 2,
    content: `Les Utilisateurs peuvent signaler les contenus qu'ils estiment contraires à la loi française ou aux règles établies dans les présentes CGU, notamment en contactant Hiry à l'adresse abuse@hiry.fr.`,
  },
  {
    title: "9.3 Examen des signalements",
    level: 2,
    content: `Dès réception d'un signalement, le contenu signalé fait l'objet d'un examen par nos équipes. En cas de manquement aux CGU, nous nous réservons le droit de supprimer les contenus signalés et de bloquer l'accès au compte concerné.`,
  },
  {
    title: "9.4 Procédures de réclamation",
    level: 2,
    content: `Si vous êtes mécontent d'une décision prise par Hiry suite à un signalement ou une restriction de votre compte, vous pouvez soumettre une réclamation dans un délai de six mois en contactant legal@hiry.fr.`,
  },

  // ── 10. FERMETURE DU COMPTE ──
  {
    title: "10. Fermeture du compte",
  },
  {
    title: "10.1 Utilisateurs Candidats",
    level: 2,
    content: `Vous pouvez à tout moment supprimer votre compte depuis la rubrique « Paramètres » de votre espace personnel. Votre compte et l'ensemble des données associées seront supprimés dans un délai de 30 jours. À l'issue de ce délai, vos données seront irrémédiablement anonymisées.

Par ailleurs, votre compte sera supprimé au-delà de deux ans d'inactivité. Un email de rappel vous sera adressé avant cette suppression.`,
  },
  {
    title: "10.2 Utilisateurs Entreprise",
    level: 2,
    content: `Pour fermer votre Compte Entreprise, contactez-nous à l'adresse support@hiry.fr ou supprimez votre compte depuis les paramètres du Service. En cas d'épuisement de vos crédits ou packs, la diffusion de vos missions matching sera suspendue. Les données de l'Entreprise seront conservées pendant une durée de 2 ans après la cessation du contrat, sauf demande de suppression anticipée.`,
  },
  {
    title: "10.3 Utilisateurs Établissement",
    level: 2,
    content: `La clôture du Compte Établissement intervient conformément aux conditions du contrat spécifique conclu entre l'Établissement et Hiry.`,
  },

  // ── 11. PROPRIÉTÉ INTELLECTUELLE ──
  {
    title: "11. Propriété intellectuelle",
  },
  {
    title: "11.1 Propriété intellectuelle de Hiry",
    level: 2,
    content: `Tous les éléments qui composent le Service (marques, logos, textes, données, dessins, graphiques, codes informatiques, algorithmes de Hiron, modèles de matching) sont et restent la propriété exclusive de la société Hiry.

Nous ne vous concédons qu'une autorisation d'utilisation du Service dans les conditions prévues par les présentes CGU. Toute reproduction, représentation, modification ou exploitation non autorisée est interdite.`,
  },
  {
    title: "11.2 Propriété intellectuelle des Utilisateurs",
    level: 2,
    content: `Vous êtes et demeurez les seuls détenteurs des droits sur les contenus que vous publiez via le Service. En publiant du contenu sur le Service, vous accordez à Hiry une licence mondiale, non exclusive, transférable et gratuite pour utiliser, reproduire, adapter et traiter ces contenus aux fins du fonctionnement du Service.`,
  },
  {
    title: "11.3 Contenus générés par Hiron",
    level: 2,
    content: `Les analyses, archétypes, scores et recommandations générés par Hiron à partir de vos données constituent des œuvres dérivées dont la propriété intellectuelle revient à Hiry. Vous bénéficiez cependant d'un droit d'usage non exclusif de ces contenus dans le cadre de votre utilisation du Service.`,
  },

  // ── 12. DISPOSITIONS DIVERSES ──
  {
    title: "12. Dispositions diverses",
  },
  {
    title: "12.1 Preuve",
    level: 2,
    content: `Les données numériques enregistrées sur nos serveurs seront considérées comme apportant la preuve de toute utilisation du Service et feront foi entre vous et nous jusqu'à preuve du contraire.`,
  },
  {
    title: "12.2 Validité",
    level: 2,
    content: `Si l'une quelconque des stipulations des présentes CGU s'avérait nulle, elle serait réputée non écrite sans pour autant entraîner la nullité des autres stipulations.`,
  },
  {
    title: "12.3 Non-renonciation",
    level: 2,
    content: `Le fait que l'une des parties ne revendique pas l'application d'une clause ne pourra être interprété comme une renonciation à cette clause.`,
  },
  {
    title: "12.4 Modification des CGU",
    level: 2,
    content: `Nous nous réservons la possibilité de modifier les présentes CGU. Si les modifications sont substantielles, nous vous en informerons via le Service ou par email. Les modifications seront applicables un mois après cette information. Si vous continuez à utiliser le Service après cette date, cela vaut acceptation des nouvelles CGU.`,
  },
  {
    title: "12.5 Communication",
    level: 2,
    content: `Vous acceptez que nous puissions vous adresser par messagerie électronique les informations nécessaires à la fourniture du Service.`,
  },

  // ── 13. COMPÉTENCE ET DROIT APPLICABLE ──
  {
    title: "13. Compétence et droit applicable",
    content: `Les présentes CGU sont soumises pour leur validité, leur interprétation et leur exécution au droit français.`,
  },
  {
    title: "13.1 Utilisateurs Candidats",
    level: 2,
    content: `En cas de litige, nous vous demandons de nous saisir par écrit à l'adresse de la société garante : Hiry, 36-40 rue Raspail – L'Escalator, 92 300 Levallois Perret, ou par email à legal@hiry.fr.`,
  },
  {
    title: "13.2 Utilisateurs Entreprise et Établissement",
    level: 2,
    content: `Tout litige sera d'abord réglé à l'amiable. À défaut d'accord amiable dans un délai de 30 jours, le litige sera soumis à la compétence exclusive des Tribunaux compétents du ressort de la Cour d'appel de Versailles.`,
  },

  // ── 14. CADRE CONTRACTUEL ──
  {
    title: "14. Cadre contractuel",
    content: `Le cadre contractuel applicable à l'utilisation du Service est constitué des documents suivants, dans un ordre de priorité décroissant :`,
    list: [
      "les éventuelles Conditions Particulières ;",
      "les présentes Conditions Générales d'Utilisation ;",
      "la Politique de Confidentialité de Hiry ;",
      "les Conditions Générales de Vente (applicables aux Entreprises pour l'achat de missions matching ou de packs) ;",
      "les Conventions ou Contrats de Partenariat (applicables aux Établissements).",
    ],
    after: `En cas de contradiction entre les documents, le document de niveau supérieur prévaudra.`,
  },
];

export default function CGUContent() {
  return (
    <LegalContent
      icon={<FileText size={22} className="text-indigo-600" />}
      title="Conditions Générales d'Utilisation"
      lastUpdated="8 juin 2026 — Version 2.1"
      intro="Nous vous invitons à lire attentivement les présentes Conditions Générales d'Utilisation, dont l'acceptation et le respect sont nécessaires afin que vous puissiez utiliser les fonctionnalités que nous vous proposons."
      sections={sections}
      contactEmail="legal@hiry.fr"
      contactLabel="Pour toute question concernant les présentes CGU, contactez-nous à"
    />
  );
}
