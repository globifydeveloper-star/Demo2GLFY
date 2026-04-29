"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Heart,
  BarChart3, Rocket, Users, MessageCircle, Camera, Share2,
  Globe, Award, Send, Layers, Calendar, Megaphone, Eye, Loader2
} from "lucide-react";
import { toast } from "sonner";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

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
    formData.append("source", `Social Media Marketing - ${id}`);

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

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you!</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our social media team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Free Strategy Call <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select name="goal" required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Primary goal</option>
            <option>Brand Awareness</option>
            <option>Lead Generation</option>
            <option>Community Growth</option>
            <option>Sales & Conversions</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
};

const faq = [
  { question: "Which social media platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), YouTube, and Pinterest — choosing the platforms that best align with your audience and goals." },
  { question: "Do you create the content or do we provide it?", answer: "We handle everything: strategy, copywriting, graphic design, video production, and scheduling. You approve the content calendar, and we execute." },
  { question: "How do you measure social media ROI?", answer: "We track engagement rates, follower growth, reach, website traffic, lead generation, and conversions — tying every post back to business outcomes." },
  { question: "Do you handle influencer partnerships?", answer: "Yes. We identify, vet, negotiate, and manage influencer collaborations — from micro-influencers to major brand ambassadors." },
  { question: "How often will you post?", answer: "Posting frequency is customized per platform and goals. Typically 3–5 posts/week per platform, plus Stories, Reels, and community engagement." },
];

const services = [
  { icon: Calendar, title: "Content Strategy & Planning", desc: "Data-driven content calendars aligned with your brand voice, audience behavior, and business goals." },
  { icon: Camera, title: "Content Creation", desc: "Scroll-stopping graphics, Reels, TikToks, carousels, and Stories, designed to engage and convert." },
  { icon: MessageCircle, title: "Community Management", desc: "Active engagement, response management, and community building to foster brand loyalty." },
  { icon: Users, title: "Influencer Marketing", desc: "Strategic influencer partnerships, from discovery and vetting to campaign execution and reporting." },
  { icon: Megaphone, title: "Paid Social Campaigns", desc: "Targeted social advertising across Meta, LinkedIn, and TikTok with advanced audience segmentation." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Monthly performance reports with actionable insights, competitor benchmarking, and growth recommendations." },
];

const metrics = [
  { value: "3.2x", label: "Avg. Engagement Lift" },
  { value: "500K+", label: "Content Pieces Created" },
  { value: "85%", label: "Client Retention Rate" },
  { value: "150+", label: "Brands Managed" },
];

const SocialMediaMarketing = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(280,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(280,60%,40%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white mb-6">
              <Heart className="w-3.5 h-3.5 text-primary" /> Social Media Agency
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Build Brands<br />People <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Love to Follow.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl mb-8" data-speakable>
              We create, manage, and grow social media presences that build communities, drive engagement, and convert followers into customers.
            </motion.p>
            <motion.div variants={fadeUp}>
              <InlineLeadForm id="hero-social" variant="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-10">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-primary">{m.value}</p>
                  <p className="text-xs text-white/50">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Social Media Services</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">End-to-end social media management — from strategy to content creation to community growth.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all group">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Platforms We Master</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "X (Twitter)", "Pinterest", "Snapchat"].map((p) => (
              <motion.div key={p} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                <p className="font-semibold text-foreground">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">How We Work</motion.h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Brand Audit", desc: "Analyze your current presence, audience, competitors, and opportunities." },
              { step: "02", title: "Strategy & Calendar", desc: "Build a content strategy and monthly calendar aligned with business goals." },
              { step: "03", title: "Create & Publish", desc: "Produce platform-native content, graphics, videos, Stories, Reels, and publish on schedule." },
              { step: "04", title: "Engage & Grow", desc: "Active community management, performance analysis, and strategy iteration." },
            ].map((p) => (
              <motion.div key={p.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(280,40%,12%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Own Your Social Presence?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Book a free strategy call and discover how we can grow your brand on social media.</p>
          <div className="flex justify-center">
            <InlineLeadForm id="cta-social" variant="dark" />
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="social-media-marketing" links={["digital-marketing", "seo", "paid-ads", "ecommerce", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default SocialMediaMarketing;
