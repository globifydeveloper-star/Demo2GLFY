"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "500+", label: "Workflows Automated" },
  { value: "12+", label: "Industries Transformed" },
  { value: "60%", label: "Avg Cost Reduction" },
  { value: "$50M+", label: "Client Savings Delivered" },
];

const AIAutoHero = () => {
  return (
    <>
       <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-5">
                Enterprise AI &amp; Intelligent Automation
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Deploy AI That Delivers{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  Measurable ROI
                </span>{" "}
                 — Not Just Promises
              </h1>
              <p className="text-hero-foreground/50 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                From conversational AI and intelligent document processing to predictive analytics and Microsoft Power Platform, we implement enterprise-grade automation that cuts operational costs by 60%, accelerates decisions, and scales without limits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="#lead-capture"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
                >
                  Get Your AI Readiness Assessment <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#lead-capture"
                  className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all"
                >
                  Book an Automation Strategy Session
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                {["Enterprise-Grade AI Solutions", "Microsoft Power Platform Partner", "ROI Guaranteed in 90 Days"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-hero-foreground/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-6 sm:py-8">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-section-dark-foreground/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAutoHero;
