"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSearch, Target, CalendarCheck, BarChart3, Link2, Zap } from "lucide-react";

const features = [
  { icon: FileSearch, title: "AI Resume Parsing", desc: "Extract skills, experience, education, and certifications from any resume format — PDF, Word, or image." },
  { icon: Target, title: "Skill & Experience Matching", desc: "Automatically score and rank candidates against job requirements using intelligent matching algorithms." },
  { icon: Zap, title: "Automated Shortlisting", desc: "Eliminate manual screening — let AI create shortlists based on weighted criteria you define." },
  { icon: CalendarCheck, title: "Interview Scheduling", desc: "Automate interview coordination with calendar sync, reminders, and candidate communication." },
  { icon: BarChart3, title: "Talent Analytics", desc: "Track hiring funnel metrics, time-to-hire, source effectiveness, and diversity benchmarks." },
  { icon: Link2, title: "ATS & HR Integration", desc: "Seamlessly connect with BambooHR, Workday, SAP SuccessFactors, and popular ATS platforms." },
];

const AIAutoCVScanning = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Talent Automation</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-5">
              CV Scanning & Talent Automation
            </h2>
            <p className="text-hero-foreground/50 leading-relaxed mb-6">
              Reduce hiring time by 50% and improve candidate quality with AI-powered resume screening and talent management automation.
            </p>

            <div className="bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="text-sm text-hero-foreground/40 mt-1">Faster Hiring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">80%</div>
                  <div className="text-sm text-hero-foreground/40 mt-1">Less Manual Screening</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3x</div>
                  <div className="text-sm text-hero-foreground/40 mt-1">Better Candidate Match</div>
                </div>
              </div>
            </div>

            <a
              href="#lead-capture"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
            >
              Automate Your Hiring <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl border border-hero-foreground/[0.06] hover:border-primary/20 transition-all"
              >
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-hero-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutoCVScanning;
