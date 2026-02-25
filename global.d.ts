// global.d.ts
// Déclaration TypeScript pour le dataLayer GTM
export {};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
