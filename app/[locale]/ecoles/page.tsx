import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import HeroSplit from "@/app/components/hiry/HeroSplit";
import Partners from "@/app/components/hiry/home/Partners";
import Steps from "@/app/components/hiry/Steps";
import DarkStatement from "@/app/components/hiry/DarkStatement";
import Faq from "@/app/components/hiry/Faq";
import CtaSplit from "@/app/components/hiry/CtaSplit";
import ConstatEcoles from "@/app/components/hiry/ecoles/ConstatEcoles";
import SolutionEcoles from "@/app/components/hiry/ecoles/SolutionEcoles";
import TarifsEcoles from "@/app/components/hiry/ecoles/TarifsEcoles";
import { APP, CONTACT } from "@/app/components/hiry/links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "schools" });
  return {
    title: t("badge"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/ecoles` },
  };
}

export default async function EcolesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const links = [
    { href: "/ecoles#solution", label: t("features") },
    { href: "/ecoles#how", label: t("how") },
    { href: "/ecoles#vision", label: t("vision") },
    { href: "/ecoles#faq", label: t("faq") },
  ];

  return (
    <>
      <TopBar active={"/ecoles"} />
      <Nav
        ctaKey="becomePartner"
        ctaHref={CONTACT}
        accent="var(--color-green)"
        links={[
          { href: "/ecoles#constat", label: t("finding") },
          { href: "/ecoles#solution", label: t("solution") },
          { href: "/ecoles#how", label: t("how") },
          { href: "/ecoles#vision", label: t("vision") },
          { href: "/ecoles#faq", label: t("faq") },
        ]}
      />
      <main>
        <HeroSplit
          namespace="schools"
          tint="var(--color-green-p)"
          dotColor="var(--color-green)"
          image="/images/hero-ecoles.png"
          primaryHref={CONTACT}
          primaryCtaKey="ctaPartner"
          secondaryCtaKey="ctaHow"
          stats={[
            { valueKey: "statValue1", labelKey: "insertionRate" },
            { valueKey: "realTime", labelKey: "insertionData" },
            { valueKey: "statValue3", labelKey: "controlTower" },
          ]}
          cardKeys={["cardTitle", "cardValue", "promoLabel"]}
          cardDeltaKey="cardDelta"
        />
        <Partners variant="support" />
        <ConstatEcoles />
        <SolutionEcoles />
        <Steps
          namespace="schools.how"
          tint="var(--color-green-p)"
          tintColor="var(--color-green)"
          titleSize={18}
          subtitleMaxWidth={340}
          steps={[
            { key: "s1", time: true },
            { key: "s2", time: true },
            { key: "s3", time: false },
            { key: "s4", time: false },
          ]}
        />
        <DarkStatement
          namespace="schools.vision"
          id="vision"
          accent="var(--color-green-p)"
          ctaHref="/ecoles#solution"
        />
        <TarifsEcoles />
        <Faq namespace="schools.faq" count={6} />
        <CtaSplit
          namespace="schools.cta"
          bg="var(--color-green-p)"
          primaryHref="/ecoles#solution"
          secondaryHref={CONTACT}
        />
      </main>
    </>
  );
}
