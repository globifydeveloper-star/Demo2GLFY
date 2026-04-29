"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, TrendingUp, Stethoscope, BarChart3, ShoppingCart, Truck, Factory, Rocket, Code2, Smartphone, Globe, Zap, Palette, Layers, Monitor, Settings, Megaphone, Search, Target, MessageSquare } from "lucide-react";
import Link from 'next/link';


type CrossLinkItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
  metric?: string;
};

const allLinks: Record<string, CrossLinkItem> = {
  // Strategic pages
  "ai-framework": { icon: Brain, title: "AI Transformation Framework", desc: "Our 5-phase methodology for enterprise AI adoption, from audit to continuous innovation.", href: "/ai-transformation-framework", metric: "60% Cost Reduction" },
  "cro": { icon: TrendingUp, title: "CRO & Revenue Engineering", desc: "AI-powered conversion optimization and predictive personalization that lifts revenue 30-80%.", href: "/cro-revenue-engineering", metric: "3x Faster Testing" },
  // Industry pages
  healthcare: { icon: Stethoscope, title: "Healthcare", desc: "AI-powered clinical intelligence, predictive diagnostics, and autonomous hospital operations.", href: "/industries/healthcare", metric: "60% Admin Savings" },
  fintech: { icon: BarChart3, title: "Fintech", desc: "ML fraud detection, automated compliance, and intelligent payment platforms.", href: "/industries/fintech", metric: "85% Fraud Accuracy" },
  retail: { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "AI personalization, predictive inventory, and autonomous omnichannel commerce.", href: "/industries/retail", metric: "3.2x Conversion Lift" },
  "supply-chain": { icon: Truck, title: "Supply Chain", desc: "Predictive logistics, AI demand sensing, and autonomous warehouse operations.", href: "/industries/supply-chain", metric: "40% Cost Reduction" },
  manufacturing: { icon: Factory, title: "Manufacturing", desc: "Predictive maintenance AI, computer vision quality, and autonomous production optimization.", href: "/industries/manufacturing", metric: "45% OEE Gain" },
  saas: { icon: Rocket, title: "SaaS & Startups", desc: "AI-native MVP development, embedded ML models, and intelligent product-led growth.", href: "/industries/saas-startups", metric: "3-Week AI MVPs" },
  // Core service pages
  "web-dev": { icon: Monitor, title: "Web Development", desc: "Custom websites and Shopify stores built for speed, conversions, and SEO performance.", href: "/web-development", metric: "2.1s Avg Load" },
  "app-dev": { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android, from MVP to enterprise scale.", href: "/app-development", metric: "200+ Apps Built" },
  "ecommerce": { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "End-to-end Shopify, WooCommerce, and custom e-commerce with ERP and marketplace integration.", href: "/ecommerce", metric: "300+ Stores" },
  "digital-marketing": { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, social media, and CRO strategies that drive measurable revenue growth.", href: "/digital-marketing", metric: "3x Avg ROAS" },
  "ai-automation": { icon: Brain, title: "AI & Automation", desc: "Chatbots, RPA, workflow automation, and machine learning to reduce costs by 40%.", href: "/ai-automation", metric: "40% Cost Savings" },
  "erp": { icon: Layers, title: "ERP Solutions", desc: "Custom ERP for manufacturing, healthcare, and retail. MEDOC HMS and EKASYS platforms.", href: "/erp-solutions", metric: "50% Efficiency Gain" },
  "digital-transformation": { icon: Settings, title: "Digital Transformation", desc: "Strategy consulting, cloud migration, and AI integration for enterprise modernization.", href: "/digital-transformation", metric: "ROI in 6 Months" },
  // Shopify sub-pages
  "shopify-dev": { icon: ShoppingCart, title: "Shopify Development", desc: "Conversion-focused Shopify stores with CRO, automation, and omnichannel growth strategies.", href: "/shopify-development", metric: "3x Revenue Growth" },
  "shopify-themes": { icon: Palette, title: "Shopify Themes", desc: "Bespoke Shopify storefronts designed for conversions, mobile-first, brand-aligned, sub-2s load.", href: "/shopify-themes", metric: "45% Conversion Lift" },
  "shopify-plus": { icon: Rocket, title: "Shopify Plus", desc: "Enterprise Shopify Plus and headless commerce for high-growth brands doing $1M+ annually.", href: "/shopify-plus", metric: "$500M+ GMV" },
  "shopify-apps": { icon: Code2, title: "Shopify App Development", desc: "Custom Shopify apps and integrations, inventory, analytics, loyalty, and checkout extensions.", href: "/shopify-app-development", metric: "80+ Apps Built" },
  // Sub-service pages
  "ai-chatbots": { icon: MessageSquare, title: "AI Chatbots", desc: "Intelligent conversational AI for customer support, sales, and lead qualification.", href: "/ai-chatbots", metric: "82% Auto-Resolution" },
  "process-automation": { icon: Zap, title: "Process Automation", desc: "RPA and AI-driven workflow automation that eliminates manual tasks and reduces errors.", href: "/process-automation", metric: "70% Time Saved" },
  "predictive-analytics": { icon: BarChart3, title: "Predictive Analytics", desc: "ML-powered forecasting for demand, inventory, and business intelligence.", href: "/predictive-analytics", metric: "85% Accuracy" },
  "seo": { icon: Search, title: "SEO, AEO & Content Strategy", desc: "Data-driven SEO, AEO, content marketing, and organic growth strategies for UAE and India.", href: "/seo-content-strategy", metric: "3x Organic Traffic" },
  "paid-ads": { icon: Target, title: "Paid Advertising", desc: "Google Ads, Meta, and LinkedIn campaigns optimized for ROAS and lead generation.", href: "/paid-advertising", metric: "4x ROAS Avg" },
  "social-media": { icon: Globe, title: "Social Media & Branding", desc: "Brand strategy, social media management, and influencer marketing for growth.", href: "/social-media-brand", metric: "200% Engagement" },
};

interface CrossLinkSectionProps {
  currentPage: string;
  links: string[];
  variant?: "light" | "dark";
}

const CrossLinkSection = ({ currentPage, links, variant = "dark" }: CrossLinkSectionProps) => {
  const items = links.filter((k) => k !== currentPage).map((k) => allLinks[k]).filter(Boolean);
  if (items.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <section className={isDark ? "py-20 bg-section-dark" : "py-20 bg-background"}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Explore More</p>
          <h2 className={`text-2xl md:text-3xl font-bold font-display ${isDark ? "text-section-dark-foreground" : "text-foreground"}`}>
            Related AI Transformation Solutions
          </h2>
        </motion.div>

        <div className={`grid ${items.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-5`}>
          {items.map((item, i) => (
            <motion.div key={item.href} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link
                href={item.href}
                className={`group block h-full p-6 rounded-2xl border transition-all ${
                  isDark
                    ? "border-section-dark-foreground/[0.06] hover:border-primary/20 hover:bg-section-dark-foreground/[0.02]"
                    : "border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {item.metric && (
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.metric}</span>
                  )}
                </div>
                <h3 className={`text-base font-semibold mb-1.5 group-hover:text-primary transition-colors ${isDark ? "text-section-dark-foreground" : "text-foreground"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-section-dark-foreground/40" : "text-muted-foreground"}`}>
                  {item.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossLinkSection;
