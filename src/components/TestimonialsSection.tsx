"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Globify transformed our digital presence completely. The team delivered an e-commerce platform that increased our conversion rate by 340% within the first quarter.",
    name: "Rajesh Mehta",
    role: "CEO, InstaRunway",
    rating: 5,
  },
  {
    quote: "Their AI-powered automation solutions saved us over 200 hours per month in manual processes. The ROI was visible from day one.",
    name: "Sarah Chen",
    role: "CTO, American Koil",
    rating: 5,
  },
  {
    quote: "Working with Globify felt like having an in-house tech team. They understood our vision and delivered beyond expectations, on time and on budget.",
    name: "Vikram Singh",
    role: "Founder, Moher Fashion",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-16 gap-6"
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1]">
              What our clients
              <br />
              <span className="text-muted-foreground">have to say.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 avg. rating</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border bg-card hover:border-primary/30 transition-all group"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
              <p className="text-foreground/80 leading-relaxed mb-8 text-[15px]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
