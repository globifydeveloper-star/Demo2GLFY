"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DTFinalCTA = () => {
  return (
     <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-[2px] bg-primary mx-auto mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            Ready to Transform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Your Business?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join 300+ businesses that have partnered with Globify to modernize operations, automate workflows, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
              Request Digital Audit
            </a>
          </div>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default DTFinalCTA;
