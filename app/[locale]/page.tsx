import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Hero from "@/app/components/hiry/home/Hero";
import Partners from "@/app/components/hiry/home/Partners";
import Probleme from "@/app/components/hiry/home/Probleme";
import Ecosysteme from "@/app/components/hiry/home/Ecosysteme";
import Moteur from "@/app/components/hiry/home/Moteur";
import Manifeste from "@/app/components/hiry/home/Manifeste";
import Offres from "@/app/components/hiry/home/Offres";
import Temoignages from "@/app/components/hiry/home/Temoignages";
import CtaFinal from "@/app/components/hiry/home/CtaFinal";
import { hasTestimonials } from "@/app/components/hiry/testimonials";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: "Hiry — Le recrutement qui a du sens",
    description: t("subtitle"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const avecTemoignages = await hasTestimonials();

  return (
    <>
      <TopBar />
      <Nav
        loginWeight={600}
        links={[
          { href: "/#moteur", label: t("discoverHiron") },
          { href: "/#eco", label: t("solutions") },
          ...(avecTemoignages
            ? [{ href: "/#temoignages", label: t("testimonials") }]
            : []),
          { href: "/entreprises#tarifs", label: t("pricing") },
          { href: "/mag", label: t("mag") },
        ]}
      />
      <main>
        <Hero />
        <Partners />
        <Probleme />
        <Ecosysteme />
        <Moteur />
        <Manifeste />
        <Offres />
        <Temoignages />
        <CtaFinal />
      </main>
    </>
  );
}
