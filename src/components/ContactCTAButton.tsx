"use client";

import { ReactNode } from "react";
import { useContactDialog } from "@/contexts/ContactDialogContext";

interface ContactCTAButtonProps {
  children: ReactNode;
  className?: string;
}

const ContactCTAButton = ({ children, className = "" }: ContactCTAButtonProps) => {
  const { openContactDialog } = useContactDialog();
  return (
    <button onClick={openContactDialog} className={className}>
      {children}
    </button>
  );
};

export default ContactCTAButton;
