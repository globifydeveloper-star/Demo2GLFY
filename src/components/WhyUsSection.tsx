"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Eye, Settings, Clock, Users } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: Zap, title: "AI-First Digital Transformation", desc: "We don't just build technology, we engineer AI-powered ecosystems that automate operations and accelerate revenue growth." },
  { icon: Shield, title: "Enterprise Security & ISO Certified", desc: "ISO 27001 certified with enterprise-grade security, GDPR compliance, and SOC 2 readiness across every solution." },
  { icon: Clock, title: "Measurable ROI in 90 Days", desc: "Every engagement is built around measurable business outcomes: cost reduction, revenue growth, and operational efficiency." },
  { icon: Settings, title: "Agile or Waterfall, Your Choice", desc: "We adapt methodology to your project needs, agile sprints for innovation, waterfall for compliance-heavy enterprise deployments." },
  { icon: Eye, title: "Radical Transparency & Partnership", desc: "Real-time dashboards, weekly business reviews, and live KPI tracking, you always see exactly what's driving results." },
  { icon: Users, title: "Strategic Technology Partnership", desc: "Google, Microsoft, Shopify, and AWS partners, we bring enterprise relationships and expertise, not just code." },
];

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const gridRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 section-dark relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-5 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Why Enterprises Choose Globify</p>
          <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl leading-[1.1]">
            <span className="text-section-dark-foreground">Not an Agency. </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">A Transformation</span>
            <br />
            <span className="text-section-dark-foreground/40">Partner.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-section-dark-foreground/10 rounded-2xl sm:rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 sm:p-10 bg-section-dark group hover:bg-section-dark-foreground/[0.04] transition-all relative overflow-hidden"
            >
              {/* Hover shimmer */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(135deg, transparent 30%, hsl(20 90% 48% / 0.04) 50%, transparent 70%)",
                }}
              />
              <motion.div
                className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <f.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-bold text-lg text-section-dark-foreground mb-3 relative">{f.title}</h3>
              <p className="text-sm text-section-dark-foreground/50 leading-relaxed relative">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
