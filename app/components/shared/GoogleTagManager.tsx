// ============================================================
// app/components/shared/GoogleTagManager.tsx
// GTM + Consent Mode v2 — Analytics + Ads (Meta, Google Ads…)
// ============================================================
"use client";

import Script from "next/script";

const GTM_ID = "GTM-W2CMZ3PZ";

/**
 * 1. Initialise le Consent Mode v2 avec tout refusé par défaut (RGPD)
 * 2. Charge GTM (qui ne déclenchera les tags que si le consentement est accordé)
 */
export function GoogleTagManagerHead() {
  return (
    <>
      {/* Consent Mode v2 — défaut : tout refusé */}
      <Script
        id="gtm-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){dataLayer.push(arguments);}
            window.gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `,
        }}
      />
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

// ============================================================
// CONSENT FUNCTIONS — appelées depuis le CookieBanner
// ============================================================

/**
 * Accepter TOUT (analytics + publicité)
 * → Débloque GA4, Meta Pixel, Google Ads, etc.
 */
export function grantConsent() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }
}

/**
 * Accepter UNIQUEMENT analytics (pas de pub)
 * → Utilisable si tu ajoutes un jour un consentement granulaire
 */
export function grantAnalyticsOnly() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

/**
 * Tout refuser
 */
export function denyConsent() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}
