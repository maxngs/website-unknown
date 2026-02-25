// app/politique-confidentialite/page.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, ChevronLeft } from "lucide-react";
import Link from "next/link";

const lastUpdated = "25 février 2025";

const sections = [
  {
    title: "1. Responsable du traitement",
    content: `La société Hiry (ci-après « Hiry », « nous », « notre »), dont le siège social est situé en France, est responsable du traitement des données personnelles collectées via le site hiry.fr et ses sous-domaines.

Pour toute question relative à la protection de vos données, vous pouvez nous contacter à l'adresse suivante : contact@hiry.fr`,
  },
  {
    title: "2. Données collectées",
    content: `Dans le cadre de l'utilisation de notre site et de nos services, nous sommes amenés à collecter les données personnelles suivantes :`,
    list: [
      "Données d'identification : prénom, nom",
      "Données de contact : adresse email, numéro de téléphone (optionnel)",
      "Données de profil : type de profil (étudiant/candidat, entreprise, établissement d'éducation supérieure)",
      "Données de communication : messages et commentaires laissés via nos formulaires",
      "Données de navigation : cookies, adresse IP, type de navigateur, pages consultées",
    ],
  },
  {
    title: "3. Finalités et bases légales",
    content: `Vos données sont collectées pour les finalités suivantes :`,
    list: [
      "Gestion des demandes de contact et d'inscription à la plateforme — Base légale : votre consentement (article 6.1.a du RGPD)",
      "Envoi d'informations sur nos services et actualités — Base légale : votre consentement",
      "Amélioration de notre site et de nos services — Base légale : notre intérêt légitime (article 6.1.f du RGPD)",
      "Respect de nos obligations légales — Base légale : obligation légale (article 6.1.c du RGPD)",
    ],
  },
  {
    title: "4. Destinataires des données",
    content: `Vos données personnelles sont destinées exclusivement à l'équipe Hiry. Elles ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.

Elles peuvent être transmises à nos sous-traitants techniques (hébergement, outils d'analyse) qui agissent uniquement sur nos instructions et sont soumis à des obligations de confidentialité. Nos sous-traitants actuels incluent :`,
    list: [
      "Google (Google Sheets, Google Analytics) — Stockage et analyse",
      "Vercel — Hébergement du site",
    ],
  },
  {
    title: "5. Durée de conservation",
    content: `Vos données personnelles sont conservées pour la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées :`,
    list: [
      "Données de formulaire de contact / inscription : 3 ans à compter du dernier contact",
      "Données de navigation (cookies) : 13 mois maximum conformément aux recommandations de la CNIL",
    ],
    after: "Au-delà de ces durées, vos données sont supprimées ou anonymisées.",
  },
  {
    title: "6. Vos droits",
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :`,
    list: [
      "Droit d'accès : obtenir la confirmation que vos données sont traitées et en recevoir une copie",
      "Droit de rectification : corriger vos données si elles sont inexactes ou incomplètes",
      "Droit à l'effacement : demander la suppression de vos données dans les conditions prévues par la loi",
      "Droit à la limitation : demander la suspension du traitement de vos données",
      "Droit à la portabilité : recevoir vos données dans un format structuré et couramment utilisé",
      "Droit d'opposition : vous opposer au traitement de vos données pour des motifs légitimes",
      "Droit de retirer votre consentement : à tout moment, sans que cela n'affecte la licéité du traitement effectué avant le retrait",
    ],
    after: `Pour exercer ces droits, envoyez-nous un email à contact@hiry.fr en précisant votre demande et en joignant un justificatif d'identité. Nous nous engageons à vous répondre dans un délai d'un mois.

En cas de désaccord persistant concernant le traitement de vos données, vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) — www.cnil.fr.`,
  },
  {
    title: "7. Cookies",
    content: `Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic.

Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser l'utilisation des cookies. Votre choix est conservé pendant 12 mois.`,
    list: [
      "Cookies essentiels : nécessaires au fonctionnement du site (ne requièrent pas votre consentement)",
      "Cookies analytiques : permettent de mesurer l'audience et d'améliorer le site (soumis à votre consentement)",
    ],
    after: "Vous pouvez modifier vos préférences à tout moment en supprimant les cookies de votre navigateur.",
  },
  {
    title: "8. Sécurité des données",
    content: `Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction. Ces mesures incluent le chiffrement des données en transit (HTTPS), la restriction des accès aux données et la mise à jour régulière de nos systèmes.`,
  },
  {
    title: "9. Transferts de données hors UE",
    content: `Certains de nos sous-traitants (notamment Google et Vercel) peuvent traiter des données en dehors de l'Union européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types de la Commission européenne, ou décision d'adéquation) conformément au RGPD.`,
  },
  {
    title: "10. Modifications",
    content: `Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous invitons à la consulter régulièrement. En cas de modification substantielle, nous vous en informerons par email ou via une notification sur notre site.`,
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-indigo-50/80 to-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-600 transition-colors mb-8 font-medium"
            >
              <ChevronLeft size={16} />
              Retour à l&apos;accueil
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <Shield size={22} className="text-indigo-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Politique de confidentialité
                </h1>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-medium">
              Dernière mise à jour : {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-10"
        >
          {/* Intro */}
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            Chez Hiry, la protection de vos données personnelles est une priorité. La présente
            politique de confidentialité a pour objet de vous informer sur la manière dont nous
            collectons, utilisons et protégeons vos données lorsque vous utilisez notre site et nos
            services, conformément au Règlement Général sur la Protection des Données (RGPD) et à la
            loi française Informatique et Libertés.
          </p>

          {/* Sections */}
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.05 }}
              className="space-y-4"
            >
              <h2 className="text-lg md:text-xl font-bold text-slate-900">
                {section.title}
              </h2>
              {section.content.split("\n\n").map((paragraph, j) => (
                <p key={j} className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2.5 pl-1">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.after && section.after.split("\n\n").map((paragraph, j) => (
                <p key={`after-${j}`} className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}

          {/* Contact footer */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-500 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
              contactez-nous à{" "}
              <a
                href="mailto:contact@hiry.fr"
                className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                contact@hiry.fr
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
