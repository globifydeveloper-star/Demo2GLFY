"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactFormDialog from "@/components/ContactFormDialog";

interface ContactDialogContextType {
  openContactDialog: (selectedPlan?: string | React.MouseEvent) => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export const useContactDialog = () => {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error("useContactDialog must be used within ContactDialogProvider");
  }
  return ctx;
};

export const ContactDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>();

  const openContactDialog = (selectedPlan?: string | React.MouseEvent) => {
    const planStr = typeof selectedPlan === 'string' ? selectedPlan : undefined;
    setPlan(planStr);
    setOpen(true);
  };

  return (
    <ContactDialogContext.Provider value={{ openContactDialog }}>
      {children}
      <ContactFormDialog open={open} onOpenChange={setOpen} selectedPlan={plan} />
    </ContactDialogContext.Provider>
  );
};
