"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Workflow, Cog, FileCheck, RefreshCw, Zap, BarChart3, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";
import { toast } from "sonner";


const stats = [
  { value: "60%", label: "Avg Cost Reduction" },
  { value: "500+", label: "Workflows Automated" },
  { value: "10x", label: "Faster Processing" },
  { value: "99.5%", label: "Accuracy Rate" },
];

const capabilities = [
  { icon: FileCheck, title: "Document Processing", desc: "AI-powered extraction from invoices, contracts, and forms, eliminating manual data entry with 99%+ accuracy across Arabic and English documents." },
  { icon: Workflow, title: "Workflow Orchestration", desc: "End-to-end business process automation connecting your CRM, ERP, email, and custom systems with intelligent routing and exception handling." },
  { icon: RefreshCw, title: "Order & Fulfillment Automation", desc: "Automated order processing, inventory updates, shipping label generation, and customer notifications, reducing fulfillment time by 80%." },
  { icon: Cog, title: "HR & Employee Onboarding", desc: "Automate offer letters, document collection, account provisioning, training assignments, and compliance checks for new hires." },
  { icon: Zap, title: "Finance & Accounting", desc: "Automated invoice matching, expense approvals, reconciliation, and financial reporting, closing books 5× faster with fewer errors." },
  { icon: BarChart3, title: "Custom API Integrations", desc: "Connect any system via REST/GraphQL APIs, webhooks, and middleware, creating seamless data flows across your entire tech stack." },
];

const savings = [
  { task: "Invoice Processing", before: "15 min/invoice", after: "30 sec/invoice", saving: "97% time saved" },
  { task: "Order Entry", before: "8 min/order", after: "Instant", saving: "100% automated" },
  { task: "Employee Onboarding", before: "3 days", after: "2 hours", saving: "90% faster" },
  { task: "Report Generation", before: "4 hours/week", after: "Auto-generated", saving: "100% automated" },
];

const process = [
  { step: "01", title: "Process Audit", desc: "We map your current workflows, identify bottlenecks, and quantify the ROI of automating each process." },
  { step: "02", title: "Solution Design", desc: "Architecture and integration design with your existing tools, Microsoft 365, Zoho, SAP, Shopify, or custom systems." },
  { step: "03", title: "Build & Integrate", desc: "Agile development with weekly demos, automated testing, and progressive rollout to minimize disruption." },
  { step: "04", title: "Monitor & Scale", desc: "Real-time monitoring dashboards, error handling, and continuous optimization as your processes evolve." },
];

const ProcessAutomation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("source", "Process Automation Audit");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Audit Requested!", {
        description: "Our automation team will contact you within 24 hours.",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Process Automation</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Stop Paying People to Do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">What Machines Do Better</span>
              </h1>
              <p className="text-lg text-hero-foreground/70 leading-relaxed mb-10 max-w-2xl">
                We automate manual, repetitive, and paper-based workflows using AI and intelligent orchestration. Save thousands of man-hours and eliminate human error with Globify's automation frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                  Get Free Process Audit <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#capabilities" className="inline-flex items-center justify-center gap-2 bg-transparent border border-hero-foreground/10 text-hero-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-hero-foreground/5 transition-all">
                  <Workflow className="w-4 h-4" /> Explore Automation Capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Automation Solutions</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">From simple task automation to complex cross-departmental orchestrations, we help you build a more efficient business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Case Study */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">The Real Impact of Automation</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-lg">We measure success in hours saved and accuracy gained. Here is what we've achieved for our enterprise clients in the last 12 months.</p>
              <div className="space-y-6">
                {savings.map((item) => (
                  <div key={item.task} className="p-5 rounded-xl border border-border bg-background">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-semibold text-sm">{item.task}</div>
                      <div className="text-xs font-bold text-primary uppercase">{item.saving}</div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-muted-foreground line-through">{item.before}</div>
                      <ArrowRight className="w-3 h-3 text-muted-foreground/30" />
                      <div className="text-foreground font-semibold px-2 py-1 bg-primary/5 rounded">{item.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-primary/5 border border-primary/10 p-12 flex flex-col justify-center">
                <div className="text-5xl font-black text-primary mb-2">12,000+</div>
                <div className="text-xl font-semibold text-foreground mb-4">Hours Saved Annually</div>
                <p className="text-muted-foreground text-sm leading-relaxed">Average man-hours saved by our clients across their logistics and finance operations within 6 months of automation deployment.</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Your Automation Roadmap</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">A clear, phased approach to transitioning your business from manual chaos to automated efficiency.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative group">
                <div className="text-[5rem] font-black text-foreground/[0.03] absolute -top-8 -left-2 leading-none group-hover:text-primary/[0.05] transition-colors">{step.step}</div>
                <div className="relative pt-4">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Automating</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready to Eliminate<br />Manual Work?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free process audit that identifies your highest-ROI automation opportunities with a clear implementation roadmap.</p>
              <div className="space-y-4">
                {["Free process audit & ROI analysis", "Integration assessment with your tools", "Implementation roadmap & timeline", "Fixed-price quotes, no surprises"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our automation team will analyze your processes and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label><input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label><input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Company</label><input name="company" type="text" placeholder="Your Brand" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Which processes need automation? *</label><textarea required name="message" rows={3} placeholder="e.g., Invoice processing, order management, employee onboarding..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" /></div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current Tools</label><input name="website" type="text" placeholder="e.g., Zoho, SAP, Microsoft 365, Shopify..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get Your Free Process Audit"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <CrossLinkSection currentPage="process-automation" links={["ai-automation", "ai-chatbots", "erp", "digital-transformation", "predictive-analytics"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ProcessAutomation;
