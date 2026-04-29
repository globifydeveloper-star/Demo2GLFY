"use client";

import { useState } from "react";
import CrossLinkSection from "@/components/CrossLinkSection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Stethoscope, Shield, Brain, Smartphone, BarChart3, Users, Zap, Clock, Eye, HeartPulse, FileText, Laptop, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";


const stats = [
  { value: "50+", label: "AI Health Deployments" },
  { value: "60%", label: "Admin Cost Reduction" },
  { value: "3x", label: "Patient Engagement Lift" },
  { value: "40%", label: "Faster Diagnostics" },
];

const solutions = [
  { icon: HeartPulse, title: "AI-Powered Telemedicine", desc: "HIPAA-compliant virtual care with AI triage, symptom analysis, and intelligent appointment routing that reduces wait times by 60%." },
  { icon: FileText, title: "Intelligent EHR/EMR", desc: "AI-enhanced health records with automated coding, predictive patient risk scoring, and natural language clinical documentation." },
  { icon: Smartphone, title: "Smart Patient Apps", desc: "AI-driven engagement apps with personalized health recommendations, automated refill alerts, and predictive wellness insights." },
  { icon: Brain, title: "Clinical Decision Intelligence", desc: "ML models for medical imaging analysis, predictive diagnostics, and real-time clinical decision support that improve accuracy by 40%." },
  { icon: Laptop, title: "Autonomous Hospital Operations", desc: "AI-automated billing, inventory forecasting, staff scheduling optimization, and operational intelligence dashboards." },
  { icon: Shield, title: "AI-Enhanced Compliance", desc: "Automated HIPAA, NABH, and GDPR compliance monitoring with AI-powered audit trails and anomaly detection." },
];

const whyGlobify = [
  { icon: Shield, title: "HIPAA-First AI Architecture", desc: "Every AI model and automation is built with regulatory compliance at its core, privacy-preserving ML that meets the strictest standards." },
  { icon: Brain, title: "Clinical AI Expertise", desc: "Our team combines healthcare domain knowledge with AI/ML engineering, understanding clinical workflows, HL7/FHIR, and FDA AI guidelines." },
  { icon: Users, title: "Patient-Centric AI Design", desc: "AI that enhances rather than replaces the human touch, designed for patients of all ages and digital literacy levels." },
  { icon: Zap, title: "Rapid AI Pilot to Scale", desc: "Launch AI pilots in 4 weeks, validate with clinical data, then scale across departments with proven ROI metrics." },
  { icon: BarChart3, title: "Measurable Clinical Outcomes", desc: "Every deployment tracks patient outcomes, operational efficiency, cost reduction, and ROI, with real-time intelligence dashboards." },
  { icon: Eye, title: "Transformation Roadmap", desc: "We provide a complete digital maturity assessment and phased AI adoption roadmap tailored to your healthcare organization." },
];

const IndustryHealthcare = () => {
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Consultation Requested!", {
        description: "Our healthcare team will respond within 24 hours.",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">AI-Powered Healthcare</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Intelligent Healthcare{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">That Predicts, Automates & Heals</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                AI-powered clinical decision support, predictive diagnostics, and autonomous hospital operations, reducing admin costs by 60% while improving patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get Your AI Health Assessment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["HIPAA-Compliant AI", "Predictive Diagnostics", "60% Cost Reduction"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-hero-foreground/40"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-section-dark-foreground/40 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Powered Solutions</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">Intelligent Healthcare Platforms<br />That Predict, Automate & Scale</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Globify */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify for Healthcare AI?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Your AI Transformation Partner<br />in Healthcare</h2>
            <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">We combine deep clinical domain expertise with production-grade AI engineering, delivering compliant, measurable healthcare transformation.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGlobify.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Your AI Journey</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready for AI-Powered<br />Healthcare Transformation?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free Digital Maturity Assessment and AI readiness audit, we'll identify automation opportunities worth 40-60% in cost savings.</p>
              <div className="space-y-4">
                {["Free AI readiness & compliance assessment", "Automation opportunity identification", "ROI projection with implementation roadmap", "HIPAA-compliant AI architecture plan"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our healthcare team will respond within 24 hours with a compliance-first strategy.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required name="name" type="text" placeholder="Dr. Jane Smith" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Organization</label><input name="company" type="text" placeholder="Hospital / Clinic" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email Address *</label><input required name="email" type="email" placeholder="jane@hospital.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label><input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Project Type *</label>
                    <select required name="projectType" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select type</option><option>Telemedicine Platform</option><option>EHR/EMR System</option><option>Patient App</option><option>Hospital Management</option><option>AI Diagnostics</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Project Details</label><textarea name="message" rows={3} placeholder="Tell us about your healthcare project..." className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get Your Free Consultation"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. We'll respond within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="healthcare" links={["ai-framework", "cro", "fintech", "retail", "manufacturing"]} />
      <Footer />
    </div>
  );
};

export default IndustryHealthcare;
