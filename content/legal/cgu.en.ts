// ============================================================
// Terms of Use — English translation, for information only.
// The French version (cgu.fr.ts) is the binding one.
// Structure kept identical to the French source, section for section.
// ============================================================
import type { LegalSection } from "@/app/components/shared/LegalContent";

export const sections: LegalSection[] = [
  {
    title: "Preamble",
    content: `To make these Terms of Use (hereinafter "ToU") easier to read, the terms "Hiry Service", "the Service" or "the Services" refer to the website(s), mobile applications and interfaces hosting the services we provide.

The Service is available at https://app.hiry.fr as well as through the dedicated spaces of Partner Institutions in the Hiry network.

The Hiry Service is published and operated by Hiry SAS, whose registered office is at 36-40 rue Raspail – L'Escalator, 92 300 Levallois-Perret, France, registered with the Nanterre Trade and Companies Register under number 104 764 493.

Downloading all or a quantitatively substantial part of the Service using robots or any other automated extraction process is prohibited.

Unless Hiry has given prior written consent, selling, reselling or otherwise monetising the Services or associated data is prohibited.

The Hiry Service relies on artificial intelligence technologies, embodied by our virtual assistant named Hiron (hereinafter "Hiron" or "the AI") and powered by Google (Gemini) for profile analysis, predictive matching, conducting interviews and generating content.`,
  },

  {
    title: "1. User accounts",
    content: `Hiry offers several categories of account, each associated with specific rights and obligations depending on the role defined:`,
  },
  {
    title: "1.1 Candidate User Account",
    level: 2,
    content: `The Candidate User Account (hereinafter "Candidate User" or "Candidate") is reserved exclusively for students and graduates looking for a job, an internship or an apprenticeship. The Candidate Account may be linked to a Partner Institution in the Hiry network if the User is enrolled at such an Institution.

The Candidate has access to a personal space including a profile enriched by Hiron, a dashboard for tracking applications, a predictive job search engine, a messaging system with companies, and access to their school's career events.`,
  },
  {
    title: "1.2 Company User Account",
    level: 2,
    content: `The Company User Account (hereinafter "Company User" or "Recruiter") is reserved exclusively for any duly authorised representative of an individual or legal entity wishing to access Hiry's recruitment services. The Company User Account is associated with a Company Account, which is the company's main account.

The Company has access to a management space including job posting publication, an application tracking pipeline (Kanban), Hiron's predictive matching system, messaging with candidates, an interview calendar, and a module for managing partnerships with Institutions.

Hiry offers publication and matching options charged per unit or in packs, whose pricing terms are detailed on the Service. Access to certain features is conditional upon payment of these fees.`,
  },
  {
    title: "1.3 Institution User Account",
    level: 2,
    content: `The Institution User Account (hereinafter "Institution User" or "School") is reserved exclusively for any duly authorised representative of a higher-education institution partnered with the Hiry network. The Institution has access to a 360° dashboard tracking its students' career entry, a module for managing company partnerships, a career events space and a messaging system.`,
  },
  {
    title: "1.4 Roles and administration",
    level: 2,
    content: `Each User attached to a Company or Institution Account is assigned a specific role (Administrator, Recruiter, Member, or any other role provided by the Service), determined and configured under the sole responsibility of the Account Administrator.

The Account Administrator alone is authorised to create or modify the access rights of Users linked to the Account, and to define their respective roles on the Service. Each User undertakes to use the Service only within the limits of the rights granted to them.

For the purposes of these ToU, the term "Users" refers indifferently to Candidate Users, Company Users or Institution Users.`,
  },

  {
    title: "2. Services offered by Hiry",
  },
  {
    title: "2.1 Services offered to Candidate Users",
    level: 2,
  },
  {
    title: "2.1.1 Overview",
    level: 3,
    content: `Hiry provides an integrated ecosystem dedicated to your career entry, allowing you in particular:`,
    list: [
      "to create a profile enriched by artificial intelligence through a guided onboarding process including the collection of your personal information, your search preferences and a conversational interview with Hiron;",
      "to benefit from predictive matching offering you the job postings most compatible with your profile, your skills and your ambitions;",
      "to apply to job, internship or apprenticeship postings published by companies in the network;",
      "to track your applications in real time through a dedicated dashboard;",
      "to communicate directly with recruiters through our built-in messaging;",
      "to register for recruitment or career-guidance events organised by your Institution or partner companies;",
      "to access exclusive job postings reserved for students of your Institution when it is partnered with a company on Hiry;",
      "to receive alerts and notifications about job postings and events matching your criteria.",
    ],
  },
  {
    title: "2.1.2 Interview with Hiron",
    level: 3,
    content: `The Service offers a conversational interview conducted by Hiron (Google Gemini technology). The purpose of this interview is to enrich your candidate profile by analysing your behavioural skills (soft skills), your motivations and your professional personality.

By agreeing to take part in this interview, you expressly consent to:`,
    list: [
      "your voice being captured and transmitted in real time to the artificial intelligence engine;",
      "the text transcript of your answers being retained and associated with your profile;",
      "an AI analysis being carried out on your answers to generate your behavioural profile (archetype, transferable skills, development areas).",
    ],
    after: `The interview is required to unlock certain features of the Service, in particular predictive matching and the display of compatibility scores with job postings.

No audio recording is retained. Only the text transcript and the generated analysis are stored.`,
  },
  {
    title: "2.1.3 Predictive matching and compatibility scores",
    level: 3,
    content: `Hiry's matching engine analyses the compatibility between your profile and the available job postings on the basis of four broad families: job compatibility (normalised technical skills and soft skills), behavioural and cultural compatibility (personality archetypes, motivations, cultural alignment), education compatibility (level and field analysed in context) and practical compatibility (location, contractual arrangements, languages, sector, experience).

Compatibility scores are provided for guidance only and in no way constitute a guarantee of being hired or shortlisted. Hiry does not guarantee the absolute accuracy of Hiron's analyses and invites Users to exercise their own judgement.`,
  },
  {
    title: "2.1.4 Job posting ranking",
    level: 3,
    content: `The order in which job postings are displayed is determined by the predictive matching score where available, then by publication date. No advertising or commercial criterion plays any part in the ranking of the postings shown to Candidates.`,
  },
  {
    title: "2.1.5 School-exclusive postings",
    level: 3,
    content: `Some job postings may be reserved exclusively for students of one or more Partner Institutions (so-called "school_exclusive" postings). These postings are only visible to Candidates whose profile is linked to the Institution concerned.`,
  },
  {
    title: "2.2 Services offered to Company Users",
    level: 2,
  },
  {
    title: "2.2.1 Overview",
    level: 3,
    content: `Depending on your purchases (per Matching Assignment or in packs) and your role within the Company Account, you may:`,
    list: [
      "create and publish job, internship or apprenticeship postings accessible to all Candidates in the network or reserved for students of your Partner Institutions;",
      "benefit from a Hiron analysis of your company profile (culture, DNA, values) generated from your answers to our onboarding questionnaire;",
      "access predictive matching to identify the Candidates most compatible with your postings;",
      "manage your recruitment pipeline (Kanban) to track the progress of applications;",
      "communicate with Candidates through the built-in messaging;",
      "manage your partnerships with Institutions in the Hiry network;",
      "schedule and manage interviews through the calendar module;",
      "organise and promote recruitment events visible to Candidates.",
    ],
  },
  {
    title: "2.2.2 Terms for publishing matching assignments",
    level: 3,
    content: `Hiry allows companies to publish postings benefiting from full predictive matching across the entire Candidate base of the network (hereinafter "matching assignments"). Publishing these matching assignments is charged per unit (for a single assignment) or through the purchase of prepaid packs.

The details (limits, prices) are described on the Service's pricing page and restated at the time the assignment is published or the pack is purchased. Validation and distribution of a matching assignment are conditional upon payment of the corresponding price through the payment provider Stripe.

A free, temporary Early Adopter plan may be offered at the launch of the Service. The terms of this plan (duration, limits, transition to the paid model) are communicated at registration.`,
  },
  {
    title: "2.2.3 Company partnered with an Institution (Walled Garden)",
    level: 3,
    content: `A company may become a partner of an Institution in the Hiry network, either by direct request or through an invitation link issued by the Institution (Magic Link). The partner company benefits from exclusive visibility among the students of the Institution concerned.

Postings published by a partner company are, by default, reserved for the students of the partner Institution ("school_exclusive" visibility). The company may, upon payment of the corresponding fees at the applicable rate, extend the distribution of its postings to the entire Hiry network.`,
  },
  {
    title: "2.2.4 Responsibility for the content of postings",
    level: 3,
    content: `The company you represent explicitly acknowledges that Hiry is not required to review the content of published postings, that content being the sole and exclusive responsibility of the company. Hiry nevertheless reserves the right to withdraw any posting that breaches the ToU, applicable law or public policy.

Publishing several postings simultaneously for the same professional opportunity is prohibited. A posting must allow Candidates to apply free of charge. A posting must not offer paid placement services.`,
  },
  {
    title: "2.3 Services offered to Institution Users",
    level: 2,
    content: `Institutions in the Hiry network have access to a dedicated space allowing them to:`,
    list: [
      "track their students' career entry through a 360° analytics dashboard;",
      "manage company partnerships (accepting/refusing requests, tracking relationships);",
      "validate postings targeting their institution before publication to their students;",
      "organise career events (fairs, workshops, conferences) and manage registrations;",
      "access activity statistics for their students on the platform (applications, matches, interviews);",
      "communicate with partner companies through the built-in messaging.",
    ],
    after: `By accepting these ToU, the Institution acknowledges that its students' activity data is transmitted to it in accordance with the privacy policy and strictly within the scope of career-entry support.`,
  },

  {
    title: "3. Access to the service",
    content: `In order to access the Service, you must have suitable computer equipment (computer, smartphone, tablet), an internet connection and, where applicable, a compatible and up-to-date web browser. The costs of accessing and using the telecommunications network remain your responsibility.

For the interview features with Hiron, access to your device's microphone is required. You will be explicitly asked to authorise this access. No feature of the platform uses your camera.

We use all reasonable means at our disposal to ensure quality access to the Service, but are under no obligation of result. We reserve the right to modify, interrupt or temporarily suspend access to the Service, in particular for maintenance operations, without this giving rise to any right to compensation.`,
  },

  {
    title: "4. Creating a user account",
    content: `Any use of robots or any other method aimed at the automated creation of an account on the Service is prohibited. Hiry may delete or block any account that breaches these terms.`,
  },
  {
    title: "4.1 Creating a Candidate User Account",
    level: 2,
    content: `To create a Candidate Account, you must complete the online registration form or register through your Institution's invitation link.

The registration process includes:`,
    list: [
      "creating an account with an email address and a password;",
      "guided onboarding including the collection of your personal information, search preferences and academic data;",
      "a conversational interview with Hiron (required to unlock certain features).",
    ],
    after: `Your password must be strictly personal and confidential and must not be disclosed or shared with third parties. We recommend that you choose a complex password.`,
  },
  {
    title: "4.2 Creating a Company User Account",
    level: 2,
    content: `To create a Company Account, you must complete the dedicated registration form. The onboarding process includes:`,
    list: [
      "verification of your company through its SIREN number with the INSEE API;",
      "a strategic questionnaire on your company culture, internal ways of working and values (with the option of answering by text or voice);",
      "providing your remote-work policy, logo and photos;",
      "defining your standard recruitment process.",
    ],
    after: `By creating a Company Account, you undertake to hold all the powers and authorisations necessary to validly bind the legal entity you represent.`,
  },
  {
    title: "4.3 Creating an Institution User Account",
    level: 2,
    content: `The Institution Account is created after contracting with Hiry. The Institution appoints an Administrator who will be responsible for managing the account and its staff's access rights.`,
  },
  {
    title: "4.4 Registration via an invitation link (Magic Link)",
    level: 2,
    content: `Institutions may generate a unique invitation link allowing companies to directly create a Company Account attached to the Institution as a partner. Postings published by a company registered through this mechanism will, by default, be reserved for the students of the Institution concerned.`,
  },

  {
    title: "5. Use of artificial intelligence",
    content: `The Hiry Service uses artificial intelligence technologies provided by Google (Gemini models) for the following features:`,
  },
  {
    title: "5.1 Conversational interview with Hiron",
    level: 2,
    content: `Hiron conducts a real-time voice interview with the Candidate. The audio is streamed continuously to the AI model, which generates spoken responses in real time. Text transcription is handled by a third-party service (Deepgram). No audio recording is retained beyond the session. Only the text transcript and the generated analysis are stored.`,
  },
  {
    title: "5.2 Candidate profile analysis",
    level: 2,
    content: `Following the interview and the post-interview questionnaire, Hiron generates a behavioural analysis of the Candidate including a professional archetype, a soft-skills map, motivation drivers and development recommendations. This analysis is shown to the Candidate and may be shared with companies as part of the application process.`,
  },
  {
    title: "5.3 Company profile analysis",
    level: 2,
    content: `The answers provided by the company during onboarding (text and audio) are analysed by Hiron to generate a cultural imprint comprising an organisational archetype, a cultural fingerprint and an ideal candidate profile. Voice answers are transcribed by Hiron before analysis.`,
  },
  {
    title: "5.4 Predictive matching",
    level: 2,
    content: `The matching engine uses the profiles enriched by Hiron to compute multi-dimensional compatibility scores between Candidates and job postings. These scores are provided for guidance only and do not constitute a recommendation or a guarantee.`,
  },
  {
    title: "5.5 Skills extraction and normalisation",
    level: 2,
    content: `The skills mentioned in postings and profiles are normalised using a European reference taxonomy of professional skills, in order to enable high-quality semantic matching.`,
  },
  {
    title: "5.6 Limitations and transparency",
    level: 2,
    content: `The analyses produced by Hiron are generated automatically and may contain inaccuracies. Hiry does not guarantee the accuracy, completeness or relevance of the results produced by Hiron. Users are invited to exercise their own judgement and not to rely exclusively on Hiron's results when making hiring or application decisions.

Hiry undertakes not to use Hiron for discriminatory purposes. The AI models used take no discriminatory criterion into account (origin, sex, age, religion, sexual orientation, disability, etc.) when analysing profiles or computing matching scores.`,
  },

  {
    title: "6. Liability",
  },
  {
    title: "6.1 Your liability",
    level: 2,
    content: `Generally speaking, you are responsible for:`,
    list: [
      "the proper functioning of your equipment and your internet access;",
      "any damage, direct or indirect, caused by content you have posted on the Service;",
      "the content you may publish on the Service, of whatever nature.",
    ],
    after: `It is prohibited to publish on the Service any sensitive personal information such as a social security number, passport number, identity card number or any other similar identifier.

More generally, you undertake to comply with applicable laws and regulations and, in particular, you must not:`,
  },
  {
    title: "",
    level: 3,
    list: [
      "impersonate a third party;",
      "intentionally publish or validate false, erroneous or misleading content;",
      "obstruct access to the Service or its proper functioning;",
      "publish content infringing third-party intellectual property rights;",
      "publish content that is racist, xenophobic, antisemitic, homophobic, revisionist, pornographic or that undermines human dignity;",
      "publish content inciting violence, suicide, terrorism or the commission of crimes;",
      "publish commercial or advertising information without our authorisation;",
      "use the personal data accessible on the Service in breach of data protection law;",
      "engage in any discrimination in recruitment;",
      "attempt to circumvent, disable or interfere with the security features of the Service;",
      "use AI results as the sole decision criterion in recruitment.",
    ],
    after: `In the event of a breach of the ToU, we reserve the right to block your access to all or part of the services, or even to delete your account temporarily or permanently, without compensation or prior notice.`,
  },
  {
    title: "6.2 Our liability",
    level: 2,
    content: `We remind you that:`,
    list: [
      "we do not review all content published through the Service, which is published under the sole responsibility of its authors;",
      "we are in no way responsible for any hiring or non-hiring decision resulting from a posting published through the Service or from a matching score displayed;",
      "Hiry is a third party to the correspondence and relationships between Company Users and Candidate Users and excludes all liability in this respect;",
      "the results produced by Hiron (analyses, scores, archetypes) are provided for guidance only and cannot engage Hiry's liability;",
      "the Service contains information from third-party sources whose accuracy we do not guarantee.",
    ],
    after: `We cannot be held liable for any malfunction of the network or servers, or for any event beyond our reasonable control that prevents or degrades access to the Service.`,
  },

  {
    title: "7. Personal data and confidentiality",
  },
  {
    title: "7.1 Data processing",
    level: 2,
    content: `The personal data collected and processed by Hiry is detailed in the Privacy Policy appended to these ToU. In summary, Hiry collects and processes the following data:`,
    list: [
      "Identification data: surname, first name, email address, phone number;",
      "Academic data: institution, programme, level of study;",
      "Professional data: skills, experience, search preferences, résumé;",
      "Hiron interview data: text transcript of the exchanges, generated behavioural analysis;",
      "Company data: SIREN/SIRET, registered name, sector, answers to the strategic questionnaire, audio recordings of voice answers;",
      "Usage data: connections, interactions, applications, messages;",
      "Matching data: compatibility scores, analysis dimensions.",
    ],
  },
  {
    title: "7.2 Legal basis for processing",
    level: 2,
    content: `Data processing is based on:`,
    list: [
      "performance of the contract (provision of the Service);",
      "explicit consent (interview with Hiron, profile analysis, voice recording);",
      "legitimate interest (Service improvement, anonymised statistics);",
      "legal obligations where applicable.",
    ],
  },
  {
    title: "7.3 Data sharing with Institutions",
    level: 2,
    content: `If your Candidate Account is linked to an Institution, activity data may be transmitted to it (your profile status, number of applications, number of matches, interview status). By deliberately choosing to link your Candidate Account to a Partner Institution (for example through an invitation link or by adding it manually in your settings), you expressly accept that this activity data be transmitted to it in identifiable form (associated with your surname and first name). The Institution undertakes to use this identifiable data solely for the purpose of supporting your career entry. If you do not wish to share this identifiable information with your school, you are free not to link your account or to cancel that link at any time from your settings.`,
  },
  {
    title: "7.4 Hosting and security",
    level: 2,
    content: `Data is hosted on the Google Cloud Platform (Firebase) infrastructure within the European Union (europe-west1 region). Hiry implements appropriate technical and organisational security measures to protect data: encryption in transit (TLS) and at rest, role-based access control (RBAC), Firestore security rules, and access logging.`,
  },
  {
    title: "7.5 Processors",
    level: 2,
    content: `Hiry relies on the following processors for data processing:`,
    list: [
      "Google Cloud / Firebase: hosting, authentication, database, storage;",
      "Google Gemini: artificial intelligence (profile analysis, matching, interview);",
      "Deepgram: speech-to-text transcription (interview);",
      "Stripe: payment processing;",
      "Resend: sending transactional emails.",
    ],
  },
  {
    title: "7.6 Users' rights",
    level: 2,
    content: `Under the General Data Protection Regulation (GDPR), you have the following rights: access, rectification, erasure, restriction, portability and objection. You also have the right to withdraw your consent at any time for processing based on it.

To exercise your rights, you may contact us at: dataprotection@hiry.fr.`,
  },

  {
    title: "8. Payment terms",
  },
  {
    title: "8.1 For Company Users",
    level: 2,
    content: `Access to extended distribution of postings and to full predictive matching is chargeable and is billed per unit (per published assignment) or through the purchase of prepaid "packs". Payments are handled by the provider Stripe. The applicable prices are those displayed on the Service at the time the matching assignment is published or the pack is purchased.

Specific case of companies partnered with an Institution: Distribution of a posting is free if it is exclusively restricted to the students of the partner Institution (registration through the invitation link sent by the Institution). If the company wishes to extend the visibility of that posting to all students registered on Hiry, it must pay the corresponding fees at the applicable rate.`,
  },
  {
    title: "8.2 For Institution Users",
    level: 2,
    content: `Access to the Service features dedicated to Institutions is subject to pricing. The applicable prices are communicated directly to each Institution prior to contracting. Payment is made by direct invoicing issued by Hiry, according to the terms and deadlines defined in the agreement concluded between the Institution and Hiry.`,
  },
  {
    title: "8.3 Common provisions",
    level: 2,
    content: `Hiry reserves the right to change its prices at any time, it being understood that changes will apply only to new pack or publication purchases and to new contracts with Institutions. In the event of non-payment, Hiry reserves the right to suspend the distribution of ongoing matching assignments until the situation is resolved.`,
  },
  {
    title: "8.4 Free for Candidates",
    level: 2,
    content: `The Service is free for Candidate Users.`,
  },

  {
    title: "9. Moderation and reporting",
  },
  {
    title: "9.1 Identifying and deleting fraudulent accounts",
    level: 2,
    content: `Hiry uses automated and manual means to identify and delete fraudulent accounts or accounts acting in breach of these ToU.`,
  },
  {
    title: "9.2 Reporting content",
    level: 2,
    content: `Users may report content they consider contrary to French law or to the rules set out in these ToU, in particular by contacting Hiry at abuse@hiry.fr.`,
  },
  {
    title: "9.3 Review of reports",
    level: 2,
    content: `On receipt of a report, the reported content is reviewed by our teams. In the event of a breach of the ToU, we reserve the right to delete the reported content and to block access to the account concerned.`,
  },
  {
    title: "9.4 Complaints procedures",
    level: 2,
    content: `If you are dissatisfied with a decision taken by Hiry following a report or a restriction on your account, you may submit a complaint within six months by contacting legal@hiry.fr.`,
  },

  {
    title: "10. Closing the account",
  },
  {
    title: "10.1 Candidate Users",
    level: 2,
    content: `You may delete your account at any time from the "Settings" section of your personal space. Your account and all associated data will be deleted within 30 days. After that period, your data will be irreversibly anonymised.

In addition, your account will be deleted after two years of inactivity. A reminder email will be sent to you before this deletion.`,
  },
  {
    title: "10.2 Company Users",
    level: 2,
    content: `To close your Company Account, contact us at support@hiry.fr or delete your account from the Service settings. If your credits or packs are exhausted, the distribution of your matching assignments will be suspended. Company data will be retained for 2 years after the end of the contract, unless early deletion is requested.`,
  },
  {
    title: "10.3 Institution Users",
    level: 2,
    content: `Closure of the Institution Account takes place in accordance with the terms of the specific contract concluded between the Institution and Hiry.`,
  },

  {
    title: "11. Intellectual property",
  },
  {
    title: "11.1 Hiry's intellectual property",
    level: 2,
    content: `All the elements that make up the Service (trademarks, logos, texts, data, designs, graphics, computer code, Hiron's algorithms, matching models) are and remain the exclusive property of Hiry.

We grant you only an authorisation to use the Service under the conditions set out in these ToU. Any unauthorised reproduction, representation, modification or exploitation is prohibited.`,
  },
  {
    title: "11.2 Users' intellectual property",
    level: 2,
    content: `You are and remain the sole holder of the rights to the content you publish through the Service. By publishing content on the Service, you grant Hiry a worldwide, non-exclusive, transferable and free licence to use, reproduce, adapt and process that content for the purposes of operating the Service.`,
  },
  {
    title: "11.3 Content generated by Hiron",
    level: 2,
    content: `The analyses, archetypes, scores and recommendations generated by Hiron from your data constitute derivative works whose intellectual property belongs to Hiry. You nevertheless benefit from a non-exclusive right to use this content within the framework of your use of the Service.`,
  },

  {
    title: "12. Miscellaneous provisions",
  },
  {
    title: "12.1 Evidence",
    level: 2,
    content: `The digital data recorded on our servers will be considered as evidence of any use of the Service and will be binding between you and us until proof to the contrary is provided.`,
  },
  {
    title: "12.2 Validity",
    level: 2,
    content: `If any provision of these ToU is found to be void, it will be deemed unwritten without rendering the other provisions void.`,
  },
  {
    title: "12.3 No waiver",
    level: 2,
    content: `The fact that one party does not require the application of a clause may not be interpreted as a waiver of that clause.`,
  },
  {
    title: "12.4 Changes to the ToU",
    level: 2,
    content: `We reserve the right to amend these ToU. If the changes are substantial, we will inform you through the Service or by email. The changes will apply one month after that notice. If you continue to use the Service after that date, this constitutes acceptance of the new ToU.`,
  },
  {
    title: "12.5 Communication",
    level: 2,
    content: `You agree that we may send you by email the information necessary for the provision of the Service.`,
  },

  {
    title: "13. Jurisdiction and governing law",
    content: `These ToU are governed by French law as regards their validity, interpretation and performance.`,
  },
  {
    title: "13.1 Candidate Users",
    level: 2,
    content: `In the event of a dispute, we ask you to contact us in writing at the address of the responsible company: Hiry, 36-40 rue Raspail – L'Escalator, 92 300 Levallois-Perret, France, or by email at legal@hiry.fr.`,
  },
  {
    title: "13.2 Company and Institution Users",
    level: 2,
    content: `Any dispute will first be settled amicably. Failing an amicable agreement within 30 days, the dispute will be submitted to the exclusive jurisdiction of the competent courts within the jurisdiction of the Versailles Court of Appeal.`,
  },

  {
    title: "14. Contractual framework",
    content: `The contractual framework applicable to the use of the Service consists of the following documents, in decreasing order of precedence:`,
    list: [
      "any Special Conditions;",
      "these Terms of Use;",
      "Hiry's Privacy Policy;",
      "the Terms of Sale (applicable to companies for the purchase of matching assignments or packs);",
      "the Partnership Agreements or Contracts (applicable to Institutions).",
    ],
    after: `In the event of a conflict between the documents, the higher-ranking document will prevail.`,
  },
];
