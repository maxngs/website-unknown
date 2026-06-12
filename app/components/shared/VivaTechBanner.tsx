// ============================================================
// app/components/shared/VivaTechBanner.tsx
// Bannière annonçant la participation de Hiry à VivaTech 2026.
// Au clic : modal avec 3 options (Gmail / mailto / copier l'email).
// Toujours visible — à retirer manuellement après le 20 juin 2026.
// ============================================================
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  ArrowRight,
  X,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const CONTACT_EMAIL = "contact@hiry.fr";
const EVENT_SUBJECT = "Rendez-vous à VivaTech 2026";
const EVENT_BODY = `Bonjour Hiry,

Je souhaiterais convenir d'un rendez-vous sur votre stand à VivaTech 2026 (Pavillon 7 · Stand 2F64-001, du 17 au 20 juin).

Présentez-vous rapidement et indiquez vos créneaux préférés :


Merci !`;

// URL mailto: standard (ouvre le client mail configuré sur l'OS)
const MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  EVENT_SUBJECT
)}&body=${encodeURIComponent(EVENT_BODY)}`;

// URL Gmail compose (ouvre la fenêtre de composition Gmail dans le navigateur)
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL
)}&su=${encodeURIComponent(EVENT_SUBJECT)}&body=${encodeURIComponent(
  EVENT_BODY
)}`;

export const VivaTechBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setCopied(false);
  }, []);

  // Fermeture par la touche Escape
  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, closeModal]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback silencieux — si clipboard non dispo on ne fait rien
    }
  };

  return (
    <>
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
              href="#prendre-rdv"
              onClick={openModal}
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
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="hidden md:inline-flex shrink-0 items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-purple-900 bg-white hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Prendre RDV
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de prise de RDV */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header gradient VivaTech */}
              <div
                className="relative px-6 pt-6 pb-5 text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #1E0B4D 0%, #4C1D95 18%, #9333EA 35%, #DB2777 55%, #F97316 80%, #FBBF24 100%)",
                }}
              >
                <button
                  onClick={closeModal}
                  aria-label="Fermer"
                  className="absolute top-4 right-4 w-8 h-8 inline-flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/partners/vivatech-logo.png"
                    alt="VivaTech 2026"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain shrink-0"
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                      Hiry × VivaTech 2026
                    </p>
                    <p className="text-lg font-extrabold tracking-tight">
                      Prendre RDV sur notre stand
                    </p>
                  </div>
                </div>

                <p className="text-xs md:text-sm font-medium opacity-95">
                  Pavillon 7 · Stand 2F64-001 · 17-20 juin 2026
                </p>
              </div>

              {/* Corps */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Choisissez votre messagerie préférée pour nous écrire — votre
                  email partira pré-rempli avec les infos du RDV.
                </p>

                {/* Options */}
                <div className="space-y-2">
                  <a
                    href={GMAIL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeModal}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-sm text-red-500">
                      G
                    </div>
                    <span className="flex-1 text-sm font-bold text-slate-900">
                      Ouvrir dans Gmail
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-slate-400 group-hover:text-slate-700 transition-colors"
                    />
                  </a>

                  <a
                    href={MAILTO_URL}
                    onClick={closeModal}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <Mail size={16} className="text-indigo-600" />
                    </div>
                    <span className="flex-1 text-sm font-bold text-slate-900">
                      Ouvrir avec ma messagerie
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-slate-400 group-hover:text-slate-700 transition-colors"
                    />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      {copied ? (
                        <Check size={16} className="text-emerald-600" />
                      ) : (
                        <Copy size={16} className="text-slate-700" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-bold text-slate-900">
                        {copied ? "Email copié !" : "Copier l'adresse email"}
                      </p>
                      <p className="text-xs text-slate-500 font-medium font-mono">
                        {CONTACT_EMAIL}
                      </p>
                    </div>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 font-medium leading-relaxed pt-2 border-t border-slate-100">
                  Une réponse personnalisée vous sera apportée sous 24 h
                  ouvrées.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
