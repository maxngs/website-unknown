// ============================================================
// app/components/shared/VivaTechBanner.tsx
// Bannière annonçant la participation de Hiry à VivaTech 2026.
// Toujours visible — à retirer manuellement après le 20 juin 2026.
// ============================================================

import Image from "next/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const CONTACT_EMAIL = "contact@hiry.fr";
const EVENT_SUBJECT = "Rendez-vous à VivaTech 2026";
const EVENT_BODY = `Bonjour Hiry,

Je souhaiterais convenir d'un rendez-vous sur votre stand à VivaTech 2026 (Pavillon 7 · Stand 2F64-001, du 17 au 20 juin).

Présentez-vous rapidement et indiquez vos créneaux préférés :


Merci !`;

const MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  EVENT_SUBJECT
)}&body=${encodeURIComponent(EVENT_BODY)}`;

export const VivaTechBanner = () => {
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
            href={MAILTO_URL}
            className="flex flex-1 items-center gap-3 md:gap-4 min-w-0 group"
          >
            {/* Logo VivaTech officiel */}
            <Image
              src="/partners/vivatech-logo.png"
              alt="VivaTech 2026"
              width={40}
              height={40}
              className="shrink-0 w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform"
            />

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
          <a
            href={MAILTO_URL}
            className="hidden md:inline-flex shrink-0 items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-purple-900 bg-white hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Prendre RDV
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
