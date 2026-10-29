// ============================================================
// Companies page — English content.
// Same shape as fr.ts. [À VALIDER] items mirror the French file.
// ============================================================
import type { EntreprisesContent } from "./types";

const en: EntreprisesContent = {
  meta: {
    title: "AI-native ATS for SMEs and enterprises | Hiry",
    description:
      "Get 5 to 10 applications that are over 70% compatible instead of 100 CVs. Multiposting, built-in tracking, careers site. Book your demo.",
    ogTitle: "The AI-native ATS that sends you the right candidates",
    demoTitle: "Book a demo of Hiry, the AI-native ATS | Hiry",
    demoDescription:
      "See Hiry in 20 minutes or get the demo video: predictive matching, 360° candidate profile, multiposting and built-in tracking.",
    demoOgTitle: "See Hiry in 20 minutes",
    breadcrumbHome: "Home",
    breadcrumbPage: "Companies",
    breadcrumbDemo: "Book a demo",
    appDescription:
      "Hiry is an AI-native ATS: companies post a job, directly receive compatible candidates thanks to predictive matching and the 360° candidate profile, and run their whole hiring process in one place (multiposting, kanban tracking, interviews, optional careers site).",
  },

  nav: {
    links: [
      { href: "/entreprises#constat", label: "The problem" },
      { href: "/entreprises#modules", label: "Features" },
      { href: "/entreprises#how", label: "How it works" },
      { href: "/entreprises#faq", label: "FAQ" },
    ],
    cta: "Book a demo",
  },

  illustrative: "Illustrative example",

  hero: {
    eyebrow: "AI-native ATS for small businesses, SMEs and large companies",
    title: "The <em>right</em> candidates. Without the pile of CVs.",
    subtitle:
      "5 to 10 applications that are over 70% compatible, instead of 100 CVs. And your whole hiring process in one place.",
    scope:
      "Internships, work-study, first jobs and profiles with 3 to 15 years of experience.",
    ctaDemo: "Book a 20-min demo →",
    ctaVideo: "Get the demo video",
    reassurance: ["20 minutes", "No commitment", "Reply within 1 business day"],
    imageAlt: "A recruiter reviews on her tablet the applications Hiry presents to her.",
    visualLabel:
      "Preview of the Hiry interface: an 87% compatible application, its explained score and the Interview column of the tracker.",
    card: {
      name: "Inès Bertrand",
      role: "Communications officer · Work-study",
      score: 87,
      scoreLabel: "compatible",
      whyTitle: "Why this score",
      reasons: [
        "Already creates content for 2 non-profits",
        "Wants an SME to wear many hats",
        "Describes herself as autonomous and a confident speaker",
      ],
      pills: [
        { label: "Skills", value: 91 },
        { label: "Motivation", value: 88 },
        { label: "Personality", value: 82 },
      ],
    },
    column: {
      title: "Interview",
      cards: [
        { initials: "KB", name: "Karim B.", meta: "Technician · 6 yrs exp.", score: 84 },
        { initials: "LM", name: "Lucie M.", meta: "Marketing internship", score: 79 },
      ],
      slot: "Thu. 2:00 pm · Google Meet",
    },
  },

  trust: {
    label: "They support us",
    list: [
      "L’Escalator",
      "Google for Startups",
      "Lab RH",
      "Viva Technology",
      "Paris School of Business",
    ],
  },

  constat: {
    label: "01 · The problem",
    title:
      "Your problem isn't finding candidates. It's finding <em>the right ones</em>.",
    relief:
      "Screening CVs used to take hours. Now you choose from 5 to 10 profiles.",
    story:
      "You know the drill. A job posted on Monday, an overflowing inbox by Friday. You open the first CVs and they all look the same. The right person may have been in the pile. You'll never know.",
    questions: [
      "How many hours did your last hire take?",
      "Out of 100 CVs, how many deserved a call?",
      "Did your last hire match their CV?",
    ],
    checklist: {
      title: "Tick what sounds like you",
      hint: "Your answers pre-fill the demo form.",
      items: {
        volume: "You get more than 100 applications per job",
        hors_sujet: "Most of them don't fit the role",
        cv_similaires: "You struggle to tell apart CVs that all look alike",
        grands_groupes: "Your job ad gets lost next to big brands",
      },
      success: "Ticked a box? Hiry is made for you.",
      cta: "Let's talk for 20 minutes →",
    },
    stat: {
      figure: "83.6%",
      text: "of French recruiters expecting difficulties cite candidate mismatch first.",
      source: "Source: BMO 2026 survey, France Travail",
    },
  },

  hiron: {
    label: "02 · Hiron in action",
    title: "You describe. Hiron does the <em>rest</em>.",
    subtitle:
      "Hiron, Hiry's AI, turns a few sentences into a complete job post, publishes it and shows you the compatible profiles.",
    inputLabel: "Your need",
    input: "Work-study communications officer, Levallois, September 2027",
    steps: [
      "Hiron is writing the job post…",
      "Posting to partner job sites…",
      "Predictive matching…",
    ],
    result: "7 profiles over 70% compatible",
    replay: "Replay the example",
    quote: "AI doesn't replace the recruiter. It gives them time to meet people.",
  },

  modules: {
    label: "03 · What Hiry changes",
    title: "Fewer CVs to screen, more people to <em>meet</em>.",
    subtitle:
      "Five concrete benefits, one platform.",
    tablistLabel: "Hiry modules",
    pause: "Pause the slideshow",
    play: "Resume the slideshow",
    howPrefix: "How:",
    optionBadge: "Optional",
    items: [
      {
        key: "matching",
        tab: "Matching",
        label: "Time saved",
        title: "You no longer screen, you choose",
        text: "Instead of 100 CVs, you get 5 to 10 applications that are over 70% compatible. Every score is explained: you know why each candidate is in front of you. That's hours back every week.",
        how: "predictive matching. Semantics, NLP, context and personality, not mere keywords.",
      },
      {
        key: "profil",
        tab: "360° profile",
        label: "Better hires",
        title: "You hire the right person, not the right CV",
        text: "Every candidate has a 10-minute conversation with Hiron, Hiry's AI. The result is a 360° profile: skills, motivation, personality. Fewer mis-hires, hires that last.",
        how: "the 360° candidate profile.",
      },
      {
        key: "offre",
        tab: "Job post & multiposting",
        label: "Job visibility",
        title: "Your job is seen everywhere, posted once",
        text: "Describe your need in a few sentences: Hiron helps you write the job post in 10 minutes. It is then automatically published on Hiry and on a continuously growing network of partner job sites. More visibility, no re-typing.",
        how: "assisted writing and multiposting.",
      },
      {
        key: "marque",
        tab: "Employer brand & careers site",
        label: "Employer brand",
        title: "You compete on equal terms with big brands",
        text: "Your employer profile showcases your culture and what makes your company unique. As an option, you can also build your own careers site in a few clicks, with no technical skills and a choice of genuinely different layouts.",
        how: "the employer profile, plus the optional no-code careers site.",
        optional: true,
      },
      {
        key: "suivi",
        tab: "Tracking & interviews",
        label: "Simplicity",
        title: "Your whole hiring process in one place",
        text: "From posting to hiring, without juggling tools or spreadsheets: a tracking board that shows where each candidate stands, interview scheduling, document sharing. Easy to pick up from day one.",
        how: "built-in tracking for one or several hiring processes.",
      },
    ],
    mock: {
      matching: {
        offer: "Back-end developer · Permanent · Nantes",
        summary: "4 applications over 70% compatible",
        rows: [
          { initials: "SA", name: "Sami A.", meta: "5 yrs exp. · Nantes", score: 92 },
          { initials: "CL", name: "Chloé L.", meta: "Work-study · Rennes", score: 86 },
          { initials: "YD", name: "Yanis D.", meta: "8 yrs exp. · Angers", score: 81 },
          { initials: "EM", name: "Emma M.", meta: "First job · Nantes", score: 74 },
        ],
        why: "Sami: works with APIs and cloud daily, wants a product team, highly autonomous.",
      },
      profil: {
        badge: "360° profile",
        name: "Léa Martin",
        role: "Marketing manager · 7 years of experience",
        score: 89,
        scoreLabel: "compatible",
        axes: [
          { label: "Skills", value: 92 },
          { label: "Motivation", value: 90 },
          { label: "Personality", value: 86 },
        ],
        tags: ["Team spirit", "Rigour", "Creativity", "Curiosity", "Leadership"],
        noteLead: "Hiron:",
        note: "Léa wants to run a brand end to end. She describes herself as methodical and good at bringing a team together.",
        source: "Personality described from what Léa expressed during her conversation.",
      },
      offre: {
        needLabel: "Your need",
        need: "B2B field sales rep, Lyon, permanent, 3 years of experience",
        writing: "Hiron is writing…",
        draftTitle: "B2B field sales rep · Permanent · Lyon",
        draftText:
          "You join a team of 8 and grow a portfolio of industrial clients across the Auvergne-Rhône-Alpes region…",
        chips: ["Duties ✓", "Profile ✓", "Benefits ✓"],
        diffusionTitle: "Publishing",
        channels: [
          { name: "Hiry", status: "Live" },
          { name: "Partner job sites", status: "Live" },
          { name: "Your careers site", status: "Option", optional: true },
        ],
      },
      marque: {
        appLabel: "Careers site",
        company: "Kadran",
        steps: ["Template", "Content", "Brand", "Publish"],
        activeStep: 1,
        publish: "Publish",
        url: "kadran.hiry.fr",
        dateline: "Paris, October 2026",
        issue: "No. 07",
        headline: "We build the tools of those who",
        headlineEm: "build.",
        blockTag: "Jobs · synced",
        offersTitle: "Classifieds",
        openCount: "7 open roles",
        offers: [
          { cat: "Product & tech", t: "Full-stack developer", m: "Permanent · Paris · Hybrid" },
          { cat: "Marketing", t: "Content marketing", m: "Work-study · Paris" },
          { cat: "Customers", t: "Customer success manager", m: "Permanent · 5 yrs exp." },
          { cat: "Data", t: "Data analyst", m: "Internship · Paris · Hybrid" },
        ],
        poweredBy: "Powered by Hiry",
        panelTitle: "Jobs",
        panelPos: "Block 4 of 6",
        syncStrong: "7 jobs synced",
        syncText: "from Hiry. Nothing to re-type.",
        columnsLabel: "Columns",
        switches: ["Contract filters", "“Talk to Hiron” button"],
        bgLabel: "Block background",
      },
      suivi: {
        columns: [
          { title: "Received", cards: ["Nadia", "Hugo"] },
          { title: "Interview", cards: ["Karim"] },
          { title: "Offer", cards: ["Inès"] },
        ],
        slotTitle: "Interview scheduled",
        slot: "Thu. 12 · 2:00 pm · Google Meet",
        reminder: "Reminder sent to the candidate the day before",
      },
    },
  },

  how: {
    label: "04 · How it works",
    stepLabel: "Step",
    title: "From job post to hire, in <em>4 steps</em>",
    steps: [
      { title: "Describe your need", text: "A few sentences are enough: Hiron writes the job post with you.", ui: ["B2B field sales, Lyon, permanent", "Hiron is writing…"] },
      { title: "Post once", text: "The job goes live on Hiry and on a network of partner job sites.", ui: ["Hiry", "Partner sites"] },
      {
        title: "Get the right profiles",
        text: "Each candidate talks with Hiron for 10 minutes. You receive those over 70% compatible, with an explained score.",
        ui: ["87% compatible", "Why this score"],
      },
      { title: "Choose", text: "Interviews and tracking in one place. The decision is yours.", ui: ["Thu. 2 pm · Interview", "Reminder sent"] },
    ],
  },

  veille: {
    label: "05 · Talent watch",
    title: "Hire <em>before</em> you have an open role",
    p1: "A talent watch isn't a job post. You describe a role you'll hire for sooner or later, back-end developer, customer advisor or maintenance technician, and Hiry keeps surfacing matching profiles.",
    p2: "It runs in the background and alerts you when an interesting profile arrives. The day the role opens, you already have a list.",
    panel: "Watch",
    role: "Maintenance technician",
    status: "Active",
    since: "for 41 days",
    rows: [
      { initials: "KB", who: "Electromechanics profile", meta: "6 years of experience · Villeurbanne", when: "2 h ago" },
      { initials: "ML", who: "Industrial maintenance profile", meta: "Technical diploma · Vénissieux", when: "yesterday" },
      { initials: "TR", who: "Automation profile", meta: "4 years of experience · Bron", when: "Monday" },
    ],
    toast: "New matching profile",
    count: "profiles listed",
    quota: "Job posted:",
    quotaValue: "none",
  },

  ats: {
    label: "06 · A complete ATS",
    colFeature: "Feature",
    colClassic: "Traditional ATS",
    colHiry: "Hiry",
    yes: "Included",
    no: "Not included",
    title: "What an ATS does. And what it <em>doesn't</em>.",
    subtitle:
      "Hiry covers everything you expect from recruitment software. Then it goes where a traditional ATS stops.",
    groups: [
      {
        title: "Everything an ATS does",
        items: [
          { title: "Kanban pipeline and list view", text: "Notes shared with your team." },
          { title: "Messaging and templates", text: "Ready-to-use email templates." },
          { title: "Interviews", text: "Calendar, automatic Google Meet link, reminder." },
          { title: "Team and roles", text: "Permissions, several processes in parallel." },
          { title: "Dashboard", text: "Key metrics for every hire." },
          { title: "Multiposting", text: "A network of partner job sites." },
          { title: "Careers site", text: "Your brand, no technical skills needed.", optional: true },
        ],
      },
      {
        title: "What a traditional ATS doesn't",
        items: [
          { title: "360° candidate profile", text: "Skills, motivation, personality: what a CV doesn't tell you." },
          { title: "Predictive matching", text: "A 0 to 100 score, always explained." },
          { title: "Job posts with Hiron", text: "In 10 minutes, or imported from a PDF." },
          { title: "Talent watch", text: "Profiles surfaced before you even open a role." },
          { title: "Up-to-date availability", text: "Candidates confirm they're still looking." },
          { title: "Talent pool", text: "Candidates interested in your company, before any job post." },
        ],
      },
    ],
  },

  beforeAfter: {
    label: "07 · Before / after",
    title: "Your hiring, before and after <em>Hiry</em>",
    caption: "Comparison of hiring without and with Hiry",
    colCriterion: "Criterion",
    colWithout: "Without Hiry",
    colWith: "With Hiry",
    subtitle: "The same hiring process, lived two ways.",
    sansHead: "Over 100 CVs per job",
    avecHead: "5 to 10 compatible profiles",
    rows: [
      { criterion: "Screening time", without: "Hours spent reading CVs", with: "The time it takes to browse 5 to 10 explained profiles" },
      { criterion: "Matching", without: "Keywords, basic criteria (degree, experience)", with: "Semantic predictive matching: NLP, context, personality" },
      { criterion: "Applications received", without: "Over 100, 95% of them off-target", with: "5 to 10, over 70% compatible" },
      { criterion: "Profile quality", without: "A standard CV and cover letter", with: "A 360° profile: skills, motivation, personality" },
      { criterion: "Writing the job post", without: "Several hours of writing", with: "10 minutes for an attractive, complete job post" },
      { criterion: "Job visibility", without: "One ad to post site by site", with: "One post, published on Hiry and a network of partner sites" },
      { criterion: "Employer brand", without: "Drowned out by big brands", with: "An employer profile that looks like you, plus an optional careers site" },
      { criterion: "Tools used", without: "Inbox, spreadsheets, job boards", with: "A single platform, from job post to hire" },
    ],
  },

  humain: {
    label: "08 · People first",
    title: "AI puts the right people forward. <em>You</em> always choose.",
    subtitle:
      "Hiry is designed for the EU AI Act from day one: explained scores, traceable decisions, a decision that always stays human.",
    pillars: [
      {
        lead: "Every score is explained.",
        text: "You see why a candidate is shown to you: skills, motivation, personality, job criteria. No black box.",
      },
      {
        lead: "The decision stays human.",
        text: "Hiron ranks and explains, you decide. Every status change is made by a member of your team.",
      },
      {
        lead: "Everything is logged, data is protected.",
        text: "Every decision is logged. Data is hosted in Europe and processed in line with the GDPR. Candidates know AI is involved and stay in control of their data.",
      },
    ],
    note: "Personality is described from what candidates express during their conversation with Hiron. Hiron does not analyse voice, face or emotions.",
    ref: "Regulation (EU) 2024/1689 on artificial intelligence",
    logTitle: "Log · Application no. 2,418",
    log: [
      { t: "14:02", who: "Sarah M.", what: "Received → Interview", why: "technical skills" },
      { t: "09:47", who: "Julien D.", what: "Note added", why: "availability confirmed" },
      { t: "Mon.", who: "Hiron", what: "Score computed", why: "job criteria" },
    ],
  },

  forWhom: {
    label: "09 · Who it's for",
    title: "Built for <em>your</em> way of hiring",
    cards: [
      { key: "pme", title: "Small businesses, SMEs and startups", text: "Hire fast and well without spending hours on it. A job post in 10 minutes, the right profiles straight into your tracker." },
      { key: "eti", title: "Mid-caps and large companies", text: "High volumes, work-study campaigns, several processes and teams in parallel: Hiry keeps pace, with dedicated support." },
    ],
    volume: {
      title: "Hiring at scale?",
      text: "Internship or work-study campaigns, dozens of roles in parallel, several entities: let's talk about your organisation.",
      cta: "Talk to our team →",
    },
    proofs: {
      label: "Hiry in numbers",
      stats: [
        { value: 3000, prefix: "+", label: "registered candidates, 100% organic" },
        { value: 30, prefix: "~", label: "companies hiring with Hiry" },
        { value: 10, suffix: " min", label: "to create a complete job post" },
        { value: 70, prefix: "> ", suffix: "%", label: "compatibility for every application shown" },
      ],
      jcdecaux: { enabled: false, text: "Hiry was the recruitment operator of the JCDecaux stand at VivaTech." },
      media: {
        enabled: false,
        label: "Featured in:",
        list: ["Samuel Etienne's live show at VivaTech", "The “40 Nuances de Next” podcast", "RF Entrepreneurs"],
      },
      testimonials: { enabled: false, label: "Customer stories", read: "Read", stories: [], quote: { text: "", author: "", role: "" } },
    },
  },

  faq: {
    label: "10 · FAQ",
    title: "Your questions, <em>our answers</em>",
    items: [
      {
        q: "What is an AI-native ATS and how is Hiry different from a traditional ATS?",
        a: "A traditional ATS stores and organises the applications you receive: screening is still up to you. An AI-native ATS like Hiry does both. It runs your hiring from job post to hire (multiposting, kanban tracking, interviews) and uses AI to understand each candidate and show you compatible profiles directly, with an explained score.",
      },
      {
        q: "How does Hiry's predictive matching work?",
        a: "Hiry's matching doesn't compare keywords. It analyses the meaning of your job post and of each candidate's profile (NLP, context, skills, motivation, personality) to estimate compatibility. You receive the applications that are over 70% compatible, each with an explained score. Hiry relies on Google's AI models to run its own profile enrichment and matching method.",
      },
      {
        q: "What is the 360° candidate profile?",
        a: "It's the profile Hiry builds for each candidate after a 10-minute conversation with Hiron, Hiry's AI. It brings together their skills, motivation and personality, described from what they express during the conversation. You discover what a CV doesn't tell you, before the first interview.",
      },
      {
        q: "Which sites is my job posted on?",
        a: "On Hiry and on a continuously growing network of partner job sites. You post once, publishing is automatic, and every application comes back into your Hiry tracker. We show you the active partner sites during the demo.",
      },
      {
        q: "Can I create a careers site with Hiry?",
        a: "Yes, as an option. You build your own careers site in a few clicks, with no technical skills, choosing from several genuinely different layouts. Without the option, your employer profile on Hiry already showcases your culture and what makes your company unique.",
      },
      {
        q: "What kinds of roles can I hire for with Hiry?",
        a: "Internships, work-study contracts, first jobs and profiles with 3 to 15 years of experience. Hiry isn't only for juniors: the same method works for a communications work-study student and for a maintenance technician with 6 years of experience.",
      },
      {
        q: "Does the AI decide for me?",
        a: "No. Hiron puts compatible profiles forward and explains every score, but you always choose who to meet and who to hire. Every status change is made by a member of your team and logged in the application history.",
      },
      {
        q: "Is Hiry GDPR and AI Act compliant?",
        a: "Hiry is designed for the EU AI Act from day one: explained scores, logged decisions, a decision that always stays human. Hiron does not analyse candidates' voice, face or emotions. Data is hosted in Europe and processed in line with the GDPR. Every candidate knows AI is involved, can access their data and delete it.",
      },
      {
        q: "How much does Hiry cost?",
        a: "Hiry is a subscription with unlimited job posts. Pricing depends on your company size and hiring volumes: we present it during the demo, with the plan that fits your situation. For mid-caps, large companies and multi-entity groups, we build a custom offer.",
      },
      {
        q: "What is a talent watch?",
        a: "A talent watch isn't a job post: you describe a role you'll hire for sooner or later, with no date or applications, and Hiry keeps showing you matching profiles. The day the role opens, you already have a list. The subscription includes 2 watches.",
      },
      {
        q: "Where is my data hosted?",
        a: "Hiry is hosted in Europe on Google Cloud (europe-west region) and processes data in line with the GDPR. Candidate data is only visible to the companies they are shown to, and every candidate can access or delete their data.",
      },
      {
        q: "I'm a school or job fair partner. Do I need a subscription?",
        a: "No. Job posts reserved for your school or job fair remain free. If you'd also like to publish jobs open to all Hiry candidates, or use Hiry for your other hiring, we'll discuss it during the demo.",
      },
      {
        q: "Will I have to re-type all my job posts?",
        a: "No. Give us the address of your careers page or of a job post and we'll fetch it for you, one by one or all at once. You can also import a job post from a PDF: Hiron picks it up and helps you complete it.",
      },
      {
        q: "How long does it take to get started?",
        a: "Allow 10 minutes to create your first job post with Hiron. Your employer profile fills in as you go, and if you already have jobs online we fetch them for you. After the demo, we help you get up and running.",
      },
    ],
    more: "Another question? Ask it during the demo.",
    moreCta: "Book a demo →",
    // Le Mag n'existe qu'en français : pas de liens en anglais.
    further: { label: "", slugs: [] },
  },

  demo: {
    origin:
      "Hiry started from a simple observation: the right candidates exist, they just get lost in piles of CVs.",
    label: "11 · Demo",
    title: "Ready to save time on your <em>hiring</em>?",
    subtitle: "See Hiry in 20 minutes or get our demo video.",
    asideTitle: "During the demo",
    points: [
      "We start from your current hiring needs and your main challenge.",
      "We show you Hiry on a real case: job post, matching, tracking.",
      "You leave with a clear recommendation, no commitment.",
    ],
    facts: ["20 minutes", "No commitment", "With a member of the Hiry team"],
    contact: "A question first? Email us at",
  },

  demoPage: {
    badge: "Hiry demo",
    title: "See Hiry in <em>20 minutes</em>",
    subtitle:
      "The AI-native ATS that sends you 5 to 10 applications over 70% compatible, instead of 100 CVs. Book your demo or get the video.",
  },

  sticky: { cta: "Book a demo →" },

  form: {
    progress: "Step {current} of {total}",
    otherProblems: "Add other challenges",
    addMessage: "Add a message",
    selectedCount: "{count} selected",
    stepContact: "Your details",
    stepContext: "Your context",
    next: "Continue →",
    back: "← Back",
    modeLegend: "I would like to",
    modes: { demo: "Book a 20-min demo", video: "Get the demo video" },
    firstName: "First name",
    lastName: "Last name",
    email: "Work email",
    freeEmailWarning:
      "This looks like a personal address. A work email helps us prepare your demo.",
    phone: "Phone",
    phoneHint: "French format, for example 06 12 34 56 78.",
    company: "Company",
    fonction: "Job title",
    taille: "Company size",
    recrutements: "Hires planned over 12 months",
    typesPostes: "Types of roles",
    problematique: "Your main challenge",
    problematiqueAutre: "Please specify",
    autresProblematiques: "Other challenges",
    outil: "Tool used today",
    echeance: "Next hire",
    message: "Message",
    counter: "{count} / {max}",
    optional: "optional",
    select: "Select",
    consent: "I agree that Hiry may use this information to contact me about my request.",
    consentLink: "Privacy policy",
    submitDemo: "Book my demo →",
    submitVideo: "Get the video →",
    sending: "Sending…",
    options: {
      fonction: {
        dirigeant: "CEO / founder",
        rh: "HR director / HR manager",
        recruteur: "Recruiter / talent acquisition",
        manager: "Line manager",
        autre: "Other",
      },
      taille: {
        "1_10": "1 to 10 employees",
        "11_49": "11 to 49 employees",
        "50_249": "50 to 249 employees",
        "250_999": "250 to 999 employees",
        "1000_plus": "1,000 employees or more",
      },
      recrutements: { "1_5": "1 to 5", "6_15": "6 to 15", "16_50": "16 to 50", "50_plus": "More than 50" },
      typesPostes: {
        stage: "Internship",
        alternance: "Work-study",
        premier_emploi: "First job",
        experimente: "3 to 15 years of experience",
      },
      problematique: {
        trop_candidatures: "I get too many applications that don't fit the role",
        tri_chronophage: "Screening CVs takes me too long",
        cv_insuffisant: "A CV isn't enough to assess motivation and personality",
        erreurs_casting: "My hires don't last (mis-hires, early departures or terminations)",
        redaction_offre: "Writing attractive job posts takes me too long",
        visibilite_offre: "My jobs lack visibility, I post site by site",
        marque_employeur: "My employer brand can't compete with big companies",
        site_carrieres: "I don't have a careers site, or it doesn't reflect us",
        suivi_process: "I juggle email, spreadsheets and job boards to track candidates",
        ats_insatisfaisant: "My current tool doesn't help me screen or choose",
        campagnes_volume: "I hire at scale (internship or work-study campaigns, several roles in parallel)",
        salons: "I hire at job fairs or hiring events",
        autre: "Other",
      },
      outil: {
        aucun: "None, email and spreadsheets",
        jobboards: "Job boards only",
        ats: "An ATS",
        cabinet: "An agency / provider",
        autre: "Other",
      },
      echeance: {
        ce_mois: "This month",
        "1_3_mois": "In 1 to 3 months",
        plus_tard: "Later",
        renseigne: "Just exploring",
      },
    },
    errors: {
      required: "This field is required.",
      email: "Enter a valid email address.",
      phone: "Enter a valid French number, for example 06 12 34 56 78.",
      too_long: "This text is too long.",
      consent: "We need your consent to get back to you.",
      summary: "Some fields need fixing.",
      server: "Sending failed. Try again in a moment or email us at contact@hiry.fr.",
      rateLimited:
        "Several requests have already been sent. Try again in a few minutes or email us at contact@hiry.fr.",
    },
    success: {
      demoTitle: "Thank you, we've received your request.",
      demoText: "Pick the time slot that suits you now.",
      demoBook: "Choose my slot →",
      demoFallback: "We'll get back to you within 1 business day to set up a time.",
      videoTitle: "Your video is on its way to your inbox.",
      videoText: "Check your spam folder if you don't see it within a few minutes.",
      videoAlso: "Prefer to talk it through? Book a 20-min demo →",
    },
  },

  contactNudge: {
    title: "Would you like a demo?",
    link: "See Hiry in 20 minutes →",
  },
};

export default en;
