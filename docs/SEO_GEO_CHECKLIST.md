# Checklist SEO / GEO Hiry

> **Dernière mise à jour** : 12 juin 2026
> **Objectif** : ranker sur Google + apparaître dans les LLMs (ChatGPT, Claude, Perplexity, Gemini)

---

## Ce qui est déjà en place (technique)

- [x] **Site et architecture** — Le Mag (19 articles + 8 entrées glossaire) en 4 silos (entreprises / candidats / écoles / études)
- [x] **JSON-LD** — Organization, WebSite, Article, FAQPage, BreadcrumbList, DefinedTerm, Person, ProfilePage, AboutPage, SoftwareApplication, CollectionPage, Product/Offer
- [x] **GEO-ready** — `llms.txt` + `robots.txt` avec AI bots allowlist (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot)
- [x] **Sitemap dynamique** + RSS feed (`/mag/feed.xml`)
- [x] **Person author** (Maxime + Stéphanie) avec `sameAs` LinkedIn + alumni
- [x] **3 entity pages** : `/a-propos`, `/fonctionnalites`, `/tarifs`
- [x] **Redirects 301** `/blog/*` → `/mag/*`
- [x] **OG images** statiques par silo + dynamiques par article
- [x] **Identité légale** Hiry SAS Nanterre (Privacy/CGU/Mentions V2.1)
- [x] **Perf** — FadeIn en CSS pur (gain ~50 Kio sur les landings)

---

## Activation technique (fait le 12/06/2026)

- [x] Google Search Console + sitemap soumis
- [x] 8 demandes d'indexation manuelles (homepage, /a-propos, /fonctionnalites, /tarifs, /mag, 2 articles piliers, glossaire)
- [x] Bing Webmaster Tools (import GSC + sitemap)
- [x] Schema.org Validator (5 URLs clés)
- [x] PageSpeed Insights (perf à 87+ médian sur les landings)

---

## Baseline GEO (12/06/2026)

> **Question test** : "Quelles sont les meilleures plateformes de recrutement IA en France en 2026 ?"

| LLM | Hiry mentionné ? | Top 3 cités |
|---|---|---|
| ChatGPT | NON | Maki People, Hellowork Recruteur, JobTeaser |
| Perplexity | NON | Beetween, Layan, TalentPicker |
| Gemini | NON | Leonar, Kalent, Juicebox |
| Claude | (non testé) | — |

**Insight clé** : aucun concurrent ne se positionne sur le **"matching par potentiel"** — c'est l'USP unique de Hiry à pousser dans la presse / les LLMs.

**Re-tester le** : 12 juillet 2026, 12 août 2026, 12 septembre 2026

---

## Avant VivaTech (jusqu'au 16/06/2026)

### Backlinks autorité
- [x] L'Escalator (déjà en ligne)
- [x] Demande Google for Startups envoyée
- [ ] Réponse Google for Startups → si OK, vérifier que le lien pointe vers `https://hiry.fr`
- [ ] Vérifier fiche exposant VivaTech : site `https://hiry.fr` bien déclaré, fondateurs listés, pitch contient "recrutement IA / matching / potentiel"

### Annuaires startup FR (~45 min)
- [ ] [France Digitale](https://francedigitale.org/devenir-membre) — dossier d'adhésion
- [ ] [Crunchbase](https://www.crunchbase.com/add-new) — fiche FR distincte de l'américaine homonyme
- [ ] [Welaunch](https://welaunch.fr/) — soumission startup
- [ ] [La French Tech](https://lafrenchtech.com/) — adhésion Capitale

### Pitch presse (VivaTech = excuse parfaite)
- [ ] Maddyness — angle "startup IA recrutement à VivaTech"
- [ ] Frenchweb — idem
- [ ] Welcome to the Jungle blog — angle RH
- [ ] mycvtheque.com / hrmatin.com / rhtechnologiesfrance.com — Perplexity les utilise comme sources

### LinkedIn J-1
- [ ] Post Maxime "Demain on est à VivaTech, Pavillon 7 Stand 2F64-001"
- [ ] Post Stéphanie idem (très actif → signal social fort)

---

## Pendant VivaTech (17-20/06/2026)

- [ ] Post LinkedIn chaque jour du salon (toi + Stéphanie)
- [ ] Mentionner `hiry.fr` dans CHAQUE post
- [ ] Récupérer cartes / contacts des visiteurs
- [ ] Demander aux visiteurs de partager #Hiry pour signal social
- [ ] Photo stand + vidéo (réutilisable pour les posts post-salon)

---

## Après VivaTech (à partir du 21/06/2026)

### Code (à faire en 5 min, Claude le fait quand tu lui dis)
- [ ] Retirer la bannière VivaTech (`<VivaTechBanner />` dans `Navbar.tsx` + supprimer le fichier)
- [ ] Ajouter le **numéro de TVA Hiry SAS** dans `/mentions-legales`

### Contenu manquant (priorité forte)
- [ ] **Article 1.2 critique** : `/mag/entreprises/aide-embauche-alternance-2026` — référencé depuis 3 articles existants → **liens 404 actuellement**
- [ ] **Silo Écoles** : 8 articles planifiés (silo vide actuellement)
- [ ] **Silo Études** : 3 baromètres planifiés (silo vide actuellement)

### Calendrier éditorial (continu)
- [ ] 1 nouvel article toutes les 2 semaines minimum
- [ ] Mettre à jour `dateModified` sur les anciens articles quand ils sont retouchés
- [ ] Internal linking : 3-5 liens internes par nouvel article + 1 lien vers une page produit

---

## Mesure (continue, à partir du 19/06)

### Hebdo (10 min, le lundi matin)
- [ ] Google Search Console → onglet Performance : impressions, clics, position moyenne
- [ ] Identifier les requêtes où Hiry apparaît (même en page 3-4) pour optimiser

### Mensuel
- [ ] Refaire le test baseline LLMs (4 prompts) — sauvegarder résultats
- [ ] Check backlinks via [ahrefs.com/backlink-checker](https://ahrefs.com/backlink-checker) (gratuit pour 1 check)
- [ ] Trafic depuis LLMs dans Vercel Analytics : referrers `chatgpt.com`, `perplexity.ai`, `you.com`

### Tous les 14 jours
- [ ] Check des AI bots dans Vercel Analytics ou logs : GPTBot, ClaudeBot, PerplexityBot, Google-Extended

---

## KPIs cibles à 3 mois (mi-septembre 2026)

| Métrique | Cible |
|----------|--------|
| Pages indexées Google | 50+ |
| Impressions GSC / mois | 5 000+ |
| Clics GSC / mois | 200+ |
| Position moyenne sur "matching IA recrutement" | < 30 |
| Mentions dans LLMs (sur 4 prompts test) | ≥ 1/4 |
| Backlinks de domaines uniques | 10+ |
| Trafic depuis chatgpt.com / perplexity.ai | détectable (≥ 5 sessions/mois) |

---

## Ce qu'il NE FAUT PAS oublier (anti-patterns)

- **Ne pas spammer GSC** avec des demandes d'indexation (~10-12/jour max)
- **Ne pas changer les URLs** des pages déjà indexées (sauf 301 propre)
- **Ne pas mettre `noindex` par erreur** sur une page produit après refactor
- **Ne pas casser les internal links** (article 1.2 manquant = c'est ce qui se passe actuellement)
- **Ne pas oublier les `dateModified`** quand tu retouches un article ancien
- **Ne pas surcharger les pages** d'animations Framer Motion (cf. perf optim FadeIn)
