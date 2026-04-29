"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import ERPHero from "@/components/erp/ERPHero";
import ERPWhyInvest from "@/components/erp/ERPWhyInvest";
import ERPModules from "@/components/erp/ERPModules";
import ERPMedoc from "@/components/erp/ERPMedoc";
import ERPEkasys from "@/components/erp/ERPEkasys";
import ERPComparison from "@/components/erp/ERPComparison";
import ERPIndustries from "@/components/erp/ERPIndustries";
import ERPDeployment from "@/components/erp/ERPDeployment";
import ERPIntegrations from "@/components/erp/ERPIntegrations";
import ERPCaseStudies from "@/components/erp/ERPCaseStudies";
import ERPProcess from "@/components/erp/ERPProcess";
import ERPWhyDifferent from "@/components/erp/ERPWhyDifferent";
import ERPLeadCapture from "@/components/erp/ERPLeadCapture";

const faq = [
  { question: "What is ERP and why does my business need it?", answer: "ERP (Enterprise Resource Planning) unifies finance, HR, inventory, manufacturing, and sales into one system, eliminating data silos, reducing errors by 90%, and giving you real-time visibility across operations." },
  { question: "How much does an ERP implementation cost?", answer: "Cloud ERP solutions start at $20K for SMBs. Enterprise implementations range from $50K–$200K+ depending on modules, customizations, and integrations. We provide detailed ROI projections upfront." },
  { question: "How long does ERP implementation take?", answer: "Phased implementations start delivering value in 3–4 months. Full enterprise rollouts take 6–12 months. We use agile delivery so each phase goes live independently." },
  { question: "Can you migrate from our existing ERP?", answer: "Yes. We specialize in migrations from legacy systems, SAP, Oracle, and custom ERPs — preserving historical data, maintaining business continuity, and minimizing risk." },
  { question: "What industries do your ERP solutions serve?", answer: "Manufacturing, healthcare (MEDOC HMS), retail, logistics, education, construction, and FMCG. Our EKASYS and MEDOC platforms are purpose-built for industry-specific workflows." },
];

const ERPSolutions = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <ERPHero />
      <ERPWhyInvest />
      <CaseStudiesSection />
      <WebDevClients />
      <ERPModules />
      <ERPMedoc />
      <ERPEkasys />
      <ERPComparison />
      <ERPIndustries />
      <ERPDeployment />
      <ERPIntegrations />
      <ERPCaseStudies />
      <ERPProcess />
      <ERPWhyDifferent />
      <ERPLeadCapture />
      <CrossLinkSection currentPage="erp" links={["ai-automation", "digital-transformation", "ecommerce", "process-automation", "web-dev", "healthcare"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default ERPSolutions;
