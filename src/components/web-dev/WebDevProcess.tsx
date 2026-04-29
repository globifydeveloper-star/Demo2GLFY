"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Strategy", desc: "Deep-dive into your business goals, audience, competitors, and KPIs. We define the roadmap, tech stack, and conversion strategy before writing a single line of code." },
  { icon: Palette, step: "02", title: "UX & Conversion Design", desc: "Wireframes, prototypes, and high-fidelity designs optimized for user journeys and conversions — validated with stakeholder feedback at every stage." },
  { icon: Code2, step: "03", title: "Agile Development", desc: "Iterative sprints with clean, modular code. Weekly demos, CI/CD pipelines, code reviews, and real-time progress dashboards keep you in control." },
  { icon: TestTube, step: "04", title: "Testing & QA", desc: "Automated testing, cross-browser compatibility, performance benchmarking, accessibility audits, and security penetration testing before launch." },
  { icon: Rocket, step: "05", title: "Launch & Optimization", desc: "Zero-downtime deployment with performance monitoring, analytics setup, SEO verification, and post-launch optimization for immediate results." },
  { icon: RefreshCw, step: "06", title: "Continuous Improvement", desc: "Ongoing A/B testing, CRO iterations, feature enhancements, security patches, and performance tuning to keep you ahead of the competition." },
];

const WebDevProcess = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
            A Proven Methodology for<br />Predictable Results
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Our six-phase development process ensures transparency, quality, and on-time delivery, every single time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group"
            >
              <div className="p-7 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{item.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProcess;
