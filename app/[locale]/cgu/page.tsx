import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPage from "@/app/components/hiry/LegalPage";
import { getLegalSections } from "@/content/legal";

const SLUG = "cgu" as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title } = getLegalSections(SLUG, locale);
  return { title, alternates: { canonical: `/${locale}/cgu` } };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { title, updated, version, intro, outro, sections, fallback } =
    getLegalSections(SLUG, locale);
  const t = await getTranslations("legal");

  return (
    <LegalPage
      title={title}
      updated={updated}
      version={version}
      intro={intro}
      outro={outro}
      sections={sections}
      disclaimer={fallback ? t("frOnly") : t("frPrevails")}
    />
  );
}
