"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import EcomHero from "@/components/ecommerce/EcomHero";
import EcomWhyPartner from "@/components/ecommerce/EcomWhyPartner";
import EcomSolutions from "@/components/ecommerce/EcomSolutions";
import EcomPlatforms from "@/components/ecommerce/EcomPlatforms";
import EcomPlatformCompare from "@/components/ecommerce/EcomPlatformCompare";
import EcomMarketplace from "@/components/ecommerce/EcomMarketplace";
import EcomERP from "@/components/ecommerce/EcomERP";
import EcomCRO from "@/components/ecommerce/EcomCRO";
import EcomGrowth from "@/components/ecommerce/EcomGrowth";
import EcomProcess from "@/components/ecommerce/EcomProcess";
import EcomCaseStudies from "@/components/ecommerce/EcomCaseStudies";
import EcomIndustries from "@/components/ecommerce/EcomIndustries";
import EcomWhyDifferent from "@/components/ecommerce/EcomWhyDifferent";
import EcomLeadCapture from "@/components/ecommerce/EcomLeadCapture";

const faq = [
  { question: "Which e-commerce platform is best for my business?", answer: "It depends on your needs: Shopify for ease and speed, WooCommerce for WordPress integration, Magento for enterprise flexibility. We help you choose based on catalog size, budget, and growth plans." },
  { question: "How much does an e-commerce store cost?", answer: "Basic Shopify stores start at $5K, mid-range custom stores $15K–$40K, and enterprise solutions $50K+. We provide transparent pricing after understanding your requirements." },
  { question: "Can you integrate my store with ERP and inventory systems?", answer: "Yes. We specialize in connecting e-commerce platforms with ERP systems, inventory management, shipping APIs, and payment gateways for seamless operations." },
  { question: "How do you improve e-commerce conversion rates?", answer: "Through data-driven CRO: A/B testing, checkout optimization, personalization, speed improvements, and UX enhancements that typically increase conversions by 30–80%." },
  { question: "Do you support marketplace selling (Amazon, Noon)?", answer: "Absolutely. We build multi-channel strategies integrating your store with Amazon, Noon, Trendyol, and other marketplaces — syncing inventory, pricing, and orders." },
];

const Ecommerce = () => (
  <div className="min-h-screen">
    
    <Navbar />
    <EcomHero />
    <EcomWhyPartner />
    <CaseStudiesSection />
    <WebDevClients />
    <EcomSolutions />
    <EcomPlatforms />
    <EcomPlatformCompare />
    <EcomMarketplace />
    <EcomERP />
    <EcomCRO />
    <EcomGrowth />
    <EcomProcess />
    <EcomCaseStudies />
    <EcomIndustries />
    <EcomWhyDifferent />
    <EcomLeadCapture />
    <CrossLinkSection currentPage="ecommerce" links={["shopify-dev", "shopify-plus", "shopify-themes", "digital-marketing", "erp", "ai-automation"]} variant="light" />
    <Footer />
    <MobileFloatingCTA />
  </div>
);

export default Ecommerce;
