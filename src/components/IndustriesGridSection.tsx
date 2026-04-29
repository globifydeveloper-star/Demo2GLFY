"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Heart, DollarSign, ShoppingCart, Settings, ArrowRight } from "lucide-react";

import healthcareImg from "@/assets/industry-healthcare.jpg";
import fintechImg from "@/assets/industry-fintech.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import supplychainImg from "@/assets/industry-supplychain.jpg";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    image: healthcareImg.src,
    description: "Empowering healthcare providers with HIPAA-compliant digital platforms, telemedicine solutions, and AI-driven diagnostics that improve patient outcomes.",
    services: [
      "Telemedicine & Remote Patient Monitoring",
      "AI-Powered Diagnostic Tools",
      "Electronic Health Records (EHR) Systems",
      "Medical Device Integration",
      "Patient Engagement Portals",
    ],
    stat: "40+",
    statLabel: "Healthcare projects delivered",
  },
  {
    icon: DollarSign,
    title: "Insurance & FinTech",
    image: fintechImg.src,
    description: "Modernizing financial services with secure, regulation-compliant platforms that automate underwriting, claims processing, and customer onboarding.",
    services: [
      "Automated Claims & Underwriting Platforms",
      "KYC & Compliance Automation",
      "Robo-Advisory & Wealth Management",
      "Blockchain-Based Transaction Systems",
    ],
    stat: "₹500Cr+",
    statLabel: "Transactions processed annually",
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    image: retailImg.src,
    description: "Building conversion-optimized storefronts and omnichannel retail experiences powered by real-time inventory, personalization engines, and smart search.",
    services: [
      "Headless Commerce Architecture",
      "AI-Driven Product Recommendations",
      "Omnichannel Order Management",
      "Loyalty & Rewards Platforms",
    ],
    stat: "3x",
    statLabel: "Average conversion uplift",
  },
  {
    icon: Settings,
    title: "Supply Chain & ERP",
    image: supplychainImg.src,
    description: "Digitizing complex supply chains with end-to-end visibility, predictive demand planning, and integrated ERP systems that reduce costs and accelerate delivery.",
    services: [
      "Real-Time Shipment Tracking & Visibility",
      "Demand Forecasting & Inventory Optimization",
      "Vendor & Procurement Management",
    ],
    stat: "60%",
    statLabel: "Reduction in manual processes",
  },
];

const IndustriesGridSection = () => {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-[#0a0a1a] relative overflow-hidden">
      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-20 right-10 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[120px]"
        style={{ y: bgY }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-[250px] h-[250px] bg-accent/6 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] max-w-2xl">
            <span className="text-white">Deep </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Expertise</span>
            <span className="text-white"> Across</span>
            <br />
            <span className="text-white/40">Key Verticals</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left - Industry Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 lg:w-64 flex-shrink-0 overflow-x-auto lg:overflow-visible no-scrollbar pb-1 lg:pb-0">
            {industries.map((ind, i) => (
              <button
                key={ind.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal ${
                  active === i
                    ? "bg-white text-[#0a0a1a]"
                    : "bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/80 border border-white/[0.06]"
                }`}
              >
                <ind.icon className={`w-5 h-5 flex-shrink-0 ${active === i ? "text-primary" : ""}`} />
                <span className="font-semibold text-sm">{ind.title}</span>
              </button>
            ))}
          </div>

          {/* Right - Content with inline image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
            >
              {/* Inline banner */}
              <div className="relative h-[160px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <current.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{current.title}</h3>
                </div>
              </div>

              {/* Content below banner */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {current.description}
                    </p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-primary">{current.stat}</span>
                      <span className="text-white/40 text-sm">{current.statLabel}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
                      What We Deliver
                    </p>
                    <ul className="space-y-0">
                      {current.services.map((service, i) => (
                        <motion.li
                          key={service}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="group flex items-center justify-between py-3 border-b border-white/[0.06] cursor-pointer"
                        >
                          <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                            {service}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-primary transition-colors" />
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGridSection;
