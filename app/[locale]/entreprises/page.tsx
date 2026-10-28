import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import { alternates } from "@/app/components/hiry/seo";
import { getEntreprisesContent } from "@/content/entreprises";
import Hero from "@/app/components/hiry/entreprises/Hero";
import TrustBand from "@/app/components/hiry/entreprises/TrustBand";
import Constat from "@/app/components/hiry/entreprises/Constat";
import HironSection from "@/app/components/hiry/entreprises/HironSection";
import Modules from "@/app/components/hiry/entreprises/Modules";
import HowItWorks from "@/app/components/hiry/entreprises/HowItWorks";
import Veille from "@/app/components/hiry/entreprises/Veille";
import AtsComplet from "@/app/components/hiry/entreprises/AtsComplet";
import BeforeAfter from "@/app/components/hiry/entreprises/BeforeAfter";
import Humain from "@/app/components/hiry/entreprises/Humain";
import ForWhom from "@/app/components/hiry/entreprises/ForWhom";
import FaqList from "@/app/components/hiry/entreprises/FaqList";
import DemoSection from "@/app/components/hiry/entreprises/DemoSection";
import StickyDemoBar from "@/app/components/hiry/entreprises/StickyDemoBar";
import RevealObserver from "@/app/components/hiry/entreprises/RevealObserver";
import EntreprisesJsonLd from "@/app/components/hiry/entreprises/EntreprisesJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { meta } = getEntreprisesContent(locale);
  return {
    // `absolute` : le titre porte déjà « Hiry », pas de suffixe du layout.
    title: { absolute: meta.title },
    description: meta.description,
    alternates: alternates(locale, "/entreprises"),
    openGraph: {
      type: "website",
      url: `/${locale}/entreprises`,
      title: meta.ogTitle,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.description,
    },
  };
}

/**
 * Page Entreprises : Hiry présenté comme un ATS AI-native.
 * Aucun accès direct à la plateforme : chaque CTA mène au formulaire de
 * démo (#demo). Textes : content/entreprises/{fr,en}.ts.
 */
export default async function EntreprisesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === "en" ? "en" : "fr";
  const c = getEntreprisesContent(lang);

  return (
    <>
      <EntreprisesJsonLd c={c} locale={lang} page="entreprises" />
      <TopBar active={"/entreprises"} />
      <Nav
        links={c.nav.links}
        ctaLabel={c.nav.cta}
        ctaHref="/entreprises#demo"
        hideLogin
      />
      <main>
        {/* Hero et bandeau partenaires forment ensemble le premier écran. */}
        <div className="hero-screen">
          <Hero c={c.hero} />
          <TrustBand c={c.trust} />
        </div>
        <Constat c={c.constat} />
        <HironSection c={c.hiron} illustrative={c.illustrative} />
        <Modules c={c.modules} illustrative={c.illustrative} />
        <HowItWorks c={c.how} />
        <Veille c={c.veille} />
        <AtsComplet c={c.ats} optionBadge={c.modules.optionBadge} />
        <BeforeAfter c={c.beforeAfter} />
        <Humain c={c.humain} />
        <ForWhom c={c.forWhom} locale={lang} />
        <FaqList c={c.faq} />
        <DemoSection c={c.demo} form={c.form} locale={lang} />
      </main>
      <StickyDemoBar label={c.sticky.cta} />
      <RevealObserver />
    </>
  );
}
