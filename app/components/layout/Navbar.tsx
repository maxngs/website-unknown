// app/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { useLeadModal } from "../shared/Providers";

const navLinks = [
  { label: "Candidats", href: "/candidats" },
  { label: "Entreprises", href: "/entreprises" },
  { label: "Écoles", href: "/ecoles" },
];

interface NavbarProps {
  ctaLabel?: string;
}

export const Navbar = ({
  ctaLabel = "Rejoindre l'aventure",
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/logo-hiry-black.svg"
              alt="Hiry"
              width={58}
              height={31}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/50 transition-all">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Se connecter — frozen with "Bientôt" badge */}
            <div className="relative">
              <span className="px-4 py-2.5 text-sm font-semibold text-slate-300 cursor-not-allowed select-none">
                Se connecter
              </span>
              <span className="absolute -top-2 -left-3 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-600 rounded-full border border-amber-200 leading-none">
                Bientôt
              </span>
            </div>

            {/* CTA → ouvre le formulaire */}
            <button
              onClick={open}
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {ctaLabel}
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-colors" aria-label="Menu">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} className="text-slate-700" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} className="text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="flex items-center justify-between px-4 py-3.5 text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all">
                    {link.label}
                    <ChevronRight size={16} className="text-slate-400" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-3 border-t border-slate-100 mt-4">
                {/* Se connecter — frozen mobile */}
                <div className="relative block text-center px-4 py-3 text-sm font-semibold text-slate-300 border border-slate-100 rounded-xl cursor-not-allowed select-none">
                  Se connecter
                  <span className="absolute -top-2 left-4 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-600 rounded-full border border-amber-200 leading-none">
                    Bientôt
                  </span>
                </div>

                {/* CTA → ouvre le formulaire */}
                <button
                  onClick={() => { setIsOpen(false); open(); }}
                  className="block w-full text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-md"
                >
                  {ctaLabel}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
