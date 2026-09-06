import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import { LEGAL } from "@/app/components/hiry/links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("cgvTitle"),
    alternates: { canonical: `/${locale}/cgv` },
    // Document sans contenu : on ne l'expose pas à l'indexation.
    robots: { index: false, follow: true },
  };
}

export default async function CgvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const nav = await getTranslations("nav");

  return (
    <>
      <TopBar />
      <Nav links={[{ href: "/mag", label: nav("mag") }]} />
      <main>
        <section
          style={{ padding: "44px 44px 90px", maxWidth: 820, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ paddingTop: 44 }}>
            <h1
              style={{
                fontWeight: 700,
                fontSize: "clamp(32px,3.8vw,52px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                margin: "0 0 24px",
              }}
            >
              {t("cgvTitle")}
            </h1>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.7,
                color: "rgba(15,14,12,.72)",
                margin: "0 0 26px",
              }}
            >
              {t("cgvPending")}
            </p>
            <Link
              href={LEGAL.terms}
              className="btn btn-ink"
              style={{ fontSize: 14.5, padding: "13px 26px" }}
            >
              {t("cgvSeeCgu")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
