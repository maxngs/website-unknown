// ============================================================
// app/components/shared/VivaTechBanner.tsx
// Bannière annonçant la participation de Hiry à VivaTech 2026
// Affichée en tête de la Navbar — dismissable, mémoire localStorage.
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { X, MapPin, Calendar, ArrowRight } from "lucide-react";

const STORAGE_KEY = "vivatech-2026-banner-dismissed";
const EVENT_URL = "https://vivatechnology.com/";

export const VivaTechBanner = () => {
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
  };

  if (hydrated && dismissed) return null;

  return (
    <div
      className="relative w-full text-white shadow-lg shadow-fuchsia-500/20"
      style={{
        background:
          "linear-gradient(90deg, #1E0B4D 0%, #4C1D95 18%, #9333EA 35%, #DB2777 55%, #F97316 80%, #FBBF24 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3 md:py-3.5">
          {/* Bloc principal : logo + titre + infos stand */}
          <a
            href={EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center gap-3 md:gap-4 min-w-0 group"
          >
            {/* Placeholder logo VivaTech — à remplacer par l'image officielle */}
            <span
              aria-hidden
              className="inline-flex shrink-0 items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white text-purple-900 font-black text-lg md:text-xl shadow-md group-hover:scale-105 transition-transform"
            >
              V
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-black tracking-tight text-sm md:text-base uppercase whitespace-nowrap">
                  Hiry × VivaTech 2026
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider shrink-0">
                  Live
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm font-semibold opacity-95 min-w-0">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin size={13} className="opacity-90" />
                  Pavillon 7 · Stand 2F64-001
                </span>
                <span className="hidden md:inline opacity-60">·</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar size={13} className="opacity-90" />
                  17-20 juin 2026
                </span>
              </div>
            </div>
          </a>

          {/* CTA proéminent — bouton blanc contrasté */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-purple-900 bg-white hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Venez nous rencontrer
              <ArrowRight size={14} />
            </a>

            <button
              onClick={handleDismiss}
              aria-label="Fermer la bannière VivaTech"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/20 transition-colors shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
