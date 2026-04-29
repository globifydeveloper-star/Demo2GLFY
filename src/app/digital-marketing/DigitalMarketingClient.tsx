"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import DMHero from "@/components/digital-marketing/DMHero";
import DMWhyChooseUs from "@/components/digital-marketing/DMWhyChooseUs";
import DMServices from "@/components/digital-marketing/DMServices";
import DMPerformance from "@/components/digital-marketing/DMPerformance";
import DMFullFunnel from "@/components/digital-marketing/DMFullFunnel";
import DMSeo from "@/components/digital-marketing/DMSeo";
import DMSocial from "@/components/digital-marketing/DMSocial";
import DMCRO from "@/components/digital-marketing/DMCRO";
import DMAnalytics from "@/components/digital-marketing/DMAnalytics";
import DMIndustries from "@/components/digital-marketing/DMIndustries";
import DMCaseStudies from "@/components/digital-marketing/DMCaseStudies";
import DMWhyDifferent from "@/components/digital-marketing/DMWhyDifferent";
import DMLeadCapture from "@/components/digital-marketing/DMLeadCapture";

const faq = [
  { question: "How much does digital marketing cost?", answer: "Monthly retainers start at $2K for focused campaigns and scale to $15K+ for full-funnel strategies. We customize budgets based on your goals, industry, and competitive landscape." },
  { question: "How long before I see results from digital marketing?", answer: "PPC delivers results within days. SEO typically shows meaningful growth in 3–6 months. Social media engagement builds within 4–8 weeks. We set realistic timelines for each channel." },
  { question: "Do you handle both SEO and paid advertising?", answer: "Yes. We run integrated strategies combining SEO, Google Ads, Meta Ads, LinkedIn Ads, and social media — ensuring all channels work together for maximum ROI." },
  { question: "How do you measure marketing ROI?", answer: "We track revenue attribution, ROAS, CAC, LTV, and conversion metrics using advanced analytics. Monthly reports show exactly how every dollar drives business outcomes." },
  { question: "Can you help with marketing in the UAE and India markets?", answer: "Absolutely. We have deep expertise in both markets — including Arabic/Hindi content, local SEO, regional ad platforms, and culturally relevant strategies." },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <DMHero />
      <DMWhyChooseUs />
      <CaseStudiesSection />
      <WebDevClients />
      <DMServices />
      <DMPerformance />
      <DMFullFunnel />
      <DMSeo />
      <DMSocial />
      <DMCRO />
      <DMAnalytics />
      <DMIndustries />
      <DMCaseStudies />
      <DMWhyDifferent />
      <DMLeadCapture />
      <CrossLinkSection currentPage="digital-marketing" links={["seo", "paid-ads", "social-media", "ecommerce", "cro", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default DigitalMarketing;
