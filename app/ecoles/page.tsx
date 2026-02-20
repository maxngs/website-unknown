"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, GraduationCap, Target, Zap,
  TrendingUp, Users, Search, MessageSquare, Award, AlertCircle
} from "lucide-react";

// ============================================================================
// MINI-COMPOSANTS VITRINES (Extraits de tes fichiers École)
// ============================================================================

// 1. Anneau de Score (Extrait de Students.jsx)
const MatchScoreRing = ({ score, colorClass }: { score: number, colorClass: string }) => {
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

// 2. Carte Étudiant "Tour de contrôle" (Extrait de Students.jsx)
const MockStudentCard = ({ name, role, score, status, statusColor, delay }: any) => (
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
        <MatchScoreRing score={score} colorClass={score >= 80 ? 'text-emerald-500' : 'text-amber-500'} />
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Taux d'insertion</div>
          <div className="text-xs font-bold text-slate-800">Prédiction IA</div>
        </div>
      </div>
    </div>
  </motion.div>
);

// 3. Funnel de conversion (Extrait de Analytics.jsx)
const MockFunnel = () => {
  const steps = [
    { label: 'Étudiants inscrits', value: 245, percent: 100, icon: Users, color: 'bg-slate-500' },
    { label: 'Profil complété', value: 230, percent: 94, icon: Target, color: 'bg-blue-500' },
    { label: 'En recherche active', value: 180, percent: 78, icon: Search, color: 'bg-purple-500' },
    { label: 'En process (Entretiens)', value: 145, percent: 80, icon: MessageSquare, color: 'bg-amber-500' },
    { label: 'Embauchés', value: 110, percent: 75, icon: Award, color: 'bg-emerald-500' },
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
            <step.icon className={`w-5 h-5 ${step.color.replace('bg-', 'text-')}`} />
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

// ============================================================================
// PAGE ÉCOLES
// ============================================================================

export default function EcolesPage() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-32 overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-50 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold mb-6"
        >
          <GraduationCap size={16} /> Solution Partenaires
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
        >
          Garantissez l'insertion <br/>
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            de 100% de vos talents.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto mb-10"
        >
          Une tour de contrôle propulsée par l'IA pour suivre vos promotions, alerter sur les étudiants en difficulté, et multiplier les matchs avec vos entreprises partenaires.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-200 transition-all flex items-center gap-2 mx-auto">
            Devenir École Partenaire <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Feature 1 : Tour de contrôle (Utilise Students.jsx) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full space-y-4">
            <div className="relative">
              {/* Carte Alerte */}
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

              {/* Grille d'étudiants mockée */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <MockStudentCard name="Lucas Dubois" role="Master Marketing" score={92} status="En process" statusColor="bg-blue-100 text-blue-700" delay={0.2} />
                <MockStudentCard name="Emma Thomas" role="Dev Fullstack" score={85} status="Signé" statusColor="bg-emerald-100 text-emerald-700" delay={0.4} />
                <MockStudentCard name="Sophie Martin" role="UX Design" score={45} status="À risque" statusColor="bg-red-100 text-red-700" delay={0.6} />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Une supervision intelligente de vos promotions.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Ne laissez plus aucun étudiant sur la touche. Notre dashboard détecte automatiquement les signaux faibles et vous alerte sur les profils nécessitant un accompagnement.
            </p>
            <ul className="space-y-3 pt-4">
              {['Alertes proactives (baisse d\'engagement)', 'Prédiction du taux d\'insertion par IA', 'Push de CV en un clic vers vos partenaires'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Target size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Feature 2 : Analytics & Funnel (Utilise Analytics.jsx) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 w-full">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Parcours d'insertion</h3>
                  <p className="text-sm text-slate-500">Promotion 2026</p>
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full flex items-center gap-1">
                  <TrendingUp size={14} /> +12%
                </div>
              </div>

              {/* Le Funnel animé */}
              <MockFunnel />

            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Des statistiques claires pour piloter vos relations.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mesurez l'efficacité de vos actions. Visualisez les entonnoirs de recrutement de vos étudiants et prouvez la valeur de votre établissement aux futures recrues.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
