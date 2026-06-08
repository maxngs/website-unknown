// ============================================================
// app/components/shared/VivaTechBanner.tsx
// Bannière annonçant la participation de Hiry à VivaTech 2026
// Affichée en tête de la Navbar — dismissable, mémoire localStorage.
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { X, MapPin } from "lucide-react";

const STORAGE_KEY = "vivatech-2026-banner-dismissed";
const EVENT_URL = "https://vivatechnology.com/";

interface VivaTechBannerProps {
  /** Callback déclenché quand la bannière est fermée — permet au parent
   * (Navbar) d'ajuster sa hauteur. */
  onDismiss?: () => void;
}

export const VivaTechBanner = ({ onDismiss }: VivaTechBannerProps) => {
  // Par défaut visible — on cache uniquement si localStorage le dit
  // (évite le flash de fermeture au chargement).
  const [dismissed, setDismissed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "1") setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
    onDismiss?.();
  };

  // Avant hydratation : on rend la bannière (server) pour éviter le LCP shift.
  // Si l'utilisateur l'avait fermée, l'effet la cache au mount.
  if (hydrated && dismissed) return null;

  return (
    <div
      className="relative w-full text-white"
      style={{
        background:
          "linear-gradient(90deg, #2E1065 0%, #6D28D9 22%, #DB2777 50%, #F97316 78%, #FBBF24 100%)",
      }}
    >
      <a
        href={EVENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold hover:bg-black/5 transition-colors"
      >
        {/* Placeholder logo VivaTech — à remplacer par l'image officielle */}
        <span
          aria-hidden
          className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/15 backdrop-blur-sm font-black text-[10px] tracking-tighter shrink-0"
        >
          V
        </span>

        <span className="hidden sm:inline font-bold uppercase tracking-wider text-[11px] md:text-xs">
          VivaTech 2026
        </span>

        <span className="hidden sm:inline opacity-60">·</span>

        <span className="inline-flex items-center gap-1.5">
          <MapPin size={12} className="shrink-0 opacity-90" />
          <span>Pavillon 7 · Stand 2F64-001</span>
        </span>

        <span className="hidden md:inline opacity-60">·</span>

        <span className="hidden md:inline opacity-90">17-20 juin</span>

        <span className="hidden lg:inline ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm font-bold text-[11px]">
          Venez nous rencontrer →
        </span>
      </a>

      <button
        onClick={handleDismiss}
        aria-label="Fermer la bannière VivaTech"
        className="absolute top-1/2 right-2 -translate-y-1/2 w-7 h-7 inline-flex items-center justify-center rounded-md hover:bg-white/15 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
};
