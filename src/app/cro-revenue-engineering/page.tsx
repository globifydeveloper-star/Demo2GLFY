"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, TrendingUp, Users, MousePointer, BarChart3, Zap, Eye, Brain, Layers, RefreshCw, Shield, Award, Star } from "lucide-react";
import CrossLinkSection from "@/components/CrossLinkSection";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useContactDialog } from "@/contexts/ContactDialogContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: MousePointer, title: "AI-Powered A/B & Multivariate Testing", desc: "Move beyond basic split tests. Our AI identifies winning variations 3x faster by analyzing micro-interactions, scroll depth, and behavioral patterns, not just clicks." },
  { icon: Brain, title: "Predictive Customer Journey Design", desc: "Map and optimize every touchpoint using AI-predicted user behavior. We design journeys that anticipate intent, reduce friction, and guide visitors to conversion." },
  { icon: Target, title: "Dynamic Personalization Engine", desc: "Serve personalized content, offers, and CTAs based on real-time user behavior, firmographic data, and predictive scoring, increasing conversions by 30–80%." },
  { icon: BarChart3, title: "Revenue Attribution Intelligence", desc: "AI-powered multi-touch attribution that reveals exactly which channels, campaigns, and touchpoints drive revenue, so you can scale what works and cut what doesn't." },
  { icon: Layers, title: "Landing Page & Funnel Engineering", desc: "High-converting landing pages and sales funnels engineered with AI heatmap analysis, persuasion frameworks, and continuous optimization loops." },
  { icon: Eye, title: "Data-Driven UX & Behavioral Analytics", desc: "Go beyond Google Analytics. We deploy AI session analysis, rage click detection, and form abandonment intelligence to uncover revenue leaks." },
];

const methodology = [
  { step: "01", title: "Revenue Audit & Opportunity Mapping", desc: "Comprehensive audit of your current conversion funnel, customer journey, and revenue leaks, identifying the highest-ROI optimization opportunities." },
  { step: "02", title: "Hypothesis & Experimentation Design", desc: "Data-driven hypotheses backed by AI behavioral analysis, competitive intelligence, and proven conversion psychology frameworks." },
  { step: "03", title: "AI-Powered Testing & Optimization", desc: "Rapid experimentation cycles with AI-accelerated testing, statistical validation, and automated winner deployment." },
  { step: "04", title: "Personalization & Journey Orchestration", desc: "Deploy dynamic personalization, predictive content, and automated journey optimization based on real-time user behavior." },
  { step: "05", title: "Revenue Scaling & Continuous Growth", desc: "Scale winning strategies across channels, automate optimization workflows, and build compound growth through continuous experimentation." },
];

const outcomes = [
  { value: "30–80%", label: "Conversion Lift", desc: "Through AI personalization & testing" },
  { value: "40%", label: "Lower CAC", desc: "Via funnel optimization & targeting" },
  { value: "3x", label: "Faster Testing", desc: "AI-accelerated experimentation" },
  { value: "200%+", label: "Revenue Uplift", desc: "Compound growth over 12 months" },
];

const useCases = [
  { title: "E-Commerce Revenue Optimization", desc: "AI product recommendations, dynamic pricing, checkout optimization, and cart abandonment recovery that increase AOV by 25–40% and reduce cart abandonment by 35%.", link: "/ecommerce" },
  { title: "SaaS Trial-to-Paid Conversion", desc: "Onboarding flow optimization, AI-triggered engagement campaigns, and predictive churn prevention that increase trial-to-paid rates by 40–60%.", link: "/app-development" },
  { title: "B2B Lead Generation & Pipeline", desc: "Landing page optimization, AI lead scoring, form conversion improvement, and nurture sequence engineering that increase MQL-to-SQL rates by 50%.", link: "/digital-marketing" },
  { title: "Enterprise Platform Adoption", desc: "User onboarding optimization, feature adoption analytics, and AI-driven engagement strategies that increase platform stickiness and reduce churn.", link: "/digital-transformation" },
];

const faq = [
  { question: "What is CRO and Revenue Engineering?", answer: "CRO (Conversion Rate Optimization) focuses on increasing the percentage of visitors who take a desired action. Revenue Engineering goes further, it's a systematic, AI-powered approach to optimizing the entire customer journey for maximum revenue per visitor, not just conversion rates." },
  { question: "How is AI used in conversion optimization?", answer: "AI accelerates every phase: behavioral analysis identifies patterns humans miss, predictive models anticipate user intent, AI-powered testing finds winners 3x faster, and dynamic personalization serves the right content to the right user at the right time — all automatically." },
  { question: "What kind of results can we expect?", answer: "Typical results include 30–80% conversion rate improvement, 40% lower customer acquisition costs, and 200%+ revenue uplift over 12 months. Results vary by industry, but we guarantee measurable improvement within the first 90 days." },
  { question: "Do you work with existing analytics setups?", answer: "Yes. We integrate with your existing GA4, Mixpanel, Amplitude, or custom analytics stack, and enhance it with AI behavioral analysis, heatmapping, session recording intelligence, and predictive models." },
  { question: "How long before we see results?", answer: "Quick wins (form optimization, CTA improvements, checkout friction reduction) typically show results in 2–4 weeks. Deeper personalization and journey optimization compounds over 3–6 months, with the biggest revenue gains appearing at the 6–12 month mark." },
  { question: "What's the difference between CRO and growth marketing?", answer: "Growth marketing focuses on acquiring traffic and generating demand. Revenue Engineering focuses on maximizing the value of every visitor you already have. The most successful enterprises combine both, which is why Globify offers integrated growth marketing and CRO as a unified revenue engine." },
];

const CRORevenueEngineering = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">CRO & Revenue Engineering</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Stop Losing Revenue.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  Start Engineering It.
                </span>
              </h1>
              <p className="text-hero-foreground/50 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                AI-powered conversion optimization and revenue engineering that turns every visitor into measurable revenue. We don't just optimize buttons, we re-engineer entire customer journeys with predictive personalization, behavioral intelligence, and automated experimentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button onClick={openContactDialog} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get Your Free Revenue Audit <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/digital-marketing" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  Explore Growth Marketing
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["AI-Powered Personalization", "Predictive Funnel Optimization", "Revenue Attribution Intelligence"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-hero-foreground/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Stats */}
      <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-8">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((o, i) => (
              <motion.div key={o.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{o.value}</div>
                <div className="text-sm font-semibold text-section-dark-foreground mt-1">{o.label}</div>
                <div className="text-xs text-section-dark-foreground/40 mt-1">{o.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Revenue Engineering Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
              AI-Powered CRO Services That<br />Drive Measurable Revenue
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Every service is powered by AI and designed to deliver compound revenue growth, not just incremental improvements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Methodology</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
              The Revenue Engineering Process
            </h2>
            <p className="text-hero-foreground/50 text-sm max-w-2xl mx-auto">
              A systematic, AI-driven approach to finding and fixing revenue leaks, then scaling what works.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {methodology.map((m, i) => (
              <motion.div key={m.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-6 p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
                <span className="text-3xl font-black text-primary/30 flex-shrink-0">{m.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-hero-foreground mb-1">{m.title}</h3>
                  <p className="text-sm text-hero-foreground/40 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
              Revenue Engineering Across Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={uc.link} className="block group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-hero-foreground/[0.06] rounded-xl px-6 data-[state=open]:border-primary/20">
                  <AccordionTrigger className="text-sm font-semibold text-hero-foreground hover:text-primary py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-hero-foreground/50 leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative p-10 sm:p-16 md:p-20 rounded-[2rem] bg-[#0a0a1a] overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
            <div className="relative">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Start Growing Revenue</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-[1.1] mb-6">
                How much revenue are you<br />leaving on the table?
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8">
                Get a free revenue audit that identifies your biggest conversion opportunities and ROI potential, before you invest a dollar.
              </p>
              <button onClick={openContactDialog} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)]">
                Get Your Free Revenue Audit <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="cro" links={["ai-framework", "retail", "fintech", "saas", "healthcare", "supply-chain"]} variant="light" />
      <Footer />
    </div>
  );
};

export default CRORevenueEngineering;
