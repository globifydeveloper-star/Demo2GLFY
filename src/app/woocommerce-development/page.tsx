"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Clock, Star,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Settings, Layers,
  Globe, HeadphonesIcon, Award, Users, ChevronRight, MessageCircle, Phone,
  Target, AlertTriangle, ArrowUpRight, Send, Code2, Database, Plug, Search, Loader2
} from "lucide-react";
import { toast } from "sonner";
import WooPricingPackages from "@/components/woocommerce/WooPricingPackages";

/* ───────── inline lead form ───────── */
const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStep(2);
  };
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("email", email);
    formData.append("source", `WooCommerce Development - ${id}`);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Thank you! We'll be in touch within 24 hours!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  const inputCls = isDark
    ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
    : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you!</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our WooCommerce experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email" required placeholder="Enter your work email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className={`flex-1 h-12 rounded-full px-5 ${inputCls}`}
          />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select name="revenue" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option>
            <option>Under $10K</option>
            <option>$10K – $50K</option>
            <option>$50K – $250K</option>
            <option>$250K+</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Submitting..." : "Get My Free Growth Plan"}
          </Button>
        </form>
      )}
    </div>
  );
};

/* ───────── page ───────── */
const WooCommerceDevelopment = () => {
  const { openContactDialog } = useContactDialog();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(270,30%,12%)] to-[hsl(280,40%,15%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(270,60%,50%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="text-[hsl(270,60%,50%)] font-bold">W</span>
                Official WordPress & WooCommerce Partner
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Build Your E-Commerce Empire with{" "}
                <span className="bg-gradient-to-r from-[hsl(270,60%,60%)] to-[hsl(300,70%,55%)] bg-clip-text text-transparent">
                  WooCommerce
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                Unlimited flexibility, full data ownership, and unmatched SEO power. We build WooCommerce stores that outperform, outrank, and outscale.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["200+ WooCommerce Projects", "Full Data Ownership", "Unlimited Customization", "SEO-First Architecture"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[hsl(270,60%,60%)]" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <InlineLeadForm id="hero" variant="dark" />
              </motion.div>

              <motion.p variants={fadeUp} className="text-xs text-[hsl(270,60%,60%)]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Limited free audits available for UAE & India brands this month
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "WooCommerce Stores Built", icon: ShoppingCart },
                { value: "100%", label: "Data Ownership", icon: Database },
                { value: "0$", label: "Platform Fees", icon: Zap },
                { value: "∞", label: "Customization Freedom", icon: Code2 },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(270,60%,60%)] mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ SOCIAL PROOF BAR ══════════ */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "200+", label: "WooCommerce Stores" },
              { val: "$30M+", label: "Client Revenue Generated" },
              { val: "10+", label: "Countries Served" },
              { val: "4.8/5", label: "Client Rating" },
              { val: "97%", label: "Client Retention" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <WebDevClients />

      {/* ══════════ WHY WOOCOMMERCE ══════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Why WooCommerce?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              The World's Most Flexible E-Commerce Platform
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">
              WooCommerce powers 28% of all online stores globally. Here's why businesses choose it over closed platforms.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code2, title: "Unlimited Customization", desc: "Open-source code means no limitations. Build exactly what your business needs — no platform restrictions." },
              { icon: Search, title: "Superior SEO", desc: "Built on WordPress — the world's best CMS for SEO. Content marketing + e-commerce in one powerful platform." },
              { icon: Database, title: "Full Data Ownership", desc: "You own your data, your code, and your store. No vendor lock-in, no surprise fee increases." },
              { icon: Zap, title: "Zero Platform Fees", desc: "No monthly platform subscriptions. Pay only for hosting. Keep more of your revenue." },
              { icon: Plug, title: "60,000+ Plugins", desc: "Massive ecosystem of free and premium plugins. Extend functionality without custom development." },
              { icon: Globe, title: "Multi-Language Native", desc: "WPML, Polylang, and native WordPress multilingual support for global expansion." },
            ].map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <p.icon className="w-8 h-8 text-primary mb-4 group-hover:text-primary transition-colors" />
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ TRANSFORMATION ══════════ */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">The Globify Effect</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              Before vs After: Real Business Transformation
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-destructive mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Before Globify
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                {[
                  "Slow, bloated WordPress site (8s+ load)",
                  "Generic theme with no conversions",
                  "Plugin conflicts crashing the store",
                  "No mobile optimization",
                  "Security vulnerabilities exploited",
                  "Revenue stuck at $15K/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[hsl(270,30%,15%)]/50 border border-[hsl(270,60%,60%)]/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[hsl(270,60%,60%)] mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> After Globify
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                {[
                  "Blazing fast (1.5s load time, 95+ PageSpeed)",
                  "Custom conversion-optimized design",
                  "Clean, optimized plugin stack",
                  "Mobile-first (80% mobile revenue)",
                  "Hardened security with WAF & monitoring",
                  "Revenue scaled to $85K/mo (+467%)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[hsl(270,60%,60%)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our WooCommerce Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              End-to-End WooCommerce Solutions That Drive Revenue
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Store Launch & Redesign", desc: "Premium WooCommerce stores designed for conversion. Mobile-first, fast-loading, brand-aligned." },
              { icon: Code2, title: "Custom Plugin Development", desc: "Bespoke WooCommerce plugins that extend functionality beyond off-the-shelf solutions." },
              { icon: RefreshCw, title: "Platform Migration", desc: "Seamless migration from Shopify, Magento, or custom platforms. Zero downtime, full data integrity." },
              { icon: BarChart3, title: "Performance & CRO", desc: "Data-driven optimization to increase conversion rates, AOV, and customer lifetime value." },
              { icon: Palette, title: "Custom Theme Development", desc: "Bespoke WordPress themes built for your brand with WooCommerce deeply integrated." },
              { icon: Zap, title: "Speed & Optimization", desc: "Server tuning, caching, CDN setup, and code optimization for sub-2-second load times." },
              { icon: Layers, title: "ERP & System Integration", desc: "Connect WooCommerce with SAP, Odoo, Zoho, or custom ERP for unified operations.", link: "/erp-solutions" },
              { icon: Globe, title: "Multi-Language & Multi-Currency", desc: "WPML, Polylang, and currency switching for seamless international selling." },
              { icon: ShieldCheck, title: "Security & Maintenance", desc: "WordPress hardening, malware scanning, regular updates, and 24/7 uptime monitoring." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                {s.link ? (
                  <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </Link>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ ROI / OUTCOMES ══════════ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Proven Results</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Measurable Business Outcomes, Not Just Websites
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "4x", label: "Average Revenue Growth", detail: "Within 12 months of launch" },
              { value: "50%", label: "Conversion Rate Increase", detail: "Through CRO & UX optimization" },
              { value: "$0", label: "Monthly Platform Fees", detail: "You only pay for hosting" },
              { value: "100%", label: "Data Ownership", detail: "Your store, your code, your data" },
            ].map((r) => (
              <motion.div key={r.label} variants={fadeUp} className="text-center p-6 rounded-2xl bg-background border border-border">
                <p className="text-4xl md:text-5xl font-extrabold text-primary">{r.value}</p>
                <p className="font-semibold text-foreground mt-2">{r.label}</p>
                <p className="text-xs text-muted mt-1">{r.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Client Success</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Globify rebuilt our WooCommerce store from scratch. Page speed went from 8 seconds to 1.5, and conversions doubled in the first month.", name: "Fatima Al-Mansoori", role: "Founder, UAE Skincare Brand", result: "2x Conversions in 30 Days" },
              { quote: "We needed a bilingual Arabic-English store with ERP integration. Globify delivered a flawless WooCommerce solution that handles 5,000+ orders monthly.", name: "Vikram Patel", role: "COO, Indian Electronics Retailer", result: "5,000+ Orders/Month" },
              { quote: "Moving from Shopify to WooCommerce saved us $2,400/year in platform fees alone. Plus, we finally have full control over our store.", name: "Khalid Ibrahim", role: "CEO, Dubai Fashion House", result: "$2,400/yr Saved" },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</blockquote>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                  <p className="text-xs font-bold text-primary mt-1">{t.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ MID-PAGE CTA ══════════ */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(30,90%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Ready to Build a Store You Truly Own?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get a free, no-obligation WooCommerce growth plan tailored to your business. Limited spots available.
          </p>
          <div className="flex justify-center">
            <InlineLeadForm id="mid" variant="dark" />
          </div>
        </div>
      </section>

      {/* ══════════ PRICING PACKAGES ══════════ */}
      <WooPricingPackages />

      {/* ══════════ COMPARISON ══════════ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Platform Comparison</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Why WooCommerce Wins for Your Business
            </motion.h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="py-4 px-4 font-bold text-primary bg-primary/5 rounded-t-lg">WooCommerce (Globify)</th>
                  <th className="py-4 px-4 font-semibold text-muted">Shopify</th>
                  <th className="py-4 px-4 font-semibold text-muted">Magento</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["Monthly Platform Fee", "$0", "$32–$399/mo", "$0 (self-hosted)"],
                  ["Transaction Fees", "0% (payment gateway only)", "0.5%–2%", "0%"],
                  ["Customization", "Unlimited (open-source)", "Limited (Liquid)", "High complexity"],
                  ["SEO Capabilities", "Best-in-class (WordPress)", "Good", "Good"],
                  ["Data Ownership", "100% yours", "Platform-locked", "100% yours"],
                  ["Plugin Ecosystem", "60,000+ plugins", "8,000+ apps", "4,000+ extensions"],
                  ["Content Marketing", "Native WordPress CMS", "Basic blogging", "Limited"],
                  ["Hosting Flexibility", "Any host", "Shopify servers only", "Any host"],
                ].map(([feature, woo, shopify, magento]) => (
                  <tr key={feature} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{feature}</td>
                    <td className="py-3 px-4 text-center font-semibold text-foreground bg-primary/5">{woo}</td>
                    <td className="py-3 px-4 text-center">{shopify}</td>
                    <td className="py-3 px-4 text-center">{magento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════ RISK REVERSAL ══════════ */}
      <section className="py-16 md:py-20 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Zero Risk</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Guarantee to You</h2>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Free Store Audit", desc: "Comprehensive analysis of your current WooCommerce store with actionable recommendations. No strings attached." },
                { icon: HeadphonesIcon, title: "No-Obligation Consultation", desc: "30-minute strategy call with a senior WooCommerce expert. Get honest advice — even if you don't hire us." },
                { icon: Award, title: "Performance Roadmap", desc: "Custom growth roadmap with projected ROI. You keep the strategy even if you go with someone else." },
              ].map((g) => (
                <motion.div key={g.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <g.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">{g.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{g.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Process</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              From Discovery to Revenue Growth in 5 Steps
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Discovery & Audit", desc: "Deep dive into your business, competitors, and customers. Identify revenue opportunities and growth blockers." },
              { step: "02", title: "Strategy & Architecture", desc: "Custom WooCommerce strategy with hosting, plugin stack, and timeline. You approve before we build." },
              { step: "03", title: "Design & UX", desc: "Conversion-focused design with mobile-first approach. A/B tested layouts optimized for your audience." },
              { step: "04", title: "Development & Launch", desc: "Pixel-perfect WordPress/WooCommerce build with integrations, security hardening, and performance optimization." },
              { step: "05", title: "Growth & Optimization", desc: "Ongoing CRO, SEO, maintenance, and optimization. We're your growth partner, not just a dev shop." },
            ].map((p, i) => (
              <motion.div key={p.step} variants={fadeUp} className="flex gap-6 pb-8 relative">
                {i < 4 && <div className="absolute left-[22px] top-[48px] bottom-0 w-px bg-border" />}
                <div className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Your Questions, Answered
            </motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How much does WooCommerce development cost with Globify?", a: "Projects range from AED 2,500 for a basic store setup to AED 25,000+ for enterprise-grade implementations with custom plugins, ERP integration, and multilingual support. We provide detailed quotes after a free discovery call." },
              { q: "How long does it take to build a WooCommerce store?", a: "Basic stores launch in 2-4 weeks. Custom stores with advanced features take 4-8 weeks. Enterprise builds with ERP integrations and multilingual setup take 8-12 weeks." },
              { q: "Is WooCommerce secure for handling payments?", a: "Yes, when properly configured. We implement PCI-compliant payment gateways, SSL encryption, WordPress hardening, WAF protection, and regular security audits. Our stores meet all UAE and India regulatory requirements." },
              { q: "Can you migrate my store from Shopify to WooCommerce?", a: "Absolutely. We've completed 50+ platform migrations with zero data loss. We migrate products, customers, orders, SEO rankings, and content — often with improved performance from day one." },
              { q: "Why choose WooCommerce over Shopify?", a: "WooCommerce offers unlimited customization, zero platform fees, full data ownership, superior SEO via WordPress, and no vendor lock-in. It's ideal for content-rich brands, SEO-driven businesses, and companies wanting complete control." },
              { q: "Do I need to manage hosting separately?", a: "We handle everything — hosting selection (we recommend Cloudways, Kinsta, or AWS), server optimization, CDN setup, and ongoing maintenance. You don't need to worry about the technical infrastructure." },
              { q: "Can WooCommerce handle high-traffic stores?", a: "Yes. With proper server architecture (dedicated hosting, caching, CDN), WooCommerce handles millions of visitors. We've built stores processing 10,000+ orders daily without performance issues." },
              { q: "Do you offer ongoing support after launch?", a: "Yes. We offer monthly retainers covering plugin updates, security patches, performance monitoring, CRO optimization, and new feature development. We're your long-term growth partner." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(270,30%,12%)] to-[hsl(280,40%,15%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(270,60%,50%)]/10 blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Own Your Store. Own Your Growth. Choose WooCommerce.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">
              Join 200+ brands that chose Globify to build their WooCommerce revenue engine. Get your free growth plan today — no commitment, just results-focused strategy.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <InlineLeadForm id="final" variant="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Strategy Call
              </Button>
              <a
                href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20WooCommerce%20development."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors"
               onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}>
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-white/40 mt-6">
              🔒 Your data is secure. We never share your information.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="ecommerce" links={["shopify-dev", "shopify-plus", "web-dev", "digital-marketing", "erp", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default WooCommerceDevelopment;
