"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import WebDevHero from "@/components/web-dev/WebDevHero";
import WebDevWhyChooseUs from "@/components/web-dev/WebDevWhyChooseUs";
import WebDevServices from "@/components/web-dev/WebDevServices";
import WebDevEcommerce from "@/components/web-dev/WebDevEcommerce";
import WebDevShopifyVsWordPress from "@/components/web-dev/WebDevShopifyVsWordPress";
import WebDevTechStack from "@/components/web-dev/WebDevTechStack";
import WebDevCRO from "@/components/web-dev/WebDevCRO";
import WebDevProcess from "@/components/web-dev/WebDevProcess";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevIndustries from "@/components/web-dev/WebDevIndustries";
import WebDevWhyDifferent from "@/components/web-dev/WebDevWhyDifferent";
import WebDevLeadCapture from "@/components/web-dev/WebDevLeadCapture";
import WebDevClients from "@/components/web-dev/WebDevClients";

const faq = [
  { question: "How much does a custom website cost?", answer: "Custom website costs range from $5K for small business sites to $50K+ for enterprise platforms. We provide detailed quotes after understanding your requirements, goals, and scale." },
  { question: "How long does web development take?", answer: "Typical timelines: 4–6 weeks for standard sites, 8–12 weeks for e-commerce, and 12–20 weeks for complex web applications. We use agile sprints so you see progress weekly." },
  { question: "Do you build on Shopify or WordPress?", answer: "We work with both, Shopify for e-commerce and WordPress for content-heavy sites. We also build custom solutions with React, Next.js, and headless CMS architectures." },
  { question: "Will my website be SEO-friendly?", answer: "Yes. Every site we build includes technical SEO: semantic HTML, Core Web Vitals optimization, structured data, sitemap generation, and mobile-first responsive design." },
  { question: "Do you provide post-launch support?", answer: "Absolutely. We offer maintenance packages including security updates, performance monitoring, content updates, and ongoing CRO optimization." },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <WebDevHero />
      <WebDevWhyChooseUs />
      <CaseStudiesSection />
      <WebDevClients />
      <WebDevServices />
      <WebDevEcommerce />
      <WebDevShopifyVsWordPress />
      <WebDevTechStack />
      <WebDevCRO />
      <WebDevProcess />
      <WebDevIndustries />
      <WebDevWhyDifferent />
      <WebDevLeadCapture />
      <CrossLinkSection currentPage="web-dev" links={["ecommerce", "shopify-dev", "app-dev", "digital-marketing", "seo", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default WebDevelopment;
