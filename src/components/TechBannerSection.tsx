"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';


const technologies = [
  {
    title: "Custom Shopify Themes",
    desc: "Bespoke Shopify storefronts designed to captivate your audience, boost conversions, and deliver a seamless brand experience across all devices.",
    link: "/shopify-themes",
  },
  {
    title: "Shopify App Development",
    desc: "Custom apps and integrations that extend your store's functionality, from inventory management to loyalty programs and advanced analytics.",
    link: "/shopify-app-development",
  },
  {
    title: "Shopify Plus & Headless Commerce",
    desc: "Enterprise-grade solutions with Shopify Plus and headless architecture for brands that demand ultimate performance, flexibility, and scalability.",
    link: "/shopify-plus",
  },
];

const TechBannerSection = () => {
  return (
    <section className="py-8 sm:py-14 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden min-h-0 sm:min-h-[600px] bg-[#0a0a1a]"
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.15, 1], y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

          {/* Shimmer line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, hsl(20 90% 48% / 0.5), transparent)" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 sm:min-h-[600px]">
            {/* Left side */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-6">
                Elevate Your
                <br />
                E-Commerce with
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Shopify</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8 font-light">
                Building high-converting Shopify stores with custom themes, powerful integrations,
                and scalable solutions that drive revenue and growth.
              </p>
              <div>
                <Link href="/ecommerce">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all hover:gap-3"
                  >
                    Launch your store
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* Right side - tech cards */}
            <div className="flex-1 flex flex-col justify-center gap-0">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link href={tech.link} className="group border-t border-white/20 py-6 block cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{tech.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{tech.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechBannerSection;
