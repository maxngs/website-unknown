import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import MagBreadcrumb from "@/app/components/hiry/mag/MagBreadcrumb";
import { formatMeta, SILO_TONE } from "@/app/components/hiry/mag/data";
import { getAllTags, getPostsByTag, getTagLabel } from "@/lib/blog";
import { SILOS } from "@/lib/silos";

export function generateStaticParams() {
  return getAllTags().map((t) => ({ locale: "fr", tag: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}): Promise<Metadata> {
  const { locale, tag } = await params;
  const label = getTagLabel(tag);
  if (!label) return {};
  const posts = getPostsByTag(tag);
  return {
    title: label,
    description: `${posts.length} article(s) — ${label}.`,
    alternates: {
      canonical: `/${locale}/mag/tag/${tag}`,
      languages: { fr: `/fr/mag/tag/${tag}` },
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  setRequestLocale(locale);
  const label = getTagLabel(tag);
  if (!label) notFound();

  const t = await getTranslations("mag.tags");
  const magT = await getTranslations("mag");
  const posts = getPostsByTag(tag);

  return (
    <>
      <TopBar active="/mag" />
      <Nav
        links={[
          { href: "/mag", label: magT("navArticles") },
          { href: "/mag/tag", label: t("label") },
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
                { label: t("label"), href: "/mag/tag" },
                { label },
              ]}
            />
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(15,14,12,.45)",
                marginBottom: 14,
              }}
            >
              {t("onSubject")}
            </div>
            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(36px,4.6vw,64px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                margin: "0 0 14px",
              }}
            >
              {label}
            </h1>
            <p style={{ fontSize: 15.5, color: "rgba(15,14,12,.6)", margin: 0 }}>
              {posts.length} {posts.length > 1 ? t("articles") : t("article")}
            </p>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <section style={{ padding: "20px 44px 90px", maxWidth: 1400, margin: "0 auto" }}>
          {posts.length === 0 ? (
            <p style={{ fontSize: 16, color: "rgba(15,14,12,.6)" }}>{t("empty")}</p>
          ) : (
            posts.map((post, i) => (
              <Link
                key={post.href}
                href={post.href}
                data-r="g"
                className="rv-up mag-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "22px 14px",
                  margin: "0 -14px",
                  borderBottom:
                    i === posts.length - 1 ? undefined : "1px solid rgba(15,14,12,.15)",
                  borderRadius: 10,
                  animationRange: `entry ${i * 5}% entry ${26 + i * 5}%`,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: SILO_TONE[post.silo],
                  }}
                >
                  {SILOS[post.silo].shortName.toUpperCase()}
                </span>
                <span
                  className="serif"
                  style={{
                    fontStyle: "normal",
                    fontSize: "clamp(19px,2vw,25px)",
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </span>
                <span
                  style={{
                    fontSize: 12.5,
                    color: "rgba(15,14,12,.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatMeta(post, locale)}
                </span>
              </Link>
            ))
          )}
          <div style={{ marginTop: 40 }}>
            <Link href="/mag/tag" className="mag-link" style={{ fontSize: 13, fontWeight: 700 }}>
              {t("back")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
