"use client";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { ContactDialogProvider } from "@/contexts/ContactDialogContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
      <TooltipProvider>
        <Sonner />
        <ContactDialogProvider>
          {children}
        </ContactDialogProvider>
      </TooltipProvider>
  );
}
