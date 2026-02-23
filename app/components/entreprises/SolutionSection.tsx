"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target, Zap, Search, ArrowRight, Sparkles,
  Brain, CheckCircle2, Clock, FileX, Users,
  Fingerprint, Send, Heart,
  TrendingDown, TrendingUp,
} from "lucide-react";

/* ───────────────────────────────────────────────
   Animated Counter
   ─────────────────────────────────────────────── */
const Counter = ({ target, suffix = "", delay = 0 }: { target: number; suffix?: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.max(1, Math.ceil(target / 35));
      const interval = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(interval); }
        else setCount(start);
      }, 25);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ───────────────────────────────────────────────
   Score Ring (light version)
   ─────────────────────────────────────────────── */
const ScoreRing = ({ value, size = 48, color, delay = 0, label }: { value: number; size?: number; color: string; delay?: number; label?: string }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const r = 16;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 36 36" className="-rotate-90" width={size} height={size}>
          <circle cx="18" cy="18" r={r} fill="none" stroke="#f1f5f9" strokeWidth="3" />
          <motion.circle
            cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
            initial={{ strokeDasharray: `0 ${circ}` }}
            animate={inView ? { strokeDasharray: `${dash} ${circ - dash}` } : {}}
            transition={{ delay, duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-extrabold text-slate-800">{value}</span>
        </div>
      </div>
      {label && <span className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-wider">{label}</span>}
    </div>
  );
};

/* ───────────────────────────────────────────────
   Mockup 1 — Culture ADN (Light)
   ─────────────────────────────────────────────── */
const MockupCulture = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  const values = [
    { label: "Innovation", value: 92, color: "from-rose-400 to-pink-500" },
    { label: "Bien-être", value: 88, color: "from-pink-400 to-rose-500" },
    { label: "Agilité", value: 95, color: "from-red-400 to-rose-500" },
    { label: "Transparence", value: 85, color: "from-rose-400 to-pink-400" },
  ];

  return (
    <div ref={ref} className="relative rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
      {/* Subtle shimmer */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 3 }}
        className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-rose-50/40 to-transparent pointer-events-none"
      />

      {/* Header */}
      <div className="px-5 pt-5 pb-3.5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md shadow-rose-200/50">
              <Fingerprint size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-slate-800">ADN Culture</p>
              <p className="text-[10px] text-slate-400">Votre entreprise</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
            className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-lg"
          >
            <span className="text-[9px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 size={10} /> Analysé
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Score rings row */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <ScoreRing value={92} size={56} color="#f43f5e" delay={0.3} label="Global" />
          <div className="w-px h-10 bg-slate-100" />
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-[20px] font-extrabold text-rose-500 leading-none"
            >
              4/4
            </motion.p>
            <p className="text-[8px] font-bold text-slate-400 mt-0.5">Valeurs clés</p>
          </div>
          <div className="w-px h-10 bg-slate-100" />
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-[20px] font-extrabold text-slate-800 leading-none"
            >
              PME
            </motion.p>
            <p className="text-[8px] font-bold text-slate-400 mt-0.5">Typologie</p>
          </div>
        </div>

        {/* Value bars */}
        <div className="space-y-3">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-slate-600">{v.label}</span>
                <span className="text-[11px] font-extrabold text-slate-800">{v.value}%</span>
              </div>
              <div className="h-[6px] bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${v.value}%` } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.8, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${v.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI insight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-5 p-3 rounded-xl bg-rose-50 border border-rose-100"
        >
          <div className="flex items-start gap-2">
            <Brain size={12} className="text-rose-500 mt-0.5 shrink-0" />
            <p className="text-[10px] text-rose-600/80 leading-relaxed font-medium">
              <span className="text-rose-600 font-bold">Hiron IA :</span> Votre culture valorise fortement l&apos;agilité et l&apos;innovation. Je cible des profils entrepreneurs et créatifs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Mockup 2 — Temps ÷10 (Light)
   ─────────────────────────────────────────────── */
const MockupSpeed = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 3 }}
        className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-amber-50/40 to-transparent pointer-events-none"
      />

      <div className="px-5 pt-5 pb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md shadow-amber-200/50">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-slate-800">Impact Hiry</p>
            <p className="text-[10px] text-slate-400">Avant / Après</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Before / After */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-3.5 rounded-xl bg-red-50 border border-red-100"
          >
            <p className="text-[8px] font-bold text-red-400 uppercase tracking-wider mb-2.5">Sans Hiry</p>
            <div className="space-y-2.5">
              {[
                { icon: FileX, label: "CV à trier", value: "70+", color: "text-red-500" },
                { icon: Clock, label: "Jours perdus", value: "21j", color: "text-red-500" },
                { icon: TrendingDown, label: "Pertinence", value: "12%", color: "text-red-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <item.icon size={10} className="text-red-300" />
                    <span className="text-[9px] text-slate-500">{item.label}</span>
                  </div>
                  <span className={`text-[11px] font-extrabold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100"
          >
            <p className="text-[8px] font-bold text-emerald-500 uppercase tracking-wider mb-2.5">Avec Hiry</p>
            <div className="space-y-2.5">
              {[
                { icon: Users, label: "Profils matchés", value: "5", color: "text-emerald-600" },
                { icon: Clock, label: "Temps", value: "2j", color: "text-emerald-600" },
                { icon: TrendingUp, label: "Pertinence", value: "96%", color: "text-emerald-600" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <item.icon size={10} className="text-emerald-300" />
                    <span className="text-[9px] text-slate-500">{item.label}</span>
                  </div>
                  <span className={`text-[11px] font-extrabold ${item.color}`}>
                    {inView ? item.value : "—"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-slate-100" />
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center"
          >
            <Zap size={14} className="text-amber-500" fill="currentColor" />
          </motion.div>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Bottom metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          <div className="text-center">
            <p className="text-[28px] font-extrabold text-amber-500 leading-none">
              ÷<Counter target={10} delay={0.6} />
            </p>
            <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Temps</p>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="text-center">
            <p className="text-[28px] font-extrabold text-emerald-500 leading-none">
              ×<Counter target={8} delay={0.8} />
            </p>
            <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Pertinence</p>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="text-center">
            <p className="text-[28px] font-extrabold text-indigo-600 leading-none">
              <Counter target={96} suffix="%" delay={1} />
            </p>
            <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Match</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Mockup 3 — Soft Skills Profile (Light)
   ─────────────────────────────────────────────── */
const MockupSoftSkills = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 3 }}
        className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-violet-50/40 to-transparent pointer-events-none"
      />

      <div className="px-5 pt-5 pb-3.5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md shadow-violet-200/50">
              <Search size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-slate-800">Profil Talent</p>
              <p className="text-[10px] text-slate-400">Au-delà du CV</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.6, type: "spring" }}
            className="px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg"
          >
            <span className="text-[9px] font-bold text-amber-600">⭐ Top match</span>
          </motion.div>
        </div>
      </div>

      <div className="p-5">
        {/* Candidate card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-[12px] font-bold text-white shadow-md shadow-violet-200/40">
            LM
          </div>
          <div className="flex-1">
            <p className="text-[12px] font-bold text-slate-800">Léa Martin</p>
            <p className="text-[9px] text-slate-400">Marketing Digital · Bac+5 · Paris</p>
          </div>
          <div className="text-right">
            <p className="text-[20px] font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-none">96%</p>
            <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">match</p>
          </div>
        </motion.div>

        {/* Score rings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-around mb-5 py-3 px-2 rounded-xl bg-slate-50 border border-slate-100"
        >
          <ScoreRing value={98} size={42} color="#f43f5e" delay={0.6} label="Culture" />
          <ScoreRing value={94} size={42} color="#6366f1" delay={0.75} label="Skills" />
          <ScoreRing value={96} size={42} color="#8b5cf6" delay={0.9} label="Soft" />
          <ScoreRing value={91} size={42} color="#f59e0b" delay={1.05} label="Ambition" />
        </motion.div>

        {/* Soft skills tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mb-5"
        >
          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-2">Soft skills détectés</p>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: "Créativité", icon: "✨" },
              { label: "Leadership", icon: "🎯" },
              { label: "Empathie", icon: "💡" },
              { label: "Résilience", icon: "🔥" },
              { label: "Communication", icon: "💬" },
            ].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="text-[9px] font-bold text-violet-600 bg-violet-50 border border-violet-100 px-2 py-1 rounded-lg flex items-center gap-1"
              >
                <span className="text-[8px]">{tag.icon}</span> {tag.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* AI Insight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3 }}
          className="p-3 rounded-xl bg-violet-50 border border-violet-100 mb-4"
        >
          <div className="flex items-start gap-2">
            <Brain size={12} className="text-violet-500 mt-0.5 shrink-0" />
            <p className="text-[10px] text-violet-600/80 leading-relaxed font-medium">
              <span className="text-violet-700 font-bold">Hiron IA :</span> Profil entrepreneurial avec forte intelligence émotionnelle. Fit culturel exceptionnel avec votre ADN « Innovation + Agilité ».
            </p>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="flex gap-2"
        >
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-[10px] font-bold shadow-md shadow-violet-200/50">
            <Send size={10} /> Contacter
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl text-[10px] font-bold hover:bg-slate-100 transition-colors">
            <Heart size={10} /> Sauvegarder
          </button>
        </motion.div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Feature Config
   ─────────────────────────────────────────────── */
const features = [
  {
    icon: Target,
    title: "Recrutez pour votre culture",
    desc: "Hiron dialogue avec vous pour capturer l'ADN de votre entreprise : valeurs, style de management, ambiance. Nous ne vous présentons que des candidats alignés humainement.",
    gradient: "from-rose-500 to-pink-500",
    bullets: [
      "Questionnaire intelligent en 5 min",
      "Cartographie culture sur 4 axes",
      "Matching pondéré par vos priorités",
    ],
    mockup: <MockupCulture />,
  },
  {
    icon: Zap,
    title: "Divisez le temps de recrutement par 10",
    desc: "Fini l'avalanche de CV. Recevez une sélection restreinte de talents avec un score de compatibilité transparent. Concentrez-vous sur 3 entretiens pertinents, pas sur 70 CV hors-sujet.",
    gradient: "from-amber-500 to-orange-500",
    bullets: [
      "Sélection automatique IA",
      "Score de compatibilité transparent",
      "De 70 CV à 5 profils en 2 min",
    ],
    mockup: <MockupSpeed />,
  },
  {
    icon: Search,
    title: "Découvrez ce qu'un CV ne dit pas",
    desc: "Nous analysons les soft skills, les aspirations et les projets des étudiants. Découvrez qui ils sont et ce qu'ils peuvent devenir au sein de votre équipe.",
    gradient: "from-violet-500 to-purple-600",
    bullets: [
      "Analyse de 12 soft skills clés",
      "Projection d'évolution IA",
      "Rapport de fit culturel détaillé",
    ],
    mockup: <MockupSoftSkills />,
  },
];

/* ───────────────────────────────────────────────
   Solution Section
   ─────────────────────────────────────────────── */
const SolutionSection = () => (
  <section className="relative z-10 py-20 md:py-32 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white pointer-events-none" />
    <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -ml-48 pointer-events-none" />
    <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -mr-40 pointer-events-none" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold shadow-sm mb-5">
          <Sparkles size={14} />
          <span>La solution Hiry</span>
        </div>
        <h2 className="text-3xl md:text-[2.65rem] lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900 mb-6">
          Hiry{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">transforme</span>{" "}
          le recrutement en une rencontre{" "}
          <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">pertinente.</span>
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-20"
      >
        Le système actuel est absurde. Il vous force à juger un candidat sur un document rétrospectif – le CV – alors que vous recrutez pour le futur. Hiry est construit pour réparer cela.
      </motion.p>

      {/* Feature rows */}
      <div className="space-y-20 md:space-y-32">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          const isReversed = i % 2 === 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Text side */}
              <div className={isReversed ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -3 }}
                    className={`w-12 h-12 bg-gradient-to-br ${feat.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.15em]">
                    0{i + 1} — Fonctionnalité clé
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-6">
                  {feat.desc}
                </p>

                {/* Bullet points */}
                <div className="space-y-3 mb-8">
                  {feat.bullets.map((bullet, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${feat.gradient} flex items-center justify-center shrink-0`}>
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{bullet}</span>
                    </motion.div>
                  ))}
                </div>

                <a href="#" className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-xl transition-all">
                  En savoir plus <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mockup side */}
              <div className={isReversed ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${feat.gradient} rounded-[2rem] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-700 blur-2xl`} />
                  <div className="relative">
                    {feat.mockup}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SolutionSection;
