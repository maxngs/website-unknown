import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import HeroSplit from "@/app/components/hiry/HeroSplit";
import Partners from "@/app/components/hiry/home/Partners";
import Faq from "@/app/components/hiry/Faq";
import CtaSplit from "@/app/components/hiry/CtaSplit";
import Constat from "@/app/components/hiry/entreprises/Constat";
import Solution from "@/app/components/hiry/entreprises/Solution";
import Steps from "@/app/components/hiry/Steps";
import Tarifs from "@/app/components/hiry/entreprises/Tarifs";
import SurMesure from "@/app/components/hiry/entreprises/SurMesure";
import Fonctionnalites from "@/app/components/hiry/entreprises/Fonctionnalites";
import Comparaison from "@/app/components/hiry/entreprises/Comparaison";
import { APP, CONTACT } from "@/app/components/hiry/links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "companies" });
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/entreprises` },
  };
}

export default async function EntreprisesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const links = [
    { href: "/entreprises#solution", label: t("features") },
    { href: "/entreprises#how", label: t("how") },
    { href: "/entreprises#tarifs", label: t("pricing") },
    { href: "/entreprises#faq", label: t("faq") },
  ];

  return (
    <>
      <TopBar active={"/entreprises"} />
      <Nav
        ctaKey="postJob"
        ctaHref={APP.signup}
        links={[
          { href: "/entreprises#constat", label: t("finding") },
          { href: "/entreprises#solution", label: t("solution") },
          { href: "/entreprises#how", label: t("how") },
          { href: "/entreprises#tarifs", label: t("pricing") },
          { href: "/entreprises#faq", label: t("faq") },
        ]}
      />
      <main>
        <HeroSplit
          namespace="companies"
          tint="var(--color-blue-p)"
          image="/images/hero-entreprises.png"
          stats={[{ valueKey: "proofFigure", labelKey: "proofLabel" }]}
          primaryHref={APP.signup}
          primaryCtaKey="ctaFind"
          secondaryCtaKey="ctaHow"
          cardKeys={["selection", "selectionCount", "selectionLabel"]}
        />
        <Partners variant="support" />
        <Constat />
        <Solution />
        <Steps
          namespace="companies.how"
          steps={[
            { key: "s1", time: true },
            { key: "s2", time: true },
            { key: "s3", time: false },
          ]}
        />
        <Tarifs />
        <SurMesure />
        <Fonctionnalites />
        <Comparaison />
        <Faq namespace="companies.faq" count={6} padding="70px 44px 90px" />
        <CtaSplit
          namespace="companies.cta"
          primaryHref={APP.signup}
          secondaryHref={CONTACT}
        />
      </main>
    </>
  );
}
