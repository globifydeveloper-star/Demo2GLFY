"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Award, Star, Brain, Search, Lightbulb, Cog, TrendingUp, RefreshCw, BarChart3, Zap, Target, Layers, Users, Eye } from "lucide-react";
import CrossLinkSection from "@/components/CrossLinkSection";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useContactDialog } from "@/contexts/ContactDialogContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const phases = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Digital Maturity Audit",
    desc: "We conduct a comprehensive assessment of your current technology landscape, operational workflows, data maturity, and AI readiness, identifying gaps, inefficiencies, and high-ROI transformation opportunities.",
    outcomes: ["Digital maturity scorecard", "Technology gap analysis", "AI readiness assessment", "Quick-win identification"],
    duration: "2–4 weeks",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & AI Transformation Roadmap",
    desc: "Based on audit findings, we design a prioritized, ROI-driven transformation roadmap, mapping AI integration points, automation opportunities, and technology investments to measurable business KPIs.",
    outcomes: ["Prioritized initiative backlog", "ROI projection per initiative", "Technology architecture blueprint", "Change management plan"],
    duration: "2–3 weeks",
  },
  {
    step: "03",
    icon: Cog,
    title: "Implementation & AI Integration",
    desc: "We execute the roadmap using agile sprints, deploying AI-powered ERP, intelligent automation, commerce platforms, and data pipelines while maintaining business continuity and stakeholder alignment.",
    outcomes: ["AI-powered system deployments", "Automated workflow orchestration", "Data pipeline & analytics setup", "Integration with existing systems"],
    duration: "8–24 weeks",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Optimization & Performance Engineering",
    desc: "Post-launch, we optimize every system for peak performance, fine-tuning AI models, improving conversion rates, reducing latency, and maximizing the ROI of every technology investment.",
    outcomes: ["AI model retraining & optimization", "Performance benchmarking", "Conversion rate optimization", "Cost efficiency analysis"],
    duration: "Ongoing",
  },
  {
    step: "05",
    icon: RefreshCw,
    title: "Continuous Innovation & Scaling",
    desc: "Transformation doesn't end at launch. We provide ongoing strategic advisory, AI capability expansion, new market enablement, and technology evolution to keep you ahead of competition.",
    outcomes: ["Quarterly business reviews", "AI capability roadmap updates", "New technology adoption", "Competitive intelligence"],
    duration: "Ongoing",
  },
];

const pillars = [
  { icon: Brain, title: "AI & Intelligent Automation", desc: "Embed AI across operations, from predictive analytics and conversational AI to intelligent document processing and workflow automation." },
  { icon: Layers, title: "Unified Technology Ecosystems", desc: "Connect ERP, CRM, commerce, marketing, and analytics into one intelligent, data-driven ecosystem that eliminates silos." },
  { icon: BarChart3, title: "Data-Driven Decision Intelligence", desc: "Build real-time dashboards, predictive models, and automated reporting that transform raw data into strategic business decisions." },
  { icon: Zap, title: "Operational Efficiency & Automation", desc: "Reduce manual processes by 80%, cut operational costs by 40–60%, and accelerate decision-making across every department." },
  { icon: Target, title: "Revenue Growth Engineering", desc: "Optimize customer acquisition, conversion, and retention with AI-powered personalization, dynamic pricing, and predictive marketing." },
  { icon: Users, title: "Change Management & Adoption", desc: "Ensure successful adoption with executive alignment, training programs, and phased rollouts that minimize disruption and maximize impact." },
];

const outcomes = [
  { value: "40–60%", label: "Cost Reduction", desc: "Through AI automation and process optimization" },
  { value: "3–5x", label: "Revenue Uplift", desc: "Via AI-powered commerce and marketing" },
  { value: "80%", label: "Manual Work Eliminated", desc: "With intelligent workflow automation" },
  { value: "90 Days", label: "Time to First ROI", desc: "Measurable results guaranteed" },
];

const faq = [
  { question: "What is AI-driven digital transformation?", answer: "AI-driven digital transformation goes beyond digitizing existing processes. It fundamentally re-engineers how your business operates by embedding artificial intelligence, machine learning, and intelligent automation into every layer, from decision-making and operations to customer experience and revenue generation." },
  { question: "How long does a full digital transformation take?", answer: "A complete transformation typically spans 6–18 months depending on scope, but our phased approach delivers measurable ROI within 90 days. We start with high-impact quick wins while building toward long-term strategic goals." },
  { question: "What industries benefit most from AI transformation?", answer: "Healthcare, fintech, retail, manufacturing, supply chain, and SaaS companies see the highest ROI. However, any mid-size or enterprise business with manual processes, data silos, or growth ambitions benefits significantly from AI-driven transformation." },
  { question: "How much does digital transformation cost?", answer: "Investment varies by scope, from focused AI automation projects starting at $25K to enterprise-wide transformation programs. Every engagement starts with a free digital maturity audit that includes a clear ROI projection, so you can see the expected return before committing." },
  { question: "Do we need to replace our existing systems?", answer: "No. Our approach is integration-first, not rip-and-replace. We connect AI capabilities with your existing ERP, CRM, and legacy systems through APIs and middleware, maximizing the value of your current technology investments." },
  { question: "What makes Globify different from consulting firms?", answer: "Unlike traditional consultants who deliver slide decks, we execute end-to-end, from strategy through implementation to ongoing optimization. We're an ISO-certified, Google/Microsoft/Shopify partner with proprietary platforms (EKASYS, MEDOC) and 300+ successful transformations." },
];

const AITransformationFramework = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[200px] pointer-events-none" />
        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">AI Transformation Framework</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                A Proven Framework to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  Transform Your Enterprise
                </span>{" "}
                With AI
              </h1>
              <p className="text-hero-foreground/50 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Our 5-phase AI transformation methodology has delivered 300+ successful transformations, reducing costs by 60%, automating 80% of manual work, and engineering measurable revenue growth for enterprises across the UAE and globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <button onClick={openContactDialog} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get Your Free Digital Maturity Audit <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/digital-transformation" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  Explore Transformation Services
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                {[{ icon: Shield, label: "ISO 9001 Certified" }, { icon: Award, label: "Google & Microsoft Partner" }, { icon: Star, label: "300+ Transformations" }].map((b) => (
                  <span key={b.label} className="flex items-center gap-2 text-xs text-hero-foreground/40">
                    <b.icon className="w-4 h-4 text-primary" /> {b.label}
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

      {/* 5-Phase Framework */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">The 5-Phase Methodology</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">
              From Audit to Continuous Innovation
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              A battle-tested framework designed for enterprises that want measurable results, not endless consulting cycles.
            </p>
          </motion.div>

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group grid md:grid-cols-[auto_1fr_auto] gap-6 items-start p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">{phase.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{phase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.outcomes.map((o) => (
                      <span key={o} className="flex items-center gap-1.5 text-xs text-foreground/60">
                        <CheckCircle2 className="w-3 h-3 text-primary" /> {o}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">{phase.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Pillars */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Transformation Pillars</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
              Six Pillars of AI-Powered<br />Enterprise Transformation
            </h2>
            <p className="text-hero-foreground/50 text-sm max-w-2xl mx-auto">
              Every transformation we deliver is built on these interconnected pillars, ensuring comprehensive, sustainable business impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-hero-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Who This Is For</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-8">
              Built for Decision-Makers Ready to Lead
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { role: "CEOs & Managing Directors", need: "seeking measurable ROI from technology investments and sustainable competitive advantage through AI." },
                { role: "CTOs & CIOs", need: "looking to modernize legacy systems, enable AI capabilities, and build scalable cloud-native architecture." },
                { role: "Ecommerce & Digital Directors", need: "wanting AI-powered commerce, marketplace expansion, and revenue growth engineering across channels." },
                { role: "IT Heads & Operations Leaders", need: "needing to automate manual processes, reduce costs, and build real-time decision intelligence." },
              ].map((item) => (
                <div key={item.role} className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">{item.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed capitalize">{item.need}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Start Your Transformation</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-[1.1] mb-6">
                Ready to transform your enterprise<br />with AI?
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8">
                Get a free digital maturity audit and AI readiness assessment — with a clear ROI projection before you commit.
              </p>
              <button onClick={openContactDialog} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)]">
                Book Your Free Audit <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="ai-framework" links={["cro", "healthcare", "fintech", "retail", "supply-chain", "manufacturing", "saas"]} variant="light" />
      <Footer />
    </div>
  );
};

export default AITransformationFramework;
