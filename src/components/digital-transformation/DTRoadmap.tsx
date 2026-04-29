"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your business, goals, pain points, and current technology landscape." },
  { num: "02", title: "Assess", desc: "Evaluate digital maturity, identify gaps, and benchmark against industry leaders." },
  { num: "03", title: "Design", desc: "Architect the ideal solution with clear milestones, KPIs, and a phased roadmap." },
  { num: "04", title: "Build", desc: "Agile development sprints with regular demos, feedback loops, and quality gates." },
  { num: "05", title: "Integrate", desc: "Connect systems, migrate data, and ensure seamless interoperability across platforms." },
  { num: "06", title: "Optimize", desc: "Performance tuning, user training, and iterative improvements based on real data." },
  { num: "07", title: "Scale", desc: "Expand capabilities, enter new markets, and continuously evolve with your business." },
];

const DTRoadmap = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
            Your Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Roadmap</span>
          </h2>
          <p className="text-hero-foreground/40 text-sm mt-4 max-w-xl mx-auto">Transparent, milestone-driven process with continuous improvement at every stage.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex gap-6 mb-8 last:mb-0 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {step.num}
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-hero-foreground/[0.08] mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-semibold text-hero-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTRoadmap;
