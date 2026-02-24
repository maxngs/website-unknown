// ============================================================
// contexts/LeadModalContext.tsx
// Contexte global pour ouvrir le modal depuis n'importe quel CTA
// ============================================================
"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface LeadModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(
  undefined
);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal(): LeadModalContextType {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error(
      "useLeadModal doit être utilisé à l'intérieur d'un <LeadModalProvider>"
    );
  }
  return context;
}
