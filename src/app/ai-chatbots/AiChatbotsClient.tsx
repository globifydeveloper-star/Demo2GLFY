"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Bot, MessageSquare, Brain, Headphones, BarChart3, Globe, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";
import { toast } from "sonner";


const stats = [
  { value: "10M+", label: "Conversations Handled" },
  { value: "85%", label: "Query Resolution Rate" },
  { value: "3x", label: "Lead Qualification Lift" },
  { value: "24/7", label: "Always-On Support" },
];

const capabilities = [
  { icon: MessageSquare, title: "Customer Support Bots", desc: "Resolve 85% of support tickets automatically with AI that understands context, sentiment, and when to escalate to a human agent." },
  { icon: Bot, title: "Sales & Lead Qualification", desc: "Conversational AI that engages visitors, qualifies leads with intelligent questioning, and books meetings, increasing pipeline by 3×." },
  { icon: Brain, title: "Knowledge Base Assistants", desc: "Internal AI assistants trained on your documentation, SOPs, and policies, giving employees instant answers and reducing onboarding time." },
  { icon: Headphones, title: "Omnichannel Deployment", desc: "Deploy across WhatsApp, website chat, Instagram DM, email, and voice, with unified conversation history and handoff." },
  { icon: BarChart3, title: "Analytics & Optimization", desc: "Real-time dashboards showing resolution rates, sentiment trends, drop-off points, and revenue attributed to AI conversations." },
  { icon: Globe, title: "Multilingual AI", desc: "Chatbots that converse fluently in Arabic, Hindi, English, and 50+ languages with culturally-aware responses for UAE and India markets." },
];

const useCases = [
  { industry: "E-Commerce", example: "AI concierge that recommends products, tracks orders, and processes returns, reducing support costs by 60%." },
  { industry: "Healthcare", example: "Patient intake bots that collect symptoms, schedule appointments, and send reminders, HIPAA compliant." },
  { industry: "Real Estate", example: "Property matching chatbot that qualifies buyers, schedules viewings, and answers FAQs, 24/7 lead capture." },
  { industry: "SaaS", example: "Onboarding assistant that guides new users through features, answers support questions, and reduces churn." },
];

const process = [
  { step: "01", title: "Discovery & Strategy", desc: "We map your customer journeys, identify automation opportunities, and define the chatbot's personality and scope." },
  { step: "02", title: "Design & Training", desc: "Conversation flows, intent training, knowledge base ingestion, and integration with your CRM/helpdesk." },
  { step: "03", title: "Build & Test", desc: "Development with rigorous testing across edge cases, languages, and channels before going live." },
  { step: "04", title: "Launch & Optimize", desc: "Phased rollout with continuous learning from real conversations, A/B testing, and performance tuning." },
];

const AIChatbots = () => {
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
      toast.success("Demo Requested!", {
        description: "Our AI team will reach out within 24 hours.",
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">AI Chatbots & Assistants</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Turn Every Conversation Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Revenue & Loyalty</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                AI-powered chatbots that don't just answer questions, they qualify leads, close sales, resolve issues, and learn from every interaction to get smarter over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get a Chatbot Demo <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  See Use Cases
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["GPT-4 & Custom LLMs", "Omnichannel Ready", "Enterprise Security"].map((item) => (
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

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">Chatbots That Actually Drive Business Results</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Not just FAQ bots. We build intelligent agents that understand context, learn from conversations, and integrate deeply with your business systems.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors group">
                <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Industry Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground leading-[1.1]">AI Chatbots Across Industries</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div key={uc.industry} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/[0.03]">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 block">{uc.industry}</span>
                <p className="text-sm text-section-dark-foreground/70 leading-relaxed">{uc.example}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1]">From Concept to Conversational AI in 4 Weeks</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                <span className="text-4xl font-bold text-primary/20 mb-3 block">{p.step}</span>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready to Deploy Your<br />AI Assistant?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Tell us about your use case and we'll respond within 24 hours with a chatbot strategy, demo, and transparent pricing.</p>
              <div className="space-y-4">
                {["Free chatbot strategy session", "Live demo with your use case", "ROI projection & timeline", "No lock-in contracts"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our AI team will reach out within 24 hours with a custom chatbot strategy.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label><input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Company</label><input name="company" type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label><input required name="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Primary Use Case *</label>
                    <select required name="projectType" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select use case</option><option>Customer Support</option><option>Lead Qualification</option><option>Internal Knowledge Base</option><option>Sales Assistant</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Tell us about your needs</label><textarea name="message" rows={3} placeholder="What problems should your chatbot solve? What channels do you need?" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isSubmitting ? "Submitting..." : "Get Your Free AI Strategy"}
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <CrossLinkSection currentPage="ai-chatbots" links={["ai-automation", "process-automation", "predictive-analytics", "ecommerce", "digital-marketing"]} variant="light" />
      <Footer />
    </div>
  );
};

export default AIChatbots;
