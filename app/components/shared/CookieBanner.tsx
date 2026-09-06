// ============================================================
// app/components/shared/CookieBanner.tsx
// Bannière RGPD cookies — Analytics + Publicité (Meta Ads)
// Habillage v3 (charte encre / ivoire / cyan) — cf. app/[locale]/hiry.css
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "../hiry/Link";
import { LEGAL } from "../hiry/links";
import { grantConsent, denyConsent } from "./GoogleTagManager";

// ============================================================
// COOKIE HELPERS
// ============================================================
const COOKIE_NAME = "cookie-consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};path=/;max-age=${maxAge};SameSite=Lax`;
}

// ============================================================
// COMPONENT
// ============================================================
export default function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);
  // Sortie en CSS : on garde la carte montée le temps du fondu.
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      // Le consentement est déjà restauré par le script beforeInteractive
      // dans GoogleTagManager.tsx, donc pas besoin de rappeler grantConsent() ici.
      // On le garde en fallback au cas où.
      grantConsent();
    }
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 260);
  };

  const handleAccept = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_MAX_AGE);
    grantConsent();
    // Signal au composant MicrosoftClarity (et tout autre listener) que le consent a changé
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cookie-consent-changed"));
    }
    dismiss();
  };

  const handleReject = () => {
    setCookie(COOKIE_NAME, "rejected", COOKIE_MAX_AGE);
    denyConsent();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cookie-consent-changed"));
    }
    dismiss();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("label")}
      className={closing ? "cookie-banner cookie-out" : "cookie-banner"}
    >
      <div>
        <h2>{t("title")}</h2>
        <p>
          {t("text")}{" "}
          <Link href={LEGAL.privacy}>{t("privacy")}</Link>
        </p>
      </div>

      <div className="cookie-actions">
        <button type="button" onClick={handleReject} className="cookie-refuse">
          {t("reject")}
        </button>
        <button type="button" onClick={handleAccept} className="cookie-accept">
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
