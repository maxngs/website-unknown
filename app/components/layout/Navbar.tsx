"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap, Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Candidats", href: "/candidats" },
  { label: "Entreprises", href: "/entreprises" },
  { label: "Écoles", href: "/ecoles" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50 group-hover:shadow-indigo-300/70 transition-shadow">
              <Zap size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Hiry<span className="text-indigo-600">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/50 transition-all">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/login" className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              Se connecter
            </Link>
            <Link href="/signup" className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Commencer gratuitement
            </Link>
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
                <Link href="/login" className="block text-center px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl transition-colors">Se connecter</Link>
                <Link href="/signup" className="block text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-md">Commencer gratuitement</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
