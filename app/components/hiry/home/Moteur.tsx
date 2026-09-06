"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "../Link";
import { APP, CONTACT } from "../links";

type Item = { title: string; desc: string; cta: string };

/**
 * Section sticky-scroll : wrapper 400vh + position:sticky.
 * La progression du scroll dans le wrapper sélectionne l'item actif
 * (portage direct de la logique DCLogic de la référence).
 */
export default function Moteur() {
  const t = useTranslations("engine");
  const items = t.raw("items") as Item[];
  // Destinations, dans l'ordre des items : entretien, scoring, matchs,
  // démo entreprise, démarrage.
  const hrefs = [APP.signup, APP.signup, APP.signup, CONTACT, APP.signup];

  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / (r.height - vh), 0), 0.999);
      setActive(Math.floor(p * items.length));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length]);

  return (
    <section id="moteur">
      <div ref={wrapRef} style={{ height: "400vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "grid",
            alignContent: "center",
            justifyItems: "center",
            textAlign: "center",
            overflow: "hidden",
            gap: 8,
            padding: "0 44px",
          }}
        >
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.4)",
              marginBottom: 6,
            }}
          >
            {t("label")}
          </div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(30px,3.2vw,44px)",
              letterSpacing: "-.035em",
              margin: "0 0 28px",
            }}
          >
            {t("title")}
          </h2>

          {items.map((item, i) => {
            const on = active === i;
            return (
              <div key={item.title}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(40px,5.4vw,74px)",
                    letterSpacing: "-.04em",
                    lineHeight: 1.06,
                    color: on ? "var(--color-ink)" : "#CFC8BB",
                    transition: "color .4s",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: on ? 220 : 0,
                    opacity: on ? 1 : 0,
                    transition: "max-height .5s ease,opacity .5s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.55,
                      color: "rgba(15,14,12,.6)",
                      maxWidth: 480,
                      margin: "10px auto 16px",
                    }}
                  >
                    {item.desc}
                  </p>
                  <Link
                    href={hrefs[i]}
                    className="btn btn-ink"
                    style={{
                      fontSize: 14,
                      padding: "12px 24px",
                      marginBottom: 8,
                    }}
                    tabIndex={on ? undefined : -1}
                    aria-hidden={on ? undefined : true}
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
