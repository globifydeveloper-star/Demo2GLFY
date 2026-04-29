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
    formData.append("source", `PrestaShop Development - ${id}`);

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
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) return (
    <div className="flex flex-col items-center gap-3 py-6">
      <CheckCircle className="w-12 h-12 text-primary" />
      <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you!</p>
      <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our PrestaShop experts will reach out within 24 hours.</p>
    </div>
  );

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">Get Free Audit <ArrowRight className="w-4 h-4" /></Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select name="revenue" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option><option>Under €10K</option><option>€10K – €50K</option><option>€50K – €250K</option><option>€250K+</option>
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

const PrestaShopDevelopment = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(210,40%,14%)] to-[hsl(220,50%,18%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(210,70%,50%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="text-[hsl(210,70%,50%)] font-bold">PS</span> Europe's Open-Source E-Commerce Leader
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Build Your European Store with{" "}
                <span className="bg-gradient-to-r from-[hsl(210,70%,55%)] to-[hsl(250,60%,60%)] bg-clip-text text-transparent">PrestaShop</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                The open-source platform built for Europe. GDPR-native, multi-language, multi-currency — powering 300,000+ stores across France, Spain, Italy, and Latin America.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["300K+ Stores Worldwide", "GDPR Built-In", "EU Tax Rules Native", "100% Open Source"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[hsl(210,70%,55%)]" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero" variant="dark" /></motion.div>
              <motion.p variants={fadeUp} className="text-xs text-[hsl(210,70%,55%)]/80 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Limited free audits for European brands this month</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "300K+", label: "Active PrestaShop Stores", icon: ShoppingCart },
                { value: "€0", label: "Platform License Fee", icon: Zap },
                { value: "75+", label: "Languages Supported", icon: Globe },
                { value: "GDPR", label: "Native Compliance", icon: ShieldCheck },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(210,70%,55%)] mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "80+", label: "PrestaShop Projects" },
              { val: "€25M+", label: "Client Revenue Generated" },
              { val: "15+", label: "European Markets" },
              { val: "4.8/5", label: "Client Rating" },
              { val: "96%", label: "Client Retention" },
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

      {/* WHY PRESTASHOP */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Why PrestaShop?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Europe's Favourite Open-Source E-Commerce Platform</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">PrestaShop dominates in France, Spain, and Italy. Here's why European businesses choose it.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: "GDPR-Native Compliance", desc: "Consent management, data export, right to erasure, and cookie compliance built into the core — not a plugin." },
              { icon: Globe, title: "Multi-Language Native", desc: "Unlimited languages with full product, CMS, and checkout translation. Perfect for cross-border EU selling." },
              { icon: Database, title: "EU Tax Rules Built-In", desc: "Automatic VAT calculation for all EU member states, including OSS one-stop-shop compliance." },
              { icon: Code2, title: "100% Open Source", desc: "Full code ownership with no license fees. Customise everything from checkout flows to product logic." },
              { icon: Plug, title: "5,000+ Modules", desc: "Rich marketplace of modules for payments, shipping, marketing, and local integrations across Europe." },
              { icon: Layers, title: "Multi-Currency Support", desc: "Sell in EUR, GBP, CHF, and 50+ currencies with automatic conversion and geo-based pricing." },
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

      {/* REGIONAL GROWTH */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Regional Strength</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">Where PrestaShop Dominates</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { country: "France", share: "30%+ market share", desc: "PrestaShop headquarters. Deep integration with Colissimo, Chronopost, Carte Bancaire, and PayLib.", color: "hsl(220,60%,55%)" },
              { country: "Spain", share: "25%+ market share", desc: "Strong adoption with Correos, SEUR, Redsys, and Bizum payment integrations.", color: "hsl(0,80%,50%)" },
              { country: "Italy", share: "20%+ market share", desc: "Popular with SMBs. Poste Italiane, BRT shipping, Bancomat Pay, and Scalapay BNPL.", color: "hsl(145,50%,40%)" },
              { country: "Latin America", share: "Growing fast", desc: "Expanding in Brazil, Mexico, Colombia with MercadoPago, OXXO, and local logistics.", color: "hsl(45,80%,50%)" },
            ].map((r) => (
              <motion.div key={r.country} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: r.color }} />
                <h3 className="font-bold text-white mb-1">{r.country}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: r.color }}>{r.share}</p>
                <p className="text-sm text-white/60 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our PrestaShop Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">End-to-End PrestaShop Solutions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Store Setup & Redesign", desc: "Custom PrestaShop stores optimised for European markets with localised checkout and mobile-first design." },
              { icon: Code2, title: "Custom Module Development", desc: "Bespoke PrestaShop modules for unique business logic, local payment gateways, and workflow automation." },
              { icon: RefreshCw, title: "Platform Migration", desc: "Migrate from WooCommerce, Magento, Shopify, or custom platforms. Full data and SEO preservation." },
              { icon: BarChart3, title: "Performance & CRO", desc: "Speed optimisation, conversion rate improvement, and A/B testing for higher revenue per visitor." },
              { icon: Globe, title: "Multi-Language Setup", desc: "Full localisation across French, Spanish, Italian, German, and more with native PrestaShop translation tools." },
              { icon: Layers, title: "ERP & Logistics Integration", desc: "Connect PrestaShop with SAP, Odoo, or custom ERP. Integrate Colissimo, Correos, and EU carriers.", link: "/erp-solutions" },
              { icon: Palette, title: "Theme Customisation", desc: "Premium PrestaShop themes customised for your brand with responsive design and fast page loads." },
              { icon: ShieldCheck, title: "GDPR & Compliance", desc: "Full GDPR implementation, cookie consent, data privacy, and EU consumer rights compliance." },
              { icon: HeadphonesIcon, title: "Maintenance & Support", desc: "Ongoing updates, security patches, module management, and performance monitoring." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                {s.link && <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ChevronRight className="w-3 h-3" /></Link>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(30,90%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Launch Your European Store?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free PrestaShop assessment and growth strategy tailored to your European market.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid" variant="dark" /></div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Platform Comparison</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">PrestaShop vs Other Platforms for Europe</motion.h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="py-4 px-4 font-bold text-primary bg-primary/5 rounded-t-lg">PrestaShop</th>
                  <th className="py-4 px-4 font-semibold text-muted">Shopify</th>
                  <th className="py-4 px-4 font-semibold text-muted">WooCommerce</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["License Fee", "Free (open source)", "$32–$399/mo", "Free (open source)"],
                  ["GDPR Compliance", "Native, built-in", "Apps required", "Plugins required"],
                  ["EU Tax / VAT", "Native OSS support", "Basic support", "Plugin-based"],
                  ["Multi-Language", "Native (unlimited)", "Third-party apps", "WPML plugin"],
                  ["EU Payment Gateways", "Carte Bancaire, Bizum, iDEAL", "Limited EU options", "Plugin-based"],
                  ["Customisation", "Unlimited (open source)", "Limited (Liquid)", "Unlimited (open source)"],
                  ["EU Shipping Carriers", "Colissimo, Correos, BRT native", "Third-party", "Plugin-based"],
                  ["Data Ownership", "100% yours", "Platform-locked", "100% yours"],
                ].map(([feature, ps, shopify, woo]) => (
                  <tr key={feature} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{feature}</td>
                    <td className="py-3 px-4 text-center font-semibold text-foreground bg-primary/5">{ps}</td>
                    <td className="py-3 px-4 text-center">{shopify}</td>
                    <td className="py-3 px-4 text-center">{woo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Your Questions, Answered</motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How much does PrestaShop development cost?", a: "Basic PrestaShop stores start at €2,500 / AED 10,000. Multi-language custom stores range from €5,000–€15,000. Enterprise implementations with ERP integration start at €15,000+." },
              { q: "Is PrestaShop better than Shopify for European markets?", a: "For businesses selling primarily in Europe, PrestaShop offers native GDPR compliance, built-in EU tax rules, and deeper European payment/shipping integrations at a lower total cost of ownership." },
              { q: "How long does a PrestaShop project take?", a: "Basic stores: 2–4 weeks. Multi-language custom builds: 4–8 weeks. Enterprise with ERP integration: 8–14 weeks." },
              { q: "Can you migrate from Shopify to PrestaShop?", a: "Yes. We handle full migrations from Shopify, WooCommerce, Magento, and custom platforms with zero data loss and full SEO preservation." },
              { q: "Does PrestaShop support B2B commerce?", a: "Yes. With B2B modules, PrestaShop supports customer groups, tiered pricing, minimum order quantities, and quote management." },
              { q: "What hosting do you recommend for PrestaShop?", a: "We recommend Cloudways, OVH (popular in France), or AWS for PrestaShop hosting. We handle all server configuration and optimisation." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(210,40%,14%)] to-[hsl(220,50%,18%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(210,70%,50%)]/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Europe's E-Commerce Platform. Your Growth Partner.</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 80+ European brands that chose Globify for their PrestaShop store. Get your free growth plan today.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"><Phone className="w-4 h-4" /> Book Strategy Call</Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20PrestaShop%20development." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="ecommerce" links={["shopify-dev", "woocommerce-dev", "web-dev", "erp", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default PrestaShopDevelopment;
