import { getTranslations } from "next-intl/server";
import Link from "../Link";
import { APP } from "../links";

type Offer = {
  initials: string;
  tone: keyof typeof TONES;
  title: string;
  company: string;
  type: "internship" | "apprenticeship" | "fulltime";
  city: string;
};

const TONES = {
  cyan: { flat: "#C4F8FF", grad: "linear-gradient(135deg,#C4F8FF,#A9E4F2)" },
  "blue-p": { flat: "#CFE4F2", grad: "linear-gradient(135deg,#CFE4F2,#B7D4E8)" },
  "green-p": { flat: "#D6F2E8", grad: "linear-gradient(135deg,#D6F2E8,#C0E7DB)" },
  sky: { flat: "#DCEFF7", grad: "linear-gradient(135deg,#DCEFF7,#C8E3F0)" },
} as const;

const ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
} as const;

function OfferCard({
  offer,
  onHiry,
  typeLabel,
}: {
  offer: Offer;
  onHiry: string;
  typeLabel: string;
}) {
  const tone = TONES[offer.tone];
  return (
    <div
      data-offer-card="1"
      style={{
        width: 290,
        flex: "none",
        borderRadius: 16,
        overflow: "hidden",
        background: "var(--color-card-warm)",
        border: "1px solid rgba(15,14,12,.08)",
        textAlign: "left",
        transition:
          "transform .3s ease,box-shadow .3s ease,border-color .3s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ height: 108, background: tone.grad, position: "relative" }}>
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "#fff",
            borderRadius: 999,
            padding: "6px 12px",
            fontWeight: 700,
            fontSize: 12,
            color: "var(--color-blue)",
          }}
        >
          {onHiry}
        </span>
      </div>
      <div
        style={{
          padding: "13px 16px",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: 34,
            height: 34,
            flex: "none",
            borderRadius: "50%",
            background: tone.flat,
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
            fontSize: 12,
          }}
        >
          {offer.initials}
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14, ...ellipsis }}>
            {offer.title}
          </div>
          <div
            style={{
              fontSize: 12.5,
              color: "rgba(15,14,12,.5)",
              ...ellipsis,
            }}
          >
            {offer.company} · {typeLabel} · {offer.city}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * `namespace` permet de réutiliser la section avec un chapô différent
 * (la home et la page Candidats ont leurs propres label/titre/sous-titre),
 * tout en partageant la même liste d'offres.
 */
export default async function Offres({
  namespace = "offers",
  ctaKey = "seeAll",
}: {
  namespace?: string;
  ctaKey?: string;
} = {}) {
  const t = await getTranslations("offers");
  const h = await getTranslations(namespace);
  const rowA = t.raw("rowA") as Offer[];
  const rowB = t.raw("rowB") as Offer[];
  const onHiry = t("onHiry");

  // .offers-row-l / .offers-row-r portent la mise en page ET l'animation
  // pilotée au scroll (cf. app/animations.css).
  const row = (offers: Offer[], className: string) => (
    <div className={className}>
      {/* dupliqué 2× pour couvrir la course du translate */}
      {[...offers, ...offers].map((o, i) => (
        <OfferCard
          key={`${o.company}-${i}`}
          offer={o}
          onHiry={onHiry}
          typeLabel={t(o.type)}
        />
      ))}
    </div>
  );

  return (
    <section
      id="offres"
      style={{ padding: "0 0 110px", overflow: "clip", textAlign: "center" }}
    >
      <div data-r="pad" className="rv-up" style={{ padding: "0 44px" }}>
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "rgba(15,14,12,.4)",
            marginBottom: 20,
          }}
        >
          {h("label")}
        </div>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(34px,3.8vw,54px)",
            lineHeight: 1.1,
            letterSpacing: "-.035em",
            margin: "0 0 12px",
          }}
        >
          {h.rich("title", {
            em: (chunks) => <em className="serif">{chunks}</em>,
          })}
        </h2>
        <p
          style={{
            fontSize: 15.5,
            color: "rgba(15,14,12,.6)",
            maxWidth: 540,
            margin: "0 auto 26px",
          }}
        >
          {h("subtitle")}
        </p>
        <Link
          href={APP.signup}
          className="btn btn-ink"
          style={{ fontSize: 14.5, padding: "13px 26px" }}
        >
          {h(ctaKey)}
        </Link>
      </div>

      <div style={{ display: "grid", gap: 18, marginTop: 52 }}>
        {row(rowA, "offers-row-l")}
        {row(rowB, "offers-row-r")}
      </div>
    </section>
  );
}
