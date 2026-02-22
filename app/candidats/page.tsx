"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, Target, Zap, Heart, Shield,
  Building2, Compass, Rocket, Star, MessageSquare,
  Briefcase, Calendar, Eye, MapPin, Search, UserCheck,
  Handshake, Mail, Linkedin, Twitter, Menu, X, Plus, Minus,
  TrendingUp, Play, ChevronRight, CheckCircle2, XCircle,
  FileText, Ghost, Clock, Send, BarChart3
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ════════════════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════════
   ANIMATED HERO BACKGROUND
   ═══════════════════════════════════════════════════════════════ */
const HeroBackground = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    dur: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="hero-orb-1 absolute w-[700px] h-[700px] -top-[200px] -left-[200px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)" }} />
      <div className="hero-orb-2 absolute w-[600px] h-[600px] top-[5%] right-[-15%] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)" }} />
      <div className="hero-orb-3 absolute w-[500px] h-[500px] bottom-[-10%] left-[20%] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[50%] opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        transform: "perspective(500px) rotateX(60deg)",
        transformOrigin: "bottom center",
      }} />
      {particles.map((p) => (
        <div key={p.id} className="particle absolute rounded-full bg-indigo-400" style={{
          left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`,
          opacity: 0.15,
          animation: `float-particle ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }} />
      ))}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05]" style={{
        background: "conic-gradient(from 0deg, transparent 0deg, rgba(99,102,241,0.3) 30deg, transparent 60deg, transparent 120deg, rgba(168,85,247,0.2) 150deg, transparent 180deg, transparent 240deg, rgba(59,130,246,0.2) 270deg, transparent 300deg)",
        filter: "blur(40px)",
        animation: "slow-rotate 25s linear infinite",
      }} />
      <div className="absolute inset-0 opacity-[0.018]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   DASHBOARD MOCKUP
   ═══════════════════════════════════════════════════════════════ */
const DashboardMockup = () => {
  const [hoveredOffer, setHoveredOffer] = useState(-1);
  const stats = [
    { label: "Candidatures envoyées", value: "12", change: "+3", icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Entretiens prévus", value: "4", change: "+1", icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Matchs excellents", value: "28", change: "47 total", icon: Eye, color: "text-blue-600", bg: "bg-blue-50" },
  ];
  const matches = [
    { title: "UX Designer Junior", company: "Doctolib", score: 96, contract: "Alternance", location: "Paris", logo: "D" },
    { title: "Product Manager Stagiaire", company: "BlaBlaCar", score: 91, contract: "Stage", location: "Paris", logo: "B" },
    { title: "Data Analyst", company: "Qonto", score: 88, contract: "Alternance", location: "Remote", logo: "Q" },
  ];
  const apps = [
    { company: "Swile", logo: "S", poste: "Chef de projet digital", status: "Entretien", sBg: "bg-amber-100", sText: "text-amber-600" },
    { company: "Alan", logo: "A", poste: "Growth Marketing", status: "Vue", sBg: "bg-indigo-100", sText: "text-indigo-600" },
    { company: "Pennylane", logo: "P", poste: "Développeur Front", status: "Envoyée", sBg: "bg-blue-100", sText: "text-blue-600" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 md:-inset-12 bg-gradient-to-br from-indigo-300/20 via-purple-300/15 to-blue-300/20 rounded-[3rem] blur-3xl" />
      <motion.div initial={{ y: 60, opacity: 0, rotateX: 6 }} animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ perspective: "1200px" }} className="relative">
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-indigo-200/30 border border-slate-200/60 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
            <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /></div>
            <div className="flex-1 flex justify-center"><div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg"><div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3px]" /><span className="text-[10px] text-slate-400 font-medium">app.hiry.ai/student/dashboard</span></div></div>
          </div>
          <div className="p-3 md:p-5 bg-[#f8f9fb]">
            <div className="flex items-end justify-between mb-3">
              <div><h4 className="text-sm md:text-base font-bold text-slate-900">Bonjour, Maxime 👋</h4><p className="text-[10px] md:text-xs text-slate-500">Voici ce qui se passe avec tes candidatures aujourd&apos;hui.</p></div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100"><span className="text-xs">🚀</span><span className="text-[9px] font-semibold text-indigo-700">L&apos;Innovateur</span></div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 md:p-4 text-white mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5"><div className="p-1.5 bg-white/20 rounded-lg"><Sparkles size={14} /></div><div><p className="text-[11px] md:text-xs font-bold">Passe ton entretien avec Hiron</p><p className="text-[9px] text-white/70">Débloque le matching intelligent</p></div></div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-indigo-700 rounded-lg text-[10px] font-bold shrink-0"><Play size={10} /> Commencer</div>
            </motion.div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {stats.map((s, i) => { const Icon = s.icon; return (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }}
                  className="bg-white p-2 md:p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-1.5"><div className={`p-1 md:p-1.5 rounded-lg ${s.bg}`}><Icon size={10} className={s.color} /></div><span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">{s.change}</span></div>
                  <p className="text-sm md:text-lg font-extrabold text-slate-900 leading-none">{s.value}</p><p className="text-[7px] md:text-[8px] text-slate-400 font-medium mt-0.5">{s.label}</p>
                </motion.div>
              ); })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-3">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="md:col-span-3 bg-white rounded-xl border border-slate-100 shadow-sm p-3">
                <div className="flex justify-between items-center mb-2.5"><h5 className="text-[10px] md:text-xs font-bold text-slate-800">Candidatures récentes</h5><span className="text-[8px] text-indigo-600 font-semibold flex items-center gap-0.5">Tout voir <ChevronRight size={8} /></span></div>
                <div className="space-y-1.5">{apps.map((a, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500">{a.logo}</div><div><p className="text-[10px] font-bold text-slate-900 leading-tight">{a.company}</p><p className="text-[8px] text-slate-400">{a.poste}</p></div></div>
                    <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${a.sBg} ${a.sText}`}>{a.status}</span>
                  </div>
                ))}</div>
              </motion.div>
              <div className="md:col-span-2 space-y-2 md:space-y-3">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-3 rounded-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 -mr-6 -mt-6" />
                  <div className="relative z-10"><div className="flex items-center gap-1.5 mb-2"><div className="p-1 bg-white/10 rounded-md"><Zap size={10} className="text-yellow-400" /></div><span className="text-[10px] font-bold">Smart Match</span></div>
                    <p className="text-[8px] text-gray-300 mb-2"><span className="text-white font-bold">28 offres</span> compatibles à +80%</p>
                    <div className="flex items-center justify-center gap-1 px-2 py-1.5 bg-white text-gray-900 rounded-lg text-[9px] font-bold">Voir les opportunités <ArrowRight size={8} /></div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3">
                  <h5 className="text-[10px] md:text-xs font-bold text-slate-800 mb-2">Offres pour toi</h5>
                  <div className="space-y-1.5">{matches.map((m, i) => (
                    <div key={i} onMouseEnter={() => setHoveredOffer(i)} onMouseLeave={() => setHoveredOffer(-1)}
                      className={`flex items-center gap-2 p-2 rounded-lg border transition-all cursor-pointer ${hoveredOffer === i ? "border-indigo-200 shadow-sm bg-indigo-50/30" : "border-transparent"}`}>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">{m.logo}</div>
                      <div className="flex-1 min-w-0"><p className="text-[9px] font-bold text-slate-900 truncate">{m.title}</p><div className="flex items-center gap-1 mt-0.5"><span className="text-[7px] text-slate-400">{m.company}</span><span className="text-[6px] font-semibold bg-indigo-50 text-indigo-600 px-1 py-0.5 rounded">{m.contract}</span></div></div>
                      <span className="text-[8px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100 flex items-center gap-0.5 shrink-0"><Sparkles size={7} />{m.score}%</span>
                    </div>
                  ))}</div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, type: "spring", stiffness: 300, damping: 20 }} className="absolute -bottom-4 -right-2 md:-right-8 z-20">
        <motion.div animate={{ rotate: [0, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-xl shadow-lg shadow-indigo-300/40">
          <Brain size={14} /><div><p className="text-[10px] font-bold leading-none">Hiron AI</p><p className="text-[8px] text-indigo-200">Analyse active</p></div><span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.0, type: "spring", stiffness: 300, damping: 20 }} className="absolute -top-3 -left-2 md:-left-8 z-20">
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-lg border border-emerald-100">
          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center"><TrendingUp size={12} className="text-emerald-600" /></div>
          <div><p className="text-[10px] font-bold text-slate-900 leading-none">+3 ce matin</p><p className="text-[8px] text-slate-400">nouvelles offres</p></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION — Updated H1
   ═══════════════════════════════════════════════════════════════ */
const HeroSection = () => (
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
    <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
      <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm"><Sparkles size={14} /><span>Pour les Candidats & Étudiants</span></motion.div>
      <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
        <span className="relative inline-block"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Le stage</span><motion.span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200/50 to-purple-200/50 rounded-full -z-10" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} style={{ originX: 0 }} /></span>, <span className="relative inline-block"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">l&apos;alternance</span></span>{" "}ou <span className="relative inline-block"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">le premier emploi</span></span><br className="hidden sm:block" /> de tes rêves.
      </motion.h1>
      <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">Ton potentiel ne tient pas sur une page. Dis-nous qui tu es, et on te présente les entreprises faites pour toi.</motion.p>
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#" className="group w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">Révéler mon potentiel <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></a>
        <a href="#how" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">Comment ça marche</a>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4">
        <div className="flex -space-x-2">{["bg-indigo-500","bg-pink-500","bg-emerald-500","bg-amber-500"].map((c,i)=>(<div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>{String.fromCharCode(65+i)}</div>))}</div>
        <div><div className="flex items-center gap-0.5">{[1,2,3,4,5].map(s=><Star key={s} size={12} className="text-amber-400" fill="currentColor" />)}</div><p className="text-xs text-slate-500 font-medium">Rejoint par <span className="text-slate-900 font-bold">15,000+</span> talents</p></div>
      </motion.div>
    </motion.div>
    <div className="mt-14 md:mt-20 max-w-5xl mx-auto"><DashboardMockup /></div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   TRUST BAND
   ═══════════════════════════════════════════════════════════════ */
const TrustBand = () => (
  <div className="relative z-10 py-12 md:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Ils nous supportent</p><div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">{["Pépite France","Viva Technology","L'Escalator","Google for Startups","Paris School of Business"].map(l=><span key={l} className="text-sm md:text-base font-extrabold text-slate-900 whitespace-nowrap">{l}</span>)}</div></div></div>
);

/* ═══════════════════════════════════════════════════════════════
   PAIN POINT
   ═══════════════════════════════════════════════════════════════ */
const PainPointSection = () => (
  <section className="relative z-10 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-500 text-xs font-bold mb-5"><Shield size={14} /><span>Le recrutement ne devrait pas être une épreuve</span></div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">La fin du parcours{" "}<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">du combattant</span></h2>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 flex items-center">
      <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">Nous remplaçons un processus brisé par une expérience simple, intelligente et humaine. Chaque fonctionnalité est pensée pour te redonner le contrôle.</p>
    </motion.div>
  </div></div></section>
);

/* ═══════════════════════════════════════════════════════════════
   BENTO FEATURES — Row1 [7|5], Row2 [5|7], Row3 [6|6]
   ═══════════════════════════════════════════════════════════════ */
const bColors: Record<string, { icon: string; shadow: string; glow: string }> = {
  indigo: { icon: "from-indigo-500 to-indigo-600", shadow: "shadow-indigo-100/40", glow: "bg-indigo-100/50" },
  purple: { icon: "from-purple-500 to-purple-600", shadow: "shadow-purple-100/40", glow: "bg-purple-100/50" },
  blue: { icon: "from-blue-500 to-blue-600", shadow: "shadow-blue-100/40", glow: "bg-blue-100/50" },
  emerald: { icon: "from-emerald-500 to-emerald-600", shadow: "shadow-emerald-100/40", glow: "bg-emerald-100/50" },
  amber: { icon: "from-amber-500 to-amber-600", shadow: "shadow-amber-100/40", glow: "bg-amber-100/50" },
  pink: { icon: "from-pink-500 to-pink-600", shadow: "shadow-pink-100/40", glow: "bg-pink-100/50" },
};

const BCard = ({ icon: Icon, title, desc, color, children, className = "" }: { icon: any; title: string; desc: string; color: string; children: React.ReactNode; className?: string }) => {
  const c = bColors[color];
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      className={`group relative rounded-[2rem] overflow-hidden ${className}`}>
      <div className={`absolute -inset-[1px] bg-gradient-to-br ${c.icon} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]`} />
      <div className="relative bg-white rounded-[2rem] p-6 md:p-8 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
        <div className={`absolute top-0 right-0 w-48 h-48 ${c.glow} rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150`} />
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-11 h-11 bg-gradient-to-br ${c.icon} text-white rounded-xl flex items-center justify-center shadow-lg ${c.shadow} shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}><Icon size={20} /></div>
            <h3 className="text-base md:text-lg font-extrabold text-slate-900">{title}</h3>
          </div>
          <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">{desc}</p>
          <div className="mt-auto">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoFeatures = () => (
  <section className="relative z-10 py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <BCard icon={UserCheck} title="Un profil qui te ressemble" desc="Exprime qui tu es via une conversation intuitive. Soft skills, projets, ambitions." color="indigo" className="md:col-span-7">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center"><Brain size={18} className="text-indigo-600" /></div><div className="flex-1 space-y-1.5"><div className="h-2 bg-indigo-300 rounded-full w-4/5" /><div className="h-2 bg-indigo-200 rounded-full w-3/5" /></div></div>
            <div className="grid grid-cols-3 gap-2">{["Créatif","Analytique","Leader"].map(t=><span key={t} className="text-center py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-[10px] font-bold text-indigo-600">{t}</span>)}</div>
            <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100"><span className="text-xs">🚀</span><span className="text-[10px] font-semibold text-indigo-700">Archétype : L&apos;Innovateur</span></div>
          </div>
        </BCard>
        <BCard icon={Target} title="Des matchs, pas des listes" desc="Notre IA te propose uniquement des offres pertinentes." color="purple" className="md:col-span-5">
          <div className="space-y-2.5">{[{l:"A",s:96},{l:"B",s:88},{l:"C",s:74}].map((d,i)=>(
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-purple-100 flex items-center justify-center text-[9px] font-bold text-purple-600">{d.l}</div>
              <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: `${d.s}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.2 }} className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" /></div>
              <span className="text-xs font-bold text-purple-600 w-10 text-right">{d.s}%</span>
            </div>
          ))}</div>
        </BCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <BCard icon={Eye} title="Transparence totale" desc="On t'explique pourquoi tu matche. Postule moins, postule mieux." color="blue" className="md:col-span-5">
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 space-y-2">
            <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-blue-600" /><span className="text-[11px] font-bold text-blue-700">Pourquoi ce match ?</span></div>
            {["Culture : Innovation & Agilité","Soft skill : Créativité (95%)","Valeur : Impact social"].map((t,i)=>(
              <div key={i} className="flex items-center gap-2 py-0.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" /><span className="text-[10px] text-blue-600 font-medium">{t}</span></div>
            ))}
          </div>
        </BCard>
        <BCard icon={Building2} title="La vraie culture d'entreprise" desc="ADN des entreprises : management, ambiance, valeurs." color="emerald" className="md:col-span-7">
          <div className="grid grid-cols-3 gap-3">{[{n:"Innovation",v:92},{n:"Bien-être",v:88},{n:"Croissance",v:95}].map((d,i)=>(
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
              <div className="text-2xl font-extrabold text-emerald-600">{d.v}%</div><div className="text-[9px] text-emerald-500 font-semibold mt-0.5">{d.n}</div>
            </motion.div>
          ))}</div>
        </BCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BCard icon={Rocket} title="Simple et rapide" desc="De la création de ton profil à la prise de contact, tout est fluide." color="amber">
          <div className="flex items-center gap-2 flex-wrap">{["7 min","→","Profil IA","→","Matchs"].map((t,i)=>i%2===0?<span key={i} className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-[10px] font-bold text-amber-700">{t}</span>:<span key={i} className="text-amber-300 text-lg">→</span>)}</div>
        </BCard>
        <BCard icon={Compass} title="Une mission, pas un job" desc="On te connecte où tu pourras apprendre, avoir un impact, t'épanouir." color="pink">
          <div className="flex items-center gap-3 p-3 bg-pink-50/60 rounded-xl border border-pink-100">
            <div className="w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center"><Heart size={16} className="text-pink-500" /></div>
            <div className="flex-1"><div className="text-[11px] font-bold text-pink-700">Score d&apos;épanouissement</div><div className="text-[9px] text-pink-400">Environnement idéal détecté</div></div>
            <span className="text-xl font-extrabold text-pink-600">94%</span>
          </div>
        </BCard>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS — Rebuilt like reference video
   - Full-height scroll container (300vh for 3 steps)
   - Sticky viewport-filling panel with 2 columns
   - Left: badge icon + large title + description + CTA (all crossfade)
   - Right: large rounded card with animated gradient mesh bg + white UI card
   - Gradient bg changes color per step (indigo/blue → pink → orange/pink)
   ═══════════════════════════════════════════════════════════════ */
interface StepContent {
  icon: any;
  badge: string;
  title: string;
  desc: string;
  cta: string;
  gradient: string;
  meshColors: { c1: string; c2: string; c3: string };
  visual: React.ReactNode;
}

const howSteps: StepContent[] = [
  {
    icon: UserCheck,
    badge: "PROFIL",
    title: "Révèle ton potentiel en 7 minutes",
    desc: "Personnalité, soft skills, aspirations : Hiron te pose les bonnes questions et construit un profil bien plus riche qu'un CV. Importe ton CV si tu veux accélérer, notre IA le transforme.",
    cta: "Créer mon profil",
    gradient: "from-indigo-500 to-indigo-600",
    meshColors: { c1: "rgba(99,102,241,0.4)", c2: "rgba(129,140,248,0.35)", c3: "rgba(165,180,252,0.3)" },
    visual: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center"><Brain size={22} className="text-indigo-600" /></div>
          <div><p className="text-sm font-bold text-slate-900">Analyse IA en cours...</p><p className="text-xs text-slate-400">Détection soft skills</p></div>
        </div>
        {[{ n: "Créativité", w: "95%" }, { n: "Leadership", w: "82%" }, { n: "Analytique", w: "78%" }].map((s, i) => (
          <div key={i}>
            <div className="flex justify-between text-[11px] mb-1"><span className="font-semibold text-slate-700">{s.n}</span><span className="text-indigo-600 font-bold">{s.w}</span></div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: s.w }} /></div>
          </div>
        ))}
        <div className="flex gap-2 pt-1">{["🚀 Innovateur", "💡 Créatif", "📊 Stratège"].map(t => <span key={t} className="px-2 py-1 bg-indigo-50 border border-indigo-100 rounded-md text-[9px] font-bold text-indigo-600">{t}</span>)}</div>
      </div>
    ),
  },
  {
    icon: Search,
    badge: "MATCHING",
    title: "Découvre tes matchs, pas des listes",
    desc: "Notre IA croise ton profil de potentiel avec l'ADN des entreprises. Pour chaque match, on t'explique pourquoi tu es compatible. Zéro candidature à l'aveugle.",
    cta: "Voir mes matchs",
    gradient: "from-purple-500 to-pink-500",
    meshColors: { c1: "rgba(168,85,247,0.4)", c2: "rgba(236,72,153,0.35)", c3: "rgba(244,114,182,0.3)" },
    visual: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between mb-1"><p className="text-sm font-bold text-slate-900">Tes top matches</p><span className="text-[10px] text-purple-600 font-semibold">Score IA</span></div>
        {[{ t: "UX Designer — Doctolib", s: 96, c: "Alternance" }, { t: "PM — BlaBlaCar", s: 91, c: "Stage" }, { t: "Data Analyst — Qonto", s: 88, c: "CDI" }].map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-purple-200 transition-all">
            <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">{m.t[0]}</div>
            <div className="flex-1"><p className="text-xs font-bold text-slate-900">{m.t}</p><span className="text-[9px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded font-medium">{m.c}</span></div>
            <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">{m.s}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Handshake,
    badge: "CONNEXION",
    title: "Connecte-toi et décroche ta mission",
    desc: "Contact direct avec les recruteurs. Dashboard centralisé pour suivre tes candidatures. Plus de ghosting : transparence totale sur le statut.",
    cta: "Commencer maintenant",
    gradient: "from-orange-500 to-rose-500",
    meshColors: { c1: "rgba(249,115,22,0.35)", c2: "rgba(244,63,94,0.35)", c3: "rgba(251,146,60,0.3)" },
    visual: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center"><Handshake size={22} className="text-emerald-600" /></div>
          <div><p className="text-sm font-bold text-slate-900">Match confirmé ! 🎉</p><p className="text-xs text-slate-400">Contact direct activé</p></div>
        </div>
        {[{ s: "Candidature envoyée", ok: true }, { s: "Profil consulté par le recruteur", ok: true }, { s: "Entretien planifié — Mardi 14h", ok: true }, { s: "Offre reçue", ok: false }].map((step, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-6 h-6 rounded-full ${step.ok ? 'bg-emerald-500' : 'bg-slate-200'} flex items-center justify-center`}>{step.ok ? <CheckCircle2 size={14} className="text-white" /> : <div className="w-2 h-2 rounded-full bg-slate-400" />}</div>
            <span className={`text-xs font-medium ${step.ok ? 'text-slate-900' : 'text-slate-400'}`}>{step.s}</span>
          </div>
        ))}
      </div>
    ),
  },
];

/* ─── Single step layer (rendered all 3 simultaneously, opacity driven by scroll) ─── */
const StepLayer = ({ step, opacity, yOffset, scale }: { step: StepContent; opacity: any; yOffset: any; scale: any }) => {
  const Icon = step.icon;
  return (
    <motion.div style={{ opacity, y: yOffset, scale }} className="absolute inset-0 flex items-center will-change-transform">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className={`w-10 h-10 bg-gradient-to-br ${step.gradient} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                <Icon size={20} />
              </div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.15em]">{step.badge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl xl:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {step.title}
            </h3>
            <p className="text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-lg">
              {step.desc}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors group">
              {step.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Right — gradient mesh card */}
          <div className="flex items-center justify-center">
            <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-10 w-full" style={{ minHeight: "420px" }}>
              <div className="absolute inset-0" style={{
                background: `
                  radial-gradient(ellipse at 20% 20%, ${step.meshColors.c1} 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 30%, ${step.meshColors.c2} 0%, transparent 50%),
                  radial-gradient(ellipse at 50% 90%, ${step.meshColors.c3} 0%, transparent 60%),
                  linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)
                `,
              }} />
              <div className="relative z-10 flex items-center justify-center min-h-[340px]">
                <div className="w-full max-w-sm">{step.visual}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Smooth crossfade with wider overlap zones for buttery transitions
  // Step 0: fully visible → long crossfade out
  const opacity0 = useTransform(scrollYProgress, [0, 0.25, 0.38], [1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.25, 0.38], [0, 0, -50]);
  const scale0 = useTransform(scrollYProgress, [0, 0.25, 0.38], [1, 1, 0.97]);
  // Step 1: fade in ← overlap with step 0 → fade out
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.38, 0.58, 0.72], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.25, 0.38, 0.58, 0.72], [50, 0, 0, -50]);
  const scale1 = useTransform(scrollYProgress, [0.25, 0.38, 0.58, 0.72], [0.97, 1, 1, 0.97]);
  // Step 2: fade in ← overlap with step 1 → hold
  const opacity2 = useTransform(scrollYProgress, [0.58, 0.72, 1], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.58, 0.72, 1], [50, 0, 0]);
  const scale2 = useTransform(scrollYProgress, [0.58, 0.72, 1], [0.97, 1, 1]);

  // Progress dots
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.35) setActive(0);
    else if (v < 0.68) setActive(1);
    else setActive(2);
  });

  return (
    <section id="how" className="relative z-10">
      {/* ═══ Desktop: Full scroll-driven sticky ═══ */}
      <div className="hidden lg:block">
        {/* Section header — outside the scroll container so it doesn't affect scroll progress */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm"><Rocket size={14} /><span>Simple et puissant</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">Comment ça <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">marche ?</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Trois étapes pour trouver ta mission.</p>
        </motion.div>

        {/* Scroll driver — tall div that creates the scroll distance */}
        <div ref={containerRef} style={{ height: "300vh" }}>
          {/* Sticky viewport panel — all 3 steps stacked as absolute layers */}
          <div className="sticky top-0 h-screen w-full bg-[#fafafa]" style={{ zIndex: 2 }}>
            <StepLayer step={howSteps[0]} opacity={opacity0} yOffset={y0} scale={scale0} />
            <StepLayer step={howSteps[1]} opacity={opacity1} yOffset={y1} scale={scale1} />
            <StepLayer step={howSteps[2]} opacity={opacity2} yOffset={y2} scale={scale2} />

            {/* Progress dots */}
            <div className="absolute bottom-20 inset-x-0 flex justify-center" style={{ zIndex: 10 }}>
              <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map(i => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ease-out ${active === i ? "w-10 bg-slate-900" : "w-3 bg-slate-200"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Mobile: stacked cards ═══ */}
      <div className="lg:hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center px-4 sm:px-6 pt-24 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm"><Rocket size={14} /><span>Simple et puissant</span></div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Comment ça <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">marche ?</span></h2>
          <p className="text-slate-500 font-medium text-base max-w-md mx-auto">Trois étapes pour trouver ta mission.</p>
        </motion.div>
        <div className="px-4 sm:px-6 pb-20 space-y-12">
          {howSteps.map((s, i) => {
            const SIcon = s.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${s.gradient} text-white rounded-xl flex items-center justify-center shadow-lg`}><SIcon size={20} /></div>
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.15em]">{s.badge}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">{s.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900">
                    {s.cta} <ArrowRight size={14} />
                  </a>
                </div>
                <div className="relative rounded-2xl overflow-hidden p-5" style={{
                  background: `
                    radial-gradient(ellipse at 20% 20%, ${s.meshColors.c1} 0%, transparent 60%),
                    radial-gradient(ellipse at 80% 30%, ${s.meshColors.c2} 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 90%, ${s.meshColors.c3} 0%, transparent 60%),
                    linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)
                  `,
                }}>
                  {s.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   BEFORE / AFTER — Replaces Manifesto
   ═══════════════════════════════════════════════════════════════ */
const BeforeAfterSection = () => {
  const befores = [
    { icon: FileText, text: "Jugé sur un CV de 2 pages" },
    { icon: Send, text: "Des dizaines de candidatures à l'aveugle" },
    { icon: Ghost, text: "Ghosting et aucune visibilité" },
    { icon: Clock, text: "Des semaines d'attente sans réponse" },
    { icon: BarChart3, text: "Aucune explication sur les refus" },
  ];
  const afters = [
    { icon: Brain, text: "Un profil de potentiel complet en 7 min" },
    { icon: Target, text: "Des matchs ultra-pertinents, expliqués" },
    { icon: Eye, text: "Transparence totale sur la compatibilité" },
    { icon: Zap, text: "Contact direct et rapide avec les recruteurs" },
    { icon: Heart, text: "Trouve un environnement où tu t'épanouis" },
  ];

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm"><Sparkles size={14} /><span>Le changement</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Avant <span className="text-slate-300">vs</span> <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Avec Hiry</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* BEFORE */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/40 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><XCircle size={24} className="text-red-500" /></div>
                <div><h3 className="text-xl font-extrabold text-slate-900">Avant</h3><p className="text-sm text-red-500 font-bold">Le parcours du combattant</p></div>
              </div>
              <div className="space-y-4">
                {befores.map((b, i) => { const BIcon = b.icon; return (
                  <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0"><BIcon size={18} className="text-red-400" /></div>
                    <p className="text-sm font-semibold text-slate-600">{b.text}</p>
                  </motion.div>
                ); })}
              </div>
            </div>
          </motion.div>
          {/* AFTER */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -ml-10 -mb-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"><CheckCircle2 size={24} className="text-emerald-400" /></div>
                <div><h3 className="text-xl font-extrabold text-white">Avec Hiry</h3><p className="text-sm text-emerald-300 font-bold">L&apos;intelligence au service du talent</p></div>
              </div>
              <div className="space-y-4">
                {afters.map((a, i) => { const AIcon = a.icon; return (
                  <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0"><AIcon size={18} className="text-white" /></div>
                    <p className="text-sm font-semibold text-white">{a.text}</p>
                  </motion.div>
                ); })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PROMISE — Animated counters + rich cards
   ═══════════════════════════════════════════════════════════════ */
const Counter = ({ target, suffix = "%" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, { threshold: 0.5 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!seen) return;
    let s = 0; const step = Math.max(1, Math.ceil(target / 40));
    const t = setInterval(() => { s += step; if (s >= target) { setCount(target); clearInterval(t); } else setCount(s); }, 30);
    return () => clearInterval(t);
  }, [seen, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const PromiseSection = () => (
  <section className="relative z-10 py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-100 text-purple-600 text-xs font-bold mb-5 shadow-sm"><Heart size={14} /><span>Notre promesse</span></div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Ce que Hiry <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">change pour toi</span></h2>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { icon: Sparkles, title: "Le Potentiel", sub: "Révèle qui tu es", stat: 7, suf: " min", sLabel: "pour créer ton profil IA", gradient: "from-indigo-500 to-purple-500", items: ["Analyse de personnalité","Cartographie soft skills","Archétype unique détecté"] },
        { icon: Target, title: "La Pertinence", sub: "Reçois des offres", stat: 96, suf: "%", sLabel: "de précision du matching", gradient: "from-purple-500 to-pink-500", items: ["Matching multicritères","Explication transparente","0 candidature inutile"] },
        { icon: Heart, title: "La Connexion", sub: "Trouve ta place", stat: 3, suf: "x", sLabel: "plus de chances d'être recruté", gradient: "from-pink-500 to-rose-500", items: ["Contact direct recruteur","Suivi en temps réel","Zéro ghosting garanti"] },
      ].map((p, i) => { const PIcon = p.icon; return (
        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
          className="group relative rounded-[2rem] overflow-hidden">
          <div className={`absolute -inset-[1px] bg-gradient-to-br ${p.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]`} />
          <div className="relative bg-white rounded-[2rem] p-7 md:p-8 h-full border border-slate-100 group-hover:border-transparent transition-colors duration-500">
            <div className={`w-14 h-14 bg-gradient-to-br ${p.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg mb-5 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}><PIcon size={24} /></div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">{p.title}</h3>
            <p className="text-sm font-bold text-indigo-600 mb-5">{p.sub}</p>
            <div className="mb-5 p-4 bg-slate-50 rounded-xl border border-slate-100 text-center"><div className="text-3xl font-extrabold text-slate-900"><Counter target={p.stat} suffix={p.suf} /></div><p className="text-xs text-slate-500 font-medium mt-1">{p.sLabel}</p></div>
            <div className="space-y-2.5">{p.items.map((item, j) => (
              <div key={j} className="flex items-center gap-2.5"><div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><CheckCircle2 size={12} className="text-emerald-600" /></div><span className="text-sm text-slate-600 font-medium">{item}</span></div>
            ))}</div>
          </div>
        </motion.div>
      ); })}
    </div>
  </div></section>
);

/* ═══════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════ */
const faq = [
  { q: "Concrètement, c'est quoi Hiry ?", a: "Pas un job board. Une plateforme de matching IA qui analyse ta personnalité, tes soft skills et aspirations pour te connecter aux bonnes entreprises." },
  { q: "En quoi c'est différent ?", a: "On analyse ta personnalité et tes valeurs, pas des mots-clés de CV. Chaque match est expliqué en transparence." },
  { q: "Comment évaluez-vous la culture ?", a: "Hiron analyse valeurs, management et ambiance, puis croise avec ton profil de personnalité." },
  { q: "C'est gratuit ?", a: "100% gratuit pour les candidats. Les entreprises paient pour accéder aux talents." },
  { q: "Le CV est-il encore utile ?", a: "Tu peux l'importer pour accélérer, mais Hiry va bien au-delà de ce qu'un CV peut montrer." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="relative z-10 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-5/12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm"><MessageSquare size={14} /><span>FAQ</span></div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">Tes questions ? <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Nos réponses.</span></h2>
      </motion.div>
      <div className="lg:w-7/12 space-y-3">{faq.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${openIdx === i ? "bg-white border-indigo-200 shadow-lg shadow-indigo-100/30" : "bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white"}`}>
            <div className="flex items-center justify-between gap-4"><h3 className="text-sm md:text-base font-bold text-slate-900">{item.q}</h3><div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIdx === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"}`}>{openIdx === i ? <Minus size={16} /> : <Plus size={16} />}</div></div>
            <AnimatePresence>{openIdx === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="text-sm text-slate-500 font-medium leading-relaxed mt-4 pt-4 border-t border-slate-100">{item.a}</p></motion.div>)}</AnimatePresence>
          </button>
        </motion.div>
      ))}</div>
    </div></div></section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════════ */
const FinalCTA = () => (
  <section className="relative z-10 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-10 md:p-16 lg:p-20 text-center">
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/10 rounded-full blur-[80px]" /><div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-[60px]" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20"><Zap size={28} className="text-white" /></motion.div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">La bonne rencontre change tout.</h2>
        <p className="text-base md:text-lg text-indigo-200 font-medium mb-10 max-w-lg mx-auto">Rejoins des milliers de talents qui ont trouvé leur mission.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="group w-full sm:w-auto px-8 py-4 text-sm font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">Révéler mon potentiel <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></a>
          <a href="#" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center">En savoir plus</a>
        </div>
      </div>
    </motion.div>
  </div></section>
);

/* ═══════════════════════════════════════════════════════════════
   FOOTER — Updated to match homepage
   ═══════════════════════════════════════════════════════════════ */
const FooterSection = () => {
  const footerLinks = {
    Plateforme: [
      { label: "Candidats", href: "/candidats" },
      { label: "Entreprises", href: "/entreprises" },
      { label: "Écoles", href: "/ecoles" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    Ressources: [
      { label: "Blog", href: "/blog" },
      { label: "Guide du recrutement IA", href: "/guide" },
      { label: "FAQ", href: "/faq" },
      { label: "API Documentation", href: "/docs" },
    ],
    Entreprise: [
      { label: "À propos", href: "/about" },
      { label: "Carrières", href: "/carrieres" },
      { label: "Contact", href: "/contact" },
      { label: "Presse", href: "/presse" },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50"><Zap size={18} className="text-white" /></div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">Hiry<span className="text-indigo-600">.</span></span>
            </a>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mb-6">L&apos;intelligence artificielle au service d&apos;un recrutement plus juste, plus rapide et plus humain.</p>
            <div className="flex items-center gap-3">
              {[Mail, Linkedin, Twitter].map((Icon, i) => (<a key={i} href="#" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center text-slate-400 transition-all"><Icon size={16} /></a>))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">{title}</h4>
              <ul className="space-y-2.5">{items.map((item) => (<li key={item.label}><a href={item.href} className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors">{item.label}</a></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-slate-100 text-center"><p className="text-xs text-slate-400 font-medium">&copy; 2025 Hiry. Tous droits réservés.</p></div>
      </div>
    </footer>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function CandidatsPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]" style={{ overflowX: "clip" }}>
      <Navbar />
      <HeroBackground />
      <HeroSection />
      <TrustBand />
      <PainPointSection />
      <BentoFeatures />
      <HowItWorks />
      <BeforeAfterSection />
      <PromiseSection />
      <FAQSection />
      <FinalCTA />
      <FooterSection />

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(15px, -25px) scale(1.2); }
          50% { transform: translate(-10px, -50px) scale(0.8); }
          75% { transform: translate(20px, -25px) scale(1.1); }
        }
        .hero-orb-1 { animation: aur1 8s ease-in-out infinite; }
        .hero-orb-2 { animation: aur2 10s ease-in-out infinite; }
        .hero-orb-3 { animation: aur3 12s ease-in-out infinite; }
        @keyframes aur1 { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(60px,-40px) scale(1.15)} 50%{transform:translate(20px,40px) scale(.95)} 75%{transform:translate(-30px,-20px) scale(1.05)} }
        @keyframes aur2 { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(-40px,30px) scale(1.1)} 50%{transform:translate(30px,-50px) scale(.9)} 75%{transform:translate(50px,20px) scale(1.12)} }
        @keyframes aur3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.08)} 66%{transform:translate(-50px,30px) scale(.92)} }
        @keyframes slow-rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}
