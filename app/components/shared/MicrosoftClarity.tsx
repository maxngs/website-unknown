// ============================================================
// app/components/shared/MicrosoftClarity.tsx
// Microsoft Clarity — heatmaps + session recordings
// Activé uniquement si l'utilisateur a accepté les cookies analytics.
// Project ID via la variable d'env NEXT_PUBLIC_CLARITY_ID.
// ============================================================
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/** Lit le cookie "cookie-consent" géré par CookieBanner.tsx. */
function hasConsent(): boolean {
  if (typeof document === "undefined") return false;
  return /(^|;\s*)cookie-consent=accepted/.test(document.cookie);
}

export function MicrosoftClarity() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // 1) Check immédiat au mount (cas où l'utilisateur a déjà accepté à une visite précédente)
    if (hasConsent()) {
      setConsent(true);
      return;
    }

    // 2) Sinon, on écoute l'événement custom dispatché par CookieBanner au clic "Accepter"
    const handler = () => {
      if (hasConsent()) setConsent(true);
    };
    window.addEventListener("cookie-consent-changed", handler);
    return () => window.removeEventListener("cookie-consent-changed", handler);
  }, []);

  if (!CLARITY_ID || !consent) return null;

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `,
      }}
    />
  );
}
