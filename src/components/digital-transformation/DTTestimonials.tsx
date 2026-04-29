"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Globify transformed our entire operations in 6 months. We went from manual chaos to automated efficiency, the ROI was visible within weeks.",
    name: "Rajesh Kumar",
    role: "CEO, TechScale India",
    rating: 5,
  },
  {
    quote: "Their strategic approach to digital transformation helped us reduce costs by 40% while improving customer satisfaction scores dramatically.",
    name: "Sarah Al-Maktoum",
    role: "CTO, Gulf Innovations",
    rating: 5,
  },
  {
    quote: "The team at Globify doesn't just deliver technology, they deliver business outcomes. Our ERP integration was seamless and ahead of schedule.",
    name: "Michael Chen",
    role: "IT Director, Pacific Retail Group",
    rating: 5,
  },
];

const DTTestimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Client Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">
            What Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Say About Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTTestimonials;
