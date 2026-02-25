// app/components/shared/GoogleTagManager.tsx
// GTM + Consent Mode v2 — respecte le choix cookies RGPD
"use client";

import Script from "next/script";

const GTM_ID = "GTM-W2CMZ3PZ";

/**
 * Ce script fait 2 choses :
 * 1. Initialise le Consent Mode v2 avec tout refusé par défaut (RGPD)
 * 2. Charge GTM (qui ne déclenchera GA4 que si le consentement est accordé)
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
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
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

/**
 * Fonctions à appeler depuis le CookieBanner
 * pour mettre à jour le consentement GTM
 */
export function grantConsent() {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      0: "consent",
      1: "update",
      2: { analytics_storage: "granted" },
    });
  }
}

export function denyConsent() {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      0: "consent",
      1: "update",
      2: { analytics_storage: "denied" },
    });
  }
}
