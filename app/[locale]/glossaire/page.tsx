import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import { APP } from "@/app/components/hiry/links";
import { SITE_URL } from "@/app/components/hiry/seo";
import { getAllGlossaryEntries } from "@/lib/glossaire";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "glossary" });
  return {
    title: t("label"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/glossaire`,
      languages: { fr: "/fr/glossaire" },
    },
  };
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("glossary");
  const nav = await getTranslations("nav");
  const entries = getAllGlossaryEntries();
  const base = `${SITE_URL}/${locale}/glossaire`;

  // CollectionPage + DefinedTermSet — le glossaire comme référentiel citable
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": base,
        url: base,
        name: t("label"),
        description: t("subtitle"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${base}#termset`,
        name: t("label"),
        description: t("subtitle"),
        url: base,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
        hasDefinedTerm: entries.map((e) => ({
          "@type": "DefinedTerm",
          "@id": `${base}/${e.slug}`,
          name: e.term,
          description: e.shortDefinition,
          url: `${base}/${e.slug}`,
          inDefinedTermSet: { "@id": `${base}#termset` },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <Nav
        links={[
          { href: "/mag", label: nav("mag") },
          { href: "/#eco", label: nav("solutions") },
        ]}
      />

      <main>
        <header
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ padding: "44px 0 40px", maxWidth: 760 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(15,14,12,.45)",
                marginBottom: 18,
              }}
            >
              {t("label")} · {entries.length} {t("count")}
            </div>
            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(38px,5vw,70px)",
                lineHeight: 1.03,
                letterSpacing: "-.02em",
                margin: "0 0 18px",
                textWrap: "balance",
              }}
            >
              {t.rich("title", {
                em: (c) => <em style={{ fontStyle: "italic" }}>{c}</em>,
              })}
            </h1>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(15,14,12,.65)",
                margin: 0,
              }}
            >
              {t("subtitle")}
            </p>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <section
          style={{ padding: "10px 44px 70px", maxWidth: 1400, margin: "0 auto" }}
        >
          {entries.map((e, i) => (
            <Link
              key={e.slug}
              href={`/glossaire/${e.slug}`}
              data-r="g"
              className="rv-up mag-item"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,260px) minmax(0,1fr)",
                gap: 32,
                alignItems: "baseline",
                padding: "26px 14px",
                margin: "0 -14px",
                borderBottom:
                  i === entries.length - 1
                    ? undefined
                    : "1px solid rgba(15,14,12,.15)",
                borderRadius: 10,
                animationRange: `entry ${i * 4}% entry ${26 + i * 4}%`,
              }}
            >
              <span
                className="serif"
                style={{
                  fontStyle: "normal",
                  fontSize: "clamp(20px,2vw,27px)",
                  lineHeight: 1.2,
                }}
              >
                {e.term}
              </span>
              <span
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "rgba(15,14,12,.65)",
                }}
              >
                {e.shortDefinition}
              </span>
            </Link>
          ))}
        </section>

        <section
          style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            className="rv-scale"
            style={{
              background: "var(--color-cyan)",
              borderRadius: 28,
              padding: "clamp(36px,4vw,60px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              alignItems: "center",
              animationRange: "entry 0% entry 40%",
            }}
          >
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(26px,2.8vw,40px)",
                lineHeight: 1.08,
                letterSpacing: "-.03em",
                margin: 0,
                maxWidth: 620,
              }}
            >
              {t("ctaTitle")}
            </h2>
            <Link
              href={APP.signup}
              className="btn btn-ink-alt"
              style={{ fontSize: 15, padding: "16px 30px" }}
            >
              {t("ctaLabel")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
