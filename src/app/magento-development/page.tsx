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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Clock, Star,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Settings, Layers,
  Globe, HeadphonesIcon, Award, ChevronRight, MessageCircle, Phone,
  AlertTriangle, Send, Code2, Database, Plug, Search, Server, Lock, Users, Loader2
} from "lucide-react";
import { toast } from "sonner";
import MagentoPricingPackages from "@/components/magento/MagentoPricingPackages";

/* ───────── inline lead form ───────── */
const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("email", email);
    formData.append("source", `Magento Development - ${id}`);

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
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Magento experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
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
            <option>Under $50K</option>
            <option>$50K – $250K</option>
            <option>$250K – $1M</option>
            <option>$1M+</option>
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
const MagentoDevelopment = () => {
  const { openContactDialog } = useContactDialog();

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(15,40%,12%)] to-[hsl(20,50%,15%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(15,70%,50%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="text-[hsl(15,70%,50%)] font-bold">M</span>
                Adobe Commerce & Magento Experts
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Enterprise E-Commerce with{" "}
                <span className="bg-gradient-to-r from-[hsl(15,70%,55%)] to-[hsl(35,80%,50%)] bg-clip-text text-transparent">
                  Magento & Adobe Commerce
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                The platform built for complexity. We deliver Magento solutions for businesses with large catalogs, B2B operations, multi-store needs, and enterprise-grade demands.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["100+ Magento Projects", "Adobe Solution Partner", "B2B & B2C Expertise", "Enterprise-Grade Security"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[hsl(15,70%,55%)]" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <InlineLeadForm id="hero" variant="dark" />
              </motion.div>

              <motion.p variants={fadeUp} className="text-xs text-[hsl(15,70%,55%)]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Limited free enterprise audits available this month
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Magento Projects Delivered", icon: ShoppingCart },
                { value: "10M+", label: "Products Managed", icon: Database },
                { value: "99.9%", label: "Uptime Guarantee", icon: Server },
                { value: "B2B+B2C", label: "Full Commerce Coverage", icon: Users },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(15,70%,55%)] mb-3" />
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
              { val: "100+", label: "Magento Stores" },
              { val: "$80M+", label: "Client Revenue Processed" },
              { val: "10M+", label: "Products Managed" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "99%", label: "Client Retention" },
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

      {/* ══════════ WHY MAGENTO ══════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Why Magento?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              The Platform Built for Enterprise Complexity
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">
              When your catalog has 100K+ SKUs, your buyers need custom pricing, and your operations span multiple regions — Magento delivers.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Database, title: "Massive Catalog Support", desc: "Handle 100K+ SKUs with complex attributes, configurable products, and advanced catalog management." },
              { icon: Users, title: "Native B2B Features", desc: "Quote management, requisition lists, company accounts, shared catalogs, and tiered pricing out of the box." },
              { icon: Globe, title: "Multi-Store Architecture", desc: "Run multiple brands, regions, and languages from a single backend. True enterprise multi-tenancy." },
              { icon: Lock, title: "Enterprise Security", desc: "PCI DSS compliance, two-factor auth, role-based access, and Adobe's enterprise security infrastructure." },
              { icon: Plug, title: "Unlimited Extensibility", desc: "4,000+ marketplace extensions plus custom module development for any business requirement." },
              { icon: Server, title: "Cloud-Native Scalability", desc: "Adobe Commerce Cloud with auto-scaling, CDN, and managed infrastructure for peak-traffic resilience." },
            ].map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <p.icon className="w-8 h-8 text-primary mb-4" />
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">Before vs After: Enterprise Transformation</motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-destructive mb-6 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Before Globify</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                {["Outdated Magento 1 store, no support", "10+ second page load times", "Manual B2B order processing", "Security vulnerabilities & downtime", "Single region, single currency", "Revenue capped at $200K/mo"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" /> {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[hsl(15,30%,12%)]/50 border border-[hsl(15,70%,55%)]/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[hsl(15,70%,55%)] mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> After Globify</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                {["Adobe Commerce Cloud, fully managed", "1.8s load time (95+ PageSpeed)", "Automated B2B workflows & quotes", "PCI DSS compliant, 99.99% uptime", "5 regions, 8 currencies, 3 languages", "Revenue scaled to $800K/mo (+300%)"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[hsl(15,70%,55%)] mt-0.5 shrink-0" /> {item}</li>
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
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Magento Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">End-to-End Magento & Adobe Commerce Solutions</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Store Build & Redesign", desc: "Custom Magento stores designed for enterprise complexity — large catalogs, B2B, and multi-region." },
              { icon: Rocket, title: "Adobe Commerce Cloud", desc: "Fully managed cloud infrastructure with auto-scaling, CDN, and Adobe's enterprise SLA." },
              { icon: RefreshCw, title: "Magento Migration", desc: "M1 to M2 upgrades, Shopify/WooCommerce to Magento migrations. Zero downtime, full data integrity." },
              { icon: Code2, title: "Custom Module Development", desc: "Bespoke Magento modules for unique business logic, integrations, and workflow automation." },
              { icon: Users, title: "B2B Commerce", desc: "Quote workflows, company accounts, requisition lists, shared catalogs, and custom pricing rules." },
              { icon: Layers, title: "ERP & PIM Integration", desc: "Connect Magento with SAP, Oracle, Akeneo, or custom ERP/PIM for unified product & order management.", link: "/erp-solutions" },
              { icon: BarChart3, title: "Performance & CRO", desc: "Full-stack performance tuning, Varnish caching, Redis, and conversion rate optimization." },
              { icon: Palette, title: "PWA & Headless", desc: "PWA Studio frontends and headless architectures for lightning-fast, app-like shopping experiences." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "PCI DSS compliance, security patches, vulnerability scanning, and WAF configuration." },
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Measurable Enterprise Outcomes</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "3x", label: "Average Revenue Growth", detail: "Within 12 months of migration" },
              { value: "60%", label: "B2B Order Automation", detail: "Reduced manual processing" },
              { value: "99.99%", label: "Uptime on Adobe Cloud", detail: "Enterprise-grade reliability" },
              { value: "45%", label: "Faster Page Loads", detail: "Through full-stack optimization" },
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Globify migrated our Magento 1 store to Adobe Commerce Cloud. Our B2B portal now handles 2,000+ daily orders automatically. Game-changer.", name: "Hassan Al-Muhairi", role: "CTO, UAE Industrial Supplies", result: "2,000+ Daily Orders Automated" },
              { quote: "We needed a multi-region Magento store with 50K+ products and ERP integration. Globify delivered on time, on budget, and the performance is incredible.", name: "Priya Sharma", role: "VP E-Commerce, Indian Electronics Group", result: "50K+ Products, 5 Regions" },
              { quote: "Our B2B customers love the quote system and company accounts. Order volume increased 180% in the first quarter after launch.", name: "Omar Khalil", role: "Founder, GCC Building Materials", result: "180% Order Volume Increase" },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready for Enterprise-Grade E-Commerce?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Magento assessment and growth strategy tailored to your business complexity.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid" variant="dark" /></div>
        </div>
      </section>

      {/* ══════════ PRICING PACKAGES ══════════ */}
      <MagentoPricingPackages />

      {/* ══════════ COMPARISON ══════════ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Platform Comparison</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Why Magento Wins for Enterprise</motion.h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="py-4 px-4 font-bold text-primary bg-primary/5 rounded-t-lg">Magento (Globify)</th>
                  <th className="py-4 px-4 font-semibold text-muted">Shopify Plus</th>
                  <th className="py-4 px-4 font-semibold text-muted">WooCommerce</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["Max Catalog Size", "Unlimited (100K+ tested)", "Unlimited", "10K+ (performance varies)"],
                  ["B2B Native", "Full (quotes, accounts, catalogs)", "Limited (Plus only)", "Plugin-based"],
                  ["Multi-Store", "Native multi-website/store", "Shopify Plus only", "WordPress Multisite"],
                  ["Customization", "Unlimited (open-source)", "Limited (Liquid)", "Unlimited (open-source)"],
                  ["Enterprise Security", "PCI DSS, WAF, 2FA native", "Managed by Shopify", "Self-managed"],
                  ["Cloud Scalability", "Adobe Cloud auto-scaling", "Shopify managed", "Self-managed"],
                  ["ERP Integration", "Native API + extensions", "Third-party apps", "Plugin-based"],
                  ["Total Cost of Ownership", "Higher initial, lower long-term", "Monthly fees scale up", "Low initial, variable hosting"],
                ].map(([feature, magento, shopify, woo]) => (
                  <tr key={feature} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{feature}</td>
                    <td className="py-3 px-4 text-center font-semibold text-foreground bg-primary/5">{magento}</td>
                    <td className="py-3 px-4 text-center">{shopify}</td>
                    <td className="py-3 px-4 text-center">{woo}</td>
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
                { icon: ShieldCheck, title: "Free Enterprise Audit", desc: "Comprehensive analysis of your current Magento setup with actionable recommendations. No strings attached." },
                { icon: HeadphonesIcon, title: "No-Obligation Consultation", desc: "45-minute strategy call with a senior Magento architect. Get honest advice — even if you don't hire us." },
                { icon: Award, title: "Migration Roadmap", desc: "Custom migration or upgrade roadmap with projected ROI. You keep the strategy even if you go with someone else." },
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">From Discovery to Enterprise Scale in 6 Steps</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Discovery & Architecture", desc: "Deep dive into your business requirements, catalog complexity, integrations, and infrastructure needs." },
              { step: "02", title: "Solution Design", desc: "Technical architecture, module selection, hosting strategy, and detailed project plan with milestones." },
              { step: "03", title: "UX & Design", desc: "Conversion-focused design for both B2B and B2C workflows with mobile-first approach." },
              { step: "04", title: "Development & Integration", desc: "Agile development sprints with ERP/PIM integration, custom modules, and rigorous testing." },
              { step: "05", title: "Performance & Security", desc: "Full-stack optimization, load testing, security hardening, and PCI compliance verification." },
              { step: "06", title: "Launch & Growth", desc: "Managed launch, training, and ongoing optimization. We're your enterprise growth partner." },
            ].map((p, i) => (
              <motion.div key={p.step} variants={fadeUp} className="flex gap-6 pb-8 relative">
                {i < 5 && <div className="absolute left-[22px] top-[48px] bottom-0 w-px bg-border" />}
                <div className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm shrink-0">{p.step}</div>
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Your Questions, Answered</motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How much does Magento development cost?", a: "Basic Magento Open Source stores start at AED 8,000. Custom builds range from AED 20,000–45,000. Enterprise Adobe Commerce implementations with B2B features, ERP integration, and multi-store architecture start at AED 45,000+." },
              { q: "How long does a Magento project take?", a: "Basic stores: 3-5 weeks. Mid-range custom builds: 6-10 weeks. Enterprise implementations with complex integrations: 10-20 weeks. We provide detailed timelines after discovery." },
              { q: "Should I choose Magento Open Source or Adobe Commerce?", a: "Open Source is ideal for mid-size businesses wanting full control. Adobe Commerce adds B2B modules, cloud hosting, AI recommendations, content staging, and premium support — ideal for enterprise operations." },
              { q: "Can you migrate from Magento 1 to Magento 2?", a: "Yes. We've completed dozens of M1→M2 migrations. We rebuild on Magento 2's modern architecture while preserving all data, SEO rankings, and customizations — often with 50%+ performance improvements." },
              { q: "Is Magento suitable for B2B e-commerce?", a: "Absolutely. Magento/Adobe Commerce has the most robust native B2B features of any e-commerce platform — company accounts, quote management, requisition lists, shared catalogs, and custom pricing." },
              { q: "How do you handle Magento hosting?", a: "We recommend Adobe Commerce Cloud for enterprise clients (managed auto-scaling). For Open Source, we deploy on AWS, Google Cloud, or Cloudways with Varnish caching, Redis, and CDN." },
              { q: "Can Magento handle high-traffic events?", a: "Yes. With proper cloud architecture, Magento handles massive traffic spikes. We've supported stores processing $5M+ in revenue during flash sales with zero downtime." },
              { q: "Do you provide ongoing Magento support?", a: "Yes. We offer enterprise retainers including security patches, performance monitoring, module updates, new feature development, and 24/7 critical issue support." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(15,40%,12%)] to-[hsl(20,50%,15%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(15,70%,50%)]/10 blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise E-Commerce Demands Enterprise Expertise.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">
              Join 100+ enterprises that chose Globify for their Magento implementation. Get your free enterprise assessment today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <InlineLeadForm id="final" variant="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Strategy Call
              </Button>
              <a
                href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Magento%20development."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors"
               onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}>
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-white/40 mt-6">🔒 Your data is secure. We never share your information.</motion.p>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="ecommerce" links={["shopify-dev", "shopify-plus", "web-dev", "erp", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default MagentoDevelopment;
