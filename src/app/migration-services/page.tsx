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
    formData.append("source", `Migration Services - ${id}`);

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
      <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our migration team will reach out within 24 hours.</p>
    </div>
  );

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">Free Migration Audit <ArrowRight className="w-4 h-4" /></Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Tell us about your migration:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select name="platform" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Current platform</option><option>Wix</option><option>Squarespace</option><option>WooCommerce</option><option>Magento 1</option><option>PrestaShop</option><option>Custom / Other</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Submitting..." : "Get Migration Plan"}
          </Button>
        </form>
      )}
    </div>
  );
};

const MigrationServices = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(170,30%,10%)] to-[hsl(160,40%,14%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(160,60%,45%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <RefreshCw className="w-3.5 h-3.5 text-[hsl(160,60%,45%)]" /> Platform-Agnostic Migration Experts
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Outgrown Your Platform?{" "}
                <span className="bg-gradient-to-r from-[hsl(160,60%,50%)] to-[hsl(200,60%,50%)] bg-clip-text text-transparent">Migrate Without Risk.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                Zero downtime. Full SEO preservation. Complete data migration. We've successfully migrated 100+ stores from Wix, Magento, WooCommerce, and custom platforms to modern, scalable solutions.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["100+ Migrations Completed", "Zero Downtime", "Full SEO Preservation", "Complete Data Transfer"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[hsl(160,60%,50%)]" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero" variant="dark" /></motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Successful Migrations", icon: RefreshCw },
                { value: "0", label: "Downtime Guarantee", icon: Server },
                { value: "100%", label: "SEO Preserved", icon: Search },
                { value: "24hr", label: "Response Time", icon: Clock },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(160,60%,50%)] mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "100+", label: "Migrations Completed" },
              { val: "0%", label: "Data Loss Rate" },
              { val: "0", label: "Hours of Downtime" },
              { val: "98%", label: "SEO Rankings Preserved" },
              { val: "4.9/5", label: "Client Satisfaction" },
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

      {/* MIGRATION PATHS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Migration Paths</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">From Any Platform to Your Ideal Solution</motion.h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Migrate From</th>
                  <th className="py-4 px-4 font-semibold text-foreground">Best Destination</th>
                  <th className="py-4 px-4 font-semibold text-foreground">Timeline</th>
                  <th className="py-4 px-4 font-semibold text-foreground">Starting Price</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["Wix / Squarespace", "Shopify, WooCommerce", "2–4 weeks", "AED 5,000"],
                  ["WooCommerce", "Shopify, Shopify Plus", "3–6 weeks", "AED 8,000"],
                  ["Magento 1", "Magento 2, Shopify Plus", "6–12 weeks", "AED 15,000"],
                  ["PrestaShop", "Shopify, Shopware", "3–6 weeks", "AED 8,000"],
                  ["Custom Platform", "Shopify Plus, Headless", "8–16 weeks", "AED 20,000"],
                  ["BigCartel / Ecwid", "Shopify, WooCommerce", "1–3 weeks", "AED 3,000"],
                ].map(([from, to, time, price]) => (
                  <tr key={from} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium text-foreground">{from}</td>
                    <td className="py-3 px-4 text-center">{to}</td>
                    <td className="py-3 px-4 text-center">{time}</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MIGRATION PROCESS */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Process</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">6-Step Migration Framework</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Platform Audit", desc: "Comprehensive analysis of your current store — products, customers, orders, SEO, integrations, and custom features." },
              { step: "02", title: "Destination Strategy", desc: "We recommend the best target platform based on your business needs, budget, and growth plans." },
              { step: "03", title: "SEO & Redirect Mapping", desc: "Full URL mapping, 301 redirect plan, meta data preservation, and structured data migration strategy." },
              { step: "04", title: "Data Migration", desc: "Products, variants, images, customers, order history, reviews, blog posts, and CMS content — all migrated." },
              { step: "05", title: "Design & Customisation", desc: "Your new store is built with improved UX, faster performance, and optimised conversion flows." },
              { step: "06", title: "Launch & Monitor", desc: "Coordinated cutover with zero downtime, post-launch SEO monitoring, and 30-day migration support." },
            ].map((p, i) => (
              <motion.div key={p.step} variants={fadeUp} className="flex gap-6 pb-8 relative">
                {i < 5 && <div className="absolute left-[22px] top-[48px] bottom-0 w-px bg-white/10" />}
                <div className="w-11 h-11 rounded-full bg-[hsl(160,60%,45%)]/20 border-2 border-[hsl(160,60%,45%)] flex items-center justify-center text-[hsl(160,60%,50%)] font-bold text-sm shrink-0">{p.step}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE MIGRATE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Complete Transfer</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Everything Migrated. Nothing Left Behind.</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: ShoppingCart, title: "Products & Variants", desc: "All products, variants, images, descriptions, categories, and custom attributes." },
              { icon: Users, title: "Customers & Accounts", desc: "Customer profiles, addresses, order history, and wishlist data." },
              { icon: Database, title: "Orders & Transactions", desc: "Complete order history, payment records, and fulfilment data." },
              { icon: Search, title: "SEO & Content", desc: "URLs, meta titles, descriptions, blog posts, CMS pages, and 301 redirects." },
            ].map((m) => (
              <motion.div key={m.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 text-center">
                <m.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(30,90%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Upgrade Your Platform?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free migration audit with timeline, cost estimate, and SEO preservation plan.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid" variant="dark" /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Migration Questions, Answered</motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Will my store go offline during migration?", a: "No. We use a parallel migration approach — your current store stays live while we build the new one. The cutover happens in minutes with DNS switching, ensuring zero downtime for your customers." },
              { q: "Will I lose my Google rankings?", a: "No. We implement comprehensive 301 redirect maps, preserve URL structures, migrate all meta data, and monitor rankings for 30 days post-migration. Our track record: 98% of rankings preserved or improved." },
              { q: "How much does migration cost?", a: "Simple migrations (Wix/Squarespace to Shopify): AED 5,000. Mid-complexity (WooCommerce/PrestaShop to Shopify): AED 8,000–25,000. Enterprise (Magento 1 to Shopify Plus): AED 25,000+." },
              { q: "Can you migrate customer passwords?", a: "It depends on the source platform. Some platforms (like Shopify) allow password migration. Others require a one-time password reset email to customers. We handle this process seamlessly." },
              { q: "How long does migration take?", a: "Simple migrations: 2–4 weeks. Standard migrations: 4–8 weeks. Enterprise with complex integrations: 8–16 weeks. We provide detailed timelines after the audit." },
              { q: "What if my current platform isn't listed?", a: "We migrate from any platform — including fully custom-built solutions. Contact us with your current setup and we'll provide a migration assessment." },
              { q: "Do you offer post-migration support?", a: "Yes. Every migration includes 30 days of post-launch support covering bug fixes, SEO monitoring, performance tuning, and training on your new platform." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(170,30%,10%)] to-[hsl(160,40%,14%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(160,60%,45%)]/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Don't Let Your Platform Hold You Back.</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 100+ businesses that upgraded their e-commerce platform with Globify. Get your free migration audit today.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"><Phone className="w-4 h-4" /> Book Strategy Call</Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20migration%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
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

export default MigrationServices;
