import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Bar, Label, LiveDot, MatchRow, TONES } from "../ui";
import Link from "../Link";
import { APP } from "../links";

/**
 * Empilement de 3 cartes sticky : chacune se colle sous la nav puis recule
 * (keyframe cardAway, animation-timeline: view()) quand la suivante arrive.
 */
function StickyCard({
  step,
  top,
  z,
  bg,
  tag,
  title,
  desc,
  cta,
  ctaHref,
  children,
}: {
  step: number;
  top: number;
  z: number;
  bg: string;
  tag: string;
  title: string;
  desc: string;
  cta: string;
  ctaHref: string;
  children: ReactNode;
}) {
  return (
    <div
      className="sticky-step"
      style={{ position: "sticky", top, zIndex: z, marginBottom: 26 }}
    >
      <div
        data-r="g"
        style={{
          background: bg,
          borderRadius: 26,
          padding: "clamp(32px,3.6vw,54px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(28px,4vw,64px)",
          alignItems: "center",
          boxShadow: "0 -14px 44px rgba(15,14,12,.09)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "var(--color-ink)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              {step}
            </span>
            <span
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: ".16em",
                color: "rgba(15,14,12,.55)",
              }}
            >
              {tag}
            </span>
          </div>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "clamp(26px,2.6vw,40px)",
              letterSpacing: "-.03em",
              lineHeight: 1.08,
              margin: "0 0 16px",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.68)",
              margin: "0 0 26px",
              maxWidth: 440,
            }}
          >
            {desc}
          </p>
          <Link
            href={ctaHref}
            className="btn btn-ink"
            style={{ padding: "13px 26px", fontSize: 14 }}
          >
            {cta}
          </Link>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 26,
            boxShadow: "0 14px 40px rgba(15,14,12,.12)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const TOP_MATCHES = [
  { initials: "U", tone: TONES.cyan, role: "UX Designer · Doctolib", type: "apprenticeship", score: "96%" },
  { initials: "P", tone: TONES.blue, role: "PM · BlaBlaCar", type: "internship", score: "91%" },
  { initials: "D", tone: TONES.green, role: "Data Analyst · Qonto", type: "fulltime", score: "88%" },
] as const;

export default async function HowSticky() {
  const t = await getTranslations("candidates.how");
  const f = await getTranslations("candidates.features");
  const o = await getTranslations("offers");

  return (
    <section
      id="how"
      style={{ padding: "70px 44px 90px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ textAlign: "center", marginBottom: 56 }}>
        <Label>{t("label")}</Label>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(36px,4vw,56px)",
            lineHeight: 1.05,
            letterSpacing: "-.035em",
            margin: "0 0 12px",
            textWrap: "balance",
          }}
        >
          {t.rich("title", {
            em: (chunks) => <em className="serif">{chunks}</em>,
          })}
        </h2>
        <p style={{ fontSize: 15.5, color: "rgba(15,14,12,.6)", margin: 0 }}>
          {t("subtitle")}
        </p>
      </div>

      {/* 1 · Profil */}
      <StickyCard
        step={1}
        top={96}
        z={1}
        bg="var(--color-cyan)"
        tag={t("step1.tag")}
        title={t("step1.title")}
        desc={t("step1.desc")}
        cta={t("step1.cta")}
        ctaHref={APP.signup}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--color-blue)",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <LiveDot />
          {t("step1.analyzing")}
        </div>
        <div style={{ display: "grid", gap: 11, marginBottom: 14 }}>
          <Bar label={f("profile.creativity")} value={95} color="#0F4B70" delay={0} track="#F2F8FC" height={8} fontSize={13} />
          <Bar label={f("profile.leadership")} value={82} color="#14608C" delay={0.35} track="#F2F8FC" height={8} fontSize={13} />
          <Bar label={f("profile.analytical")} value={78} color="#2E9077" delay={0.7} track="#F2F8FC" height={8} fontSize={13} />
        </div>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {[f("profile.innovator"), f("profile.creative"), f("profile.strategist")].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  background: "#F2F8FC",
                  borderRadius: 999,
                  padding: "6px 12px",
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </StickyCard>

      {/* 2 · Matching */}
      <StickyCard
        step={2}
        top={116}
        z={2}
        bg="var(--color-blue-p)"
        tag={t("step2.tag")}
        title={t("step2.title")}
        desc={t("step2.desc")}
        cta={t("step2.cta")}
        ctaHref={APP.signup}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 15 }}>{t("step2.top")}</span>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: "rgba(15,14,12,.45)",
            }}
          >
            {t("step2.score")}
          </span>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          {TOP_MATCHES.map((m, i) => (
            <MatchRow
              key={m.role}
              initials={m.initials}
              tone={m.tone}
              title={m.role}
              subtitle={o(m.type)}
              score={m.score}
              delay={i * 0.8}
            />
          ))}
        </div>
      </StickyCard>

      {/* 3 · Connexion */}
      <StickyCard
        step={3}
        top={136}
        z={3}
        bg="var(--color-green-p)"
        tag={t("step3.tag")}
        title={t("step3.title")}
        desc={t("step3.desc")}
        cta={t("step3.cta")}
        ctaHref={APP.signup}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 15 }}>
            {t("step3.confirmed")}
          </span>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              background: "var(--color-green-p)",
              color: "var(--color-green)",
              padding: "5px 11px",
              borderRadius: 999,
            }}
          >
            {t("step3.direct")}
          </span>
        </div>
        <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
          {[
            { mark: "✓", color: "#1E7A64", label: t("step3.sent"), d: 0, done: true },
            { mark: "✓", color: "#1E7A64", label: t("step3.viewed"), d: 0.8, done: true },
            { mark: "→", color: "#0F4B70", label: t("step3.interview"), d: 1.6, done: true },
            { mark: "○", color: "rgba(15,14,12,.5)", label: t("step3.offer"), d: 0, done: false },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: row.done ? "#F2F8FC" : "var(--color-bg)",
                borderRadius: 10,
                padding: "10px 13px",
                color: row.done ? undefined : "rgba(15,14,12,.5)",
                animation: row.done ? "popIn 8s ease infinite" : undefined,
                animationDelay: row.done ? `${row.d}s` : undefined,
              }}
            >
              <span style={{ color: row.color, fontWeight: 700 }}>
                {row.mark}
              </span>
              {row.label}
            </div>
          ))}
        </div>
      </StickyCard>
    </section>
  );
}
