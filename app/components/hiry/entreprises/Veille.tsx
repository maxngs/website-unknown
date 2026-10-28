import type { EntreprisesContent } from "@/content/entreprises";
import { Label } from "../ui";
import { Rich } from "./rich";
import { SECTION } from "./SectionHead";

const TONES = ["var(--color-cyan)", "var(--color-green-p)", "var(--color-blue-p)"];

/**
 * La veille : un besoin permanent qui remonte des profils sans offre publiée.
 * Visuel : le fil d'une veille active, sans aucune offre publiée.
 */
export default function Veille({ c }: { c: EntreprisesContent["veille"] }) {
  return (
    <section
      id="veille"
      aria-labelledby="veille-title"
      className="ent-screen"
      style={SECTION}
    >
      <div
        data-r="g"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,6vw,96px)",
          alignItems: "center",
        }}
      >
        <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
          <Label>{c.label.toUpperCase()}</Label>
          <h2
            id="veille-title"
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: "0 0 28px",
              textWrap: "balance",
            }}
          >
            <Rich text={c.title} />
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.6,
              margin: "0 0 16px",
              maxWidth: 540,
            }}
          >
            {c.p1}
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.62)",
              margin: 0,
              maxWidth: 540,
            }}
          >
            {c.p2}
          </p>
        </div>

        {/* Fil de la veille */}
        <div
          className="rv-scale"
          style={{ position: "relative", animationRange: "entry 0% entry 40%" }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(15,14,12,.1)",
              borderRadius: 22,
              padding: "26px 26px 22px",
              boxShadow: "0 30px 60px -40px rgba(15,14,12,.35)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
                paddingBottom: 18,
                marginBottom: 16,
                borderBottom: "2px solid var(--color-ink)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    color: "rgba(15,14,12,.6)",
                    marginBottom: 6,
                  }}
                >
                  {c.panel.toUpperCase()}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: "-.02em",
                  }}
                >
                  {c.role}
                </div>
              </div>
              <div style={{ textAlign: "right", flex: "none" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: "var(--color-green)",
                    background: "var(--color-green-p)",
                    borderRadius: 999,
                    padding: "5px 11px",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-green)",
                      animation: "blinkDot 1.6s infinite",
                    }}
                  />
                  {c.status}
                </span>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "rgba(15,14,12,.6)",
                    marginTop: 6,
                  }}
                >
                  {c.since}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 8 }}>
              {c.rows.map((r, i) => (
                <div
                  key={r.who}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 12px",
                    borderRadius: 12,
                    background: i === 0 ? "#F2F8FC" : undefined,
                    animation: i === 0 ? "popIn 7s ease infinite" : undefined,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      flex: "none",
                      borderRadius: "50%",
                      background: TONES[i % TONES.length],
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 11.5,
                    }}
                  >
                    {r.initials}
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13.5 }}>
                      {r.who}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(15,14,12,.62)" }}>
                      {r.meta}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 11.5,
                      color: "rgba(15,14,12,.6)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.when}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 16,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px dashed rgba(15,14,12,.18)",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 13 }}>
                <strong style={{ fontSize: 22, letterSpacing: "-.02em" }}>
                  23
                </strong>{" "}
                <span style={{ color: "rgba(15,14,12,.62)" }}>{c.count}</span>
              </span>
              <span style={{ fontSize: 12.5, color: "rgba(15,14,12,.62)" }}>
                {c.quota}{" "}
                <strong
                  className="serif"
                  style={{
                    fontSize: 18,
                    color: "var(--color-blue)",
                    fontWeight: 400,
                  }}
                >
                  {c.quotaValue}
                </strong>
              </span>
            </div>
          </div>

          {/* Notification, posée en débord du panneau */}
          <div
            data-r="hide"
            style={{
              position: "absolute",
              top: -18,
              left: -28,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              borderRadius: 14,
              padding: "11px 16px",
              fontSize: 12.5,
              fontWeight: 600,
              boxShadow: "0 18px 40px -18px rgba(15,14,12,.62)",
              animation: "float 5s ease-in-out infinite",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-cyan)",
                animation: "inkDot 1.8s ease-in-out infinite",
              }}
            />
            {c.toast}
          </div>
        </div>
      </div>
    </section>
  );
}
