// ============================================================
// app/components/shared/CookieBanner.tsx
// Bannière RGPD cookies — Accepter / Refuser
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

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
// ANIMATIONS
// ============================================================
const bannerVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      delay: 1.5,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// ============================================================
// COMPONENT
// ============================================================
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_MAX_AGE);
    setVisible(false);
  };

  const handleReject = () => {
    setCookie(COOKIE_NAME, "rejected", COOKIE_MAX_AGE);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-2xl mx-auto bg-[#13121f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icône + Texte */}
              <div className="flex items-start gap-3 flex-1">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mt-0.5">
                  <Cookie size={20} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Nous utilisons des cookies
                  </h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Ce site utilise des cookies pour améliorer votre
                    expérience et analyser le trafic.{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      Politique de confidentialité
                    </Link>
                  </p>
                </div>
              </div>

              {/* Boutons */}
              <div className="flex gap-2 w-full sm:w-auto sm:flex-shrink-0">
                <motion.button
                  onClick={handleReject}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                >
                  Refuser
                </motion.button>
                <motion.button
                  onClick={handleAccept}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-200"
                >
                  Accepter
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
