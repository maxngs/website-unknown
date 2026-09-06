import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import MagBreadcrumb from "@/app/components/hiry/mag/MagBreadcrumb";
import { getAllTags } from "@/lib/blog";

/** Index des tags : français uniquement (le Mag n'est pas traduit). */
export function generateStaticParams() {
  return [{ locale: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mag.tags" });
  return {
    title: t("label"),
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/mag/tag`, languages: { fr: "/fr/mag/tag" } },
  };
}

export default async function TagsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("mag.tags");
  const magT = await getTranslations("mag");
  const tags = getAllTags();

  return (
    <>
      <TopBar active="/mag" />
      <Nav
        links={[
          { href: "/mag", label: magT("navArticles") },
          { href: "/glossaire", label: magT("navGlossaire") },
        ]}
      />
      <main>
        <header style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}>
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ padding: "40px 0", maxWidth: 760 }}>
            <MagBreadcrumb
              locale={locale}
              items={[
                { label: "Hiry", href: "/" },
                { label: magT("masthead.title"), href: "/mag" },
                { label: t("label") },
              ]}
            />
            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(36px,4.6vw,64px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                margin: "0 0 16px",
              }}
            >
              {t.rich("title", { em: (c) => <em style={{ fontStyle: "italic" }}>{c}</em> })}
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(15,14,12,.65)", margin: 0 }}>
              {t("subtitle")} · {tags.length} {t("count")}
            </p>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <section style={{ padding: "40px 44px 90px", maxWidth: 1400, margin: "0 auto" }}>
          <div className="rv-up" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/mag/tag/${tag.slug}`}
                className="mag-link"
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 8,
                  background: "var(--color-card-warm)",
                  border: "1px solid rgba(15,14,12,.1)",
                  borderRadius: 999,
                  padding: "11px 20px",
                  fontSize: 14.5,
                  fontWeight: 600,
                }}
              >
                {tag.tag}
                <span style={{ fontSize: 12, color: "rgba(15,14,12,.45)" }}>
                  {tag.count}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
