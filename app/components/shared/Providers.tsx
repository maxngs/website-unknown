// ============================================================
// app/components/shared/Providers.tsx
// Wrapper client : Provider du modal + CookieBanner
// Un seul fichier à brancher dans layout.tsx et tout fonctionne.
// ============================================================
"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import LeadCaptureModal from "./LeadCaptureModal";
import CookieBanner from "./CookieBanner";

// ============================================================
// CONTEXTE — permet d'ouvrir le modal depuis n'importe quel CTA
// ============================================================
interface LeadModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(
  undefined
);

/**
 * Hook à utiliser dans n'importe quel composant client :
 *
 * import { useLeadModal } from "../components/shared/Providers";
 * const { open } = useLeadModal();
 * <button onClick={open}>CTA</button>
 */
export function useLeadModal(): LeadModalContextType {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error(
      "useLeadModal doit être utilisé à l'intérieur de <Providers>"
    );
  }
  return context;
}

// ============================================================
// COMPONENT
// ============================================================
export default function Providers({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <LeadCaptureModal isOpen={isOpen} onClose={close} />
      <CookieBanner />
    </LeadModalContext.Provider>
  );
}
