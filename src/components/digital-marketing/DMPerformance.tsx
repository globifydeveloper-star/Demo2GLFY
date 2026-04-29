"use client";

import { motion } from "framer-motion";
import { Target, Users, ShoppingCart, Video, RefreshCw, TrendingUp, ArrowRight } from "lucide-react";

const channels = [
  { icon: Target, title: "Google Ads & Search", desc: "High-intent search campaigns, shopping ads, and display networks that capture demand at the moment of purchase intent.", metric: "12x avg ROAS" },
  { icon: Users, title: "Meta Ads (Facebook & Instagram)", desc: "Audience-targeted campaigns with advanced lookalike modeling, dynamic creatives, and full-funnel retargeting.", metric: "45% lower CAC" },
  { icon: TrendingUp, title: "LinkedIn Advertising", desc: "B2B lead generation with account-based targeting, InMail campaigns, and thought leadership amplification.", metric: "3x qualified leads" },
  { icon: Video, title: "YouTube & Video Marketing", desc: "Video ad campaigns that build awareness and drive action, from pre-roll to discovery to connected TV.", metric: "78% view rate" },
  { icon: RefreshCw, title: "Retargeting & Funnel Optimization", desc: "Multi-touch retargeting across channels that brings back high-intent visitors and moves them through conversion.", metric: "60% re-engagement" },
  { icon: ShoppingCart, title: "E-Commerce & Lead Gen", desc: "DTC and B2B campaign strategies that scale customer acquisition while maintaining profitable unit economics.", metric: "Scalable acquisition" },
];

const DMPerformance = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Performance Marketing</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            Paid Campaigns That<br />Pay for Themselves
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We manage millions in ad spend across Google, Meta, LinkedIn, and YouTube, optimizing for revenue, not vanity metrics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border hover:border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary/70 tracking-wide">{item.metric}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
            Get a Free Campaign Audit <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DMPerformance;
