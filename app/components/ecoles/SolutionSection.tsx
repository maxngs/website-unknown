"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Zap, TrendingUp, Target, Users, Search,
  MessageSquare, Award, AlertCircle, Network, Building2,
  BarChart3, ArrowRight,
} from "lucide-react";

/* ── Anneau de Score ── */
const MatchScoreRing = ({ score, colorClass }: { score: number; colorClass: string }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="transform -rotate-90 w-12 h-12">
        <circle cx="24" cy="24" r={radius} stroke="currentColor" strokeWidth="3" fill="transparent" className="text-slate-100" />
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          cx="24" cy="24" r={radius} stroke="currentColor" strokeWidth="3" fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          className={colorClass}
        />
      </svg>
      <span className={`absolute text-[10px] font-bold ${colorClass}`}>{score}%</span>
    </div>
  );
};

/* ── Carte Étudiant ── */
const MockStudentCard = ({ name, role, score, status, statusColor, delay }: {
  name: string; role: string; score: number; status: string; statusColor: string; delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-400 font-medium">{role}</p>
        </div>
      </div>
      <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${statusColor}`}>
        {status}
      </span>
    </div>
    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
      <div className="flex items-center gap-3">
        <MatchScoreRing score={score} colorClass={score >= 80 ? "text-emerald-500" : "text-amber-500"} />
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Taux d&apos;insertion</div>
          <div className="text-xs font-bold text-slate-800">Prédiction IA</div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Funnel de conversion ── */
const MockFunnel = () => {
  const steps = [
    { label: "Étudiants inscrits", value: 245, percent: 100, icon: Users, color: "bg-slate-500" },
    { label: "Profil complété", value: 230, percent: 94, icon: Target, color: "bg-blue-500" },
    { label: "En recherche active", value: 180, percent: 78, icon: Search, color: "bg-purple-500" },
    { label: "En process (Entretiens)", value: 145, percent: 80, icon: MessageSquare, color: "bg-amber-500" },
    { label: "Embauchés", value: 110, percent: 75, icon: Award, color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className={`w-10 h-10 rounded-xl ${step.color} bg-opacity-10 flex items-center justify-center shrink-0`}>
            <step.icon className={`w-5 h-5 ${step.color.replace("bg-", "text-")}`} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-end mb-1">
              <span className="text-sm font-bold text-slate-700">{step.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">{step.value}</span>
                {idx > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-slate-100 text-slate-500">
                    {step.percent}%
                  </span>
                )}
              </div>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(step.value / 245) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className={`h-full ${step.color} rounded-full`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Mockup Réseau Entreprises ── */
const MockNetwork = () => {
  const companies = [
    { name: "Nextera", matches: 12, sector: "Tech", color: "bg-indigo-500" },
    { name: "GreenCo", matches: 8, sector: "RSE", color: "bg-emerald-500" },
    { name: "FinUp", matches: 15, sector: "Finance", color: "bg-amber-500" },
    { name: "MedTech", matches: 6, sector: "Santé", color: "bg-rose-500" },
  ];

  return (
    <div className="space-y-3">
      {companies.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-all"
        >
          <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center text-white text-xs font-bold`}>
            {c.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-slate-900">{c.name}</p>
                <p className="text-[10px] text-slate-400 font-medium">{c.sector}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-600">{c.matches}</p>
                <p className="text-[10px] text-slate-400 font-medium">matchs</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Feature data ── */
const features = [
  {
    icon: Zap,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Une supervision intelligente de vos promotions.",
    desc: "Ne laissez plus aucun étudiant sur la touche. Notre dashboard détecte automatiquement les signaux faibles et vous alerte sur les profils nécessitant un accompagnement.",
    bullets: [
      "Alertes proactives (baisse d'engagement)",
      "Prédiction du taux d'insertion par IA",
      "Push de CV en un clic vers vos partenaires",
    ],
    mockup: "students",
    reversed: false,
  },
  {
    icon: TrendingUp,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Des statistiques claires pour piloter vos relations.",
    desc: "Mesurez l'efficacité de vos actions. Visualisez les entonnoirs de recrutement de vos étudiants et prouvez la valeur de votre établissement aux futures recrues.",
    bullets: [
      "Funnel d'insertion en temps réel",
      "Benchmark par promo et filière",
      "Rapports exportables pour accréditations",
    ],
    mockup: "funnel",
    reversed: true,
  },
  {
    icon: Network,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Activez votre réseau d'entreprises partenaires.",
    desc: "Connectez vos étudiants aux bonnes entreprises via le matching IA. Transformez votre carnet d'adresses en un réseau de placement intelligent.",
    bullets: [
      "Matching automatique étudiants ↔ entreprises",
      "Tableau de bord partenaire",
      "Invitations en un clic",
    ],
    mockup: "network",
    reversed: false,
  },
];

/* ── Solution Section ── */
const SolutionSection = () => (
  <section className="relative z-10 py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white pointer-events-none" />
    <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -ml-48 pointer-events-none" />
    <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl -mr-40 pointer-events-none" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-600 text-xs font-bold shadow-sm mb-5">
          <Sparkles size={14} />
          <span>La solution Hiry pour les Écoles</span>
        </div>
        <h2 className="text-3xl md:text-[2.65rem] lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900 mb-6">
          Hiry{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">transforme</span>{" "}
          votre école en machine{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">à insérer.</span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          Pilotez l&apos;employabilité de vos promotions avec des outils pensés pour les directions des relations entreprises, les career centers et les responsables pédagogiques.
        </p>
      </motion.div>

      {/* Feature blocks */}
      <div className="space-y-28 md:space-y-36">
        {features.map((feat, i) => (
          <div key={i} className={`flex flex-col ${feat.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
            {/* Mockup */}
            <div className="flex-1 w-full">
              {feat.mockup === "students" && (
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-4 md:-right-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-red-100 flex items-center gap-3"
                  >
                    <div className="p-2 bg-red-100 text-red-600 rounded-full animate-pulse">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">2 Étudiants à risque</p>
                      <p className="text-xs text-slate-500">Aucune activité récente</p>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <MockStudentCard name="Lucas Dubois" role="Master Marketing" score={92} status="En process" statusColor="bg-blue-100 text-blue-700" delay={0.2} />
                    <MockStudentCard name="Emma Thomas" role="Dev Fullstack" score={85} status="Signé" statusColor="bg-emerald-100 text-emerald-700" delay={0.4} />
                    <MockStudentCard name="Sophie Martin" role="UX Design" score={45} status="À risque" statusColor="bg-red-100 text-red-700" delay={0.6} />
                  </div>
                </div>
              )}
              {feat.mockup === "funnel" && (
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Parcours d&apos;insertion</h3>
                      <p className="text-sm text-slate-500">Promotion 2026</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full flex items-center gap-1">
                      <TrendingUp size={14} /> +12%
                    </div>
                  </div>
                  <MockFunnel />
                </div>
              )}
              {feat.mockup === "network" && (
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Réseau partenaires</h3>
                      <p className="text-sm text-slate-500">41 matchs ce mois</p>
                    </div>
                    <div className="px-3 py-1 bg-purple-50 text-purple-600 font-bold text-xs rounded-full flex items-center gap-1">
                      <Building2 size={14} /> 4 actifs
                    </div>
                  </div>
                  <MockNetwork />
                </div>
              )}
            </div>

            {/* Text */}
            <div className="flex-1 space-y-6">
              <div className={`w-12 h-12 ${feat.iconBg} ${feat.iconColor} rounded-2xl flex items-center justify-center`}>
                <feat.icon size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{feat.title}</h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">{feat.desc}</p>
              <ul className="space-y-3 pt-2">
                {feat.bullets.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Target size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
