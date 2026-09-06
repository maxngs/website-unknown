import { getSilo, type SiloSlug } from "@/lib/silos";
import Link from "../Link";
import { isExternal } from "../links";

/** Bandeau CTA de fin d'article, teinté par silo et pointant vers son action. */
const TINT: Record<SiloSlug, string> = {
  entreprises: "var(--color-blue-p)",
  candidats: "var(--color-cyan)",
  ecoles: "var(--color-green-p)",
  etudes: "var(--color-cyan)",
};

export default function ArticleCta({
  silo,
  title,
}: {
  silo: SiloSlug;
  title: string;
}) {
  const meta = getSilo(silo);

  return (
    <section
      style={{ padding: "0 44px 70px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-scale"
        style={{
          background: TINT[silo],
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
            textWrap: "balance",
          }}
        >
          {title}
        </h2>
        <Link
          href={meta.cta.href}
          raw={!isExternal(meta.cta.href)}
          className="btn btn-ink"
          style={{ fontSize: 15, padding: "16px 30px" }}
        >
          {meta.cta.label}
        </Link>
      </div>
    </section>
  );
}
