"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import HeroSection from "@/components/HeroSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import ClientsSection from "@/components/ClientsSection";
import ScrollDepthReveal from "@/components/ScrollDepthReveal";

// Lazy-load below-fold sections
const StatsSection = lazy(() => import("@/components/StatsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TechBannerSection = lazy(() => import("@/components/TechBannerSection"));
const AIAutomationSection = lazy(() => import("@/components/AIAutomationSection"));
const DigitalMarketingSection = lazy(() => import("@/components/DigitalMarketingSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TechStackSection = lazy(() => import("@/components/TechStackSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const CaseStudiesSection = lazy(() => import("@/components/CaseStudiesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const MissionBreaker = lazy(() => import("@/components/MissionBreaker"));
const IndustriesGridSection = lazy(() => import("@/components/IndustriesGridSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ScrollingBanner = lazy(() => import("@/components/ScrollingBanner"));
const Footer = lazy(() => import("@/components/Footer"));
const ParallaxLayer = lazy(() => import("@/components/ParallaxLayer"));

const homeFAQ = [
  { question: "What does Globify do differently from a traditional agency?", answer: "Globify is a 360° digital transformation enabler, not a web agency. We engineer AI-powered solutions that automate operations, drive revenue growth, and deliver measurable ROI, combining ERP, AI, commerce, and marketing into unified growth ecosystems." },
  { question: "How does AI integrate into your solutions?", answer: "AI is embedded across everything we build, from predictive analytics in ERP and AI-powered personalization in commerce, to intelligent automation in workflows and AI campaign optimization in marketing. Every solution is designed to be AI-first." },
  { question: "What industries do you serve?", answer: "We serve enterprise and mid-market clients across healthcare, fintech, retail, manufacturing, supply chain, and SaaS, with deep expertise in UAE and global markets." },
  { question: "How quickly can we see ROI?", answer: "Most clients see measurable results within 90 days, whether it's cost reduction through automation, revenue growth via AI-powered commerce, or operational efficiency gains from ERP modernization." },
  { question: "What is your typical engagement model?", answer: "We offer strategic consulting, project-based delivery, and long-term partnership models. Every engagement starts with a free digital maturity audit and ROI-driven transformation roadmap." },
  { question: "Do you offer post-launch support and optimization?", answer: "Yes, we provide continuous optimization, AI model retraining, performance monitoring, and strategic growth advisory to ensure your solutions keep delivering increasing value." },
];

const homeServices = [
  { name: "AI & Intelligent Automation", description: "Enterprise AI chatbots, predictive analytics, workflow automation, and Microsoft Power Platform solutions.", url: "/ai-automation" },
  { name: "Digital Transformation", description: "AI-first transformation strategy, digital maturity audits, and end-to-end enterprise modernization.", url: "/digital-transformation" },
  { name: "E-Commerce & Marketplace Enablement", description: "AI-powered commerce across D2C, B2B, and global marketplaces like Amazon, Noon, and Trendyol.", url: "/ecommerce" },
  { name: "AI-Powered ERP Solutions", description: "EKASYS, MEDOC, and custom ERP with predictive analytics and AI-driven decision intelligence.", url: "/erp-solutions" },
  { name: "AI-Ready Web Platforms", description: "Conversion-optimized, headless web platforms with AI personalization and ERP/CRM integration.", url: "/web-development" },
  { name: "AI-Driven Revenue Marketing", description: "AI campaign optimization, attribution intelligence, CRO, and full-funnel revenue engineering.", url: "/digital-marketing" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <HeroSection />

      <ScrollDepthReveal depth="foreground">
        <TrustBadgesSection />
      </ScrollDepthReveal>

      <ClientsSection />

      <Suspense fallback={null}>
        <ParallaxLayer
          orbs={[
            { position: "top-20 -left-32", color: "hsl(20 90% 48% / 0.06)", size: "w-[400px] h-[400px]", speed: 0.25 },
            { position: "bottom-10 right-0", color: "hsl(47 100% 96% / 0.04)", size: "w-[350px] h-[350px]", speed: 0.15 },
          ]}
        >
          <ScrollDepthReveal depth="midground">
            <StatsSection />
          </ScrollDepthReveal>
        </ParallaxLayer>

        <ParallaxLayer
          orbs={[
            { position: "-top-20 right-1/4", color: "hsl(190 90% 50% / 0.05)", size: "w-[500px] h-[500px]", speed: 0.3 },
            { position: "bottom-0 -left-20", color: "hsl(20 90% 48% / 0.04)", size: "w-[400px] h-[400px]", speed: 0.18 },
          ]}
        >
          <ServicesSection />
        </ParallaxLayer>

        <ScrollDepthReveal depth="background" direction="up">
          <TechBannerSection />
        </ScrollDepthReveal>

        <ParallaxLayer
          orbs={[
            { position: "top-1/3 -right-20", color: "hsl(270 60% 50% / 0.05)", size: "w-[450px] h-[450px]", speed: 0.22 },
            { position: "bottom-20 left-10", color: "hsl(20 90% 48% / 0.03)", size: "w-[300px] h-[300px]", speed: 0.28 },
          ]}
        >
          <AIAutomationSection />
        </ParallaxLayer>

        <ScrollDepthReveal depth="foreground">
          <DigitalMarketingSection />
        </ScrollDepthReveal>

        <ParallaxLayer
          orbs={[
            { position: "top-0 left-1/3", color: "hsl(47 100% 60% / 0.04)", size: "w-[400px] h-[400px]", speed: 0.2 },
          ]}
        >
          <ProcessSection showDetail={false} />
        </ParallaxLayer>

        <ScrollDepthReveal depth="midground">
          <TechStackSection />
        </ScrollDepthReveal>

        <PartnersSection />

        <ParallaxLayer
          orbs={[
            { position: "top-10 -left-10", color: "hsl(20 90% 48% / 0.06)", size: "w-[500px] h-[500px]", speed: 0.25 },
            { position: "bottom-0 right-1/4", color: "hsl(190 90% 50% / 0.04)", size: "w-[350px] h-[350px]", speed: 0.12 },
          ]}
        >
          <CaseStudiesSection />
        </ParallaxLayer>

        <ScrollDepthReveal depth="background" direction="up">
          <TestimonialsSection />
        </ScrollDepthReveal>

        <ParallaxLayer
          orbs={[
            { position: "top-0 right-0", color: "hsl(270 50% 50% / 0.04)", size: "w-[400px] h-[400px]", speed: 0.2 },
            { position: "bottom-10 -left-10", color: "hsl(20 90% 48% / 0.05)", size: "w-[350px] h-[350px]", speed: 0.3 },
          ]}
        >
          <WhyUsSection />
        </ParallaxLayer>

        <ScrollDepthReveal depth="foreground">
          <CTASection />
        </ScrollDepthReveal>

        <ParallaxLayer
          orbs={[
            { position: "top-20 left-1/4", color: "hsl(190 90% 50% / 0.03)", size: "w-[400px] h-[400px]", speed: 0.18 },
          ]}
        >
          <ProductsSection />
        </ParallaxLayer>

        <ScrollDepthReveal depth="midground">
          <MissionBreaker />
        </ScrollDepthReveal>

        <ParallaxLayer
          orbs={[
            { position: "-top-10 right-10", color: "hsl(20 90% 48% / 0.05)", size: "w-[450px] h-[450px]", speed: 0.22 },
          ]}
        >
          <IndustriesGridSection />
        </ParallaxLayer>

        <ScrollDepthReveal depth="foreground">
          <FAQSection />
        </ScrollDepthReveal>

        <ScrollingBanner />
        <Footer />
      </Suspense>
      <MobileFloatingCTA />
    </div>
  );
};

export default Index;
