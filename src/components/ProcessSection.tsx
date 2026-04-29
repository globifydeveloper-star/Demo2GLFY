"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList, Lightbulb, Code2, Rocket, HeadphonesIcon,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList, step: "01", title: "Discovery", subtitle: "Understanding Your Vision",
    desc: "We dive deep into your business goals, target audience, and competitive landscape to create a comprehensive project roadmap.",
    deliverables: ["Requirement Document", "Competitor Analysis", "Project Roadmap", "Timeline & Budget"],
    duration: "1–2 Weeks", color: "from-[#FF8C42] to-[#FF6B1A]", ring: "ring-[#FF8C42]/20", bg: "bg-[#FF8C42]", text: "text-[#FF8C42]",
  },
  {
    icon: Lightbulb, step: "02", title: "Strategy", subtitle: "Crafting the Blueprint",
    desc: "Our designers create wireframes, interactive prototypes, and pixel-perfect UI designs, validated with your team at every stage.",
    deliverables: ["Wireframes", "UI/UX Mockups", "Interactive Prototype", "Design System"],
    duration: "2–3 Weeks", color: "from-[#E8701A] to-[#D45E0A]", ring: "ring-[#E8701A]/20", bg: "bg-[#E8701A]", text: "text-[#E8701A]",
  },
  {
    icon: Code2, step: "03", title: "Development", subtitle: "Building with Precision",
    desc: "Agile development sprints with weekly demos, code reviews, and continuous integration to ensure quality at every step.",
    deliverables: ["Sprint Demos", "Code Repository", "API Documentation", "Testing Reports"],
    duration: "4–12 Weeks", color: "from-[#D45A00] to-[#BF4E00]", ring: "ring-[#D45A00]/20", bg: "bg-[#D45A00]", text: "text-[#D45A00]",
  },
  {
    icon: Rocket, step: "04", title: "Launch & QA", subtitle: "Going Live Confidently",
    desc: "Rigorous cross-browser testing, performance optimization, security audits, and a smooth zero-downtime deployment.",
    deliverables: ["QA Test Suite", "Performance Audit", "Security Review", "Deployment"],
    duration: "1–2 Weeks", color: "from-[#C04000] to-[#A63700]", ring: "ring-[#C04000]/20", bg: "bg-[#C04000]", text: "text-[#C04000]",
  },
  {
    icon: HeadphonesIcon, step: "05", title: "Growth", subtitle: "Scaling Your Success",
    desc: "Post-launch monitoring, regular updates, feature enhancements, and dedicated support to keep your product growing.",
    deliverables: ["Monitoring Setup", "Monthly Reports", "Feature Updates", "Priority Support"],
    duration: "Ongoing", color: "from-[#A63200] to-[#8B2900]", ring: "ring-[#A63200]/20", bg: "bg-[#A63200]", text: "text-[#A63200]",
  },
];

const ProcessSection = ({ showDetail = true }: { showDetail?: boolean }) => {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="py-12 sm:py-16 bg-[#f5f5f5] relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-5 font-display">Our Process</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] leading-[1.08] mb-5">From Idea to Launch in 5 Steps</h2>
          <p className="text-[#0f172a]/40 max-w-lg mx-auto text-base leading-relaxed">A proven, transparent process that eliminates guesswork and delivers results on time.</p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mb-10 px-0 sm:px-4 md:px-6">
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#FF8C42] via-[#D45A00] to-[#A63200] rounded-full opacity-30" />
          <div className="flex flex-row items-start md:items-center justify-between gap-1 sm:gap-4 md:gap-0 relative pt-4 pb-2 md:pb-0">
            {steps.map((s, i) => {
              const isActive = activeStep === i;
              return (
                <motion.button
                  key={s.step}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-1 sm:gap-3 group relative z-10 cursor-pointer flex-1 min-w-0"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive ? `bg-white shadow-xl shadow-black/[0.08] ring-4 ${s.ring} scale-110` : "bg-white shadow-md shadow-black/[0.04] group-hover:shadow-lg group-hover:scale-105"
                  }`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center transition-all duration-300 ${
                      isActive ? "scale-100" : "scale-90 group-hover:scale-95"
                    }`}>
                      <s.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-center mt-1">
                    <p className={`text-[10px] font-bold tracking-[0.2em] font-display mb-0.5 transition-colors ${isActive ? s.text : "text-[#0f172a]/25"}`}>STEP {s.step}</p>
                    <p className={`text-[8px] sm:text-sm font-semibold font-display transition-colors ${isActive ? "text-[#0f172a]" : "text-[#0f172a]/45"}`}>{s.title}</p>
                  </div>
                  {isActive && (
                    <motion.div layoutId="activeDot" className={`w-1.5 h-1.5 rounded-full ${s.bg}`} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Detail Panel - conditionally rendered */}
        {showDetail && (
          <AnimatePresence mode="wait">
            <motion.div key={activeStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-white shadow-xl shadow-black/[0.04] border border-black/[0.04] p-6 sm:p-8 md:p-12">
                <div className="flex items-start gap-5 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center flex-shrink-0`}>
                    <current.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className={`text-[11px] font-bold tracking-[0.2em] font-display ${current.text}`}>STEP {current.step}</span>
                      <span className={`text-[10px] font-bold ${current.text} bg-current/10 px-2.5 py-0.5 rounded-md font-display`} style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>{current.duration}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-[28px] font-bold text-[#0f172a] leading-tight">{current.title}</h3>
                    <p className="text-sm text-[#0f172a]/35 font-display font-medium mt-0.5">{current.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#0f172a]/50 leading-[1.8] text-[15px] mb-10">{current.desc}</p>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#0f172a]/20 mb-4 font-display">Key Deliverables</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.deliverables.map((d, i) => (
                      <motion.div key={d} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#F0F4F8]/70 border border-black/[0.03] hover:border-primary/15 transition-all group/item">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${current.text} opacity-60 group-hover/item:opacity-100 transition-opacity`} />
                        <span className="text-sm text-[#0f172a]/60 group-hover/item:text-[#0f172a]/80 font-medium transition-colors">{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Trust bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-10 sm:mt-16 rounded-2xl bg-[#0f172a] px-5 sm:px-10 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-5 sm:gap-6 md:gap-16">
          {["Transparent pricing", "Weekly progress updates", "On-time delivery guarantee", "100% code ownership"].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-white/90 font-display">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
