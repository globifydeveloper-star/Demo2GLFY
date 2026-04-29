"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import DTHero from "@/components/digital-transformation/DTHero";
import DTAudience from "@/components/digital-transformation/DTAudience";
import DTChallenges from "@/components/digital-transformation/DTChallenges";
import DTServices from "@/components/digital-transformation/DTServices";
import DTWhyChoose from "@/components/digital-transformation/DTWhyChoose";
import DTIndustries from "@/components/digital-transformation/DTIndustries";
import DTCaseStudies from "@/components/digital-transformation/DTCaseStudies";
import DTRoadmap from "@/components/digital-transformation/DTRoadmap";
import DTSecurity from "@/components/digital-transformation/DTSecurity";
import DTLeadCapture from "@/components/digital-transformation/DTLeadCapture";
import DTTestimonials from "@/components/digital-transformation/DTTestimonials";
import DTFAQ from "@/components/digital-transformation/DTFAQ";
import DTFinalCTA from "@/components/digital-transformation/DTFinalCTA";

const faq = [
  { question: "How much does digital transformation cost?", answer: "Investment varies based on scope, complexity, and industry. We offer flexible engagement models, from focused pilot projects starting at $15K to enterprise-wide transformations. Every project begins with a free assessment to define the optimal budget and expected ROI." },
  { question: "How long does a typical transformation project take?", answer: "Timelines range from 3 months for focused automation projects to 12–18 months for enterprise-wide transformations. We use phased delivery so you see value at every milestone, not just at the end." },
  { question: "What ROI can we expect?", answer: "Our clients typically see 30–60% efficiency gains, 20–40% cost reductions, and significant revenue growth within the first year. We define measurable KPIs upfront so ROI is tracked and reported throughout." },
  { question: "What technology stack do you use?", answer: "We're technology-agnostic and choose the best stack for your needs, including React, Node.js, Python, AWS, Azure, Shopify, custom ERP platforms (EKASYS, MEDOC), Power Platform, and more." },
  { question: "How do you handle data migration risk?", answer: "We follow a structured migration methodology: data audit → mapping → validation → parallel running → cutover. Rollback plans are built into every migration to minimize risk." },
  { question: "Can you integrate with our existing systems?", answer: "Absolutely. We specialize in integrating legacy and modern systems using APIs, middleware, and custom connectors, ensuring seamless data flow across your entire technology landscape." },
  { question: "Do you provide ongoing support after launch?", answer: "Yes. We offer managed support packages including monitoring, maintenance, updates, and continuous optimization to ensure your transformation delivers long-term value." },
];

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <DTHero />
      <DTAudience />
      <CaseStudiesSection />
      <WebDevClients />
      <DTChallenges />
      <DTServices />
      <DTWhyChoose />
      <DTIndustries />
      <DTCaseStudies />
      <DTRoadmap />
      <DTSecurity />
      <DTLeadCapture />
      <DTTestimonials />
      <DTFAQ />
      <DTFinalCTA />
      <CrossLinkSection currentPage="digital-transformation" links={["ai-automation", "erp", "ai-framework", "process-automation", "ecommerce", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default DigitalTransformation;
