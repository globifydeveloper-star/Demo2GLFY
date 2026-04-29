"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Product Strategy", desc: "We analyze your market, users, competitors, and business model to define the product vision, feature roadmap, and technical architecture." },
  { icon: Palette, step: "02", title: "UX Design & Prototyping", desc: "Interactive wireframes, user flows, and high-fidelity prototypes tested with real users before a single line of code is written." },
  { icon: Code2, step: "03", title: "Agile Development", desc: "Two-week sprints with daily standups, code reviews, CI/CD, and deployable increments, full transparency at every step." },
  { icon: TestTube, step: "04", title: "Testing & Quality Assurance", desc: "Automated unit tests, integration tests, performance benchmarks, security audits, and cross-device compatibility verification." },
  { icon: Rocket, step: "05", title: "Launch & Go-to-Market", desc: "App store optimization, production deployment, monitoring setup, and launch-day support to ensure a flawless rollout." },
  { icon: RefreshCw, step: "06", title: "Growth & Continuous Improvement", desc: "Post-launch analytics, A/B testing, feature iteration, scaling optimization, and long-term product evolution." },
];

const AppDevProcess = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            A Battle-Tested Process for<br />Predictable Outcomes
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            Six proven phases that take your product from idea to scale, with full transparency, quality gates, and measurable milestones.
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
              className="group"
            >
              <div className="p-7 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{item.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-hero-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-hero-foreground/35 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevProcess;
