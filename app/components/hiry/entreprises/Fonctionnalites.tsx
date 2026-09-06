import type { CSSProperties, ReactNode } from "react";
import { getTranslations } from "next-intl/server";

/** Carte de la grille bento « inclus dans tous les packs ». */
function Card({
  title,
  tag,
  tagColor,
  bullets,
  children,
  span = 1,
  big = false,
  index = 0,
  style,
}: {
  title: string;
  tag: string;
  tagColor: string;
  bullets: string[];
  children: ReactNode;
  span?: number;
  big?: boolean;
  index?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className="rv-scale"
      style={{
        gridColumn: span > 1 ? `span ${span}` : undefined,
        background: "#fff",
        border: "1px solid rgba(15,14,12,.08)",
        borderRadius: 20,
        padding: big ? 32 : 26,
        animationRange: `entry ${index * 5}% entry ${30 + index * 5}%`,
        ...style,
      }}
    >
      {big ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-.02em" }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: ".12em",
              color: tagColor,
            }}
          >
            {tag}
          </div>
        </div>
      ) : (
        <>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 2 }}>
            {title}
          </div>
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: ".12em",
              color: tagColor,
              marginBottom: 14,
            }}
          >
            {tag}
          </div>
        </>
      )}

      <div style={big ? { margin: "20px 0" } : { marginBottom: 14 }}>
        {children}
      </div>

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: big ? "1fr 1fr" : undefined,
          gap: big ? "8px 18px" : 7,
          fontSize: 13,
          lineHeight: 1.45,
          color: "inherit",
          opacity: 0.75,
        }}
      >
        {bullets.map((b) => (
          <li key={b}>· {b}</li>
        ))}
      </ul>
    </div>
  );
}

const CHIP: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  borderRadius: 999,
  padding: "7px 14px",
};

export default async function Fonctionnalites() {
  const t = await getTranslations("companies.features");

  return (
    <section
      id="fonctionnalites"
      style={{ padding: "30px 44px 70px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "var(--color-blue)",
              marginBottom: 16,
            }}
          >
            {t("label")}
          </div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(32px,3.6vw,52px)",
              lineHeight: 1.06,
              letterSpacing: "-.035em",
              margin: "0 0 14px",
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <p
            style={{ fontSize: 15.5, color: "rgba(15,14,12,.6)", margin: 0 }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
            gap: 16,
          }}
        >
          {/* Matching IA — carte encre 2 colonnes */}
          <Card
            span={2}
            big
            index={0}
            title={t("matching.title")}
            tag={t("matching.tag")}
            tagColor="var(--color-cyan)"
            bullets={[t("matching.b1"), t("matching.b2"), t("matching.b3"), t("matching.b4")]}
            style={{
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              border: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 56,
                  letterSpacing: "-.04em",
                  color: "var(--color-cyan)",
                }}
              >
                87
                <span style={{ fontSize: ".45em", letterSpacing: 0 }}>
                  /100
                </span>
              </div>
              <div style={{ flex: 1, display: "grid", gap: 7 }}>
                {[
                  [92, "#C4F8FF"],
                  [81, "#CFE4F2"],
                  [88, "#D6F2E8"],
                ].map(([w, c], i) => (
                  <div
                    key={i}
                    style={{
                      height: 7,
                      borderRadius: 4,
                      background: "rgba(247,243,236,.15)",
                    }}
                  >
                    <div
                      style={{
                        width: `${w}%`,
                        height: "100%",
                        borderRadius: 4,
                        background: c as string,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Pipeline */}
          <Card
            index={1}
            title={t("pipeline.title")}
            tag={t("pipeline.tag")}
            tagColor="var(--color-blue)"
            bullets={[t("pipeline.b1"), t("pipeline.b2"), t("pipeline.b3"), t("pipeline.b4")]}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {[
                { l: t("pipeline.received"), bg: "#EAF6FB", c: "#0F4B70" },
                { l: t("pipeline.interview"), bg: "#CFE4F2", c: "#0F4B70" },
                { l: t("pipeline.signed"), bg: "#0F4B70", c: "#fff" },
              ].map((s) => (
                <span
                  key={s.l}
                  style={{
                    flex: 1,
                    height: 34,
                    borderRadius: 8,
                    background: s.bg,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 10.5,
                    fontWeight: 700,
                    color: s.c,
                  }}
                >
                  {s.l}
                </span>
              ))}
            </div>
          </Card>

          {/* Messagerie */}
          <Card
            index={2}
            title={t("messaging.title")}
            tag={t("messaging.tag")}
            tagColor="var(--color-blue)"
            bullets={[t("messaging.b1"), t("messaging.b2"), t("messaging.b3"), t("messaging.b4")]}
          >
            <div style={{ display: "grid", gap: 6 }}>
              <span
                style={{
                  justifySelf: "start",
                  maxWidth: "85%",
                  background: "#EAF6FB",
                  borderRadius: "10px 10px 10px 3px",
                  padding: "7px 11px",
                  fontSize: 11.5,
                }}
              >
                {t("messaging.msg1")}
              </span>
              <span
                style={{
                  justifySelf: "end",
                  maxWidth: "85%",
                  background: "var(--color-ink)",
                  color: "#fff",
                  borderRadius: "10px 10px 3px 10px",
                  padding: "7px 11px",
                  fontSize: 11.5,
                }}
              >
                {t("messaging.msg2")}
              </span>
            </div>
          </Card>

          {/* Entretiens */}
          <Card
            index={0}
            title={t("interviews.title")}
            tag={t("interviews.tag")}
            tagColor="var(--color-blue-2)"
            bullets={[t("interviews.b1"), t("interviews.b2"), t("interviews.b3"), t("interviews.b4")]}
            style={{ background: "var(--color-blue-p)", border: "none" }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "11px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "var(--color-blue)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 11,
                  lineHeight: 1.1,
                  textAlign: "center",
                }}
              >
                {t("interviews.day")}
                <br />
                {t("interviews.date")}
              </span>
              {t("interviews.slot")}
            </div>
          </Card>

          {/* Création d'offre IA */}
          <Card
            index={1}
            title={t("jobPost.title")}
            tag={t("jobPost.tag")}
            tagColor="var(--color-blue)"
            bullets={[t("jobPost.b1"), t("jobPost.b2"), t("jobPost.b3")]}
          >
            <div
              style={{
                background: "var(--color-bg)",
                borderRadius: 12,
                padding: "13px 14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 9,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--color-blue)",
                    animation: "blinkDot 1.2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: "var(--color-blue)",
                  }}
                >
                  {t("jobPost.writing")}
                </span>
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  lineHeight: 1.5,
                  color: "rgba(15,14,12,.75)",
                }}
              >
                {t("jobPost.draft")}
                <span
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 12,
                    background: "var(--color-blue)",
                    verticalAlign: -2,
                    marginLeft: 2,
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: 5, marginTop: 9 }}>
                {[
                  { l: t("jobPost.chip1"), bg: "#fff", c: "rgba(15,14,12,.55)" },
                  { l: t("jobPost.chip2"), bg: "#fff", c: "rgba(15,14,12,.55)" },
                  { l: t("jobPost.chip3"), bg: "#CFE4F2", c: "#0F4B70" },
                ].map((c) => (
                  <span
                    key={c.l}
                    style={{
                      fontSize: 9.5,
                      fontWeight: 700,
                      background: c.bg,
                      borderRadius: 999,
                      padding: "3px 9px",
                      color: c.c,
                    }}
                  >
                    {c.l}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Équipe & rôles */}
          <Card
            span={2}
            big
            index={2}
            title={t("team.title")}
            tag={t("team.tag")}
            tagColor="var(--color-blue)"
            bullets={[t("team.b1"), t("team.b2"), t("team.b3")]}
          >
            <div style={{ display: "grid", gap: 8 }}>
              {[
                { i: "SM", bg: "#0F4B70", fg: "#fff", name: "Sarah M.", role: t("team.admin"), rbg: "#0F0E0C", rfg: "#fff" },
                { i: "JD", bg: "#14608C", fg: "#fff", name: "Julien D.", role: t("team.recruiter"), rbg: "#CFE4F2", rfg: "#0F4B70" },
                { i: "AL", bg: "#D6F2E8", fg: "#1E7A64", name: `Amine L. · ${t("team.guest")}`, role: t("team.read"), rbg: "#EAF6FB", rfg: "#0F4B70" },
              ].map((m) => (
                <div
                  key={m.i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 11,
                    background: "var(--color-bg)",
                    borderRadius: 12,
                    padding: "9px 13px",
                  }}
                >
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: m.bg,
                      color: m.fg,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 10.5,
                      fontWeight: 700,
                      flex: "none",
                    }}
                  >
                    {m.i}
                  </span>
                  <span
                    style={{ fontSize: 12.5, fontWeight: 600, flex: 1 }}
                  >
                    {m.name}
                  </span>
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      background: m.rbg,
                      color: m.rfg,
                      borderRadius: 999,
                      padding: "4px 11px",
                    }}
                  >
                    {m.role}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Tableau de bord */}
          <Card
            span={2}
            big
            index={2}
            title={t("dashboard.title")}
            tag={t("dashboard.tag")}
            tagColor="var(--color-blue)"
            bullets={[t("dashboard.b1"), t("dashboard.b2"), t("dashboard.b3"), t("dashboard.b4")]}
            style={{ background: "#EAF6FB", border: "none" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 8,
                height: 64,
              }}
            >
              {[
                [34, "#CFE4F2"],
                [52, "#CFE4F2"],
                [44, "#CFE4F2"],
                [70, "#0F4B70"],
                [88, "#0F4B70"],
                [100, "#0F0E0C"],
              ].map(([h, c], i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "6px 6px 0 0",
                    background: c as string,
                  }}
                />
              ))}
            </div>
          </Card>

          {/* Marque employeur */}
          <Card
            span={2}
            big
            index={3}
            title={t("brand.title")}
            tag={t("brand.tag")}
            tagColor="var(--color-blue)"
            bullets={[t("brand.b1"), t("brand.b2"), t("brand.b3"), t("brand.b4")]}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { l: t("brand.chip1"), bg: "#D6F2E8" },
                { l: t("brand.chip2"), bg: "#C4F8FF" },
                { l: t("brand.chip3"), bg: "#EAF6FB" },
                { l: t("brand.chip4"), bg: "#CFE4F2" },
              ].map((c) => (
                <span key={c.l} style={{ ...CHIP, background: c.bg }}>
                  {c.l}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
