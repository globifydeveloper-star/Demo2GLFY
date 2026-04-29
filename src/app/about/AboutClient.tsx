"use client";

import { motion } from "framer-motion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import { ArrowRight, CheckCircle2, Shield, Lightbulb, Users, Eye, Target, Award, Handshake, BarChart3, Globe, Zap, Heart, Star, Building, Stethoscope, Smartphone, Factory, GraduationCap, ShoppingCart, Truck, Dumbbell, Brain, Bot, TrendingUp, Cpu, Database, Network, Sparkles, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import CrossLinkSection from "@/components/CrossLinkSection";
import agencyImg from "@/assets/agency-services.jpg";

const stats = [
  { value: "300+", label: "AI-Powered Transformations" },
  { value: "60%", label: "Avg Cost Reduction" },
  { value: "$200M+", label: "Revenue Engineered" },
  { value: "10+", label: "Countries Served" },
];

const aiServices = [
  "AI Strategy & Transformation Consulting",
  "Machine Learning & Predictive Analytics",
  "Intelligent Process Automation (RPA + AI)",
  "AI-Powered E-Commerce & CRO",
  "Enterprise ERP with AI Modules",
  "Conversational AI & NLP Chatbots",
  "Digital Marketing with AI Optimization",
];

const agencyServices = [
  "Website Design & Development",
  "Web & Mobile App Development",
  "E-Commerce & Marketplace Solutions",
  "ERP & Enterprise Software",
  "Digital Marketing & Performance Growth",
  "SEO & Content Strategy",
  "Social Media & Brand Management",
  "UI/UX Design & Prototyping",
  "Cloud Infrastructure & DevOps",
  "Maintenance & Support Retainers",
];

const aiCredentials = [
  { icon: Brain, title: "ML & Deep Learning", desc: "Custom model training, fine-tuning, and deployment for classification, NLP, computer vision, and recommendation engines." },
  { icon: Bot, title: "Conversational AI", desc: "Enterprise chatbots and virtual assistants powered by GPT, LLaMA, and custom LLMs — deployed across web, WhatsApp, and voice." },
  { icon: LineChart, title: "Predictive Analytics", desc: "Demand forecasting, churn prediction, and anomaly detection models delivering 95%+ accuracy across retail, healthcare, and fintech." },
  { icon: Cpu, title: "Intelligent Automation", desc: "RPA + AI workflows that eliminate 60-80% of manual processes — from invoice processing to supply chain optimization." },
  { icon: Database, title: "Data Engineering & MLOps", desc: "End-to-end data pipelines, feature stores, and CI/CD for ML models — ensuring production-grade reliability at scale." },
  { icon: Network, title: "AI Integration & APIs", desc: "Seamless integration of OpenAI, Azure AI, AWS SageMaker, and custom models into existing enterprise architecture." },
];

const teamExpertise = [
  { metric: "45+", label: "AI/ML Engineers", desc: "Specialized in TensorFlow, PyTorch, and cloud-native AI" },
  { metric: "12+", label: "Data Scientists", desc: "PhD-level expertise in statistical modeling & NLP" },
  { metric: "8+", label: "Years in AI", desc: "Building production ML systems since 2018" },
  { metric: "150+", label: "AI Models Deployed", desc: "Across healthcare, fintech, retail & manufacturing" },
];

const transformationMetrics = [
  { value: "3.2x", label: "Average Conversion Lift", desc: "Through AI-powered personalization and CRO" },
  { value: "60%", label: "Operational Cost Reduction", desc: "Via intelligent process automation" },
  { value: "85%", label: "Fraud Detection Accuracy", desc: "Using custom ML models for fintech clients" },
  { value: "95%", label: "Forecast Accuracy", desc: "Predictive demand planning for supply chain" },
  { value: "40%", label: "Faster Time-to-Market", desc: "AI-accelerated development workflows" },
  { value: "70%", label: "Manual Task Elimination", desc: "RPA + AI across enterprise operations" },
];

const whyTrust = [
  { icon: Award, title: "AI-First Track Record", desc: "300+ AI-powered transformations across healthcare, fintech, retail, and manufacturing — with measurable ROI on every engagement." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "ISO 27001 certified, SOC 2 compliant — ensuring data protection, model governance, and responsible AI deployment." },
  { icon: Brain, title: "Deep AI Expertise", desc: "45+ ML engineers and data scientists with expertise in LLMs, computer vision, predictive analytics, and intelligent automation." },
  { icon: Handshake, title: "Strategic AI Partnerships", desc: "Google Cloud AI Partner, AWS ML Competency, Microsoft AI Partner — access to cutting-edge models and infrastructure." },
  { icon: Zap, title: "Rapid AI Prototyping", desc: "From concept to working AI prototype in 2-3 weeks using our proprietary AI Transformation Framework and pre-built accelerators." },
  { icon: Globe, title: "End-to-End AI Ownership", desc: "From data strategy and model training to deployment, monitoring, and continuous optimization — we own the entire AI lifecycle." },
  { icon: TrendingUp, title: "ROI-Driven Approach", desc: "Every AI initiative is tied to measurable business outcomes — cost reduction, revenue growth, or operational efficiency." },
  { icon: BarChart3, title: "Scalable AI Architecture", desc: "Cloud-native ML pipelines designed for enterprise scale — handling millions of predictions, transactions, and data points daily." },
];

const values = [
  { icon: Heart, title: "Integrity", desc: "We do what we promise." },
  { icon: Lightbulb, title: "Innovation", desc: "We push the boundaries of AI." },
  { icon: Users, title: "Customer Success", desc: "Your growth is our priority." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and accountability." },
  { icon: Star, title: "Excellence", desc: "Consistent focus on quality and ROI." },
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce & Retail" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Smartphone, name: "Fintech & Banking" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Supply Chain" },
  { icon: Zap, name: "SaaS & Startups" },
  { icon: Globe, name: "Marketplaces" },
  { icon: Building, name: "Real Estate" },
  { icon: Dumbbell, name: "Sports & Fitness" },
];

const partners = ["Google Cloud AI Partner", "AWS ML Competency", "Microsoft AI Partner", "Shopify Plus Partner", "Meta Business Partner"];

const AboutUs = () => {
  const { openContactDialog } = useContactDialog();
  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-5">About Globify</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                We Engineer AI-Powered{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Digital Transformation</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Globify is an AI-first technology company that combines machine learning, automation, and strategic consulting to deliver measurable business outcomes. 300+ transformations. $200M+ revenue engineered. 10+ countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => openContactDialog()} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Book an AI Strategy Session <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/ai-transformation-framework" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  Explore Our AI Framework
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-section-dark-foreground/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are + Vision/Mission */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-5">
                Your AI-First Digital Transformation Partner
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                We don't just build software, we engineer intelligent systems that learn, adapt, and optimize. Our team of 45+ ML engineers and data scientists combine deep technical expertise with business strategy to deliver AI solutions that drive real ROI.
              </p>
              <p className="text-muted leading-relaxed">
                From predictive analytics and conversational AI to intelligent automation and computer vision, we deploy production-grade AI across every layer of your business — eliminating inefficiencies, uncovering revenue opportunities, and creating sustainable competitive advantage.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  To become the world's most trusted AI transformation partner — making enterprise-grade intelligence accessible, actionable, and ROI-positive for every business.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-7 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  To deliver measurable business transformation through AI — reducing costs by 60%, accelerating revenue growth by 3x, and eliminating 70% of manual operations for every client we serve.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Credentials */}
      <section className="py-28 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI & ML Expertise</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Deep AI Capabilities, Production-Proven</h2>
            <p className="text-hero-foreground/50 max-w-2xl mx-auto">Our team brings PhD-level expertise in machine learning, NLP, and data science — deployed across 150+ production AI systems.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiCredentials.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-hero-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise Numbers */}
      <section className="py-16 bg-section-dark border-y border-section-dark-foreground/[0.06]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Team</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-section-dark-foreground leading-[1.1]">AI & Engineering Bench Strength</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamExpertise.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-5 rounded-2xl border border-section-dark-foreground/[0.06]">
                <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                <div className="text-sm font-semibold text-section-dark-foreground/80 mb-1">{item.label}</div>
                <div className="text-sm text-section-dark-foreground/40">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Success Metrics */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Transformation Success Metrics</h2>
            <p className="text-muted max-w-2xl mx-auto">Every AI initiative we deliver is measured against hard business outcomes. Here's what our clients achieve.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {transformationMetrics.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-2xl border border-border hover:border-primary/20 transition-all text-center">
                <div className="text-4xl font-black text-primary mb-2">{item.value}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 bg-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI & Transformation</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-5">
                AI-Powered Transformation Services
              </h2>
              <div className="space-y-3 mb-10">
                {aiServices.map((s, i) => (
                  <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-hero-foreground/60">{s}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Agency Services</p>
              <h3 className="text-2xl font-semibold text-hero-foreground leading-[1.1] mb-5">
                Full-Service Digital Agency
              </h3>
              <div className="space-y-3">
                {agencyServices.map((s, i) => (
                  <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-hero-foreground/60">{s}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Powered Products</p>
                <h3 className="text-2xl font-semibold text-hero-foreground leading-[1.1] mb-6">Proprietary AI-Enhanced ERP</h3>

                <div className="space-y-5">
                  <Link href="/products" className="block group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-hero-foreground group-hover:text-primary transition-colors">MEDOC</h4>
                      <ArrowRight className="w-4 h-4 text-hero-foreground/20 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-hero-foreground/40">AI-powered Hospital Management System — predictive diagnostics, automated scheduling, intelligent billing, and telemedicine with NLP-driven clinical notes.</p>
                  </Link>

                  <Link href="/products" className="block group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.03] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-hero-foreground group-hover:text-primary transition-colors">EKASYS</h4>
                      <ArrowRight className="w-4 h-4 text-hero-foreground/20 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-hero-foreground/40">AI-enhanced ERP with predictive demand planning, intelligent inventory optimization, automated financial reconciliation, and ML-driven workforce management.</p>
                  </Link>
                </div>
              </div>

              {/* Agency visual + highlights */}
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 border border-border">
                  <img src={agencyImg.src} alt="Globify digital agency workspace" className="w-full h-48 object-cover" loading="lazy" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-xs font-semibold text-hero-foreground/70">Projects Delivered</div>
                    <div className="text-[11px] text-hero-foreground/30 mt-1">Web, mobile & commerce</div>
                  </div>
                  <div className="p-5 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
                    <div className="text-2xl font-bold text-primary mb-1">98%</div>
                    <div className="text-xs font-semibold text-hero-foreground/70">Client Satisfaction</div>
                    <div className="text-[11px] text-hero-foreground/30 mt-1">Across all engagements</div>
                  </div>
                  <div className="p-5 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-xs font-semibold text-hero-foreground/70">Tech Platforms</div>
                    <div className="text-[11px] text-hero-foreground/30 mt-1">Shopify, React, AWS & more</div>
                  </div>
                  <div className="p-5 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs font-semibold text-hero-foreground/70">Support & Maintenance</div>
                    <div className="text-[11px] text-hero-foreground/30 mt-1">Dedicated retainer teams</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Us */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">Why Leaders Choose Globify for AI Transformation</h2>
            <p className="text-muted max-w-2xl mx-auto">Eight reasons why CTOs, CIOs, and CEOs across 10+ countries trust Globify to lead their AI transformation.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyTrust.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group p-6 rounded-2xl border border-border hover:border-primary/20 hover:bg-card transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-hero border-y border-hero-foreground/[0.06]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">AI & Cloud Partnerships</p>
            <h2 className="text-2xl font-semibold text-hero-foreground leading-[1.1]">Strategic Technology Alliances</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <span key={p} className="text-sm font-medium text-hero-foreground/50 bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] px-6 py-3 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-4">What Drives Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center p-6 rounded-2xl border border-border hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-xs text-muted">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">AI Transformation Across Industries</h2>
            <p className="text-hero-foreground/50 max-w-2xl mx-auto">Deploying intelligent solutions across sectors that demand precision, scale, and measurable outcomes.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ind.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-hero-foreground/60">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Links */}
      <CrossLinkSection currentPage="about" links={["ai-framework", "cro", "healthcare", "fintech", "retail", "manufacturing"]} />

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-5">
              Ready to Transform with AI?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-10">
              Whether you're exploring AI strategy, scaling ML operations, or automating enterprise workflows — Globify is your trusted AI transformation partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openContactDialog()} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                Book an AI Strategy Session <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/ai-transformation-framework" className="inline-flex items-center justify-center gap-2 border border-border text-muted px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                Explore AI Framework
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
