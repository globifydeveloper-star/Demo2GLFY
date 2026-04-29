"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import AppDevHero from "@/components/app-dev/AppDevHero";
import AppDevWhyPartner from "@/components/app-dev/AppDevWhyPartner";
import AppDevServices from "@/components/app-dev/AppDevServices";
import AppDevMobile from "@/components/app-dev/AppDevMobile";
import AppDevNativeVsCross from "@/components/app-dev/AppDevNativeVsCross";
import AppDevSaaS from "@/components/app-dev/AppDevSaaS";
import AppDevTechStack from "@/components/app-dev/AppDevTechStack";
import AppDevCROGrowth from "@/components/app-dev/AppDevCROGrowth";
import AppDevProcess from "@/components/app-dev/AppDevProcess";
import AppDevCaseStudies from "@/components/app-dev/AppDevCaseStudies";
import AppDevIndustries from "@/components/app-dev/AppDevIndustries";
import AppDevWhyDifferent from "@/components/app-dev/AppDevWhyDifferent";
import AppDevLeadCapture from "@/components/app-dev/AppDevLeadCapture";

const faq = [
  { question: "Should I build a native or cross-platform app?", answer: "Cross-platform (React Native, Flutter) is ideal for most businesses — 60% lower cost, faster time-to-market, and near-native performance. Native is best for graphics-intensive or hardware-dependent apps." },
  { question: "How much does mobile app development cost?", answer: "MVPs start at $15K–$30K. Full-featured apps range from $40K–$150K+ depending on complexity, platforms, and integrations. We provide detailed estimates after a discovery session." },
  { question: "How long does it take to build a mobile app?", answer: "MVPs: 8–12 weeks. Full apps: 4–8 months. We use agile development with 2-week sprints so you see progress and can adjust priorities continuously." },
  { question: "Do you build SaaS applications?", answer: "Yes. We build full SaaS platforms including multi-tenant architecture, subscription billing, admin dashboards, API layers, and scalable cloud infrastructure." },
  { question: "What about app store submission and maintenance?", answer: "We handle the entire lifecycle: development, testing, App Store/Play Store submission, and ongoing maintenance including updates, bug fixes, and performance optimization." },
];

const AppDevelopment = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <AppDevHero />
      <AppDevWhyPartner />
      <CaseStudiesSection />
      <WebDevClients />
      <AppDevServices />
      <AppDevMobile />
      <AppDevNativeVsCross />
      <AppDevSaaS />
      <AppDevTechStack />
      <AppDevCROGrowth />
      <AppDevProcess />
      <AppDevCaseStudies />
      <AppDevIndustries />
      <AppDevWhyDifferent />
      <AppDevLeadCapture />
      <CrossLinkSection currentPage="app-dev" links={["web-dev", "ai-automation", "ecommerce", "shopify-apps", "erp", "digital-transformation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default AppDevelopment;
