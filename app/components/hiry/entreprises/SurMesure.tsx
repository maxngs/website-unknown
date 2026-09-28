import { getTranslations } from "next-intl/server";
import Link from "../Link";
import { CONTACT } from "../links";

/** Sites du visuel : seul Lyon est dans le périmètre du recruteur affiché. */
const SITES = [
  { key: "lyon", apps: 12, notes: 4, open: true },
  { key: "lille", apps: 9, notes: 7, open: false },
  { key: "nantes", apps: 5, notes: 2, open: false },
] as const;

const MUTED = "rgba(247,243,236,.62)";

export default async function SurMesure() {
  const t = await getTranslations("companies.custom");

  return (
    <section
      id="surmesure"
      style={{ padding: "0 44px 70px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-scale"
        style={{
          background: "var(--color-ink)",
          color: "var(--color-bg)",
          borderRadius: 24,
          padding: "clamp(36px,4vw,60px)",
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: "clamp(36px,5vw,72px)",
          alignItems: "center",
          animationRange: "entry 0% entry 40%",
        }}
      >
        <div>
          <div
            className="eyebrow-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(247,243,236,.25)",
              borderRadius: 999,
              padding: "7px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".14em",
              marginBottom: 22,
            }}
          >
            {t("badge")}
          </div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px,3vw,44px)",
              lineHeight: 1.08,
              letterSpacing: "-.03em",
              margin: "0 0 24px",
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => (
                <em className="serif" style={{ color: "var(--color-cyan)" }}>
                  {chunks}
                </em>
              ),
            })}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              margin: "0 0 14px",
              maxWidth: 560,
            }}
          >
            {t("p1")}
          </p>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              color: MUTED,
              margin: "0 0 14px",
              maxWidth: 560,
            }}
          >
            {t("p2")}
          </p>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              color: MUTED,
              margin: "0 0 30px",
              maxWidth: 560,
            }}
          >
            {t("p3")}
          </p>

          <div
            data-r="wrap"
            style={{ display: "flex", alignItems: "center", gap: 18 }}
          >
            <Link
              href={CONTACT}
              className="btn btn-white"
              style={{ fontSize: 15, padding: "16px 30px" }}
            >
              {t("cta")}
            </Link>
            <span style={{ fontSize: 12.5, color: "rgba(247,243,236,.55)" }}>
              {t("or")}
            </span>
          </div>
        </div>

        {/* Cloisons : ce que voit un recruteur rattaché à Lyon */}
        <div
          style={{
            position: "relative",
            border: "1px dashed rgba(247,243,236,.3)",
            borderRadius: 20,
            padding: "30px 18px 18px",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -11,
              left: 18,
              background: "var(--color-ink)",
              padding: "0 10px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "rgba(247,243,236,.55)",
            }}
          >
            {t("board")}
          </span>

          <div
            style={{
              fontSize: 12,
              color: "rgba(247,243,236,.55)",
              margin: "0 0 12px 4px",
            }}
          >
            {t("viewer")}
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            {SITES.map((s) => (
              <div
                key={s.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderRadius: 14,
                  padding: "16px 18px",
                  background: s.open
                    ? "var(--color-dark-card)"
                    : "repeating-linear-gradient(135deg, rgba(247,243,236,.045) 0 6px, transparent 6px 13px)",
                  border: s.open
                    ? "1px solid rgba(196,248,255,.35)"
                    : "1px solid rgba(247,243,236,.08)",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    minWidth: 72,
                    color: s.open ? "var(--color-bg)" : "rgba(247,243,236,.4)",
                  }}
                >
                  {t(s.key)}
                </span>

                <span
                  aria-hidden={!s.open}
                  style={{
                    flex: 1,
                    fontSize: 12.5,
                    color: s.open ? MUTED : "rgba(247,243,236,.5)",
                    filter: s.open ? undefined : "blur(4px)",
                    userSelect: s.open ? undefined : "none",
                  }}
                >
                  <strong style={{ color: s.open ? "var(--color-cyan)" : undefined }}>
                    {s.apps}
                  </strong>{" "}
                  {t("apps")} · <strong>{s.notes}</strong> {t("notes")}
                </span>

                {!s.open && (
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: ".06em",
                      borderRadius: 999,
                      padding: "4px 10px",
                      border: "1px solid rgba(247,243,236,.2)",
                      color: "rgba(247,243,236,.6)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t("locked")}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
