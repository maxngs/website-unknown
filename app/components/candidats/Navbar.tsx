"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50">
              <Zap size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">Hiry<span className="text-indigo-600">.</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {["Candidats", "Entreprises", "Écoles"].map((l) => (
              <a key={l} href="#" className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${l === "Candidats" ? "text-indigo-600 bg-indigo-50/50" : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"}`}>{l}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="#" className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Se connecter</a>
            <a href="#" className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">Commencer gratuitement</a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/80">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div className="px-4 py-6 space-y-2">
              {["Candidats", "Entreprises", "Écoles"].map(l => <a key={l} href="#" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 rounded-xl">{l}</a>)}
              <div className="pt-4 space-y-2">
                <a href="#" className="block text-center px-4 py-3 text-sm font-semibold text-slate-600 border border-slate-200 rounded-xl">Se connecter</a>
                <a href="#" className="block text-center px-4 py-3 text-sm font-bold text-white bg-indigo-600 rounded-xl">Commencer gratuitement</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
