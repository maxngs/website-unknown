"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Star, Briefcase, MapPin, Clock,
  Brain, Zap, Target, Users, CheckCircle2, ChevronRight,
  MessageSquare, Send, Fingerprint, BarChart3,
} from "lucide-react";
import { fadeUp, stagger } from "./animations";

/* ───────────────────────────────────────────────
   Circular Score Ring (reusable)
   ─────────────────────────────────────────────── */
const ScoreRing = ({ value, size = 44, color, delay = 0 }: { value: number; size?: number; color: string; delay?: number }) => {
  const r = 15;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 36 36" className="-rotate-90" width={size} height={size}>
        <circle cx="18" cy="18" r={r} fill="none" stroke="#f1f5f9" strokeWidth="2.5" />
        <motion.circle
          cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: `${dash} ${circ - dash}` }}
          transition={{ delay, duration: 0.8, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[9px] font-extrabold text-slate-800">{value}</span>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Animated counter
   ─────────────────────────────────────────────── */
const Counter = ({ target, delay = 0 }: { target: number; delay?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(target / 30);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(interval); }
        else setCount(start);
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [target, delay]);
  return <>{count}</>;
};

/* ───────────────────────────────────────────────
   Step 1: Offer Creation — Premium
   ─────────────────────────────────────────────── */
const StepOffer = () => {
  const [typed, setTyped] = useState("");
  const fullText = "Assistant.e Marketing (H/F)";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -40 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[360px] mx-auto"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-100/40 overflow-hidden">
        {/* Card header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Briefcase size={14} className="text-white" />
            </div>
            <span className="text-[11px] font-bold text-white/90">Nouvelle offre</span>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
            className="bg-white/20 backdrop-blur-sm text-white text-[8px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"
          >
            <CheckCircle2 size={9} /> Publiée
          </motion.div>
        </div>

        <div className="p-5">
          {/* Typing title */}
          <div className="mb-4">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">Intitulé du poste</p>
            <div className="flex items-center gap-1 border-b-2 border-indigo-200 pb-1">
              <span className="text-[17px] font-bold text-slate-900">{typed}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="w-0.5 h-5 bg-indigo-500 rounded-full inline-block"
              />
            </div>
          </div>

          {/* Tags animating in */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { icon: MapPin, text: "Paris", delay: 0.6 },
              { icon: Clock, text: "Stage · 6 mois", delay: 0.8 },
              { icon: Zap, text: "Instagram, Meta", delay: 1.0 },
            ].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: tag.delay, type: "spring", stiffness: 200 }}
                className="flex items-center gap-1 text-[10px] text-slate-600 font-medium bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg"
              >
                <tag.icon size={10} className="text-slate-400" /> {tag.text}
              </motion.span>
            ))}
          </div>

          {/* ADN Analysis bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-indigo-50 border border-indigo-100 rounded-xl p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <Fingerprint size={12} className="text-indigo-500" />
              <span className="text-[9px] font-bold text-indigo-600">Analyse ADN culture...</span>
            </div>
            <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.4, duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full"
                style={{ backgroundSize: "200% 100%", animation: "shimmer 2s infinite linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ───────────────────────────────────────────────
   Step 2: AI Matching — Premium
   ─────────────────────────────────────────────── */
const StepMatching = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, x: -40 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="w-full max-w-[360px] mx-auto"
  >
    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-100/40 overflow-hidden">
      {/* AI header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-5 py-3 flex items-center gap-2 relative overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="w-7 h-7 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center relative z-10"
        >
          <Brain size={14} className="text-white" />
        </motion.div>
        <span className="text-[11px] font-bold text-white/90 relative z-10">Hiron est en train d'analyser</span>
        <div className="ml-auto flex gap-1 relative z-10">
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400"
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        {/* Central score reveal */}
        <div className="flex justify-center mb-5">
          <div className="relative">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-indigo-200/60"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2 + i * 0.5, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.6, ease: "easeOut" }}
                style={{ margin: -(12 + i * 8) }}
              />
            ))}
            <div className="relative z-10 w-[72px] h-[72px] bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-full flex flex-col items-center justify-center">
              <span className="text-[22px] font-extrabold text-indigo-600 leading-none">
                <Counter target={96} delay={0.5} />
              </span>
              <span className="text-[7px] font-bold text-indigo-400 uppercase tracking-wider">% match</span>
            </div>
          </div>
        </div>

        {/* Analysis dimensions */}
        <div className="space-y-2.5">
          {[
            { label: "Culture & Valeurs", score: 98, color: "from-rose-500 to-pink-500", icon: Fingerprint, delay: 0.3 },
            { label: "Compétences techniques", score: 94, color: "from-indigo-500 to-blue-500", icon: BarChart3, delay: 0.6 },
            { label: "Soft skills & Personnalité", score: 96, color: "from-purple-500 to-violet-500", icon: Star, delay: 0.9 },
          ].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: d.delay, duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: d.delay + 0.2, type: "spring", stiffness: 300 }}
                className="w-7 h-7 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center shrink-0"
              >
                <CheckCircle2 size={13} className="text-emerald-500" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-slate-700 flex items-center gap-1">
                    <d.icon size={9} className="text-slate-400" />
                    {d.label}
                  </span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: d.delay + 0.5 }}
                    className="text-[10px] font-extrabold text-slate-800"
                  >
                    {d.score}%
                  </motion.span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${d.score}%` }}
                    transition={{ delay: d.delay + 0.2, duration: 0.8, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${d.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2"
        >
          <Target size={11} className="text-indigo-500" />
          <span className="text-[10px] font-bold text-slate-600">
            <span className="text-indigo-600">12 profils</span> compatibles identifiés
          </span>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

/* ───────────────────────────────────────────────
   Step 3: Talents Found — Premium
   ─────────────────────────────────────────────── */
const StepTalents = () => {
  const talents = [
    { name: "Léa Martin", role: "Marketing Digital · Bac+5", score: 96, culture: 98, skills: 94, soft: 96, initials: "LM", color: "bg-indigo-500", tags: ["Créative", "Leadership"] },
    { name: "Thomas Durand", role: "Dev Fullstack · Bac+3", score: 93, culture: 91, skills: 95, soft: 88, initials: "TD", color: "bg-purple-500", tags: ["Autonome", "Agile"] },
    { name: "Sarah Chen", role: "Product Manager · Bac+5", score: 91, culture: 94, skills: 88, soft: 92, initials: "SC", color: "bg-emerald-500", tags: ["Stratège", "Empathique"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -40 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[360px] mx-auto space-y-2.5"
    >
      {talents.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: i * 0.18, duration: 0.5, type: "spring", stiffness: 140, damping: 14 }}
          className={`bg-white rounded-2xl border shadow-lg overflow-hidden transition-all ${
            i === 0 ? "border-indigo-200 shadow-indigo-100/40" : "border-slate-200 shadow-slate-100/30"
          }`}
        >
          <div className="p-3.5">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className={`w-11 h-11 ${t.color} rounded-xl flex items-center justify-center text-[12px] font-bold text-white shadow-md shrink-0`}>
                {t.initials}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-[12px] font-bold text-slate-900">{t.name}</p>
                  {i === 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="text-[7px] font-bold bg-amber-50 text-amber-600 border border-amber-200 px-1 py-0.5 rounded"
                    >
                      ⭐ Top match
                    </motion.span>
                  )}
                </div>
                <p className="text-[9px] text-slate-400 font-medium">{t.role}</p>
              </div>

              {/* Score */}
              <div className="text-right shrink-0">
                <span className="text-[18px] font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">{t.score}%</span>
                <p className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">match</p>
              </div>
            </div>

            {/* Expanded detail for first talent */}
            {i === 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-3 pt-3 border-t border-slate-100">
                  {/* Score rings */}
                  <div className="flex items-center justify-around mb-3">
                    {[
                      { label: "Culture", value: t.culture, color: "#f43f5e" },
                      { label: "Skills", value: t.skills, color: "#6366f1" },
                      { label: "Soft", value: t.soft, color: "#8b5cf6" },
                    ].map((s, j) => (
                      <div key={j} className="flex flex-col items-center">
                        <ScoreRing value={s.value} size={36} color={s.color} delay={0.6 + j * 0.12} />
                        <span className="text-[7px] font-semibold text-slate-400 mt-0.5">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Tags */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {t.tags.map((tag, k) => (
                      <motion.span
                        key={k}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + k * 0.1 }}
                        className="text-[8px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  {/* Actions */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl text-[10px] font-bold shadow-md shadow-indigo-200/50"
                    >
                      <Send size={10} /> Contacter
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-bold hover:bg-slate-200 transition-colors"
                    >
                      <MessageSquare size={10} /> Voir profil
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Bottom badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex items-center justify-center gap-2 pt-1"
      >
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-600 px-3 py-1.5 rounded-lg">
          <Zap size={12} fill="currentColor" />
          <span className="text-[10px] font-bold">12 matchs trouvés en 2 min</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ───────────────────────────────────────────────
   Workflow Steps config
   ─────────────────────────────────────────────── */
const stepsConfig = [
  { num: 1, label: "Publiez", sub: "votre offre", icon: Briefcase },
  { num: 2, label: "L'IA analyse", sub: "et matche", icon: Brain },
  { num: 3, label: "Découvrez", sub: "vos talents", icon: Users },
];

/* ───────────────────────────────────────────────
   Workflow Animation Controller
   ─────────────────────────────────────────────── */
const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % 3);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 3800);
    return () => clearInterval(timer);
  }, [nextStep]);

  const stepViews = [<StepOffer key="offer" />, <StepMatching key="match" />, <StepTalents key="talents" />];

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Background glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-indigo-100/30 via-purple-100/15 to-transparent rounded-[3rem] blur-3xl pointer-events-none" />

      <div className="relative">
        {/* ── Timeline header ── */}
        <div className="flex items-center justify-center mb-8">
          {stepsConfig.map((step, i) => (
            <div key={i} className="flex items-center">
              <motion.button
                onClick={() => setActiveStep(i)}
                className="relative flex flex-col items-center cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Step circle */}
                <div className="relative">
                  {activeStep === i && (
                    <motion.div
                      layoutId="activeRing"
                      className="absolute -inset-1.5 bg-indigo-100 rounded-2xl"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <motion.div
                    animate={{
                      background: activeStep >= i
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "#f8fafc",
                      borderColor: activeStep >= i ? "#6366f1" : "#e2e8f0",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-11 h-11 rounded-xl border-2 flex items-center justify-center shadow-sm"
                  >
                    {activeStep > i ? (
                      <CheckCircle2 size={18} className="text-white" />
                    ) : (
                      <step.icon size={16} className={activeStep >= i ? "text-white" : "text-slate-400"} />
                    )}
                  </motion.div>
                </div>

                {/* Labels */}
                <div className="mt-2 text-center">
                  <motion.p
                    animate={{ color: activeStep >= i ? "#6366f1" : "#94a3b8" }}
                    className="text-[10px] font-bold leading-tight"
                  >
                    {step.label}
                  </motion.p>
                  <motion.p
                    animate={{ color: activeStep >= i ? "#818cf8" : "#cbd5e1" }}
                    className="text-[9px] font-medium leading-tight"
                  >
                    {step.sub}
                  </motion.p>
                </div>
              </motion.button>

              {/* Connector */}
              {i < stepsConfig.length - 1 && (
                <div className="w-12 xl:w-20 h-[2px] bg-slate-100 mx-3 rounded-full overflow-hidden relative -mt-5">
                  <motion.div
                    animate={{ width: activeStep > i ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Step content ── */}
        <div className="min-h-[360px] flex items-start justify-center">
          <AnimatePresence mode="wait">
            {stepViews[activeStep]}
          </AnimatePresence>
        </div>

        {/* ── Progress dots ── */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2].map(i => (
            <motion.button
              key={i}
              onClick={() => setActiveStep(i)}
              animate={{
                width: activeStep === i ? 28 : 6,
                backgroundColor: activeStep === i ? "#6366f1" : "#e2e8f0",
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full cursor-pointer"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ───────────────────────────────────────────────
   Hero Section
   ─────────────────────────────────────────────── */
const HeroSection = () => (
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
      {/* Left — Text */}
      <motion.div className="flex-1 text-center lg:text-left" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
          <Sparkles size={14} />
          <span>Pour les Entreprises & Recruteurs</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
          Et si chaque{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">recrutement</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200/50 to-purple-200/50 rounded-full -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ originX: 0 }}
            />
          </span>{" "}
          était une évidence ?
        </motion.h1>

        <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
          Nous décodons les attentes de la nouvelle génération pour vous connecter aux talents qui partagent vraiment votre culture et vos ambitions.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#" className="group w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            Trouver la personne idéale <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">
            Comment ça marche
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center lg:justify-start gap-4">
          <div className="flex -space-x-2">
            {["bg-indigo-500", "bg-pink-500", "bg-emerald-500", "bg-amber-500"].map((c, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="text-amber-400" fill="currentColor" />)}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Rejoint par <span className="text-slate-900 font-bold">500+</span> entreprises
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right — Workflow */}
      <div className="flex-1 w-full hidden md:block">
        <WorkflowAnimation />
      </div>
    </div>
  </div>
);

export default HeroSection;
