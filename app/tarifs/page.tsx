// app/tarifs/page.tsx — Server Component
// Page /tarifs : 3 parcours commerciaux (Solo IA / Pack Démarrage / Pack Croissance)
// + bandeau réassurance + section "Inclus dans tous les packs" (8 catégories)
// + tableau comparatif détaillé + FAQ + CTA final.
// JSON-LD Product + AggregateOffer + FAQPage.
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Rocket,
  Building2,
  ShieldCheck,
  Globe,
  Lock,
  XCircle,
  ListTodo,
  MessageSquare,
  Calendar,
  Wand2,
  Users,
  BarChart3,
  Building,
  Info,
  Gift,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FadeIn } from "../components/shared/FadeIn";

const SITE_URL = "https://hiry.fr";

export const metadata: Metadata = {
  title: "Tarifs Hiry — Solo, Pack Démarrage et Pack Croissance",
  description:
    "3 parcours adaptés à votre rythme de recrutement : Solo à 290 €, Pack Démarrage à 1 230 €, Pack Croissance à 2 990 €/an. Tous incluent l'accès complet à la plateforme.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    type: "website",
    title: "Tarifs Hiry — 3 parcours pour votre rythme de recrutement",
    description:
      "Solo · Pack Démarrage · Pack Croissance. Plateforme complète incluse dans tous les packs.",
    url: `${SITE_URL}/tarifs`,
  },
};

const SIGNUP_URL = "https://app.hiry.fr/auth/signup";
const PLATFORM_ANCHOR = "#inclus-dans-tous-les-packs";

// Offre de lancement : 1ère mission de matching offerte aux premières
// entreprises inscrites. On n'affiche qu'un % de places restantes (rareté),
// jamais le total ni le nombre exact — pour ne pas donner d'indication
// chiffrée. Faire baisser cette valeur au fil des inscriptions.
const EARLY_BIRD_REMAINING_PCT = 20;

interface Tier {
  id: string;
  name: string;
  audience: string;
  price: number;
  priceUnit: string;
  priceContext: string;
  badge: string | null;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  icon: typeof Zap;
  highlighted: boolean;
}

const TIERS: Tier[] = [
  {
    id: "solo-ia",
    name: "Solo",
    audience: "Le test grandeur nature",
    price: 290,
    priceUnit: "HT",
    priceContext: "1 mission de matching · 60 jours",
    badge: null,
    description:
      "Découvrez la puissance de Hiron sans engagement. Instantanément, recevez les profils hautement pré-qualifiés sur la compatibilité comportementale et culturelle.",
    features: [
      "1 mission de matching pendant 60 jours",
      "Instantanément, recevez les profils qualifiés",
      "Assistance à la création de profil et d'offre",
      "Sans engagement, paiement unique",
      "Renouvellement 1-clic à 145 € HT / 60 j",
    ],
    cta: { label: "Lancer une mission", href: SIGNUP_URL },
    icon: Zap,
    highlighted: false,
  },
  {
    id: "pack-demarrage",
    name: "Pack Démarrage",
    audience: "Plusieurs recrutements à l'année",
    price: 1230,
    priceUnit: "HT",
    priceContext: "5 crédits — 246 € / mission",
    badge: "Populaire",
    description:
      "Le meilleur équilibre flexibilité / économie. 5 crédits utilisables librement (pour une mission ou un renouvellement), valables pendant 1 an. Économisez 15 % vs achat à l'unité.",
    features: [
      "5 missions de matching (60 j chacune)",
      "Crédits valables 1 an",
      "Assistance à la création de profil et d'offre",
      "Renouvellement 1-clic : 1 crédit ou 145 € HT pour 60 j",
      "Économie de 15 % vs achat à l'unité",
    ],
    cta: { label: "Acheter le Pack Démarrage", href: SIGNUP_URL },
    icon: Rocket,
    highlighted: true,
  },
  {
    id: "pack-croissance",
    name: "Pack Croissance",
    audience: "Recrutements continus · abonnement B2B",
    price: 2990,
    priceUnit: "HT / an",
    priceContext: "15 crédits — 199 € / mission",
    badge: null,
    description:
      "Un abonnement annuel pour accompagner tous vos recrutements. 15 crédits utilisables librement (pour une mission ou un renouvellement), valables pendant 1 an. Économisez +30 % vs achat à l'unité.",
    features: [
      "15 missions de matching / an (60 j chacune)",
      "Assistance à la création de profil et d'offre",
      "Possibilité d'injecter plusieurs offres au format PDF",
      "Dépassement à 190 € HT/mission (vs 290 €)",
      "Renouvellement annuel automatique",
      "Support prioritaire",
    ],
    cta: { label: "Souscrire l'abonnement", href: SIGNUP_URL },
    icon: Building2,
    highlighted: false,
  },
];

// 8 catégories incluses dans tous les packs (1 par catégorie, palette pastel)
const PLATFORM_FEATURES = [
  {
    icon: Sparkles,
    title: "Matching IA",
    tagline: "Identifiez les bons profils",
    bullets: [
      "Score d'affinité 0-100, expliqué",
      "4 familles de compatibilité analysées",
      "Profils pré-qualifiés instantanément",
      "Sauvegarde des candidats favoris",
    ],
    color: "indigo",
  },
  {
    icon: ListTodo,
    title: "Pipeline candidats",
    tagline: "Suivez chaque candidature",
    bullets: [
      "Kanban drag & drop",
      "Vue liste avec filtres",
      "Notes internes partagées",
      "Actions rapides en 1 clic",
    ],
    color: "emerald",
  },
  {
    icon: MessageSquare,
    title: "Messagerie",
    tagline: "Échangez sans friction",
    bullets: [
      "Chat in-app temps réel",
      "4 templates emails",
      "Personnalisation automatique du message",
      "Notifications automatiques",
    ],
    color: "violet",
  },
  {
    icon: Calendar,
    title: "Entretiens",
    tagline: "Planifiez en quelques clics",
    bullets: [
      "Calendrier centralisé",
      "Lien Google Meet automatique",
      "Rappel J-1 automatique",
      "Visio · téléphone · présentiel",
    ],
    color: "amber",
  },
  {
    icon: Wand2,
    title: "Création d'offre IA",
    tagline: "Rédigez avec Hiron",
    bullets: [
      "Hiron rédige votre offre en quelques minutes",
      "Guidage étape par étape",
      "Import depuis fichier PDF",
      "Brouillons sauvegardés",
    ],
    color: "pink",
  },
  {
    icon: Users,
    title: "Équipe & rôles",
    tagline: "Travaillez à plusieurs",
    bullets: [
      "Invitation par email",
      "Rôles configurables",
      "Permissions granulaires",
      "Plusieurs offres en parallèle",
    ],
    color: "sky",
  },
  {
    icon: BarChart3,
    title: "Tableau de bord",
    tagline: "Suivez vos recrutements",
    bullets: [
      "Suivi du processus de recrutement",
      "Avancement par étape & par candidat",
      "KPI clés en temps réel",
      "Score de matching moyen",
    ],
    color: "cyan",
  },
  {
    icon: Building,
    title: "Marque employeur",
    tagline: "Donnez envie aux talents",
    bullets: [
      "Page entreprise à votre image",
      "Conditions de travail & culture",
      "Photos d'équipe & ambiance",
      "Infos utiles pour la GenZ",
    ],
    color: "rose",
  },
];

// Mapping couleur → classes Tailwind statiques (Tailwind doit voir les noms entiers au build)
const FEATURE_COLOR_CLASSES: Record<
  string,
  { bg: string; text: string }
> = {
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600" },
  violet: { bg: "bg-violet-100", text: "text-violet-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-600" },
  pink: { bg: "bg-pink-100", text: "text-pink-600" },
  sky: { bg: "bg-sky-100", text: "text-sky-600" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600" },
  rose: { bg: "bg-rose-100", text: "text-rose-600" },
};

// Tableau comparatif (ligne = critère)
type CompareRow = {
  label: string;
  solo: string;
  demarrage: string;
  croissance: string;
};

const COMPARE_ROWS: CompareRow[] = [
  { label: "Prix", solo: "290 € HT", demarrage: "1 230 € HT", croissance: "2 990 € HT/an" },
  { label: "Missions incluses", solo: "1", demarrage: "5", croissance: "15 / an" },
  { label: "Prix par mission", solo: "290 €", demarrage: "246 €", croissance: "199 €" },
  { label: "Durée mission", solo: "60 jours", demarrage: "60 jours", croissance: "60 jours" },
  { label: "Expiration des crédits", solo: "—", demarrage: "À l'année", croissance: "Renouvellement annuel" },
  { label: "Renouvellement +60 j", solo: "145 € HT", demarrage: "1 crédit ou 145 €", croissance: "1 crédit ou 145 €" },
  { label: "Dépassement", solo: "—", demarrage: "—", croissance: "190 € HT (vs 290 €)" },
  { label: "Paiement CB", solo: "✓", demarrage: "✓", croissance: "✓" },
  { label: "Prélèvement SEPA", solo: "—", demarrage: "—", croissance: "✓" },
  { label: "Accès plateforme complète", solo: "✓", demarrage: "✓", croissance: "✓" },
  { label: "Multi-utilisateurs", solo: "✓", demarrage: "✓", croissance: "✓" },
  { label: "Support standard", solo: "✓", demarrage: "✓", croissance: "—" },
  { label: "Support prioritaire", solo: "—", demarrage: "—", croissance: "✓" },
];

const FAQ = [
  {
    question: "Que se passe-t-il à la fin des 60 jours ?",
    answer:
      "Votre mission de matching passe automatiquement en veille. Aucun prélèvement n'est effectué sans votre validation. Vous recevez un email à J-5 pour décider de prolonger ou non.",
  },
  {
    question: "Les crédits du Pack Démarrage expirent-ils ?",
    answer:
      "Vos 5 crédits sont valables 1 an à compter de la date d'achat, utilisables au rythme de vos recrutements — pour une nouvelle mission ou pour un renouvellement.",
  },
  {
    question: "Puis-je payer en SEPA ?",
    answer:
      "Le prélèvement SEPA est disponible sur le Pack Croissance — essentiel pour les plafonds des cartes bancaires d'entreprise.",
  },
  {
    question:
      "Que se passe-t-il si je dépasse mes 15 missions sur Pack Croissance ?",
    answer:
      "Vous bénéficiez d'un tarif préférentiel de 190 € HT par mission supplémentaire (vs 290 € à l'unité), facturée en 1 clic sur votre moyen de paiement enregistré.",
  },
  {
    question: "Puis-je inviter mon équipe ?",
    answer:
      "Oui, tous les packs incluent la gestion multi-utilisateurs avec 4 rôles configurables (admin, recruteur, RH, manager).",
  },
  {
    question: "Où sont hébergées mes données ?",
    answer:
      "Hiry est hébergée en Europe (Google Cloud — région europe-west) et conforme RGPD.",
  },
];

export default function TarifsPage() {
  // JSON-LD : Product + AggregateOffer (3 Offer entreprises) + FAQPage
  const offersJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hiry — plateforme de recrutement IA",
    description:
      "Plateforme française de matching prédictif candidats / entreprises basée sur les soft skills, la culture d'entreprise et le potentiel.",
    brand: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "290",
      highPrice: "2990",
      offerCount: "3",
      offers: TIERS.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        description: tier.description,
        price: String(tier.price),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/tarifs#${tier.id}`,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        {/* Hero */}
        <FadeIn>
          <header className="mb-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
              <Sparkles size={14} />
              <span>Tarifs publics · TVA en sus</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-6">
              Choisissez l'offre adaptée à{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                vos besoins.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-semibold leading-snug max-w-3xl">
              3 offres pour les entreprises qui recrutent. La plateforme
              complète incluse dans tous les packs.
            </p>
          </header>
        </FadeIn>

        {/* Bandeau réassurance */}
        <FadeIn delay={0.05}>
          <section className="mb-14">
            <div className="rounded-2xl bg-white border border-slate-100 px-5 py-4 md:px-6 md:py-3.5">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm text-slate-600 font-semibold">
                <span className="inline-flex items-center gap-2">
                  <Globe size={14} className="text-blue-600" />
                  Hébergement Europe
                </span>
                <span className="hidden md:block w-px h-4 bg-slate-200" />
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  Conforme RGPD
                </span>
                <span className="hidden md:block w-px h-4 bg-slate-200" />
                <span className="inline-flex items-center gap-2">
                  <Lock size={14} className="text-indigo-600" />
                  Carte sécurisée Stripe
                </span>
                <span className="hidden md:block w-px h-4 bg-slate-200" />
                <span className="inline-flex items-center gap-2">
                  <XCircle size={14} className="text-slate-500" />
                  Aucun prélèvement automatique
                </span>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Offre de lancement — 1ère mission offerte aux premières entreprises inscrites */}
        <FadeIn delay={0.08}>
          {(() => {
            // % de places encore ouvertes (rareté) — borné à [0, 100]
            const pctRemaining = Math.min(
              100,
              Math.max(0, EARLY_BIRD_REMAINING_PCT),
            );
            return (
              <section className="mb-14">
                <div className="relative overflow-hidden rounded-3xl bg-white border border-emerald-100 shadow-lg shadow-emerald-100/40 p-7 md:p-9">
                  <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-300/20 rounded-full blur-[80px] pointer-events-none" />
                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 mb-4">
                        <Gift size={12} />
                        <span>Offre de lancement</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                        Les{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          premières entreprises inscrites
                        </span>{" "}
                        : 1<sup>re</sup> mission de matching offerte.
                      </h2>
                      <p className="text-base text-slate-600 font-medium leading-relaxed max-w-xl">
                        Testez Hiron en conditions réelles, sans débourser un
                        euro. Recevez vos profils pré-qualifiés sur votre
                        première offre — l&apos;offre est ensuite débitée
                        uniquement si vous décidez de continuer.
                      </p>
                    </div>

                    {/* Compteur */}
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Places restantes
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            en direct
                          </span>
                        </div>
                        <p className="flex items-baseline gap-1.5 mb-4">
                          <span className="text-4xl font-black tracking-tight text-emerald-600">
                            {pctRemaining}%
                          </span>
                          <span className="text-lg font-bold text-slate-400">
                            encore ouvertes
                          </span>
                        </p>
                        <div className="h-2.5 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                            style={{ width: `${pctRemaining}%` }}
                          />
                        </div>
                        <p className="mt-3 text-sm font-bold text-slate-700">
                          Offre réservée aux{" "}
                          <span className="text-emerald-600">
                            premières entreprises inscrites
                          </span>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })()}
        </FadeIn>

        {/* 3 cartes tarifs */}
        <FadeIn delay={0.1}>
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  id={tier.id}
                  className={
                    tier.highlighted
                      ? "relative flex flex-col rounded-3xl bg-slate-900 text-white p-7 md:p-8 ring-2 ring-indigo-500 shadow-2xl shadow-indigo-200/50 lg:-translate-y-2"
                      : "relative flex flex-col rounded-3xl bg-white border border-slate-100 p-7 md:p-8"
                  }
                >
                  {tier.badge && (
                    <span
                      className={
                        tier.highlighted
                          ? "absolute -top-3 left-7 inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                          : "absolute -top-3 left-7 inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-900 text-white"
                      }
                    >
                      {tier.badge}
                    </span>
                  )}

                  <div
                    className={
                      tier.highlighted
                        ? "w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center mb-5"
                        : "w-11 h-11 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-5"
                    }
                  >
                    <tier.icon size={20} />
                  </div>

                  <p
                    className={
                      tier.highlighted
                        ? "text-[10px] font-bold uppercase tracking-wider text-white/60 mb-1"
                        : "text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1"
                    }
                  >
                    {tier.audience}
                  </p>
                  <h3 className="text-2xl font-extrabold tracking-tight mb-3">
                    {tier.name}
                  </h3>
                  <p
                    className={
                      tier.highlighted
                        ? "text-sm text-white/80 font-medium leading-relaxed mb-6"
                        : "text-sm text-slate-500 font-medium leading-relaxed mb-6"
                    }
                  >
                    {tier.description}
                  </p>

                  <div
                    className={
                      tier.highlighted
                        ? "mb-6 pb-6 border-b border-white/15"
                        : "mb-6 pb-6 border-b border-slate-100"
                    }
                  >
                    <p className="flex items-baseline gap-1.5">
                      <span className="text-5xl font-black tracking-tight">
                        {tier.price.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-2xl font-bold">€</span>
                      <span
                        className={
                          tier.highlighted
                            ? "text-sm font-semibold text-white/70"
                            : "text-sm font-semibold text-slate-500"
                        }
                      >
                        {tier.priceUnit}
                      </span>
                    </p>
                    <p
                      className={
                        tier.highlighted
                          ? "text-xs font-medium text-white/70 mt-1"
                          : "text-xs font-medium text-slate-500 mt-1"
                      }
                    >
                      {tier.priceContext}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-5 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className={
                            tier.highlighted
                              ? "shrink-0 mt-0.5 text-indigo-300"
                              : "shrink-0 mt-0.5 text-emerald-600"
                          }
                        />
                        <span
                          className={
                            tier.highlighted
                              ? "text-sm font-medium text-white/90 leading-snug"
                              : "text-sm font-medium text-slate-700 leading-snug"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Lien vers la section "Inclus dans tous les packs" */}
                  <a
                    href={PLATFORM_ANCHOR}
                    className={
                      tier.highlighted
                        ? "inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white mb-5 transition-colors"
                        : "inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 mb-5 transition-colors"
                    }
                  >
                    Accès complet à la plateforme
                    <span aria-hidden>↓</span>
                  </a>

                  <a
                    href={tier.cta.href}
                    className={
                      tier.highlighted
                        ? "inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg transition-all"
                        : "inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all"
                    }
                  >
                    {tier.cta.label}
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500 font-medium text-center">
              Tous les prix s&apos;entendent HT, TVA française au taux en
              vigueur appliquée à la facturation.
            </p>
          </section>
        </FadeIn>

        {/* Devis personnalisé — au-delà de 15 missions ou besoins spécifiques */}
        <FadeIn delay={0.12}>
          <section className="mb-20">
            <div className="relative rounded-3xl bg-slate-900 text-white p-7 md:p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/25 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 mb-4">
                    <Sparkles size={12} />
                    <span>Au-delà de 15 missions · sur devis</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                    Besoin de plus de volume ou d&apos;une offre sur mesure ?
                  </h2>
                  <p className="text-base md:text-lg text-white/85 font-medium leading-relaxed max-w-2xl">
                    Si vous recrutez plus de 15 fois par an, si vous souhaitez
                    une intégration ATS, un onboarding équipe dédié ou un
                    accompagnement RH renforcé — contactez-nous afin de
                    construire une offre adaptée à votre contexte. Tarification
                    dégressive selon le volume.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg transition-all"
                  >
                    Demander un devis personnalisé
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="mailto:contact@hiry.fr"
                    className="text-xs font-medium text-white/70 hover:text-white transition-colors text-center lg:text-right"
                  >
                    ou contact@hiry.fr
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section "Inclus dans tous les packs" — 8 catégories */}
        <FadeIn delay={0.15}>
          <section
            id="inclus-dans-tous-les-packs"
            className="mb-20 scroll-mt-24"
          >
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-3">
                Inclus dans tous les packs
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Une plateforme complète, quel que soit votre besoin.
              </h2>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Hiry n&apos;est pas qu&apos;un moteur de matching. C&apos;est
                un outil de recrutement de bout en bout.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLATFORM_FEATURES.map((feature) => {
                const colors = FEATURE_COLOR_CLASSES[feature.color];
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                    >
                      <feature.icon
                        size={22}
                        className={colors.text}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-extrabold text-slate-900 tracking-tight mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold mb-3 uppercase tracking-wider">
                      {feature.tagline}
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 font-medium">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-1.5">
                          <span
                            aria-hidden
                            className="text-slate-400 leading-tight"
                          >
                            •
                          </span>
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* Tableau comparatif */}
        <FadeIn delay={0.2}>
          <section className="mb-20">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Comparaison détaillée
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Toutes les caractéristiques en un coup d&apos;œil.
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl bg-white border border-slate-100">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-5 px-5 text-slate-500 font-semibold w-[40%]">
                      Caractéristique
                    </th>
                    <th className="py-5 px-5 text-slate-900 font-extrabold text-center">
                      Solo
                    </th>
                    <th className="py-5 px-5 text-slate-900 font-extrabold text-center bg-indigo-50">
                      Pack Démarrage
                    </th>
                    <th className="py-5 px-5 text-slate-900 font-extrabold text-center">
                      Pack Croissance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={
                        i === COMPARE_ROWS.length - 1
                          ? ""
                          : "border-b border-slate-100"
                      }
                    >
                      <td className="py-3.5 px-5 text-slate-600 font-medium">
                        {row.label}
                      </td>
                      <td className="py-3.5 px-5 text-center text-slate-700 font-semibold">
                        {row.solo}
                      </td>
                      <td className="py-3.5 px-5 text-center text-slate-900 font-bold bg-indigo-50/50">
                        {row.demarrage}
                      </td>
                      <td className="py-3.5 px-5 text-center text-slate-700 font-semibold">
                        {row.croissance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn delay={0.25}>
          <section className="mb-20">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Questions fréquentes
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tout ce que vous voulez savoir.
              </h2>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {FAQ.map((q) => (
                <details
                  key={q.question}
                  className="group rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-base font-bold text-slate-900">
                    {q.question}
                    <span className="shrink-0 text-slate-400 text-2xl group-open:rotate-45 transition-transform leading-none">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed">
                    {q.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA final */}
        <FadeIn delay={0.3}>
          <section>
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-4">
                    <Info size={12} />
                    Pas sûr du bon pack ?
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
                    Commencez avec Solo à 290 €.
                  </h2>
                  <p className="text-base md:text-lg text-indigo-100 font-medium max-w-2xl">
                    Sans engagement. Vous pourrez basculer sur un pack à tout
                    moment, en gardant l&apos;historique de vos missions.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg transition-all"
                  >
                    Tester Solo
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all"
                  >
                    Nous contacter
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
