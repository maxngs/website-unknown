// app/tarifs/page.tsx — Server Component
// Page /tarifs : 4 parcours commerciaux Hiry (Solo IA, Pack 5, Pack 15, Walled Garden) +
// candidats gratuit + écoles sur devis. JSON-LD AggregateOffer + 4 Offer + FAQPage.
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Rocket,
  Building2,
  GraduationCap,
  UserCheck,
  Info,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FadeIn } from "../components/shared/FadeIn";

const SITE_URL = "https://hiry.fr";

export const metadata: Metadata = {
  title: "Tarifs Hiry — Solo IA, Packs Croissance et Walled Garden",
  description:
    "100% gratuit pour les candidats. Pour les PME : Solo IA à 290€, Pack Démarrage 5 missions à 1 390€, Pack Croissance 15 missions à 2 900€/an, ou Walled Garden gratuit via école partenaire.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    type: "website",
    title: "Tarifs Hiry — 4 parcours pour les PME, gratuit pour les candidats",
    description:
      "Solo IA · Pack Démarrage · Pack Croissance · Walled Garden. Le bon outil pour chaque taille d'entreprise. Candidats : toujours gratuit.",
    url: `${SITE_URL}/tarifs`,
  },
};

const SIGNUP_URL = "https://app.hiry.fr/auth/signup";
const RENEW_PRICE = 145;

const TIERS = [
  {
    id: "solo-ia",
    name: "Solo IA",
    audience: "Le test grandeur nature",
    price: 290,
    priceUnit: "HT",
    priceContext: "1 mission de matching · 60 jours",
    badge: null,
    description:
      "Découvrez la puissance de Hiron sans engagement. En 48h, vous recevez 5 profils pré-qualifiés sur la compatibilité comportementale et culturelle — pas du tri de CV à l'aveugle.",
    features: [
      "1 mission de matching pendant 60 jours",
      "Hiron analyse 12 dimensions de profil par candidat",
      "5 profils qualifiés en 48h, pas 70 CV à trier",
      "Validation en 1 clic, sans formation requise",
      "Renouvellement à 145 € HT/60 jours en 1-clic",
    ],
    cta: { label: "Lancer une mission", href: SIGNUP_URL },
    icon: Zap,
    highlighted: false,
  },
  {
    id: "pack-demarrage",
    name: "Pack Démarrage",
    audience: "Plusieurs recrutements à l'année",
    price: 1390,
    priceUnit: "HT",
    priceContext: "5 crédits — 278 € / mission",
    badge: "Populaire",
    description:
      "Le meilleur équilibre flexibilité / économie. 5 crédits utilisables librement, valables à vie, avec choix dirigé au renouvellement. Économisez 40 % vs achat à l'unité.",
    features: [
      "5 missions de matching (60 jours chacune)",
      "Crédits valables sans date d'expiration",
      "Renouvellement au choix : 1 crédit ou 145 € HT",
      "Économie de 40 % vs achat à l'unité",
      "Tableau de bord crédits + facturation centralisée",
    ],
    cta: { label: "Acheter le Pack Démarrage", href: SIGNUP_URL },
    icon: Rocket,
    highlighted: true,
  },
  {
    id: "pack-croissance",
    name: "Pack Croissance",
    audience: "Recrutements continus",
    price: 2900,
    priceUnit: "HT / an",
    priceContext: "15 crédits — 193 € / mission",
    badge: null,
    description:
      "L'abonnement annuel B2B pour structurer vos recrutements à l'année. Tarif préférentiel sur les dépassements (-100 € par mission), paiement SEPA accepté pour les gros plafonds, support prioritaire.",
    features: [
      "15 missions de matching / an (60 jours chacune)",
      "Paiement CB ou Prélèvement SEPA",
      "Renouvellement annuel automatique",
      "Dépassement à 190 € HT/mission (vs 290 €)",
      "Facture annuelle avec TVA",
      "Support prioritaire",
    ],
    cta: { label: "Souscrire l'abonnement", href: SIGNUP_URL },
    icon: Building2,
    highlighted: false,
  },
];

const FAQ = [
  {
    question: "Comment fonctionne le renouvellement à 145 € HT ?",
    answer:
      "Au bout des 60 jours d'une mission de matching, vous pouvez la prolonger pour 60 jours supplémentaires en 1 clic, à 145 € HT. La carte est sauvegardée de façon sécurisée à l'achat initial pour éviter toute friction. Aucun prélèvement automatique : vous décidez à chaque fois.",
  },
  {
    question: "Que se passe-t-il si je ne consomme pas tous mes crédits ?",
    answer:
      "Pour le Pack Démarrage (5 crédits) : ils sont valables sans date d'expiration. Pour le Pack Croissance (15 crédits/an) : les crédits sont remis à zéro à chaque anniversaire d'abonnement, mais le tarif annuel reste plus avantageux qu'à l'unité dès la 5e mission de matching.",
  },
  {
    question: "Qu'est-ce que le Walled Garden ?",
    answer:
      "Si votre entreprise est partenaire d'une école qui utilise Hiry, vous pouvez lancer gratuitement vos missions de matching pour les étudiants de cette école — sans aucune carte bancaire ni engagement. Vous accédez à un Magic Link unique fourni par l'école. Pour élargir au vivier national Hiry, l'upsell est à 145 € HT.",
  },
  {
    question: "Et si je recrute plus de 15 fois par an ?",
    answer:
      "Au-delà du Pack Croissance, on construit une offre sur devis adaptée à votre volume et à vos besoins spécifiques (intégration ATS, onboarding équipe, accompagnement RH renforcé…). Contactez-nous pour discuter du contexte.",
  },
  {
    question: "Hiry est-il vraiment gratuit pour les candidats ?",
    answer:
      "Oui, à 100 % et à vie. Les candidats créent leur profil de potentiel, passent l'évaluation Hiron en 7 minutes et reçoivent leurs matchs sans aucun coût. Hiry est financé par les entreprises et les écoles partenaires.",
  },
  {
    question: "Y a-t-il un essai gratuit pour les entreprises ?",
    answer:
      "Le format Solo IA à 290 € HT est conçu comme votre premier test : pas d'engagement, paiement à l'unité, et vous voyez immédiatement la qualité du matching Hiron sur votre poste. Si vous êtes partenaire d'une école, vous pouvez aussi tester gratuitement via le Walled Garden.",
  },
  {
    question: "Comment se passe la facturation pour les écoles ?",
    answer:
      "Le partenariat école est sur devis. Il inclut le dashboard d'insertion en temps réel, l'intégration alumni, et le Walled Garden pour vos entreprises partenaires. Contactez-nous pour une démo et un devis adapté à la taille de votre établissement.",
  },
];

export default function TarifsPage() {
  // JSON-LD : 4 Offer (Solo IA, Pack 5, Pack 15, Walled Garden) sous AggregateOffer + FAQPage
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
      lowPrice: "0",
      highPrice: "2900",
      offerCount: "4",
      offers: [
        {
          "@type": "Offer",
          name: "Solo IA",
          description:
            "1 mission de matching pendant 60 jours, algorithme Hiron sur 12 dimensions, 5 profils qualifiés en 48h.",
          price: "290",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/tarifs#solo-ia`,
        },
        {
          "@type": "Offer",
          name: "Pack Démarrage 5 missions",
          description:
            "5 crédits de matching valables à vie, à utiliser librement, renouvellement au choix (crédit ou 145 €).",
          price: "1390",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/tarifs#pack-demarrage`,
        },
        {
          "@type": "Offer",
          name: "Pack Croissance 15 missions",
          description:
            "Abonnement annuel B2B 15 crédits, renouvellement automatique, dépassement à tarif préférentiel.",
          price: "2900",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/tarifs#pack-croissance`,
        },
        {
          "@type": "Offer",
          name: "Walled Garden",
          description:
            "Publication gratuite réservée aux entreprises partenaires d'écoles inscrites sur Hiry.",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/tarifs#walled-garden`,
        },
      ],
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
          <header className="mb-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
              <Sparkles size={14} />
              <span>Tarifs publics · TVA en sus</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-6">
              Le bon outil pour{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                chaque audience.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-semibold leading-snug max-w-3xl">
              Gratuit à vie pour les candidats. Quatre parcours adaptés au
              volume pour les entreprises. Sur devis pour les écoles.
            </p>
          </header>
        </FadeIn>

        {/* Bandeau candidats */}
        <FadeIn delay={0.1}>
          <section className="mb-16">
            <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-violet-700 p-7 md:p-8 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/15 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 mb-1">
                      Pour les candidats
                    </p>
                    <p className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                      100 % gratuit, à vie.
                    </p>
                    <p className="text-sm md:text-base text-white/85 font-medium mt-2 max-w-xl">
                      Profil, évaluation Hiron, matchs, candidatures — tout est
                      gratuit. Pour toujours.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-violet-700 bg-white hover:bg-violet-50 rounded-xl shadow-lg transition-all"
                  >
                    Créer mon profil
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 3 parcours entreprises */}
        <FadeIn delay={0.15}>
          <section className="mb-16">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Pour les entreprises · 3 parcours
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Choisissez le parcours adapté à votre rythme de recrutement.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  id={tier.id}
                  className={
                    tier.highlighted
                      ? "relative flex flex-col rounded-3xl bg-slate-900 text-white p-7 md:p-8 ring-2 ring-indigo-500 shadow-2xl shadow-indigo-200/50 -translate-y-2"
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

                  <ul className="space-y-2.5 mb-7 flex-1">
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
        <FadeIn delay={0.22}>
          <section className="mb-16">
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
                    accompagnement RH renforcé — on construit ensemble une
                    offre adaptée à votre contexte. Tarification dégressive
                    selon le volume.
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

        {/* Renouvellement info */}
        <FadeIn delay={0.25}>
          <section className="mb-16">
            <div className="rounded-3xl bg-white border border-slate-100 p-7 md:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <Info size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Bon à savoir · renouvellement
                  </p>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
                    {RENEW_PRICE} € HT pour prolonger une mission de matching
                    de 60 jours, en 1 clic.
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
                    À J+55, vous recevez une alerte. Vous pouvez prolonger en
                    payant {RENEW_PRICE} € HT (carte sauvegardée, aucun
                    re-saisie) ou — si vous êtes sur Pack Démarrage / Pack
                    Croissance — utiliser un crédit à la place. Le choix est à
                    vous, à chaque renouvellement. Aucun prélèvement
                    automatique non sollicité.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Walled Garden */}
        <FadeIn delay={0.2}>
          <section id="walled-garden" className="mb-16">
            <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4">
                    Walled Garden · gratuit
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                    Votre entreprise est partenaire d&apos;une école Hiry ?
                  </h2>
                  <p className="text-base text-slate-700 font-medium leading-relaxed mb-4">
                    Lancez vos missions de matching gratuitement pour les
                    étudiants de l&apos;école — sans carte bancaire, sans
                    engagement. L&apos;école vous fournit un Magic Link dédié,
                    vous n&apos;avez qu&apos;à vous inscrire et publier.
                  </p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Pour élargir au vivier national Hiry (autres écoles +
                    candidats spontanés), un upsell à 145 € HT débloque la
                    visibilité nationale par mission, en 1 clic.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-200 rounded-xl transition-all"
                  >
                    Demander un Magic Link
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>


        {/* Écoles */}
        <FadeIn delay={0.3}>
          <section className="mb-16">
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-7 md:p-10 text-white overflow-hidden">
              <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                      Pour les écoles · sur devis
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                    Pilotez l&apos;insertion de vos promotions avec la data.
                  </h2>
                  <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl">
                    Dashboard d&apos;insertion en temps réel, intégration
                    alumni, données pour vos enquêtes RNCP, Walled Garden
                    gratuit pour vos PME partenaires. Tarification adaptée à
                    la taille de votre établissement.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-700 bg-white hover:bg-emerald-50 rounded-xl shadow-lg transition-all"
                  >
                    Demander une démo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn delay={0.35}>
          <section className="mb-16">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Questions fréquentes
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tout ce que vous voulez savoir sur les tarifs.
              </h2>
            </div>
            <div className="space-y-3">
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
                  <p className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
                    {q.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn delay={0.4}>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <a
                href={SIGNUP_URL}
                className="group flex items-center justify-between rounded-3xl bg-slate-900 text-white p-7 md:p-8 hover:-translate-y-0.5 transition-all"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-2">
                    Vous êtes une PME
                  </p>
                  <p className="text-xl md:text-2xl font-extrabold">
                    Démarrer avec Solo IA
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </a>
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-3xl bg-white border border-slate-200 p-7 md:p-8 hover:border-slate-300 hover:-translate-y-0.5 transition-all"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Vous représentez une école
                  </p>
                  <p className="text-xl md:text-2xl font-extrabold text-slate-900">
                    Discutons de votre besoin
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all"
                />
              </Link>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
