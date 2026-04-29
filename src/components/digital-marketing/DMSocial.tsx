"use client";

import { motion } from "framer-motion";
import { PenTool, MessageCircle, Users, Megaphone, Star, Smartphone } from "lucide-react";

const capabilities = [
  { icon: PenTool, title: "Content Strategy & Creation", desc: "Scroll-stopping content calendars, visual design, copywriting, and video production tailored to each platform's algorithm." },
  { icon: MessageCircle, title: "Brand Storytelling", desc: "Authentic brand narratives that build emotional connections, trust, and top-of-mind awareness with your target audience." },
  { icon: Users, title: "Community Engagement", desc: "Active community management, real-time engagement, and customer interaction that turns followers into brand advocates." },
  { icon: Megaphone, title: "Paid & Organic Integration", desc: "Seamless integration of organic content with paid amplification — maximizing reach while maintaining authentic brand voice." },
  { icon: Star, title: "Influencer Collaboration", desc: "Strategic influencer partnerships, micro-influencer campaigns, and creator collaborations that drive authentic demand." },
  { icon: Smartphone, title: "Platform Expertise", desc: "Deep expertise across LinkedIn, Instagram, Facebook, TikTok, X, and YouTube — tailored strategies for each platform." },
];

const DMSocial = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Social Media Management</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Build Brand Trust,<br />Drive Demand</h2>
          </div>
          <p className="text-hero-foreground/40 max-w-md text-sm leading-relaxed">
            Social media isn't just posting — it's strategic brand building, demand generation, and community growth that feeds your entire funnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hero-foreground/[0.06] rounded-2xl overflow-hidden">
          {capabilities.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group bg-hero p-8 hover:bg-hero-foreground/[0.02] transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-hero-foreground/35 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DMSocial;
