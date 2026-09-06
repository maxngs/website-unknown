import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Partners from "@/app/components/hiry/home/Partners";
import Offres from "@/app/components/hiry/home/Offres";
import Faq from "@/app/components/hiry/Faq";
import CtaBand from "@/app/components/hiry/CtaBand";
import HeroSplit from "@/app/components/hiry/HeroSplit";
import Features from "@/app/components/hiry/candidats/Features";
import HowSticky from "@/app/components/hiry/candidats/HowSticky";
import DarkStatement from "@/app/components/hiry/DarkStatement";
import { APP } from "@/app/components/hiry/links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "candidates" });
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/candidats` },
  };
}

export default async function CandidatsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const links = [
    { href: "/candidats#features", label: t("features") },
    { href: "/candidats#how", label: t("how") },
    { href: "/candidats#manifeste", label: t("manifesto") },
    { href: "/candidats#faq", label: t("faq") },
  ];

  return (
    <>
      <TopBar active={"/candidats"} />
      <Nav
        links={[
          { href: "/candidats#features", label: t("features") },
          { href: "/candidats#how", label: t("how") },
          { href: "/candidats#manifeste", label: t("manifesto") },
          { href: "/candidats#faq", label: t("faq") },
        ]}
      />
      <main>
        <HeroSplit
          namespace="candidates"
          tint="var(--color-cyan)"
          image="/images/hero-candidats.png"
          stats={[{ valueKey: "proofFigure", labelKey: "proofLabel" }]}
          primaryHref={APP.signup}
          primaryCtaKey="ctaReveal"
          secondaryCtaKey="ctaHow"
          cardKeys={["smartMatch", "smartMatchCount", "smartMatchLabel"]}
        />
        <Partners variant="support" />
        <Features />
        <HowSticky />
        <Offres namespace="candidates.offers" ctaKey="cta" />
        <DarkStatement
          namespace="candidates.manifesto"
          id="manifeste"
          ctaHref={APP.signup}
        />
        <Faq namespace="candidates.faq" count={5} />
        <CtaBand
          namespace="candidates.cta"
          primaryHref={APP.signup}
          secondaryHref="/#moteur"
        />
      </main>
    </>
  );
}
