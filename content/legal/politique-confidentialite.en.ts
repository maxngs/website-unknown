// ============================================================
// Privacy Policy — English translation, for information only.
// The French version (politique-confidentialite.fr.ts) is the binding one.
// Structure kept identical to the French source, section for section.
// ============================================================
import type { LegalSection } from "@/app/components/shared/LegalContent";

export const sections: LegalSection[] = [
  {
    title: "1. Overview",
    content: `Hiry sits at the heart of an integrated ecosystem dedicated to career entry, involving three types of participant: students and alumni, partner higher-education institutions, and recruiters.

The Hiry Service is published and operated by Hiry SAS, whose registered office is at 36-40 rue Raspail – L'Escalator, 92 300 Levallois-Perret, France, registered with the Nanterre Trade and Companies Register under number 104 764 493.

For the Hiry Service we provide at https://app.hiry.fr, we are the "data controller" (within the meaning of data protection law) for the personal data processed in connection with the use of that Service.

Hiry provides an integrated ecosystem dedicated to the career entry of the students and alumni registered on it. The Service may also be accessible directly within partner higher-education institutions (the "Institutions" or "Partner Institutions"), offering exclusive content and additional features.

Companies that recruit through Hiry are the data controllers for the data processed as part of the recruitment procedures they run. They are therefore naturally recipients of the Hiry data concerning candidates applying to their job postings.

AI specifics: The Hiry Service uses artificial intelligence technologies (embodied by Hiron and powered by Google Gemini) for profile analysis, predictive matching between candidates and job postings, conversational interviews and enriched content generation. AI-related processing is covered by specific provisions detailed in this Policy.`,
  },

  {
    title: "2. Scope",
    content: `This Privacy Policy applies to the personal information we may collect in connection with our Service. It therefore applies to Candidate Users, Company Users and Institution Users. These Users are defined in the Terms of Use (ToU) to which this Policy is appended.

This Policy has been drafted in accordance with applicable data protection law, in particular European Regulation (EU) 2016/679 of 27 April 2016 on the protection of personal data (GDPR) and French Act No. 78-17 of 6 January 1978 on information technology, data files and civil liberties.`,
  },

  {
    title: "3. Categories of data collected",
  },
  {
    title: "3.1 Data common to all Users",
    level: 2,
    list: [
      "Identification data: surname, first name, email address, phone number, profile picture;",
      "Connection data: IP address, date and time of connection, pages viewed, browser and device type;",
      "Authentication data: username (email), encrypted password (managed by Firebase Authentication).",
    ],
  },
  {
    title: "3.2 Data specific to Candidate Users",
    level: 2,
    list: [
      "Academic data: institution attended, programme, level of study, graduation year, field of study;",
      "Professional data: résumé, work experience, technical and behavioural skills, languages spoken, search preferences (contract type, location, remote-work policy), interests;",
      "Onboarding data: answers to the personality and professional preference questions (Q1 to Q13 and P1 to P3);",
      "Interview data with Hiron: text transcript of voice exchanges with Hiron, answers to the post-interview questionnaire. No audio recording is kept beyond the real-time session;",
      "Analysis data produced by Hiron: generated professional archetype, soft-skills mapping, motivation drivers, development recommendations, behavioural profile;",
      "Normalised skills data: technical and transferable skills normalised against a European reference taxonomy;",
      "Matching data: compatibility scores with job postings, analysis dimensions, matching explanations;",
      "Application data: job postings you have applied to, cover letter, application tracking status;",
      "Messaging data: messages exchanged with recruiters through the built-in messaging feature;",
      "Event data: events you have registered for;",
      "Institution linking data: identifier of the linked school, cohort code used.",
    ],
  },
  {
    title: "3.3 Data specific to Company Users",
    level: 2,
    list: [
      "Company identification data: SIREN/SIRET number, registered name, legal form, NAF code, incorporation date, registered address, headcount bracket, company category (data sourced from the INSEE API);",
      "Commercial data: trading name, sector, size, website;",
      "Main contact data: surname, first name, email, phone, role within the company;",
      "Strategic questionnaire data: text and voice answers to the 5 strategic onboarding questions;",
      "Audio data: voice stream of the answers to the strategic questionnaire, not retained, transcribed by Hiron for analysis only;",
      "Company analysis data produced by Hiron: organisational archetype, cultural fingerprint, ideal candidate profile;",
      "Visual data: company logo, photos of the premises and the team;",
      "Purchase data: one-off purchases (matching assignments) or subscribed packs, status, dates, Stripe identifiers (no banking data is stored by Hiry — it is handled exclusively by Stripe).",
    ],
  },
  {
    title: "3.4 Data specific to Institution Users",
    level: 2,
    list: [
      "Institution name, role of the representative, logo;",
      "Configuration data: partner link (slug), cohorts created;",
      "Aggregated analytics data: career-entry statistics for students. This data is identifiable as soon as the student has voluntarily chosen to link their profile to the Institution, and strictly anonymised and aggregated otherwise.",
    ],
  },

  {
    title: "4. Purposes and legal bases for processing",
    content: `Every processing operation carried out by Hiry has a legal basis. The main purposes and legal bases are as follows:`,
    list: [
      "Providing the Service (account creation, onboarding, access to features) — Legal basis: performance of the contract (ToU accepted on registration);",
      "Interview with Hiron (conducting a conversational interview, transcription, behavioural analysis) — Legal basis: the Candidate's explicit consent (opt-in before the interview);",
      "Profile analysis by Hiron (generating archetypes, soft-skills mapping, behavioural profile) — Legal basis: explicit consent + performance of the contract;",
      "Predictive matching (computing multi-dimensional compatibility scores between candidates and job postings) — Legal basis: performance of the contract;",
      "Company profile analysis (analysing text and audio answers to generate a cultural fingerprint) — Legal basis: performance of the contract + consent (audio);",
      "Career-entry tracking by the school (transmitting aggregated or identifiable activity data to the linked Institution) — Legal basis: the Institution's legitimate interest + explicit consent, evidenced by the student's voluntary act of linking their account to the Institution;",
      "Email notifications (transactional emails and alerts) — Legal basis: performance of the contract;",
      "Security (protection against unauthorised access, fraud detection, logging) — Legal basis: Hiry's legitimate interest;",
      "Service improvement (anonymised usage statistics, algorithm improvement) — Legal basis: Hiry's legitimate interest;",
      "Payment (managing company purchases through Stripe) — Legal basis: performance of the contract;",
      "Legal obligations (retention of connection data, responses to judicial requests) — Legal basis: legal obligation.",
    ],
  },

  {
    title: "5. Specific processing related to artificial intelligence",
    content: `Hiry uses AI as a core tool of its Service. This section details AI processing, the data involved, and your specific rights.`,
  },
  {
    title: "5.1 Conversational interview with Hiron",
    level: 2,
    content: `The Service offers a real-time voice interview with Hiron (Google Gemini technology). It works as follows:`,
    list: [
      "Your voice is captured by your device's microphone and streamed continuously (WebSocket streaming) to the Google Gemini AI model;",
      "The text transcription of your answers is handled in parallel by the third-party service Deepgram;",
      "Hiron generates spoken responses in real time, creating a natural conversation;",
      "The interview is capped at 10 minutes.",
    ],
    after: `Data processed: real-time audio stream (not retained), text transcript (retained), generated behavioural analysis (retained).

No audio recording is kept after the session ends. Only the text transcript and the generated analysis are stored.

Legal basis: explicit consent, collected before the interview begins.

Right to withdraw: you may interrupt the interview at any time. You may request deletion of the transcript and the analysis by contacting dataprotection@hiry.fr.`,
  },
  {
    title: "5.2 Candidate profile analysis",
    level: 2,
    content: `Following the interview and/or the onboarding questionnaire, Hiron analyses your answers to generate:`,
    list: [
      "A professional archetype (e.g. Explorer, Builder, Strategist, etc.);",
      "A soft-skills map with proficiency levels;",
      "Motivation drivers and professional drivers;",
      "Personalised development recommendations.",
    ],
    after: `This analysis is shown to the Candidate in their dashboard and may be shared with Companies as part of the application process.`,
  },
  {
    title: "5.3 Skills extraction and normalisation",
    level: 2,
    content: `The skills mentioned in your profile, your résumé and your answers are automatically normalised using a European reference taxonomy of professional skills. This processing enables high-quality semantic matching between candidates and job postings.`,
  },
  {
    title: "5.4 Company profile analysis",
    level: 2,
    content: `The answers provided by the Company during onboarding (text and audio) are analysed by Hiron to generate:`,
    list: [
      "An organisational archetype and a cultural fingerprint;",
      "An ideal candidate profile;",
      "Enriched content for job postings.",
    ],
    after: `The company's voice recordings are not kept in Firebase Storage; they are only transcribed by Hiron.`,
  },
  {
    title: "5.5 Predictive matching",
    level: 2,
    content: `The Hiron matching engine computes compatibility scores organised around four broad families: job compatibility (technical skills and soft skills prioritised by the employer), behavioural and cultural compatibility (personality archetypes, motivations, cultural alignment), education compatibility (level and field analysed in context) and practical compatibility (location, remote work, contract, languages, sector, experience).

Scores are provided for guidance only. Hiry makes no automated decision within the meaning of Article 22 GDPR. Matching scores are decision-support tools: the final hiring or application decision rests exclusively with the Users.`,
  },
  {
    title: "5.6 AI safeguards and transparency",
    level: 2,
    list: [
      "Non-discrimination: the AI models used take no discriminatory criterion into account (origin, sex, age, religion, sexual orientation, disability, family situation);",
      "No automated decision-making: no application is automatically rejected or accepted by the AI;",
      "Right to an explanation: you may request information about the logic underlying the matching by contacting dataprotection@hiry.fr;",
      "Right to object: you may object to AI processing of your data by contacting dataprotection@hiry.fr. In that case, certain features (matching, interview with Hiron) will no longer be available.",
    ],
  },

  {
    title: "6. Recipients of the data",
    content: `We share your data with our authorised staff and our processors. Depending on the services used, your data may be transmitted to Companies and Institutions.`,
  },
  {
    title: "6.1 Sharing with Institutions",
    level: 2,
    content: `Voluntarily linking your Candidate Account to a partner Institution constitutes acceptance of the sharing of your activity data with that Institution for the purpose of tracking your career entry. If your account is linked, your identity (surname, first name) together with the following data will be transmitted to your Institution: profile status (complete/incomplete), number of applications, number of matches, interview status, and any placement (hire).

You may object to this identifiable transmission at any time by unlinking from your Institution in your account settings (the "School" tab). You will retain access to the Hiry Service as an independent user, but will lose access to your school's exclusive job postings.`,
  },
  {
    title: "6.2 Sharing as part of an application",
    level: 2,
    content: `When you apply to a job posting, the following data is transmitted to the Company: your surname, first name, email, profile picture, school, programme, AI archetype, matching score, cover letter and résumé. The Company becomes the data controller for that data as part of its recruitment process.`,
  },

  {
    title: "7. Processors and technical providers",
    content: `Hiry relies on the following processors to operate the Service:`,
    list: [
      "Google Cloud / Firebase: hosting, authentication, Firestore database, file storage — EU (europe-west1, Belgium);",
      "Google Gemini: artificial intelligence (profile analysis, semantic matching, voice interview, company audio transcription) — EU (europe-west1);",
      "Deepgram: speech-to-text transcription during the interview with Hiron — USA (standard contractual clauses);",
      "Stripe: payment processing (one-off purchases or company packs) — EU + USA (certified). No banking data is stored by Hiry;",
      "Resend: sending transactional emails (welcome, notifications, matches) — USA (standard contractual clauses);",
      "INSEE / Entreprise API: SIREN/SIRET verification during company onboarding — France.",
    ],
  },

  {
    title: "8. Transfers outside the European Union",
    content: `Hiry's main infrastructure (Firebase/Google Cloud) is hosted in the europe-west1 region (Belgium), within the European Union.

Some processors (Deepgram, Resend) are established in the United States. For these transfers, appropriate safeguards are in place in accordance with the GDPR:`,
    list: [
      "Standard contractual clauses (SCCs) approved by the European Commission;",
      "Additional technical measures (encryption in transit and at rest);",
      "A Transfer Impact Assessment carried out for each provider.",
    ],
    after: `As regards Stripe, the provider holds recognised certifications and compliance measures for international transfers of payment data.`,
  },

  {
    title: "9. Retention periods",
    content: `Personal data is retained for the following periods:`,
    list: [
      "Account data (profile, preferences): until the account is closed or after 2 years of inactivity;",
      "Hiron interview transcript + analysis: until the account is closed or after 2 years of inactivity. Deletable on request at any time;",
      "Matching scores: recomputed periodically. Previous scores are deleted at each recomputation;",
      "Messages (messaging): until the account is closed or after 2 years of inactivity;",
      "Applications: until the account is closed or after 2 years of inactivity;",
      "Connection data (logs): 1 year (legal obligation under the French LCEN);",
      "Payment data (Stripe): in accordance with accounting obligations (10 years for accounting records).",
    ],
    after: `Once your account has effectively been closed, your data will be irreversibly anonymised. It will then be used exclusively for statistical purposes and to improve the Service.

A few weeks before the 2-year inactivity threshold is reached, we will contact you by email to inform you that your account is about to be deleted.`,
  },

  {
    title: "10. Security and confidentiality",
    content: `We implement organisational and technical measures to ensure the security and confidentiality of your data.

Technical measures:`,
    list: [
      "Encryption in transit: all communications use the TLS protocol (HTTPS);",
      "Encryption at rest: data stored in Firestore and Firebase Storage is encrypted at rest by Google Cloud;",
      "Access control: Firebase Authentication with role management (RBAC) — each user only accesses the data associated with their role;",
      "Firestore security rules: declarative rules preventing any unauthorised access to data collections;",
      "Environment isolation: strict separation between the development and production environments;",
      "Managed secrets: sensitive API keys are stored in Firebase Secrets Manager, never in the source code;",
      "Logging: data access and sensitive operations are logged via Cloud Logging.",
    ],
    after: `Organisational measures: access to production data is restricted to strictly authorised staff, the team is trained in personal data protection, and Firestore security rules and access rights are reviewed regularly.`,
  },

  {
    title: "11. Your rights",
    content: `Under the GDPR, you have the following rights:`,
    list: [
      "Right of access (Art. 15): obtain confirmation that your data is being processed and receive a copy of it;",
      "Right to rectification (Art. 16): have inaccurate or incomplete data corrected;",
      "Right to erasure (Art. 17): request deletion of your data under the conditions set out in the GDPR;",
      "Right to data portability (Art. 20): receive your data in a structured, machine-readable format;",
      "Right to restriction (Art. 18): request restriction of the processing of your data;",
      "Right to object (Art. 21): object to processing of your data based on legitimate interest;",
      "Withdrawal of consent: withdraw at any time your consent for processing based on it (interview with Hiron, profile analysis, voice interaction);",
      "Right to an AI explanation: obtain clear information about the logic of predictive matching and of the analysis performed by Hiron;",
      "Post-mortem instructions: set instructions regarding the retention and communication of your data after your death.",
    ],
    after: `To exercise your rights, contact us at: dataprotection@hiry.fr, or by post at the address of the responsible company: Hiry, 36-40 rue Raspail – L'Escalator, 92 300 Levallois-Perret, France.

We undertake to respond to your request within one month. If there is any doubt as to your identity, we may ask you for proof of identity.

If you are not satisfied with our response, you may lodge a complaint with the CNIL (the French data protection authority): https://www.cnil.fr.`,
  },

  {
    title: "12. Cookies",
    content: `The Hiry Service uses several categories of cookies and local storage mechanisms, depending on the context:`,
    list: [
      "Strictly necessary cookies: Firebase authentication cookie (keeping your session signed in on the application), localStorage for interface preferences, temporary onboarding data and school-linking settings. These cookies do not require your consent as they are essential to the operation of the Service;",
      "Audience measurement cookies: on the hiry.fr marketing site, Google Tag Manager and the associated analytics services measure site traffic and improve the user experience. Subject to your prior consent;",
      "Advertising cookies: on the hiry.fr marketing site, cookies from our advertising partners (Meta, Google Ads) may be set to measure campaign effectiveness and for retargeting. Subject to your prior consent.",
    ],
    after: `On your first visit to the marketing site, a banner lets you accept or refuse audience measurement and advertising cookies. Your choice is kept for 12 months and can be changed at any time by deleting the consent cookie from your browser. Refusing these cookies does not restrict access to the Service.

The Hiry application (app.hiry.fr) sets no advertising or third-party audience measurement cookies — only the cookies strictly necessary for authentication are used.`,
  },

  {
    title: "13. Changes to the Privacy Policy",
    content: `We reserve the right to amend this Privacy Policy to reflect changes to the Service or to the law. If the changes are substantial, we will inform you through a visible notice on the Service or by email.

You acknowledge that if you continue to use the Service after the changes are published, this constitutes acceptance of the updated version of the Privacy Policy.`,
  },

  {
    title: "14. Contact",
    content: `For any question relating to this Privacy Policy or to the exercise of your rights:

Email: dataprotection@hiry.fr

Post: Hiry, 36-40 rue Raspail – L'Escalator, 92 300 Levallois-Perret, France.`,
  },
];
