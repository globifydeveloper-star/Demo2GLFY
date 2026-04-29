"use client";

import { motion } from "framer-motion";
import { FileText, BarChart3, Video, Lightbulb, ArrowRight, Download, Play, BookOpen, TrendingUp, Brain, Zap, Target } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CrossLinkSection from "@/components/CrossLinkSection";
import { useContactDialog } from "@/contexts/ContactDialogContext";

const whitepapers = [
  {
    title: "The AI Transformation Playbook for Mid-Market Enterprises",
    description: "A comprehensive guide to implementing AI across operations, marketing, and customer experience, with ROI benchmarks from 50+ deployments.",
    category: "AI Strategy",
    readTime: "18 min read",
    icon: Brain,
  },
  {
    title: "Revenue Engineering: Beyond Traditional CRO",
    description: "How predictive personalization and AI-driven experimentation are replacing legacy A/B testing, with real conversion data.",
    category: "Revenue Growth",
    readTime: "14 min read",
    icon: TrendingUp,
  },
  {
    title: "ERP Modernization Without the Migration Nightmare",
    description: "A phased approach to upgrading legacy ERP systems using cloud-native architecture and AI-powered decision intelligence.",
    category: "Enterprise Tech",
    readTime: "12 min read",
    icon: Zap,
  },
  {
    title: "The Composable Commerce Blueprint",
    description: "Why headless, API-first architecture is the future of e-commerce, and how to transition without disrupting revenue.",
    category: "E-Commerce",
    readTime: "16 min read",
    icon: Target,
  },
];

const caseStudies = [
  {
    title: "Salomon: 3.2x Conversion Lift with Headless Shopify Plus",
    description: "How we rebuilt a global sports brand's e-commerce platform on headless architecture, achieving a 3.2x increase in conversion rate.",
    industry: "Sports & Retail",
    metric: "3.2x Conversion Lift",
  },
  {
    title: "Healthcare SaaS: 60% Cost Reduction via Process Automation",
    description: "Deploying intelligent automation across patient onboarding, claims processing, and appointment scheduling for a regional health network.",
    industry: "Healthcare",
    metric: "60% Cost Reduction",
  },
  {
    title: "Fintech Startup: $2M ARR in 8 Months with AI-First MVP",
    description: "From concept to market-ready product with AI-powered credit scoring and automated compliance, achieving product-market fit in record time.",
    industry: "Fintech",
    metric: "$2M ARR in 8 Months",
  },
  {
    title: "Manufacturing ERP: 45% Efficiency Gain with EKASYS",
    description: "How our proprietary ERP platform transformed supply chain visibility, production scheduling, and quality control for a multi-facility manufacturer.",
    industry: "Manufacturing",
    metric: "45% Efficiency Gain",
  },
];

const webinars = [
  {
    title: "AI in 2025: What Every CEO Needs to Know",
    description: "Our CEO and CTO break down the AI landscape, what's hype, what's real, and where to invest for maximum ROI.",
    date: "March 2025",
    duration: "45 min",
    status: "Upcoming",
  },
  {
    title: "From Shopify to Shopify Plus: The Revenue Migration Playbook",
    description: "Live walkthrough of migrating high-growth brands to Shopify Plus with zero downtime and immediate conversion gains.",
    date: "February 2025",
    duration: "38 min",
    status: "On Demand",
  },
  {
    title: "Building Predictive Analytics into Your Marketing Stack",
    description: "Practical session on integrating ML models into existing marketing workflows for better attribution and forecasting.",
    date: "January 2025",
    duration: "42 min",
    status: "On Demand",
  },
];

const insights = [
  {
    title: "Why 73% of Digital Transformations Fail (And How to Be in the 27%)",
    description: "The three structural mistakes enterprises make when approaching digital transformation, and the framework that prevents them.",
    category: "Digital Transformation",
    readTime: "6 min",
  },
  {
    title: "The Hidden Cost of Legacy ERP: A $4.2M Case Study",
    description: "Quantifying the real cost of maintaining outdated ERP systems, from lost productivity to missed market opportunities.",
    category: "ERP & Operations",
    readTime: "5 min",
  },
  {
    title: "AI Chatbots vs. Traditional Support: The Numbers After 12 Months",
    description: "Comparing resolution rates, CSAT scores, and cost-per-ticket between AI-powered and traditional customer support across 8 deployments.",
    category: "AI & Automation",
    readTime: "7 min",
  },
  {
    title: "Composable vs. Monolithic Commerce: 2025 Performance Benchmarks",
    description: "Head-to-head performance data comparing headless architectures against traditional platforms across speed, conversion, and TCO.",
    category: "E-Commerce",
    readTime: "8 min",
  },
  {
    title: "The Microsoft Power Platform ROI Calculator: Real Data from 30 Implementations",
    description: "Breaking down the true ROI of Power Automate, Power BI, and Power Apps deployments across mid-market and enterprise clients.",
    category: "Automation",
    readTime: "6 min",
  },
  {
    title: "SEO in the Age of AI Search: What Actually Works in 2025",
    description: "How AI-generated search results are changing SEO strategy, and the content frameworks that still drive organic traffic.",
    category: "Marketing",
    readTime: "5 min",
  },
];

const categories = [
  { icon: FileText, label: "Whitepapers", count: whitepapers.length, anchor: "#whitepapers" },
  { icon: BarChart3, label: "Case Studies", count: caseStudies.length, anchor: "#case-studies" },
  { icon: Video, label: "Webinars", count: webinars.length, anchor: "#webinars" },
  { icon: Lightbulb, label: "AI Insights", count: insights.length, anchor: "#insights" },
];

const Resources = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <>
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">Thought Leadership</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] font-display mb-6">
              <span className="text-hero-foreground">Insights That </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Drive</span>
              <br />
              <span className="text-hero-foreground/30">Transformation</span>
            </h1>
            <p className="text-lg text-hero-foreground/60 max-w-xl leading-relaxed">
              Data-backed strategies, frameworks, and real-world results from 300+ digital transformations across AI, automation, commerce, and enterprise tech.
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.label}
                href={cat.anchor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="group p-5 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/5 transition-all"
              >
                <cat.icon className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-semibold text-hero-foreground group-hover:text-primary transition-colors">{cat.label}</p>
                <p className="text-2xl font-bold text-hero-foreground/20 mt-1 font-display">{cat.count}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section id="whitepapers" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Whitepapers & Guides</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Deep-Dive Research</h2>
            <p className="text-muted-foreground max-w-xl mb-12">Comprehensive frameworks and strategies backed by real deployment data from enterprise clients.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whitepapers.map((wp, i) => (
              <motion.div
                key={wp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-7 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <wp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{wp.category}</span>
                      <span className="text-sm text-muted-foreground">{wp.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">{wp.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{wp.description}</p>
                    <button
                      onClick={openContactDialog}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4 font-display">Proven Results, Real Numbers</h2>
            <p className="text-section-dark-foreground/50 max-w-xl mb-12">Detailed breakdowns of how we've delivered measurable business outcomes across industries.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-7 rounded-2xl border border-section-dark-foreground/[0.06] hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{cs.industry}</span>
                  <span className="text-sm font-bold text-primary font-display">{cs.metric}</span>
                </div>
                <h3 className="text-lg font-bold text-section-dark-foreground mb-2 group-hover:text-primary transition-colors font-display">{cs.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed mb-4">{cs.description}</p>
                <button
                  onClick={openContactDialog}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section id="webinars" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Webinars & Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Learn From Our Experts</h2>
            <p className="text-muted-foreground max-w-xl mb-12">Live sessions and on-demand recordings covering AI strategy, digital commerce, and enterprise transformation.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {webinars.map((wb, i) => (
              <motion.div
                key={wb.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-7 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-sm font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${wb.status === "Upcoming" ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"}`}>
                    {wb.status}
                  </span>
                  <span className="text-sm text-muted-foreground">{wb.date}</span>
                  <span className="text-sm text-muted-foreground">· {wb.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">{wb.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{wb.description}</p>
                <button
                  onClick={openContactDialog}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  {wb.status === "Upcoming" ? (
                    <><BookOpen className="w-4 h-4" /> Register Now</>
                  ) : (
                    <><Play className="w-4 h-4" /> Watch Now</>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section id="insights" className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">AI & Industry Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4 font-display">Expert Perspectives</h2>
            <p className="text-section-dark-foreground/50 max-w-xl mb-12">Sharp, data-driven analysis on the trends reshaping technology, commerce, and enterprise operations.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((ins, i) => (
              <motion.div
                key={ins.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl border border-section-dark-foreground/[0.06] hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{ins.category}</span>
                  <span className="text-sm text-section-dark-foreground/40">{ins.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-section-dark-foreground mb-2 group-hover:text-primary transition-colors font-display leading-snug">{ins.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed mb-3">{ins.description}</p>
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">Ready to Transform?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-hero-foreground mb-6 font-display">
              Let's Build Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Transformation Roadmap</span>
            </h2>
            <p className="text-hero-foreground/50 mb-8 max-w-lg mx-auto">
              Book a free consultation with our transformation strategists and get a customized digital maturity assessment.
            </p>
            <button
              onClick={openContactDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Schedule Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="resources" links={["ai-framework", "cro", "ai-automation", "digital-transformation", "web-dev"]} variant="light" />
      <Footer />
    </>
  );
};

export default Resources;
