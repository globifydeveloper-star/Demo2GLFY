"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";

const challenges = [
  { pain: "Legacy systems slowing growth", emotion: "Competitors are outpacing you with modern tech" },
  { pain: "Lack of integration across business functions", emotion: "Siloed data means missed opportunities" },
  { pain: "Manual workflows and inefficiencies", emotion: "Your team spends hours on tasks that should take minutes" },
  { pain: "Poor visibility and reporting", emotion: "Decisions are made on gut feel, not data" },
  { pain: "High operational costs", emotion: "Margins shrink while overhead grows" },
  { pain: "Security and compliance concerns", emotion: "One breach could cost you everything" },
];

const DTChallenges = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">The Reality Check</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">
            Challenges Holding Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Business Back</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {challenges.map((c, i) => (
            <motion.div key={c.pain} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl border border-border hover:border-primary/30 bg-card transition-all group">
              <AlertTriangle className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{c.pain}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{c.emotion}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#lead-capture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Let's Solve These Together <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DTChallenges;
