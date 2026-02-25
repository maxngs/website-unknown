// ============================================================
// app/components/shared/LeadCaptureModal.tsx
// Modal de capture de leads — envoi via API Route → Google Sheets
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  Loader2,
  User,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  MessageSquare,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profile: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  profile?: string;
  message?: string;
}

interface ProfileOption {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ============================================================
// INPUT FIELD — défini EN DEHORS du composant parent
// pour éviter la perte de focus à chaque re-render
// ============================================================
interface InputFieldProps {
  label: string;
  field: keyof FormData;
  type?: string;
  placeholder: string;
  required?: boolean;
  optional?: boolean;
  value: string;
  error?: string;
  onChange: (field: keyof FormData, value: string) => void;
}

const InputField = ({
  label,
  field,
  type = "text",
  placeholder,
  required = false,
  optional = false,
  value,
  error,
  onChange,
}: InputFieldProps) => (
  <div>
    <label className="block text-xs font-medium text-white/40 mb-1.5 ml-1">
      {label} {required && "*"}
      {optional && (
        <span className="text-white/20 ml-1">(optionnel)</span>
      )}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-white/20 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 ${
        error
          ? "border-red-500/50"
          : "border-white/8 focus:border-violet-500/50"
      }`}
    />
    {error && (
      <p className="text-red-400 text-xs mt-1 ml-1">{error}</p>
    )}
  </div>
);

// ============================================================
// CONFIG
// ============================================================
const profileOptions: ProfileOption[] = [
  {
    id: "student",
    label: "Étudiant / Candidat",
    icon: User,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "company",
    label: "Entreprise",
    icon: Building2,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "school",
    label: "Établissement d'éducation supérieure",
    icon: GraduationCap,
    color: "from-fuchsia-500 to-pink-600",
  },
];

// ============================================================
// ANIMATIONS
// ============================================================
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.2 },
  },
};

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 300 },
  },
};

// ============================================================
// COMPONENT
// ============================================================
export default function LeadCaptureModal({
  isOpen,
  onClose,
}: LeadCaptureModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profile: "",
    message: "",
  });

  // Reset à chaque ouverture
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setIsSubmitting(false);
      setErrors({});
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        profile: "",
        message: "",
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ============================================================
  // VALIDATION
  // ============================================================
  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.profile) newErrors.profile = "Sélectionnez votre profil";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Prénom requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Nom requis";
    if (!formData.email.trim()) newErrors.email = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Format d'email invalide";
    if (formData.phone && !/^[\d\s+()-]{6,20}$/.test(formData.phone))
      newErrors.phone = "Numéro de téléphone invalide";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ============================================================
  // HANDLERS
  // ============================================================
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field])
      setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    setIsSubmitting(true);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone || "Non renseigné",
      profile:
        profileOptions.find((p) => p.id === formData.profile)?.label ||
        formData.profile,
      message: formData.message || "Aucun commentaire",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Erreur API:", await res.text());
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Erreur envoi:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0f0e17] border border-white/10 rounded-2xl shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow décoratif */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-200"
            >
              <X size={18} />
            </button>

            <div className="relative p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* ===== SUCCÈS ===== */
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center py-8"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        damping: 15,
                      }}
                    >
                      <Check size={40} className="text-emerald-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Inscription enregistrée !
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                      Merci pour votre intérêt. Nous vous contacterons très
                      prochainement pour vous donner accès à la plateforme.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                    >
                      Fermer
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key={`step-${step}`}>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                        <Sparkles size={14} className="text-violet-400" />
                        <span className="text-xs font-medium text-violet-300">
                          Accès anticipé
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {step === 1 ? "Vous êtes..." : "Vos coordonnées"}
                      </h3>
                      <p className="text-white/40 text-sm">
                        {step === 1
                          ? "Sélectionnez votre profil pour une expérience personnalisée"
                          : "Plus qu'une étape pour rejoindre la plateforme"}
                      </p>
                    </div>

                    {/* Barre de progression */}
                    <div className="flex gap-2 mb-8">
                      {[1, 2].map((s) => (
                        <div
                          key={s}
                          className="flex-1 h-1 rounded-full overflow-hidden bg-white/5"
                        >
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                            initial={{ width: "0%" }}
                            animate={{
                              width: s <= step ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </div>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      {step === 1 ? (
                        /* ===== ÉTAPE 1 : CHOIX DU PROFIL ===== */
                        <motion.div
                          key="step1"
                          variants={stepVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                        >
                          <div className="space-y-3 mb-8">
                            {profileOptions.map((option) => {
                              const Icon = option.icon;
                              const isSelected =
                                formData.profile === option.id;
                              return (
                                <motion.button
                                  key={option.id}
                                  onClick={() =>
                                    handleChange("profile", option.id)
                                  }
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left group ${
                                    isSelected
                                      ? "border-violet-500/50 bg-violet-500/10 shadow-lg shadow-violet-500/5"
                                      : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                                  }`}
                                >
                                  <div
                                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} ${
                                      isSelected
                                        ? "opacity-100 shadow-lg"
                                        : "opacity-40 group-hover:opacity-60"
                                    } transition-all duration-300`}
                                  >
                                    <Icon size={22} className="text-white" />
                                  </div>
                                  <span
                                    className={`font-medium transition-colors duration-200 ${
                                      isSelected
                                        ? "text-white"
                                        : "text-white/60 group-hover:text-white/80"
                                    }`}
                                  >
                                    {option.label}
                                  </span>
                                  <div
                                    className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                      isSelected
                                        ? "border-violet-400 bg-violet-500"
                                        : "border-white/20"
                                    }`}
                                  >
                                    {isSelected && (
                                      <motion.div
                                        className="w-2 h-2 rounded-full bg-white"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                          type: "spring",
                                          damping: 15,
                                        }}
                                      />
                                    )}
                                  </div>
                                </motion.button>
                              );
                            })}
                          </div>

                          {errors.profile && (
                            <p className="text-red-400 text-xs mb-4 text-center">
                              {errors.profile}
                            </p>
                          )}

                          <motion.button
                            onClick={handleNext}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                          >
                            Continuer
                            <ArrowRight size={16} />
                          </motion.button>
                        </motion.div>
                      ) : (
                        /* ===== ÉTAPE 2 : COORDONNÉES + MESSAGE ===== */
                        <motion.div
                          key="step2"
                          variants={stepVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                        >
                          <div className="space-y-4 mb-6">
                            <div className="grid grid-cols-2 gap-3">
                              <InputField
                                label="Prénom"
                                field="firstName"
                                placeholder="Jean"
                                required
                                value={formData.firstName}
                                error={errors.firstName}
                                onChange={handleChange}
                              />
                              <InputField
                                label="Nom"
                                field="lastName"
                                placeholder="Dupont"
                                required
                                value={formData.lastName}
                                error={errors.lastName}
                                onChange={handleChange}
                              />
                            </div>
                            <InputField
                              label="Email"
                              field="email"
                              type="email"
                              placeholder="jean.dupont@email.com"
                              required
                              value={formData.email}
                              error={errors.email}
                              onChange={handleChange}
                            />
                            <InputField
                              label="Téléphone"
                              field="phone"
                              type="tel"
                              placeholder="+33 6 12 34 56 78"
                              optional
                              value={formData.phone}
                              error={errors.phone}
                              onChange={handleChange}
                            />

                            {/* ===== CHAMP COMMENTAIRE ===== */}
                            <div>
                              <label className="block text-xs font-medium text-white/40 mb-1.5 ml-1">
                                <span className="inline-flex items-center gap-1.5">
                                  <MessageSquare size={12} />
                                  Message
                                </span>
                                <span className="text-white/20 ml-1">(optionnel)</span>
                              </label>
                              <textarea
                                value={formData.message}
                                onChange={(e) =>
                                  handleChange("message", e.target.value)
                                }
                                placeholder="Décrivez votre besoin, posez une question, ou dites-nous ce qui vous intéresse..."
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 focus:border-violet-500/50 text-white placeholder-white/20 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 resize-none"
                              />
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <button
                              onClick={() => {
                                setStep(1);
                                setErrors({});
                              }}
                              className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center gap-2"
                            >
                              <ChevronLeft size={16} />
                              Retour
                            </button>
                            <motion.button
                              onClick={handleSubmit}
                              disabled={isSubmitting}
                              whileHover={!isSubmitting ? { y: -2 } : {}}
                              whileTap={!isSubmitting ? { y: 0 } : {}}
                              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 size={16} className="animate-spin" />
                                  Envoi en cours...
                                </>
                              ) : (
                                <>
                                  <Sparkles size={16} />
                                  Je me pré-inscris
                                </>
                              )}
                            </motion.button>
                          </div>

                          <p className="text-white/20 text-xs text-center mt-4">
                            En soumettant, vous acceptez notre{" "}
                            <a
                              href="/politique-confidentialite"
                              className="text-violet-400 hover:text-violet-300 transition-colors"
                            >
                              politique de confidentialité
                            </a>
                            .
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
