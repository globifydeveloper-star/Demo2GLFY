"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does digital transformation cost?", a: "Investment varies based on scope, complexity, and industry. We offer flexible engagement models, from focused pilot projects starting at $15K to enterprise-wide transformations. Every project begins with a free assessment to define the optimal budget and expected ROI." },
  { q: "How long does a typical transformation project take?", a: "Timelines range from 3 months for focused automation projects to 12-18 months for enterprise-wide transformations. We use phased delivery so you see value at every milestone, not just at the end." },
  { q: "What ROI can we expect?", a: "Our clients typically see 30-60% efficiency gains, 20-40% cost reductions, and significant revenue growth within the first year. We define measurable KPIs upfront so ROI is tracked and reported throughout." },
  { q: "What technology stack do you use?", a: "We're technology-agnostic and choose the best stack for your needs, including React, Node.js, Python, AWS, Azure, Shopify, custom ERP platforms (EKASYS, MEDOC), Power Platform, and more." },
  { q: "How do you handle data migration risk?", a: "We follow a structured migration methodology: data audit, mapping, validation, parallel running, cutover. Rollback plans are built into every migration to minimize risk." },
  { q: "Can you integrate with our existing systems?", a: "Absolutely. We specialize in integrating legacy and modern systems using APIs, middleware, and custom connectors, ensuring seamless data flow across your entire technology landscape." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. We offer managed support packages including monitoring, maintenance, updates, and continuous optimization to ensure your transformation delivers long-term value." },
];

const DTFAQ = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-hero-foreground/[0.06] rounded-xl px-6 data-[state=open]:border-primary/20">
                <AccordionTrigger className="text-sm font-semibold text-hero-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-hero-foreground/40 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DTFAQ;
