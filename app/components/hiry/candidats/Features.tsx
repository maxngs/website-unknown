import { getTranslations } from "next-intl/server";
import { Bar, FeatureCard, Label, LiveDot, MatchRow, PANEL, TONES } from "../ui";

/* Données non traduisibles (noms d'entreprises, scores). */
const MATCHES = [
  { initials: "D", tone: TONES.cyan, role: "UX Designer · Doctolib", type: "apprenticeship", score: "96%" },
  { initials: "B", tone: TONES.blue, role: "PM · BlaBlaCar", type: "internship", score: "91%" },
  { initials: "Q", tone: TONES.green, role: "Data Analyst · Qonto", type: "apprenticeship", score: "88%" },
] as const;

export default async function Features() {
  const t = await getTranslations("candidates.features");
  const o = await getTranslations("offers");

  return (
    <section
      id="features"
      style={{ padding: "100px 44px 40px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up">
        <Label>{t("label")}</Label>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr .7fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.65)",
              margin: "0 0 6px",
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 18,
          }}
        >
          {/* 1 · Profil */}
          <FeatureCard
            index={0}
            title={t("profile.title")}
            desc={t("profile.desc")}
          >
            <div style={PANEL}>
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--color-blue)",
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                <LiveDot />
                {t("profile.analyzing")}
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                <Bar label={t("profile.creativity")} value={95} color="#0F4B70" delay={0} />
                <Bar label={t("profile.leadership")} value={83} color="#14608C" delay={0.35} />
                <Bar label={t("profile.analytical")} value={78} color="#2E9077" delay={0.7} />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  marginTop: 10,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: t("profile.innovator"), d: 1.2 },
                  { label: t("profile.strategist"), d: 1.7 },
                  { label: t("profile.creative"), d: 2.2 },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      background: "#fff",
                      borderRadius: 999,
                      padding: "4px 10px",
                      animation: "popIn 7s ease infinite",
                      animationDelay: `${tag.d}s`,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </FeatureCard>

          {/* 2 · Matchs */}
          <FeatureCard
            index={1}
            title={t("matches.title")}
            desc={t("matches.desc")}
          >
            <div style={{ display: "grid", gap: 8 }}>
              {MATCHES.map((m, i) => (
                <MatchRow
                  key={m.role}
                  compact
                  initials={m.initials}
                  tone={m.tone}
                  title={m.role}
                  subtitle={o(m.type)}
                  score={m.score}
                  delay={i * 0.8}
                />
              ))}
            </div>
          </FeatureCard>

          {/* 3 · Transparence */}
          <FeatureCard
            index={2}
            title={t("transparency.title")}
            desc={t("transparency.desc")}
          >
            <div style={PANEL}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700 }}>
                  {t("transparency.why")}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--color-blue)",
                  }}
                >
                  96%
                </span>
              </div>
              <div style={{ display: "grid", gap: 7, fontSize: 12 }}>
                {[
                  { label: t("transparency.culture"), v: "96%", d: 0 },
                  { label: t("transparency.softSkills"), v: "94%", d: 0.8 },
                  { label: t("transparency.values"), v: "95%", d: 1.6 },
                ].map((r) => (
                  <div
                    key={r.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      background: "#fff",
                      borderRadius: 8,
                      padding: "8px 11px",
                      animation: "popIn 7s ease infinite",
                      animationDelay: `${r.d}s`,
                    }}
                  >
                    <span>{r.label}</span>
                    <strong>{r.v}</strong>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>

          {/* 4 · Culture */}
          <FeatureCard
            index={0}
            title={t("culture.title")}
            desc={t("culture.desc")}
          >
            <div style={{ ...PANEL, display: "grid", gap: 8 }}>
              <Bar label={t("culture.innovation")} value={92} color="#0F4B70" delay={0} />
              <Bar label={t("culture.wellbeing")} value={88} color="#14608C" delay={0.35} />
              <Bar label={t("culture.growth")} value={95} color="#2E9077" delay={0.7} />
            </div>
          </FeatureCard>

          {/* 5 · Rapide */}
          <FeatureCard index={1} title={t("fast.title")} desc={t("fast.desc")}>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                { n: 1, bg: "#0F4B70", label: t("fast.step1"), time: t("fast.step1Time"), d: 0 },
                { n: 2, bg: "#14608C", label: t("fast.step2"), time: t("fast.step2Time"), d: 0.8 },
                { n: 3, bg: "#2E9077", label: t("fast.step3"), time: t("fast.step3Time"), d: 1.6 },
              ].map((s) => (
                <div
                  key={s.n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    background: "#F2F8FC",
                    borderRadius: 12,
                    padding: "11px 13px",
                    fontSize: 13,
                    animation: "popIn 7s ease infinite",
                    animationDelay: `${s.d}s`,
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      flex: "none",
                      borderRadius: "50%",
                      background: s.bg,
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 11,
                    }}
                  >
                    {s.n}
                  </span>
                  <span style={{ fontWeight: 700 }}>{s.label}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "rgba(15,14,12,.55)",
                    }}
                  >
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* 6 · Sens */}
          <FeatureCard
            index={2}
            title={t("meaning.title")}
            desc={t("meaning.desc")}
          >
            <div style={PANEL}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 10,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700 }}>
                  {t("meaning.score")}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--color-blue)",
                  }}
                >
                  94%
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 7,
                  textAlign: "center",
                  fontSize: 11,
                }}
              >
                {[
                  { v: t("meaning.impactVal"), l: t("meaning.impact") },
                  { v: "+40%", l: t("meaning.growth") },
                  { v: t("meaning.wellbeingVal"), l: t("meaning.wellbeing") },
                ].map((c) => (
                  <div
                    key={c.l}
                    style={{
                      background: "#fff",
                      borderRadius: 8,
                      padding: "9px 4px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        color: "var(--color-blue)",
                      }}
                    >
                      {c.v}
                    </div>
                    <div style={{ color: "rgba(15,14,12,.55)" }}>{c.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
