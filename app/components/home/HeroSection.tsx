"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Sparkles, Briefcase, Zap, Star,
  Brain, MapPin, TrendingUp, Heart, Calendar, Eye,
  CheckCircle2,
} from "lucide-react";

// ─── Hero App Preview (right side browser mockup) ───────────────────────────
const HeroAppPreview = () => {
  const [activeNotif, setActiveNotif] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveNotif((p) => (p + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="flex-1 w-full relative hidden md:flex items-center justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="relative w-full max-w-[520px]">
        {/* Background glow */}
        <div className="absolute -inset-10 bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-blue-200/30 rounded-[3rem] blur-3xl" />

        {/* ====== MAIN BROWSER MOCKUP ====== */}
        <motion.div
          initial={{ y: 30, scale: 0.96 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="relative bg-white rounded-2xl shadow-2xl shadow-indigo-200/40 border border-slate-200/60 overflow-hidden z-10"
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3px]" />
                <span className="text-[10px] text-slate-400 font-medium">app.hiry.ai/student/dashboard</span>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 bg-gray-50/80 space-y-3">
            {/* Welcome */}
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Bonjour, Maxime 👋</h4>
                <p className="text-[10px] text-slate-500 font-medium">Voici tes candidatures aujourd'hui.</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
                <span className="text-xs">🚀</span>
                <span className="text-[9px] font-semibold text-indigo-700">L'Innovateur</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Candidatures", value: "12", icon: Briefcase, bg: "bg-indigo-50", color: "text-indigo-600" },
                { label: "Entretiens", value: "4", icon: Calendar, bg: "bg-purple-50", color: "text-purple-600" },
                { label: "Matchs", value: "28", icon: Eye, bg: "bg-blue-50", color: "text-blue-600" },
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm"
                  >
                    <div className={`p-1.5 rounded-lg ${stat.bg} w-fit mb-1.5`}>
                      <StatIcon size={11} className={stat.color} />
                    </div>
                    <p className="text-base font-extrabold text-slate-900 leading-none">{stat.value}</p>
                    <p className="text-[8px] text-slate-400 font-medium mt-0.5">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Offers list */}
            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-2.5">
                <h5 className="text-[11px] font-bold text-slate-800">Offres pour toi</h5>
                <span className="text-[8px] text-indigo-600 font-semibold">Tout voir →</span>
              </div>
              <div className="space-y-2">
                {[
                  { title: "Product Manager Junior", company: "TechFlow SAS", contract: "CDI", location: "Paris", score: 96, color: "#4F46E5" },
                  { title: "Growth Marketing", company: "Nextera Solutions", contract: "Stage", location: "Lyon", score: 91, color: "#059669" },
                ].map((offer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.12 }}
                    className="flex items-center gap-2.5 p-2 rounded-lg border border-slate-100 hover:border-indigo-100 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 shadow-sm" style={{ background: offer.color }}>
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <rect width="36" height="36" fill={offer.color} />
                        <path d="M10 12h16v3H10zm0 5h10v3H10zm0 5h13v3H10z" fill="white" opacity="0.8" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-900 truncate">{offer.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] text-slate-400 font-medium truncate">{offer.company}</span>
                        <span className="text-[8px] font-bold text-white bg-indigo-500 px-1.5 py-0.5 rounded">{offer.contract}</span>
                        <span className="text-[8px] text-slate-400 flex items-center gap-0.5"><MapPin size={7}/>{offer.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 shrink-0">
                      <Zap size={9} fill="currentColor" />{offer.score}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pipeline peek */}
            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-2.5">
                <h5 className="text-[11px] font-bold text-slate-800">Suivi candidature</h5>
                <span className="text-[8px] text-indigo-600 font-semibold">Tout voir →</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 36 36" className="w-5 h-5"><path d="M6 10h24v4H6zm0 6h16v4H6zm0 6h20v4H6z" fill="white" opacity="0.8"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-slate-900">Product Manager Junior</p>
                  <p className="text-[8px] text-slate-400">TechFlow SAS · Paris</p>
                </div>
                <span className="text-[8px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">Présélectionné</span>
              </div>
              {/* Mini pipeline */}
              <div className="flex items-center gap-0 mt-2.5 px-1">
                {["Envoyée", "Vue", "Shortlist", "Entretien", "Offre"].map((step, i) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold shrink-0 ${
                      i < 2 ? "bg-indigo-500 text-white" : i === 2 ? "bg-white border-2 border-purple-400 text-purple-600 ring-2 ring-purple-100" : "bg-slate-100 text-slate-400 border border-slate-200"
                    }`}>
                      {i < 2 ? <CheckCircle2 size={8} /> : i + 1}
                    </div>
                    {i < 4 && <div className={`flex-1 h-[2px] mx-0.5 rounded-full ${i < 2 ? "bg-indigo-400" : "bg-slate-200"}`} />}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1 px-0.5">
                {["Envoyée", "Vue", "Shortlist", "Entretien", "Offre"].map((step, i) => (
                  <span key={step} className={`text-[6px] font-bold text-center flex-1 ${i === 2 ? "text-purple-600" : i < 2 ? "text-indigo-500" : "text-slate-300"}`}>{step}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====== FLOATING BREAKOUT ELEMENTS ====== */}

        {/* Match notification — top right, breaks out */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
          className="absolute -top-5 -right-4 lg:-right-8 z-20"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="bg-white rounded-2xl p-3.5 shadow-xl shadow-indigo-100/60 border border-slate-100 w-[190px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
                <Sparkles size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-900">Nouveau match !</p>
                <p className="text-[8px] text-slate-400 font-medium">Il y a 2 min</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-2 border border-emerald-100">
              <span className="text-[10px] font-bold text-emerald-700">TechFlow SAS</span>
              <span className="text-[10px] font-extrabold text-emerald-600">96%</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Rotating match notifications — mid left, breaks out */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
          className="absolute top-[45%] -translate-y-1/2 -left-4 lg:-left-10 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="bg-white rounded-xl p-3 shadow-xl shadow-purple-100/50 border border-slate-100 w-[155px]"
          >
            <AnimatePresence mode="wait">
              {activeNotif === 0 && (
                <motion.div key="n0" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Brain size={12} className="text-indigo-500" />
                    <span className="text-[9px] font-bold text-indigo-600">Profil analysé</span>
                  </div>
                  <div className="space-y-1">
                    {["Leadership", "Créativité", "Adaptabilité"].map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className="text-[8px] font-medium text-slate-500 w-16">{s}</span>
                        <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: s === "Leadership" ? "92%" : s === "Créativité" ? "87%" : "78%" }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeNotif === 1 && (
                <motion.div key="n1" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Heart size={12} className="text-pink-500" />
                    <span className="text-[9px] font-bold text-pink-600">Culture Fit</span>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {["Innovation", "Autonomie", "Impact"].map((v) => (
                      <span key={v} className="text-[7px] font-bold bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded border border-pink-100">{v}</span>
                    ))}
                  </div>
                  <p className="text-[8px] text-slate-400 font-medium mt-1.5">Très compatible avec TechFlow</p>
                </motion.div>
              )}
              {activeNotif === 2 && (
                <motion.div key="n2" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <TrendingUp size={12} className="text-emerald-500" />
                    <span className="text-[9px] font-bold text-emerald-600">Cette semaine</span>
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 leading-none">+3</p>
                  <p className="text-[8px] text-slate-400 font-medium mt-0.5">nouvelles offres matchées</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* AI badge — bottom right, breaks out */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 300, damping: 20 }}
          className="absolute -bottom-3 -right-2 lg:-right-5 z-20"
        >
          <motion.div
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-300/40"
          >
            <Brain size={16} />
            <div>
              <p className="text-[10px] font-bold leading-none">Hiron AI</p>
              <p className="text-[8px] font-medium text-indigo-200">Analyse active</p>
            </div>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Subtle orbiting rings */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.06 }}>
          <motion.circle cx="50%" cy="50%" r="220" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="8 8"
            initial={{ rotate: 0 }} animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </div>
    </motion.div>
  );
};


// ─── Hero Section (exported) ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const HeroSection = () => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-40 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      <motion.div className="flex-1 text-center lg:text-left" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm"
        >
          <Sparkles size={14} />
          <span>L&apos;IA au service de votre carrière</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
          Le recrutement <br className="hidden lg:block" />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">qui a du sens.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
          Hiry analyse en profondeur les soft skills, les aspirations et la culture d&apos;entreprise pour créer des matchs parfaits. Fini les CV ignorés.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link href="/candidats" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            Je suis candidat <ArrowRight size={18} />
          </Link>
          <Link href="/entreprises" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">
            Je recrute
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center lg:justify-start gap-4">
          <div className="flex -space-x-2">
            {["bg-indigo-500", "bg-pink-500", "bg-emerald-500", "bg-amber-500"].map((color, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} className="text-amber-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Rejoint par <span className="text-slate-900 font-bold">15,000+</span> talents
            </p>
          </div>
        </motion.div>
      </motion.div>

      <HeroAppPreview />
    </div>
  );
};
