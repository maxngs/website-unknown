import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import { alternates } from "@/app/components/hiry/seo";
import { getEntreprisesContent } from "@/content/entreprises";
import { Rich } from "@/app/components/hiry/entreprises/rich";
import TrustBand from "@/app/components/hiry/entreprises/TrustBand";
import DemoSection from "@/app/components/hiry/entreprises/DemoSection";
import EntreprisesJsonLd from "@/app/components/hiry/entreprises/EntreprisesJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { meta } = getEntreprisesContent(locale);
  return {
    title: { absolute: meta.demoTitle },
    description: meta.demoDescription,
    alternates: alternates(locale, "/entreprises/demo"),
    openGraph: {
      type: "website",
      url: `/${locale}/entreprises/demo`,
      title: meta.demoOgTitle,
      description: meta.demoDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.demoOgTitle,
      description: meta.demoDescription,
    },
  };
}

/**
 * Page de démo autonome : campagnes ads, outbound et signatures mail.
 * Même formulaire que la page Entreprises ; paramètres d'URL acceptés :
 * ?mode=video, ?formule=saison, ?problematique=…, utm_*.
 */
export default async function DemoPage({
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
      <EntreprisesJsonLd c={c} locale={lang} page="demo" />
      <TopBar active={"/entreprises"} />
      <Nav
        links={[{ href: "/entreprises", label: c.meta.breadcrumbPage }]}
        ctaLabel={c.nav.cta}
        ctaHref="/entreprises/demo#demo"
        hideLogin
      />
      <main>
        <header style={{ padding: "64px 44px 8px", maxWidth: 1400, margin: "0 auto" }}>
          <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".18em", color: "rgba(15,14,12,.45)", margin: "0 0 18px" }}>
            {c.demoPage.badge.toUpperCase()}
          </p>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1.02, letterSpacing: "-.04em", margin: "0 0 18px", maxWidth: 900, textWrap: "balance" }}>
            <Rich text={c.demoPage.title} />
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(15,14,12,.7)", maxWidth: 640, margin: 0 }}>
            {c.demoPage.subtitle}
          </p>
        </header>
        <TrustBand c={c.trust} />
        <div style={{ height: 40 }} />
        <DemoSection c={c.demo} form={c.form} locale={lang} showOrigin={false} />
      </main>
    </>
  );
}
