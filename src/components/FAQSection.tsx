"use client";

import { motion } from "framer-motion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contactSupportImg from "@/assets/contact-support.png";

const faqs = [
  {
    q: "What services does Globify offer?",
    a: "Globify specializes in web development, app development, software solutions, digital marketing, branding, and AI-driven automation, helping businesses scale and grow digitally.",
  },
  {
    q: "Can you build both websites and mobile apps?",
    a: "Yes! We develop custom websites, eCommerce platforms, and mobile applications (iOS & Android) using native and cross-platform technologies like Flutter, React Native, and more.",
  },
  {
    q: "How does Globify ensure high-quality development?",
    a: "Our team follows industry best practices, agile methodologies, and rigorous testing to deliver high-performance solutions.",
  },
  {
    q: "How can digital marketing from Globify help my business?",
    a: "We offer SEO, social media marketing, performance advertising, and branding strategies to boost online visibility, attract the right audience, and increase conversions.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary by scope, a standard website takes 4-6 weeks, a mobile app 8-12 weeks, and enterprise solutions 3-6 months. We always provide a clear timeline during discovery.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. We provide ongoing maintenance, performance monitoring, feature updates, and dedicated support to ensure your product continues to grow.",
  },
];

const FAQSection = () => {
  const { openContactDialog } = useContactDialog();
  return (
    <section className="py-12 sm:py-16 bg-white overflow-visible">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=""
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] text-foreground">
              Got questions?
              <br />
              <span className="text-muted-foreground">We've got answers.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Everything you need to know about working with Globify. Can't find what you're looking for?
            </p>
            <button
              onClick={openContactDialog}
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
            >
              Contact our team →
            </button>
            <img src={contactSupportImg.src} alt="Contact support" className="mt-3 w-[280px] md:w-[320px] object-contain" />
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.02] transition-all"
                >
                  <AccordionTrigger className="font-semibold text-left hover:no-underline py-5 text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
