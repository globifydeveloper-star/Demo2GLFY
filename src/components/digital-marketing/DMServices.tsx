"use client";

import { motion } from "framer-motion";
import { Target, Search, Share2, Megaphone, MousePointer, BarChart3, FileText, ArrowRight } from "lucide-react";

const services = [
  { icon: Target, title: "AI-Optimized Performance Marketing", desc: "AI-powered campaigns across Google, Meta, LinkedIn, and YouTube that use predictive bidding, audience intelligence, and automated optimization to generate qualified leads at 40% lower CAC.", tags: ["AI Bidding", "Meta Ads", "LinkedIn", "YouTube"] },
  { icon: Search, title: "SEO & Content Intelligence", desc: "AI-driven technical SEO, content strategy, and programmatic link building that drives sustainable organic growth and reduces dependency on paid acquisition.", tags: ["AI Content", "Technical SEO", "Link Intelligence", "AEO"] },
  { icon: Share2, title: "AI-Powered Social & Brand Strategy", desc: "Strategic brand building with AI content generation, predictive engagement analytics, and automated social commerce across all major platforms.", tags: ["AI Content", "Social Commerce", "Predictive Analytics"] },
  { icon: Megaphone, title: "Programmatic & Paid Media", desc: "AI-optimized multi-channel ad campaigns with dynamic creative optimization, automated budget allocation, and real-time ROAS maximization.", tags: ["Programmatic", "DCO", "AI Budget Optimization"] },
  { icon: MousePointer, title: "CRO & Revenue Engineering", desc: "AI-powered A/B testing, personalized landing pages, predictive funnel optimization, and customer journey engineering that turns more visitors into revenue.", tags: ["AI A/B Testing", "Personalization", "Revenue Funnels"] },
  { icon: BarChart3, title: "Attribution & Data Intelligence", desc: "AI-powered multi-touch attribution, predictive customer analytics, and automated reporting that reveals exactly what's driving revenue and what to scale.", tags: ["AI Attribution", "Predictive CLV", "Revenue Intelligence"] },
  { icon: FileText, title: "Demand Generation & Marketing Automation", desc: "AI-orchestrated content marketing, lead nurturing sequences, and demand generation strategies that build authority and automate your entire marketing funnel.", tags: ["AI Nurturing", "Marketing Automation", "Demand Gen"] },
];

const DMServices = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">AI-Powered Growth Marketing</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Full-Funnel Revenue<br />Engineering Services</h2>
          </div>
          <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">
            AI-integrated marketing services designed to work together, amplifying results across every channel, automating optimization, and engineering predictable revenue growth.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group grid md:grid-cols-[1fr_2fr_1fr] gap-6 items-center p-6 md:p-8 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-hero-foreground">{service.title}</h3>
              </div>
              <p className="text-sm text-hero-foreground/40 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((t) => (
                  <span key={t} className="text-sm px-2.5 py-1 rounded-full bg-hero-foreground/[0.05] text-hero-foreground/40 border border-hero-foreground/[0.06]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Get a Custom Growth Plan <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DMServices;
