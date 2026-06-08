// app/robots.ts
// Politique d'accès des crawlers — généralistes + bots IA explicitement autorisés.
// Cf. https://hiry.fr/llms.txt pour les directives d'usage destinées aux LLMs.
import type { MetadataRoute } from "next";

const SITE_URL = "https://hiry.fr";

// Bots IA explicitement reconnus (autorisation transparente, signal de bonne foi
// et meilleure indexation par les moteurs de réponse génératifs).
const AI_BOTS = [
  "GPTBot", // OpenAI (ChatGPT training)
  "ChatGPT-User", // ChatGPT browsing en temps réel
  "OAI-SearchBot", // OpenAI search
  "ClaudeBot", // Anthropic (Claude training)
  "Anthropic-AI", // Ancien crawler Anthropic
  "PerplexityBot", // Perplexity AI
  "Perplexity-User", // Perplexity browsing
  "Google-Extended", // Gemini (séparé de Googlebot SEO classique)
  "CCBot", // Common Crawl (utilisé par de nombreux LLMs)
  "Applebot-Extended", // Apple Intelligence
  "Bytespider", // ByteDance (Doubao)
  "Meta-ExternalAgent", // Meta AI
  "DuckAssistBot", // DuckDuckGo Assist
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Règle générale : tout autorisé sauf API
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Bots IA : autorisation explicite (mêmes règles que les autres)
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
