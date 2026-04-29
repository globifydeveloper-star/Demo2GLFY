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
  Target, AlertTriangle, ArrowUpRight, Send, Loader2
} from "lucide-react";
import { toast } from "sonner";
import shopifyLogo from "@/assets/shopify-logo.png";
import ShopifyPricingPackages from "@/components/shopify/ShopifyPricingPackages";

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
    formData.append("source", `Shopify Development - ${id}`);

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
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopify experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
const ShopifyDevelopment = () => {
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
        {/* BG gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(145,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(145,60%,40%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              {/* badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <img src={shopifyLogo.src} alt="Shopify Partner" className="h-4 w-auto" />
                Official Shopify Partner
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Scale Your E-Commerce Revenue with{" "}
                <span className="bg-gradient-to-r from-[hsl(145,60%,50%)] to-[hsl(165,70%,45%)] bg-clip-text text-transparent">
                  Shopify Experts
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                We build high-converting Shopify stores that drive revenue, automate operations, and scale globally.
                Trusted by 300+ brands across 10+ countries.
              </motion.p>

              {/* Trust row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["300+ Projects Delivered", "3x Avg Revenue Growth", "ISO 27001 Certified", "Google & Shopify Partner"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[hsl(145,60%,50%)]" /> {t}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp}>
                <InlineLeadForm id="hero" variant="dark" />
              </motion.div>

              {/* Urgency */}
              <motion.p variants={fadeUp} className="text-xs text-[hsl(145,60%,50%)]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Limited free audits available for UAE & India brands this month
              </motion.p>
            </motion.div>

            {/* Right: Stats cards */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "3x", label: "Average Revenue Growth", icon: TrendingUp },
                { value: "40%", label: "Higher Conversion Rate", icon: BarChart3 },
                { value: "60%", label: "Faster Time to Market", icon: Rocket },
                { value: "50%", label: "Lower Operational Costs", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(145,60%,50%)] mb-3" />
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
              { val: "300+", label: "Stores Launched" },
              { val: "$50M+", label: "Client Revenue Generated" },
              { val: "10+", label: "Countries Served" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "98%", label: "Client Retention" },
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

      {/* ══════════ PROBLEM SECTION ══════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Sound Familiar?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Your E-Commerce Store Is Leaking Revenue
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">
              Most e-commerce brands lose 30-60% of potential revenue to these fixable problems. Is your store guilty?
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: AlertTriangle, title: "Low Conversion Rates", desc: "Visitors browse but don't buy. Poor UX, slow checkout, and weak product pages kill sales." },
              { icon: Phone, title: "Poor Mobile Experience", desc: "80% of your traffic is mobile, but your store isn't optimized for thumb-first shopping." },
              { icon: Clock, title: "Slow Site Speed", desc: "Every 1-second delay costs 7% in conversions. Slow stores lose customers to competitors." },
              { icon: Settings, title: "Platform Limitations", desc: "Your current platform can't handle your growth — limited customization, poor integrations." },
              { icon: RefreshCw, title: "Manual Operations", desc: "You're manually managing inventory, orders, and fulfillment instead of automating." },
              { icon: Globe, title: "Can't Scale Globally", desc: "No multi-currency, multi-language, or regional payment support for international expansion." },
            ].map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <p.icon className="w-8 h-8 text-destructive/70 mb-4 group-hover:text-destructive transition-colors" />
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button onClick={openContactDialog} variant="outline" className="rounded-full px-8 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get a Free Store Audit <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
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
            {/* Before */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Before Globify
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                {[
                  "1.2% conversion rate",
                  "6+ second page load time",
                  "Manual order processing (8 hrs/day)",
                  "No mobile optimization",
                  "Single market, single currency",
                  "Revenue plateaued at $30K/mo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[hsl(145,40%,12%)]/50 border border-[hsl(145,60%,50%)]/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[hsl(145,60%,50%)] mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> After Globify
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                {[
                  "3.8% conversion rate (+217%)",
                  "1.8 second page load time (-70%)",
                  "Automated fulfillment (saves 40 hrs/week)",
                  "Mobile-first design (85% mobile revenue)",
                  "3 markets, 5 currencies, 2 languages",
                  "Revenue scaled to $120K/mo (+300%)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[hsl(145,60%,50%)] mt-0.5 shrink-0" /> {item}
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
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Shopify Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              End-to-End Shopify Solutions That Drive Revenue
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Store Launch & Redesign", desc: "Premium Shopify stores designed for conversion. Mobile-first, fast-loading, brand-aligned.", link: "/shopify-themes" },
              { icon: Rocket, title: "Shopify Plus", desc: "Enterprise-grade commerce for high-growth brands. Custom checkout, automation, and scalability.", link: "/shopify-plus" },
              { icon: RefreshCw, title: "Platform Migration", desc: "Seamless migration from WooCommerce, Magento, or custom platforms. Zero downtime, full data integrity." },
              { icon: BarChart3, title: "Performance & CRO", desc: "Data-driven optimization to increase conversion rates, AOV, and customer lifetime value." },
              { icon: Palette, title: "Custom UX/UI Design", desc: "Bespoke shopping experiences that differentiate your brand and maximize engagement." },
              { icon: Zap, title: "Automation & Workflows", desc: "Shopify Flow, inventory sync, order routing, and marketing automation that saves 40+ hrs/week." },
              { icon: Layers, title: "ERP & System Integration", desc: "Connect Shopify with SAP, Oracle, NetSuite, or custom ERP for unified operations.", link: "/erp-solutions" },
              { icon: Globe, title: "Omnichannel & Marketplace", desc: "Sell everywhere — Amazon, Noon, social commerce, POS, and wholesale channels." },
              { icon: TrendingUp, title: "Growth & Optimization", desc: "Ongoing CRO, A/B testing, SEO, and performance marketing to scale revenue continuously." },
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
              { value: "3x", label: "Average Revenue Growth", detail: "Within 12 months of launch" },
              { value: "40%", label: "Conversion Rate Increase", detail: "Through CRO & UX optimization" },
              { value: "60%", label: "Faster Launch", detail: "Compared to custom platforms" },
              { value: "50%", label: "Cost Reduction", detail: "In operational & maintenance costs" },
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

      {/* ══════════ TESTIMONIALS / CASE STUDIES ══════════ */}
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
              { quote: "Globify rebuilt our Shopify store and revenue tripled in 6 months. The ROI was undeniable — they paid for themselves in the first quarter.", name: "Sarah Al-Rashid", role: "CEO, Dubai Fashion Brand", result: "3x Revenue in 6 Months" },
              { quote: "We migrated from WooCommerce with zero downtime. Our conversion rate jumped from 1.8% to 4.2% with the new Shopify Plus store.", name: "Rajesh Kumar", role: "CTO, Indian D2C Brand", result: "133% Conversion Increase" },
              { quote: "The automation alone saved us 50 hours per week. We scaled from UAE to 3 new markets without adding a single operations hire.", name: "Ahmed Hassan", role: "Founder, E-Commerce Group", result: "50 hrs/week Saved" },
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
            Ready to 3x Your E-Commerce Revenue?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get a free, no-obligation Shopify growth plan tailored to your business. Limited spots available.
          </p>
          <div className="flex justify-center">
            <InlineLeadForm id="mid" variant="dark" />
          </div>
        </div>
      </section>

      {/* ══════════ PRICING PACKAGES ══════════ */}
      <ShopifyPricingPackages />

      {/* ══════════ COMPARISON ══════════ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Platform Comparison</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Why Shopify Beats the Alternatives
            </motion.h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="py-4 px-4 font-bold text-primary bg-primary/5 rounded-t-lg">Shopify (Globify)</th>
                  <th className="py-4 px-4 font-semibold text-muted">WooCommerce</th>
                  <th className="py-4 px-4 font-semibold text-muted">Custom Build</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["Time to Launch", "2–6 weeks", "6–12 weeks", "3–8 months"],
                  ["Initial Cost", "$5K–$30K", "$8K–$40K", "$30K–$200K+"],
                  ["Monthly Maintenance", "Included", "$500–$2K", "$2K–$10K"],
                  ["Uptime & Security", "99.99% managed", "Self-managed", "Self-managed"],
                  ["Scalability", "Unlimited", "Requires optimization", "Custom scaling"],
                  ["Mobile Performance", "Optimized", "Varies", "Custom"],
                  ["Payment Integrations", "100+ built-in", "Plugin-dependent", "Custom"],
                  ["Conversion Rate", "Industry-leading", "Average", "Varies"],
                ].map(([feature, shopify, woo, custom]) => (
                  <tr key={feature} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{feature}</td>
                    <td className="py-3 px-4 text-center font-semibold text-foreground bg-primary/5">{shopify}</td>
                    <td className="py-3 px-4 text-center">{woo}</td>
                    <td className="py-3 px-4 text-center">{custom}</td>
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
                { icon: ShieldCheck, title: "Free Store Audit", desc: "Comprehensive analysis of your current store with actionable recommendations. No strings attached." },
                { icon: HeadphonesIcon, title: "No-Obligation Consultation", desc: "30-minute strategy call with a senior Shopify expert. Get honest advice — even if you don't hire us." },
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
              { step: "02", title: "Strategy & Roadmap", desc: "Custom Shopify strategy with ROI projections, tech stack, and timeline. You approve before we build." },
              { step: "03", title: "Design & UX", desc: "Conversion-focused design with mobile-first approach. A/B tested layouts optimized for your audience." },
              { step: "04", title: "Development & Launch", desc: "Pixel-perfect build with integrations, automation, and performance optimization. Rigorous QA before launch." },
              { step: "05", title: "Growth & Optimization", desc: "Ongoing CRO, marketing, and optimization. We're your growth partner, not just a dev shop." },
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
              { q: "How much does Shopify development cost with Globify?", a: "Projects typically range from $5,000 for a standard Shopify store to $50,000+ for enterprise Shopify Plus implementations. We provide detailed quotes after a free discovery call, so you know exactly what you're investing before we start." },
              { q: "How long does it take to build a Shopify store?", a: "Standard Shopify stores launch in 3-6 weeks. Shopify Plus and complex custom builds take 6-12 weeks. We've built stores in as fast as 2 weeks for urgent launches — timeline depends on scope and integrations." },
              { q: "Can you migrate my store from WooCommerce or Magento?", a: "Yes. We've completed 100+ platform migrations with zero data loss and minimal downtime. We migrate products, customers, orders, SEO rankings, and content — often with improved performance from day one." },
              { q: "What ROI can I expect from a Shopify rebuild?", a: "Our clients average 3x revenue growth within 12 months. Typical improvements: 40% higher conversion rates, 25% higher AOV, and 50% reduction in operational costs through automation." },
              { q: "Do you offer ongoing support after launch?", a: "Yes. We offer growth retainer packages that include CRO optimization, performance monitoring, new feature development, and strategic consulting. We're your long-term growth partner." },
              { q: "Is Shopify secure for handling payments in the UAE?", a: "Absolutely. Shopify is PCI DSS Level 1 certified (the highest level), includes SSL encryption, and supports regional payment gateways like Tabby, Tamara, and Checkout.com. It meets all UAE and India regulatory requirements." },
              { q: "Why choose Shopify over WooCommerce or a custom platform?", a: "Shopify offers faster launch (60% quicker), lower TCO, 99.99% uptime, and built-in scalability. For 80% of e-commerce businesses, Shopify delivers better ROI than alternatives. We help you evaluate objectively — sometimes custom is the right choice." },
              { q: "What's the difference between Shopify and Shopify Plus?", a: "Shopify Plus is Shopify's enterprise tier offering custom checkout, advanced automation (Shopify Flow), wholesale channels, higher API limits, and dedicated support. We recommend Plus for brands doing $500K+ annually or those with complex multi-market requirements." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(145,40%,12%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stop Losing Revenue. Start Scaling with Shopify.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">
              Join 300+ brands that chose Globify to build their revenue engine. Get your free Shopify growth plan today — no commitment, just results-focused strategy.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <InlineLeadForm id="final" variant="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Strategy Call
              </Button>
              <a
                href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development."
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

      <CrossLinkSection currentPage="shopify-dev" links={["shopify-themes", "shopify-plus", "shopify-apps", "ecommerce", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default ShopifyDevelopment;
