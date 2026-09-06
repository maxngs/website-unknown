import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Masthead from "@/app/components/hiry/mag/Masthead";
import Une from "@/app/components/hiry/mag/Une";
import Rubriques from "@/app/components/hiry/mag/Rubriques";
import Articles from "@/app/components/hiry/mag/Articles";
import Glossaire from "@/app/components/hiry/mag/Glossaire";
import CtaMag from "@/app/components/hiry/mag/CtaMag";
import SoonEn from "@/app/components/hiry/mag/SoonEn";
import { getMagData } from "@/app/components/hiry/mag/data";
import { MagCollectionJsonLd } from "@/app/components/blog/MagCollectionJsonLd";
import { SITE_URL } from "@/app/components/hiry/seo";
import { getAllPosts } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mag.masthead" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/mag`,
      languages: { fr: "/fr/mag", en: "/en/mag" },
    },
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("subtitle"),
      images: ["/og-image.png"],
    },
  };
}

export default async function MagPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("mag");
  const data = getMagData();

  const links = [
    { href: "/mag#une", label: t("navUne") },
    { href: "/mag#rubriques", label: t("navRubriques") },
    { href: "/mag#articles", label: t("navArticles") },
    { href: "/mag#glossaire", label: t("navGlossaire") },
  ];

  return (
    <>
      {locale === "fr" && (
        <MagCollectionJsonLd
          name={`${t("masthead.title")} — ${t("masthead.tagline")}`}
          description={t("masthead.subtitle")}
          url={`${SITE_URL}/${locale}/mag`}
          posts={getAllPosts()}
        />
      )}
      <TopBar active="/mag" />
      <Nav links={locale === "fr" ? links : []} />
      <main>
        <Masthead total={data.total} />
        {locale === "fr" ? (
          <>
            <Une post={data.featured} />
            <Rubriques rubriques={data.rubriques} />
            <Articles posts={data.latest} />
            <Glossaire entries={data.glossary} />
          </>
        ) : (
          <SoonEn count={data.total} />
        )}
        <CtaMag />
      </main>
    </>
  );
}
