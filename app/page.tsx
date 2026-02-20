"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Sparkles, Briefcase, Zap, Menu, X,
  Target, BarChart3, Users, GraduationCap, Award, MapPin,
  CheckCircle2, Brain, Handshake, Rocket, Shield,
  Star, Quote, ChevronRight, Mail, Linkedin, Twitter,
  ArrowUpRight, Clock, TrendingUp, Heart, Building2,
  BookOpen, Send, MessageSquare, Search, UserCheck, Layers,
  Calendar, Eye
} from "lucide-react";

// ============================================================================
// ANIMATED COUNTER HOOK
// ============================================================================
function useCounter(target: number, duration = 2) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration, ease: "easeOut" });
    }
  }, [isInView, target, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsubscribe;
  }, [rounded]);

  return ref;
}

// ============================================================================
// NAVBAR
// ============================================================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Candidats", href: "/candidats" },
    { label: "Entreprises", href: "/entreprises" },
    { label: "Écoles", href: "/ecoles" },
  ];

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50 group-hover:shadow-indigo-300/70 transition-shadow">
              <Zap size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Hiry<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Se connecter
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Commencer gratuitement
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-colors"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-slate-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all"
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-slate-400" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-3 border-t border-slate-100 mt-4">
                <Link
                  href="/login"
                  className="block text-center px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl transition-colors"
                >
                  Se connecter
                </Link>
                <Link
                  href="/signup"
                  className="block text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-md"
                >
                  Commencer gratuitement
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// ============================================================================
// SECTION: HOW IT WORKS
// ============================================================================
const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      number: "01",
      title: "Créez votre profil intelligent",
      description: "En quelques minutes, notre IA cartographie vos compétences, soft skills et aspirations profondes. Pas de CV classique, une vraie identité professionnelle.",
      color: "indigo" as const,
      mockup: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Brain size={18} className="text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="h-2 bg-indigo-200 rounded-full w-3/4" />
              <div className="h-2 bg-indigo-100 rounded-full w-1/2 mt-1.5" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Créatif", "Analytique", "Leader"].map((tag) => (
              <span key={tag} className="text-center px-2 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-[10px] font-bold text-indigo-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Search,
      number: "02",
      title: "L'IA analyse et matche",
      description: "Notre algorithme propriétaire croise culture d'entreprise, valeurs personnelles et compétences pour identifier les matchs à fort potentiel.",
      color: "purple" as const,
      mockup: (
        <div className="space-y-2">
          {[96, 88, 74].map((score, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="flex-1">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  />
                </div>
              </div>
              <span className="text-xs font-bold text-purple-600">{score}%</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Handshake,
      number: "03",
      title: "Connectez-vous et recrutez",
      description: "Candidats et entreprises se rencontrent sur la base de compatibilité réelle. Les écoles suivent l'insertion en temps réel.",
      color: "emerald" as const,
      mockup: (
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Users size={20} className="text-blue-600" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Heart size={24} className="text-emerald-500" />
          </motion.div>
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Building2 size={20} className="text-emerald-600" />
          </div>
        </div>
      ),
    },
  ];

  const colorMap = {
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
      gradient: "from-indigo-500 to-indigo-600",
      light: "bg-indigo-100",
      number: "text-indigo-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      gradient: "from-purple-500 to-purple-600",
      light: "bg-purple-100",
      number: "text-purple-200",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
      gradient: "from-emerald-500 to-emerald-600",
      light: "bg-emerald-100",
      number: "text-emerald-200",
    },
  };

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm">
            <Rocket size={14} />
            <span>Simple et puissant</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Comment ça{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">marche ?</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Trois étapes pour transformer votre recrutement. Pas de CV, pas de lettre de motivation — juste de l'intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Large number watermark */}
                <span className={`absolute top-4 right-6 text-7xl font-black ${colors.number} select-none pointer-events-none`}>
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${colors.light} ${colors.text} rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{step.description}</p>

                  {/* Mini mockup */}
                  <div className={`${colors.bg} border ${colors.border} rounded-2xl p-4`}>{step.mockup}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting line (desktop only) */}
        <div className="hidden lg:flex justify-center mt-[-280px] mb-[230px] pointer-events-none">
          <svg width="800" height="50" viewBox="0 0 800 50" fill="none" className="opacity-0">
            <path d="M 100 25 H 350 M 450 25 H 700" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: STATS / SOCIAL PROOF
// ============================================================================
const StatsSection = () => {
  const stats = [
    { value: 15000, suffix: "+", label: "Talents inscrits", icon: Users, color: "text-indigo-600" },
    { value: 94, suffix: "%", label: "Taux de matching", icon: Target, color: "text-purple-600" },
    { value: 500, suffix: "+", label: "Entreprises partenaires", icon: Building2, color: "text-emerald-600" },
    { value: 40, suffix: "h", label: "Gagnées / mois par recruteur", icon: Clock, color: "text-amber-600" },
  ];

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                La preuve par les chiffres
              </h2>
              <p className="text-indigo-200 font-medium text-lg max-w-xl mx-auto">
                Des résultats concrets qui transforment le recrutement chaque jour.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => {
                const counterRef = useCounter(stat.value, 2.5);
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors">
                      <Icon size={24} className="text-indigo-300" />
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span ref={counterRef} className="text-3xl md:text-5xl font-extrabold text-white tabular-nums">
                        0
                      </span>
                      <span className="text-2xl md:text-4xl font-extrabold text-indigo-400">{stat.suffix}</span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-200/80 mt-2">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: TESTIMONIALS
// ============================================================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Camille Moreau",
      role: "Diplômée Marketing Digital",
      avatar: "C",
      avatarColor: "bg-pink-500",
      rating: 5,
      text: "En 2 semaines, j'avais 3 entretiens pour des postes qui me correspondent vraiment. Le matching par soft skills, c'est un game-changer.",
      tag: "Candidate",
      tagColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      name: "Thomas Lefèvre",
      role: "DRH · Nextera Solutions",
      avatar: "T",
      avatarColor: "bg-indigo-500",
      rating: 5,
      text: "On a divisé par 3 notre temps de sourcing. Les profils proposés par l'IA sont d'une pertinence remarquable. Nos managers sont ravis.",
      tag: "Entreprise",
      tagColor: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      name: "Sophie Durand",
      role: "Directrice des Relations Entreprises · ESSCA",
      avatar: "S",
      avatarColor: "bg-emerald-500",
      rating: 5,
      text: "Le tableau de bord école est une révolution. On suit l'insertion de nos promos en temps réel avec des données exploitables.",
      tag: "École",
      tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-100 text-amber-600 text-xs font-bold mb-5 shadow-sm">
            <Star size={14} fill="currentColor" />
            <span>Ils nous font confiance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Ce qu'ils disent de{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hiry</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} />
              </div>

              {/* Tag */}
              <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold border mb-6 ${t.tagColor}`}>
                {t.tag}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-sm font-bold text-white shadow-inner`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: TRUST BAND (Logos)
// ============================================================================
const TrustBand = () => {
  const partners = [
    "ESSEC Business School",
    "Nextera Solutions",
    "EM Lyon",
    "TechFlow SAS",
    "ESSCA",
    "DataNova",
    "Polytechnique",
    "InnoVentures",
  ];

  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          Ils construisent le recrutement de demain avec Hiry
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            {[...partners, ...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm flex-shrink-0"
              >
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-500">{name.charAt(0)}</span>
                </div>
                <span className="text-sm font-semibold text-slate-600">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: FINAL CTA
// ============================================================================
const FinalCTA = () => (
  <section className="relative z-10 py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px]" />

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-10 left-10 md:top-16 md:left-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center hidden md:flex"
        >
          <Sparkles size={28} className="text-white/60" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 md:bottom-16 md:right-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center hidden md:flex"
        >
          <Zap size={28} className="text-white/60" />
        </motion.div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Prêt à recruter
              <br />
              <span className="text-indigo-200">avec intelligence ?</span>
            </h2>
            <p className="text-indigo-100 font-medium text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Rejoignez les milliers de talents, entreprises et écoles qui ont déjà transformé leur approche du recrutement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-xl shadow-xl shadow-indigo-900/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              >
                Commencer gratuitement
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all"
              >
                <MessageSquare size={18} />
                Demander une démo
              </Link>
            </div>

            <p className="text-indigo-200/60 text-sm font-medium mt-6">
              Gratuit pour les candidats · Sans engagement · Résultats en 48h
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================================================
// FOOTER
// ============================================================================
const Footer = () => {
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
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Hiry<span className="text-indigo-600">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mb-6">
              L'intelligence artificielle au service d'un recrutement plus juste, plus rapide et plus humain.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:contact@hiry.ai" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded-xl flex items-center justify-center transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} Hiry. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">
              CGU
            </Link>
            <Link href="/legal" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// PAGE PRINCIPALE
// ============================================================================
export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Navbar */}
      <Navbar />

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-40 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <motion.div className="flex-1 text-center lg:text-left" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm"
          >
            <Sparkles size={14} />
            <span>L'IA au service de votre carrière</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Le recrutement <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">qui a du sens.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
            Hiry analyse en profondeur les soft skills, les aspirations et la culture d'entreprise pour créer des matchs parfaits. Fini les CV ignorés.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/candidats"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Je suis candidat <ArrowRight size={18} />
            </Link>
            <Link
              href="/entreprises"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            >
              Je recrute
            </Link>
          </motion.div>

          {/* Social proof mini */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2">
              {["bg-indigo-500", "bg-pink-500", "bg-emerald-500", "bg-amber-500"].map((color, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
                >
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

        <motion.div
          className="flex-1 w-full relative h-[400px] lg:h-[520px] hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Main dashboard card */}
          <div className="relative w-full max-w-[420px]">
            {/* Background glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-blue-200/40 rounded-[3rem] blur-2xl" />

            {/* Main Card */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-100/60 border border-slate-100/80 overflow-hidden"
            >
              {/* Card header */}
              <div className="px-6 pt-5 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-none">Hiry Intelligence</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">Matching en cours…</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">Live</span>
                  </div>
                </div>
              </div>

              {/* Candidate profiles being matched */}
              <div className="px-6 py-4 space-y-3">
                {[
                  { name: "Sarah M.", role: "Dev Full-Stack React", match: 96, color: "bg-pink-500", delay: 0.6 },
                  { name: "Lucas D.", role: "Growth Marketing", match: 91, color: "bg-blue-500", delay: 0.75 },
                  { name: "Emma T.", role: "UX/UI Designer", match: 87, color: "bg-amber-500", delay: 0.9 },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: c.delay }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50/80 transition-colors group/row cursor-pointer"
                  >
                    <div className={`w-9 h-9 ${c.color} rounded-xl flex items-center justify-center text-[11px] font-bold text-white shadow-sm`}>
                      {c.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-slate-900 leading-none truncate">{c.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1 truncate">{c.role}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${c.match}%` }}
                          transition={{ duration: 1.2, delay: c.delay + 0.3, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
                        />
                      </div>
                      <span className="text-[11px] font-extrabold text-emerald-600 tabular-nums">{c.match}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom insight bar */}
              <div className="px-6 py-3.5 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 border-t border-indigo-100/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-indigo-500" />
                    <span className="text-[11px] font-bold text-indigo-700">3 matchs haute compatibilité détectés</span>
                  </div>
                  <ArrowRight size={14} className="text-indigo-400" />
                </div>
              </div>
            </motion.div>

            {/* Floating card: Offer match — top right */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-6 -right-6 lg:-right-12"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-3.5 shadow-xl shadow-indigo-100/50 border border-slate-100/80 w-[180px]"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Briefcase size={14} className="text-indigo-600" />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <Sparkles size={9} /> 98% Match
                  </div>
                </div>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">Product Manager Jr.</p>
                <p className="text-[9px] text-slate-400 font-medium mt-0.5">TechFlow SAS · Paris</p>
              </motion.div>
            </motion.div>

            {/* Floating card: Stat — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-4 -left-4 lg:-left-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-purple-100/50 border border-slate-100/80 w-[170px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <TrendingUp size={14} className="text-purple-600" />
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600">+24%</span>
                </div>
                <p className="text-lg font-extrabold text-slate-900 leading-none">128</p>
                <p className="text-[9px] text-slate-400 font-medium mt-1">Candidatures cette semaine</p>
              </motion.div>
            </motion.div>

            {/* Floating badge: AI indicator — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
              className="absolute -top-3 -left-3 lg:-left-6"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-300/50"
              >
                <Brain size={22} className="text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.12 }}>
            <motion.circle
              cx="50%"
              cy="50%"
              r="180"
              fill="none"
              stroke="#6366f1"
              strokeWidth="1"
              strokeDasharray="8 8"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="240"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1"
              strokeDasharray="4 12"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>
        </motion.div>
      </div>

      {/* ================= TRUST BAND (TOP) ================= */}
      <TrustBand />

      {/* ================= BENTO GRID SECTION ================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm">
            <Layers size={14} />
            <span>Un écosystème complet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            L'expérience{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hiry</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            Trois acteurs, une seule intelligence pour les réunir.
          </p>
        </motion.div>

        {/* ---- BENTO GRID ---- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* ===== CARD 1: CANDIDATS — Large left, Framer-style platform preview ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7 md:row-span-2 group relative rounded-[2rem] overflow-hidden"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-9 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150 group-hover:bg-indigo-100/60" />

              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <Target size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Pour les talents</h3>
                    <p className="text-sm text-slate-400 font-semibold mt-0.5">Étudiants & Candidats</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium max-w-lg">
                  On te comprend et t'aide à révéler ton vrai potentiel. Hiron cartographie tes <span className="text-indigo-600 font-bold">compétences</span>, tes aspirations profondes et crée ton identité professionnelle unique pour trouver ce qui te convient <span className="text-indigo-600 font-bold">vraiment</span>.
                </p>
              </div>

              {/* ---- FRAMER-STYLE: Platform Dashboard Preview ---- */}
              <div className="relative mt-auto flex-1 min-h-0">
                {/* Fade-out bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />

                {/* Perspective wrapper */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-indigo-100/40 bg-slate-50"
                >
                  {/* ── Dashboard Chrome Bar ── */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">
                        <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3px]" />
                        <span className="text-[10px] text-slate-400 font-medium">app.hiry.ai/student/dashboard</span>
                      </div>
                    </div>
                  </div>

                  {/* ── Dashboard Content ── */}
                  <div className="p-4 md:p-5 bg-gray-50/80 space-y-4">

                    {/* Welcome + Archetype badge */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-slate-900">Bonjour, Maxime 👋</h4>
                        <p className="text-[11px] text-slate-500 font-medium">Voici ce qui se passe avec tes candidatures aujourd'hui.</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 shrink-0">
                        <span className="text-sm">🚀</span>
                        <span className="text-[10px] font-semibold text-indigo-700">L'Innovateur</span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Candidatures", value: "12", change: "+3", icon: Briefcase, bg: "bg-indigo-50", color: "text-indigo-600" },
                        { label: "Entretiens", value: "4", change: "+1", icon: Calendar, bg: "bg-purple-50", color: "text-purple-600" },
                        { label: "Matchs", value: "28", change: "8 top", icon: Eye, bg: "bg-blue-50", color: "text-blue-600" },
                      ].map((stat, i) => {
                        const StatIcon = stat.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                                <StatIcon size={12} className={stat.color} />
                              </div>
                              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                                {stat.change}
                              </span>
                            </div>
                            <p className="text-lg font-extrabold text-slate-900 leading-none">{stat.value}</p>
                            <p className="text-[9px] text-slate-400 font-medium mt-0.5">{stat.label}</p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Offer Matches — "Offres pour toi" */}
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-xs font-bold text-slate-800">Offres pour toi</h5>
                        <span className="text-[9px] text-indigo-600 font-semibold">Tout voir →</span>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          {
                            title: "Product Manager Junior", company: "TechFlow SAS", contract: "CDI", location: "Paris", score: 96,
                            logoSvg: <svg viewBox="0 0 36 36" className="w-full h-full"><rect width="36" height="36" rx="8" fill="#4F46E5"/><path d="M10 12h16v3H10zm0 5h10v3H10zm0 5h13v3H10z" fill="white" opacity="0.85"/></svg>,
                          },
                          {
                            title: "Growth Marketing", company: "Nextera Solutions", contract: "Stage", location: "Lyon", score: 91,
                            logoSvg: <svg viewBox="0 0 36 36" className="w-full h-full"><rect width="36" height="36" rx="8" fill="#059669"/><circle cx="18" cy="14" r="6" fill="white" opacity="0.9"/><path d="M10 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="white" opacity="0.7"/></svg>,
                          },
                        ].map((offer, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors cursor-default"
                          >
                            <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 shadow-sm">
                              {offer.logoSvg}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-bold text-slate-900 leading-tight truncate">{offer.title}</p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[9px] text-slate-400 font-medium truncate">{offer.company}</span>
                                <span className="text-[8px] text-slate-300">•</span>
                                <span className="text-[8px] font-semibold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded shrink-0">{offer.contract}</span>
                                <span className="text-[8px] text-slate-400 flex items-center gap-0.5 shrink-0"><MapPin size={7} />{offer.location}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 flex items-center gap-1 shrink-0">
                              <Sparkles size={8} />{offer.score}%
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* ── Candidature Tracking Card — clipped to peek ── */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-xs font-bold text-slate-800">Suivi candidature</h5>
                        <span className="text-[9px] text-indigo-600 font-semibold">Tout voir →</span>
                      </div>

                      {/* Application card — header only, pipeline gets cut by parent fade */}
                      <div className="border border-slate-100 rounded-xl overflow-hidden">
                        <div className="p-3 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0">
                            <svg viewBox="0 0 36 36" className="w-full h-full">
                              <rect width="36" height="36" rx="4" fill="#4F46E5" />
                              <path d="M10 18h5v-6h6v6h5v6h-5v6h-6v-6h-5z" fill="white" opacity="0.9"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-slate-900 leading-tight">Product Manager Junior</p>
                            <p className="text-[9px] text-slate-400 font-medium">TechFlow SAS · Paris</p>
                          </div>
                          <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 flex items-center gap-1">
                            <CheckCircle2 size={8} /> Présélectionné
                          </span>
                        </div>

                        {/* Pipeline steps — will be partially hidden by fade */}
                        <div className="px-3 py-3 bg-slate-50/80 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            {[
                              { label: "Envoyée", done: true },
                              { label: "Vue", done: true },
                              { label: "Shortlist", done: true, current: true },
                              { label: "Entretien", done: false },
                              { label: "Offre", done: false },
                              { label: "Embauché", done: false },
                            ].map((step, idx) => (
                              <div key={idx} className="flex flex-col items-center relative flex-1">
                                {idx > 0 && (
                                  <div className={`absolute right-1/2 top-[11px] w-full h-[2px] ${step.done ? "bg-indigo-500" : "bg-slate-200"}`} />
                                )}
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + idx * 0.08, type: "spring" }}
                                  className={`relative z-10 w-[22px] h-[22px] rounded-full flex items-center justify-center ${
                                    step.current
                                      ? "bg-white border-2 border-purple-400 text-purple-600 shadow-md ring-4 ring-purple-100"
                                      : step.done
                                      ? "bg-indigo-500 text-white shadow-sm"
                                      : "bg-slate-100 border-2 border-slate-200 text-slate-400"
                                  }`}
                                >
                                  {step.done && !step.current ? <CheckCircle2 size={10} strokeWidth={3} /> : (
                                    <span className="text-[7px] font-bold">{idx + 1}</span>
                                  )}
                                </motion.div>
                                <span className={`mt-1.5 text-[7px] font-semibold ${step.current ? "text-purple-600" : step.done ? "text-slate-600" : "text-slate-400"}`}>
                                  {step.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                  </div>
                </motion.div>
              </div>

              <Link href="/candidats" className="mt-5 inline-flex items-center text-sm font-extrabold text-indigo-600 gap-1.5 group-hover:gap-3 transition-all relative z-30">
                Découvrir mon profil IA <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ===== CARD 2: ENTREPRISES — Visual Kanban Pipeline ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 group relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-gradient-to-br from-indigo-900 via-[#1e1b4b] to-slate-900 rounded-[2rem] p-7 md:p-8 h-full flex flex-col border border-indigo-800/50 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-500/15 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white/10 text-indigo-300 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Pour les entreprises</h3>
                    <p className="text-xs text-indigo-300/70 font-semibold">Recruteurs & RH</p>
                  </div>
                </div>
                <p className="text-sm text-indigo-200/80 leading-relaxed font-medium mb-6">
                  Accédez à un vivier de talents pré-qualifiés.Gagnez <span className="text-white font-bold">40h / mois</span> en supprimant le tri manuel.
                </p>
              </div>

              {/* ── Framer-style: Kanban Pipeline Preview ── */}
              <div className="relative z-10 mt-auto">
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1e1b4b] via-[#1e1b4b]/80 to-transparent z-20 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 bg-white"
                >
                  {/* Chrome bar */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-md">
                        <div className="w-2.5 h-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2px]" />
                        <span className="text-[8px] text-slate-400 font-medium">app.hiry.ai/company/pipeline</span>
                      </div>
                    </div>
                  </div>

                  {/* Kanban content */}
                  <div className="p-3 pb-6">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Layers size={10} className="text-indigo-600" />
                        <span className="text-[9px] font-bold text-slate-900">Pipeline — Product Manager</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[8px] font-bold text-emerald-600">12 candidats</span>
                      </div>
                    </div>

                    {/* Kanban columns */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        {
                          title: "Nouveaux", count: 5, color: "bg-blue-500", bg: "bg-blue-50", border: "border-blue-100",
                          avatars: [
                            { initials: "SM", gradient: "from-blue-500 to-indigo-600" },
                            { initials: "LD", gradient: "from-violet-500 to-purple-600" },
                            { initials: "AT", gradient: "from-cyan-500 to-blue-600" },
                          ]
                        },
                        {
                          title: "Entretien", count: 3, color: "bg-amber-500", bg: "bg-amber-50", border: "border-amber-100",
                          avatars: [
                            { initials: "ET", gradient: "from-amber-500 to-orange-600" },
                            { initials: "JR", gradient: "from-rose-500 to-pink-600" },
                          ]
                        },
                        {
                          title: "Shortlist", count: 3, color: "bg-purple-500", bg: "bg-purple-50", border: "border-purple-100",
                          avatars: [
                            { initials: "MK", gradient: "from-purple-500 to-indigo-600" },
                            { initials: "CL", gradient: "from-fuchsia-500 to-purple-600" },
                          ]
                        },
                        {
                          title: "Offre", count: 1, color: "bg-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100",
                          avatars: [
                            { initials: "SB", gradient: "from-emerald-500 to-teal-600" },
                          ]
                        },
                      ].map((col, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.08 }}
                          className={`${col.bg} border ${col.border} rounded-lg p-1.5`}
                        >
                          {/* Column header */}
                          <div className="flex items-center justify-between mb-1.5 px-0.5">
                            <div className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                              <span className="text-[7px] font-bold text-slate-600">{col.title}</span>
                            </div>
                            <span className="text-[7px] font-bold text-slate-400">{col.count}</span>
                          </div>
                          {/* Avatar cards */}
                          <div className="space-y-1">
                            {col.avatars.map((av, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 + j * 0.06, type: "spring" }}
                                className="bg-white rounded-md p-1.5 shadow-sm border border-white flex items-center gap-1.5"
                              >
                                <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${av.gradient} flex items-center justify-center text-[6px] font-bold text-white shrink-0`}>
                                  {av.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="h-[3px] bg-slate-200 rounded-full w-full" />
                                  <div className="h-[2px] bg-slate-100 rounded-full w-3/4 mt-0.5" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <Link href="/entreprises" className="relative z-10 mt-5 inline-flex items-center text-sm font-extrabold text-indigo-300 hover:text-white gap-1.5 group-hover:gap-3 transition-all">
                Dashboard recruteur <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ===== CARD 3: ÉCOLES — Student Status Board (mirrors kanban style) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 group relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-8 h-full flex flex-col border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150 group-hover:bg-emerald-100/60" />

              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Pour les écoles</h3>
                    <p className="text-xs text-slate-400 font-semibold">Universités & Grandes Écoles</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Pilotez l'insertion de vos promos et vos relations entreprises avec des <span className="text-emerald-600 font-bold">données en temps réel</span>.
                </p>
              </div>

              {/* ── Framer-style: Student Status Board ── */}
              <div className="relative z-10 mt-auto">
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="rounded-xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-emerald-100/30 bg-white"
                >
                  {/* Chrome bar */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded-md">
                        <div className="w-2.5 h-2.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2px]" />
                        <span className="text-[8px] text-slate-400 font-medium">app.hiry.ai/school/students</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 pb-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Users size={10} className="text-emerald-600" />
                        <span className="text-[9px] font-bold text-slate-900">Suivi Promotion 2026</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[8px] font-bold text-emerald-600">245 étudiants</span>
                      </div>
                    </div>

                    {/* Status columns — mirrors the kanban */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        {
                          title: "En recherche", count: 89, color: "bg-blue-500", bg: "bg-blue-50", border: "border-blue-100",
                          avatars: [
                            { initials: "LM", gradient: "from-blue-500 to-indigo-600" },
                            { initials: "SC", gradient: "from-sky-500 to-blue-600" },
                            { initials: "PA", gradient: "from-indigo-400 to-blue-600" },
                          ]
                        },
                        {
                          title: "Entretien", count: 34, color: "bg-amber-500", bg: "bg-amber-50", border: "border-amber-100",
                          avatars: [
                            { initials: "JD", gradient: "from-amber-500 to-orange-600" },
                            { initials: "NK", gradient: "from-orange-500 to-red-500" },
                          ]
                        },
                        {
                          title: "Placés", count: 108, color: "bg-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100",
                          avatars: [
                            { initials: "AB", gradient: "from-emerald-500 to-teal-600" },
                            { initials: "YT", gradient: "from-green-500 to-emerald-600" },
                            { initials: "ML", gradient: "from-teal-500 to-cyan-600" },
                          ]
                        },
                        {
                          title: "À risque", count: 14, color: "bg-red-500", bg: "bg-red-50", border: "border-red-100",
                          avatars: [
                            { initials: "RT", gradient: "from-red-500 to-rose-600" },
                          ]
                        },
                      ].map((col, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.08 }}
                          className={`${col.bg} border ${col.border} rounded-lg p-1.5`}
                        >
                          {/* Column header */}
                          <div className="flex items-center justify-between mb-1.5 px-0.5">
                            <div className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                              <span className="text-[7px] font-bold text-slate-600">{col.title}</span>
                            </div>
                            <span className="text-[7px] font-bold text-slate-400">{col.count}</span>
                          </div>
                          {/* Student cards */}
                          <div className="space-y-1">
                            {col.avatars.map((av, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 + j * 0.06, type: "spring" }}
                                className="bg-white rounded-md p-1.5 shadow-sm border border-white flex items-center gap-1.5"
                              >
                                <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${av.gradient} flex items-center justify-center text-[6px] font-bold text-white shrink-0`}>
                                  {av.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="h-[3px] bg-slate-200 rounded-full w-full" />
                                  <div className="h-[2px] bg-slate-100 rounded-full w-3/4 mt-0.5" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <Link href="/ecoles" className="mt-5 inline-flex items-center text-sm font-extrabold text-emerald-600 gap-1.5 group-hover:gap-3 transition-all relative z-30">
                Tour de contrôle <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ===== CARD 4: IA CORE — Full width bottom banner ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25 }}
            className="md:col-span-12 group relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-[0.5px]" />

            <div className="relative bg-white rounded-[2rem] p-7 md:p-10 border border-slate-100 group-hover:border-transparent transition-colors duration-500 overflow-hidden">
              {/* Decorative blurs */}
              <div className="absolute -top-24 left-1/4 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left: Text content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-5">
                    <Brain size={14} />
                    <span>Le moteur Hiry</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Le premier outil qui comprend{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">les humains</span>
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg">
                    Notre algorithme propriétaire analyse la personnalité, les valeurs et la culture pour créer des connexions qui dépassent le simple matching de compétences.
                  </p>
                </div>

                {/* Right: Animated feature pills */}
                <div className="flex-1 w-full max-w-md">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Brain, label: "Analyse comportementale", value: "Big Five + Jung", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
                      { icon: Heart, label: "Culture fit scoring", value: "Valeurs & ADN", color: "from-pink-500 to-rose-600", bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-100" },
                      { icon: Target, label: "Matching prédictif", value: "94% de précision", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
                      { icon: Shield, label: "Données protégées", value: "RGPD compliant", color: "from-slate-500 to-slate-600", bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200" },
                    ].map((feature, i) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className={`${feature.bg} border ${feature.border} rounded-2xl p-4 cursor-default transition-shadow hover:shadow-lg`}
                        >
                          <div className={`w-9 h-9 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                            <FeatureIcon size={16} className="text-white" />
                          </div>
                          <p className="text-xs font-bold text-slate-900 leading-tight mb-0.5">{feature.label}</p>
                          <p className={`text-[10px] font-bold ${feature.text}`}>{feature.value}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <HowItWorksSection />

      {/* ================= STATS ================= */}
      <StatsSection />

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialsSection />

      {/* ================= FINAL CTA ================= */}
      <FinalCTA />

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
