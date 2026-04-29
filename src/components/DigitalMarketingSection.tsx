"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';


const services = [
  {
    title: "SEO, AEO & Content Strategy",
    desc: "Dominate search rankings with data-driven SEO, answer engine optimization (AEO), compelling content marketing, and strategic keyword targeting that drives organic traffic.",
    link: "/seo-content-strategy",
  },
  {
    title: "Paid Advertising & PPC",
    desc: "High-ROI campaigns across Google Ads, Meta, and LinkedIn, with precise targeting, A/B testing, and conversion optimization.",
    link: "/paid-advertising",
  },
  {
    title: "Social Media & Brand Growth",
    desc: "Build a loyal audience with strategic social media management, influencer partnerships, and engaging brand storytelling.",
    link: "/social-media-brand",
  },
];

const DigitalMarketingSection = () => {
  return (
    <section className="py-8 sm:py-14 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden min-h-0 sm:min-h-[600px] bg-[#0a0a1a]"
        >
          {/* Subtle gradient orbs */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[150px]" />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 sm:min-h-[600px]">
            {/* Left side */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-6">
                Amplify Your
                <br />
                Reach with
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Digital</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Marketing</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8 font-light">
                Drive measurable growth with performance-driven digital marketing strategies 
                that increase visibility, engagement, and conversions.
              </p>
              <div>
                <Link href="/digital-marketing">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all hover:gap-3"
                  >
                    Grow your brand
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* Right side - service cards */}
            <div className="flex-1 flex flex-col justify-center gap-0">
              {services.map((service, i) => (
                <Link href={service.link} key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="group border-t border-white/20 py-6 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
