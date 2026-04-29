"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Smartphone,
  Layers,
  ShoppingCart,
  Globe,
  Brain,
  Cloud,
  Palette,
  Bug,
  Check,
  ArrowRight,
  Users,
  Shield,
  Clock,
  DollarSign,
  HeadphonesIcon,
  Zap,
  Send,
  ChevronDown,
  GraduationCap,
  TrendingUp,
  MessageCircle,
  MapPin,
  Scale,
  Award,
  FileCheck,
  BarChart3,
  Lock,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import ClientsSection from "@/components/ClientsSection";
import CrossLinkSection from "@/components/CrossLinkSection";
import { useContactDialog } from "@/contexts/ContactDialogContext";

/* ── Developer Categories (updated per user request) ── */
const developerTypes = [
  {
    icon: Code,
    title: "React / Next.js Developers",
    techs: "React, Next.js, TypeScript, Redux, Tailwind CSS",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Server,
    title: "Node.js / Backend Developers",
    techs: "Node.js, Express, NestJS, REST APIs, GraphQL",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Globe,
    title: "PHP / Laravel Developers",
    techs: "PHP, Laravel, Symfony, CodeIgniter, MySQL",
    color: "from-indigo-500/20 to-indigo-600/10",
  },
  {
    icon: Brain,
    title: "Python / Django Developers",
    techs: "Python, Django, Flask, FastAPI, Data Engineering",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Developers",
    techs: "Shopify, Liquid, Shopify Plus, Theme Dev, Apps",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Layers,
    title: "WordPress Developers",
    techs: "WordPress, WooCommerce, Elementor, Custom Themes",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Developers",
    techs: "Flutter, React Native, iOS (Swift), Android (Kotlin)",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    techs: "Figma, Adobe XD, Prototyping, Design Systems, Wireframing",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Bug,
    title: "QA Engineers",
    techs: "Selenium, Cypress, Manual QA, Automation, Performance Testing",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Cloud,
    title: "DevOps Engineers",
    techs: "AWS, Azure, Docker, Kubernetes, CI/CD, Terraform",
    color: "from-sky-500/20 to-sky-600/10",
  },
];

/* ── Pricing Tiers with US/UAE comparison ── */
const pricingTiers = [
  {
    level: "Junior Developer",
    experience: "0-2 years",
    monthly: "$1,200 - $1,800",
    hourly: "$8 - $12",
    usRate: "$5,000 - $7,000",
    uaeRate: "$3,500 - $5,000",
    tag: "Best Value",
  },
  {
    level: "Mid-Level Developer",
    experience: "2-5 years",
    monthly: "$2,000 - $3,500",
    hourly: "$14 - $22",
    usRate: "$7,000 - $12,000",
    uaeRate: "$5,000 - $8,000",
    tag: "Most Popular",
  },
  {
    level: "Senior Developer",
    experience: "5+ years",
    monthly: "$3,500 - $6,000",
    hourly: "$22 - $40",
    usRate: "$10,000 - $18,000",
    uaeRate: "$7,000 - $12,000",
    tag: "Expert",
  },
];

/* ── Why Hire from India ── */
const indiaAdvantages = [
  {
    icon: DollarSign,
    title: "60-70% Cost Savings",
    desc: "Indian developer rates are a fraction of US, UK, or UAE costs. You get the same quality output at significantly lower monthly investment.",
  },
  {
    icon: GraduationCap,
    title: "World-Class Talent Pool",
    desc: "India produces over 1.5 million engineering graduates every year. The talent pool is deep, diverse, and technically strong across all modern stacks.",
  },
  {
    icon: MessageCircle,
    title: "Fluent English Communication",
    desc: "English is the primary business language in the Indian tech industry. Expect clear written and verbal communication from day one.",
  },
  {
    icon: MapPin,
    title: "Timezone Flexibility",
    desc: "Indian developers regularly work overlapping hours with US, UK, EU, and Middle East teams. Morning or evening overlap is standard.",
  },
  {
    icon: TrendingUp,
    title: "Easy Scalability",
    desc: "Need to scale from 2 developers to 10? India's large talent ecosystem allows rapid team expansion without long hiring cycles.",
  },
];

/* ── Engagement Models ── */
const engagementModels = [
  {
    title: "Dedicated Full-Time",
    desc: "160 hours per month. Your developer works exclusively on your project with daily standups and full team integration.",
    icon: Users,
    hours: "160 hrs/mo",
  },
  {
    title: "Part-Time",
    desc: "80 hours per month. Ideal for ongoing projects that do not require full-time attention. Scale up or down as needed.",
    icon: Clock,
    hours: "80 hrs/mo",
  },
  {
    title: "Hourly",
    desc: "Pay only for the hours you use. Best for short tasks, bug fixes, or intermittent support needs.",
    icon: Zap,
    hours: "Flexible",
  },
  {
    title: "Project-Based",
    desc: "Fixed scope, fixed timeline, milestone-based billing. We assign the right team and deliver end-to-end.",
    icon: Layers,
    hours: "Fixed scope",
  },
];

/* ── Process Steps ── */
const processSteps = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "Tell us the skills, experience level, team size, and project context you need.",
  },
  {
    step: "02",
    title: "Skill Matching",
    desc: "We shortlist pre-vetted developers whose profiles match your exact requirements.",
  },
  {
    step: "03",
    title: "Interview Process",
    desc: "Conduct technical interviews directly with the candidates. Choose the ones you are confident in.",
  },
  {
    step: "04",
    title: "Onboarding",
    desc: "Selected developers join your tools, attend standups, and start delivering from day one.",
  },
  {
    step: "05",
    title: "Ongoing Reporting",
    desc: "Weekly progress reports, sprint reviews, and a dedicated project manager for tracking and accountability.",
  },
];

/* ── Why Choose Globify ── */
const whyGlobify = [
  {
    icon: Award,
    title: "ISO 9001 Certified",
    desc: "Our development processes are ISO 9001 certified, ensuring consistent quality, documentation, and continuous improvement.",
  },
  {
    icon: HeadphonesIcon,
    title: "Structured Project Management",
    desc: "Every engagement comes with a dedicated PM who handles sprint planning, progress tracking, and stakeholder reporting.",
  },
  {
    icon: DollarSign,
    title: "Transparent Billing",
    desc: "No hidden fees, no surprise charges. You get detailed timesheets, clear invoices, and full visibility into where every dollar goes.",
  },
  {
    icon: BarChart3,
    title: "Agile or Waterfall",
    desc: "We adapt to your preferred methodology. Whether you run Scrum sprints or prefer a traditional Waterfall approach, we align with your process.",
  },
  {
    icon: Lock,
    title: "Data Security and NDA Compliance",
    desc: "Strict NDAs, IP assignment agreements, secure development environments, and data protection protocols from day one.",
  },
  {
    icon: FileCheck,
    title: "Free Replacement Policy",
    desc: "If a developer does not meet your expectations within the first two weeks, we replace them at no additional cost.",
  },
];

/* ── FAQ ── */
const faq = [
  {
    question: "What is the minimum hiring duration?",
    answer:
      "We recommend a minimum engagement of 1 month for dedicated developers. For project-based work, the duration depends on scope. There are no long-term lock-in contracts.",
  },
  {
    question: "What is your replacement policy?",
    answer:
      "If a developer is not the right fit, we offer a free replacement within the first 2 weeks. After that, we can transition to a new developer with minimal disruption to your project.",
  },
  {
    question: "Who owns the intellectual property?",
    answer:
      "You own 100% of the IP, source code, and deliverables. We sign IP assignment agreements and NDAs before any engagement begins.",
  },
  {
    question: "What communication tools do you use?",
    answer:
      "We adapt to your stack. Common tools include Slack, Microsoft Teams, Jira, Asana, GitHub, GitLab, Notion, and Zoom. We provide daily async updates and sync meetings as needed.",
  },
  {
    question: "What is the typical timezone overlap?",
    answer:
      "Indian developers work IST (UTC+5:30). For US clients, we typically offer 4-5 hours of overlap in the morning. For UK and EU, there is 3-4 hours of afternoon overlap. For UAE and Middle East, there is near-full overlap.",
  },
  {
    question: "Can I interview the developers before hiring?",
    answer:
      "Yes. We encourage technical interviews. You will receive shortlisted profiles with portfolios and can conduct as many rounds as you need before making a decision.",
  },
];

const HireDevelopers = () => {
  const { openContactDialog } = useContactDialog();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to submit");
      toast.success("Request Submitted!", {
        description:
          "We'll get back to you with developer profiles within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-hero pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              Offshore Hiring from India
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6 leading-[1.1]">
              Hire Dedicated <span className="text-shimmer">Developers</span>{" "}
              from India
            </h1>
            <p className="text-lg md:text-xl text-hero-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access 500+ pre-vetted engineers across every major technology
              stack. Save 60-70% compared to US or UAE hiring costs. No
              long-term contracts. Start in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openContactDialog}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-[16px] font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground px-8 py-3.5 rounded-lg text-[16px] font-semibold hover:bg-hero-foreground/5 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY HIRE FROM INDIA ═══ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Hire Developers from India?
            </h2>
            <p className="text-muted-foreground text-lg">
              India is the world's largest offshore development hub for a
              reason. Here is what makes it the smart choice for your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {indiaAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
              How It Works
            </h2>
            <p className="text-section-dark-foreground/70 text-lg">
              From requirement to onboarding in as little as 48 hours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-primary/20 mb-3">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-section-dark-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-section-dark-foreground/70 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT MODELS ═══ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose how you want to work with your developers. Scale up or down
              at any time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <model.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {model.title}
                </h3>
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded mb-3">
                  {model.hours}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {model.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEVELOPER CATEGORIES ═══ */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
              Types of Developers Available
            </h2>
            <p className="text-section-dark-foreground/70 text-lg">
              Hire remote developers from India across every major technology
              and role.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {developerTypes.map((dev, i) => (
              <motion.div
                key={dev.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-section-dark-foreground/[0.04] border border-section-dark-foreground/10 rounded-xl p-5 hover:border-primary/30 hover:bg-section-dark-foreground/[0.08] transition-all cursor-pointer"
                onClick={openContactDialog}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dev.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <dev.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[15px] font-bold text-section-dark-foreground mb-1">
                  {dev.title}
                </h3>
                <p className="text-xs text-section-dark-foreground/60 leading-relaxed">
                  {dev.techs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══ */}
      <ClientsSection />

      {/* ═══ PRICING TABLE WITH US/UAE COMPARISON ═══ */}
      <section id="pricing" className="py-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-section-dark-foreground/70 text-lg">
              Realistic 2025 offshore rates from India. Compare with US and UAE
              hiring costs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 border ${tier.tag === "Most Popular" ? "border-primary bg-primary/5" : "border-section-dark-foreground/10 bg-section-dark-foreground/[0.03]"}`}
              >
                {tier.tag === "Most Popular" && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {tier.tag}
                  </span>
                )}
                <p className="text-sm text-primary font-semibold mb-1">
                  {tier.tag !== "Most Popular" ? tier.tag : "\u00A0"}
                </p>
                <h3 className="text-xl font-bold text-section-dark-foreground mb-1">
                  {tier.level}
                </h3>
                <p className="text-sm text-section-dark-foreground/50 mb-5">
                  {tier.experience}
                </p>
                <div className="mb-3">
                  <p className="text-2xl font-bold text-primary">
                    {tier.monthly}
                  </p>
                  <p className="text-xs text-section-dark-foreground/50">
                    per month (full-time, India)
                  </p>
                </div>
                <div className="mb-5">
                  <p className="text-lg font-semibold text-section-dark-foreground/80">
                    {tier.hourly}
                  </p>
                  <p className="text-xs text-section-dark-foreground/50">
                    per hour (flexible)
                  </p>
                </div>
                <div className="border-t border-section-dark-foreground/10 pt-4 mb-5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-section-dark-foreground/50">
                      US equivalent
                    </span>
                    <span className="text-section-dark-foreground/70 font-medium">
                      {tier.usRate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-section-dark-foreground/50">
                      UAE equivalent
                    </span>
                    <span className="text-section-dark-foreground/70 font-medium">
                      {tier.uaeRate}
                    </span>
                  </div>
                </div>
                <button
                  onClick={openContactDialog}
                  className="w-full py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors"
                >
                  Hire Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Cost Comparison Summary */}
          <div className="max-w-3xl mx-auto bg-section-dark-foreground/[0.04] border border-section-dark-foreground/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-section-dark-foreground mb-4 text-center">
              Cost Comparison: India vs US vs UAE
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-section-dark-foreground/10">
                    <th className="text-left py-3 text-section-dark-foreground/60 font-medium">
                      Level
                    </th>
                    <th className="text-center py-3 text-primary font-bold">
                      India (Globify)
                    </th>
                    <th className="text-center py-3 text-section-dark-foreground/60 font-medium">
                      United States
                    </th>
                    <th className="text-center py-3 text-section-dark-foreground/60 font-medium">
                      UAE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier) => (
                    <tr
                      key={tier.level}
                      className="border-b border-section-dark-foreground/5"
                    >
                      <td className="py-3 text-section-dark-foreground/80 font-medium">
                        {tier.level}
                      </td>
                      <td className="py-3 text-center text-primary font-semibold">
                        {tier.monthly}
                      </td>
                      <td className="py-3 text-center text-section-dark-foreground/50">
                        {tier.usRate}
                      </td>
                      <td className="py-3 text-center text-section-dark-foreground/50">
                        {tier.uaeRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-section-dark-foreground/40 mt-3 text-center">
              Monthly rates for full-time dedicated developers. Rates are
              indicative and vary based on skill set and experience.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE GLOBIFY ═══ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Globify?
            </h2>
            <p className="text-muted-foreground text-lg">
              We are not a freelancer marketplace. We are a managed offshore
              development partner with structured processes and accountability.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyGlobify.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEAD CAPTURE FORM ═══ */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
                Get Developer Profiles
              </h2>
              <p className="text-section-dark-foreground/70 text-lg">
                Tell us what you need and we will send matched developer
                profiles within 24 hours.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-section-dark-foreground/[0.04] border border-section-dark-foreground/10 rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="hire-name" className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="hire-name"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/30 focus:border-primary focus:outline-none text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="hire-email" className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="hire-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/30 focus:border-primary focus:outline-none text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="hire-phone" className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="hire-phone"
                    name="phone"
                    required
                    type="tel"
                    maxLength={20}
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/30 focus:border-primary focus:outline-none text-sm"
                    placeholder="+971 50 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="hire-company" className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5">
                    Company / Brand
                  </label>
                  <input
                    id="hire-company"
                    name="company"
                    maxLength={100}
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/30 focus:border-primary focus:outline-none text-sm"
                    placeholder="Your Brand"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="hire-dev-type"
                    className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5"
                  >
                    Developer Type *
                  </label>
                  <select
                    id="hire-dev-type"
                    name="developer_type"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground focus:border-primary focus:outline-none text-sm appearance-none"
                  >
                    <option value="">Select type...</option>
                    {developerTypes.map((d) => (
                      <option key={d.title} value={d.title}>
                        {d.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="hire-team-size"
                    className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5"
                  >
                    Team Size *
                  </label>
                  <select
                    id="hire-team-size"
                    name="team_size"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground focus:border-primary focus:outline-none text-sm appearance-none"
                  >
                    <option value="">Select size...</option>
                    <option value="1">1 Developer</option>
                    <option value="2-3">2-3 Developers</option>
                    <option value="4-6">4-6 Developers</option>
                    <option value="7+">7+ Developers</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="hire-duration"
                    className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5"
                  >
                    Project Duration
                  </label>
                  <select
                    id="hire-duration"
                    name="duration"
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground focus:border-primary focus:outline-none text-sm appearance-none"
                  >
                    <option value="">Select duration...</option>
                    <option value="1-3 months">1-3 Months</option>
                    <option value="3-6 months">3-6 Months</option>
                    <option value="6-12 months">6-12 Months</option>
                    <option value="12+ months">12+ Months</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="hire-budget"
                    className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5"
                  >
                    Monthly Budget
                  </label>
                  <select
                    id="hire-budget"
                    name="budget"
                    className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground focus:border-primary focus:outline-none text-sm appearance-none"
                  >
                    <option value="">Select budget...</option>
                    <option value="<$2k">Under $2,000</option>
                    <option value="$2k-$5k">$2,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k+">$10,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="hire-message"
                  className="block text-sm font-medium text-section-dark-foreground/80 mb-1.5"
                >
                  Project Details
                </label>
                <textarea
                  id="hire-message"
                  name="message"
                  rows={3}
                  maxLength={1000}
                  className="w-full px-4 py-2.5 rounded-lg bg-section-dark-foreground/[0.06] border border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/30 focus:border-primary focus:outline-none text-sm resize-none"
                  placeholder="Brief description of your project and requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Get Developer Profiles <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
            Ready to Build Your Offshore Development Team?
          </h2>
          <p className="text-section-dark-foreground/70 text-lg mb-8">
            Schedule a free consultation and receive matched developer profiles
            within 24 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openContactDialog}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-[16px] font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={openContactDialog}
              className="inline-flex items-center justify-center gap-2 border border-section-dark-foreground/20 text-section-dark-foreground px-8 py-3.5 rounded-lg text-[16px] font-semibold hover:bg-section-dark-foreground/5 transition-colors"
            >
              Get Developer Profiles
            </button>
          </div>
        </div>
      </section>

      <CrossLinkSection
        currentPage="hire-developers"
        links={["web-dev", "app-dev", "ai-automation", "ecommerce", "erp"]}
        variant="light"
      />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default HireDevelopers;
