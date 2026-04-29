"use client";

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

import { useContactDialog } from "@/contexts/ContactDialogContext";
import { getTechnology, getRelatedTechnologies } from "@/data/technologyData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TechnologyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openContactDialog } = useContactDialog();
  const tech = getTechnology(slug || "");

  if (!tech) return notFound();

  const related = getRelatedTechnologies(tech.relatedTechs);

  const faqSchema = tech.faq.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-[#0a0a1a] overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px]" />
        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Technology</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">{tech.name}</span>
            </div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">{tech.category}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
              {tech.tagline}
            </h1>
            <p className="text-base sm:text-lg text-white/50 max-w-2xl leading-relaxed mb-8">
              {tech.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={openContactDialog} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all">
                Get a Free Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:border-white/50 transition-colors">
                Explore All Services <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Overview</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-[1.1]">
              What is {tech.name}?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{tech.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Benefits</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.1]">
              Why Choose {tech.name}?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {tech.benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Applications</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.1] mb-4">
                Real-World Applications of {tech.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Discover how businesses across industries leverage {tech.name} to build competitive digital solutions.
              </p>
            </motion.div>
            <div className="space-y-4">
              {tech.applications.map((app, i) => (
                <motion.div key={app.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all">
                  <h3 className="font-semibold mb-1.5">{app.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-12 sm:py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Business Impact</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-[1.1]">
              How {tech.name} Drives Business Growth
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {tech.businessValue.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">{val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Globify */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Why Globify</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.1]">
                Why Choose Globify for {tech.name}?
              </h2>
            </motion.div>
            <div className="space-y-3">
              {tech.whyGlobify.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/[0.03] border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">FAQ</p>
              <h2 className="text-2xl sm:text-3xl font-semibold leading-[1.1] mb-4">
                Frequently Asked Questions About {tech.name}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Common questions about {tech.name} development and how we can help your business.
              </p>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-3">
              {tech.faq.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <AccordionItem value={`faq-${i}`} className="border border-border rounded-2xl px-5 data-[state=open]:border-primary/30 transition-all">
                    <AccordionTrigger className="font-semibold text-left hover:no-underline py-4 text-sm">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">{f.a}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Technologies */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Related Technologies</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Explore More Technologies</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {related.map((r) => (
                <Link key={r.slug} href={`/technology/${r.slug}`}
                  className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all text-center">
                  <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">{r.name}</h3>
                  <p className="text-xs text-muted-foreground">{r.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-5 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 leading-[1.1]">
              Ready to Build with {tech.name}?
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">
              Let's discuss your project and explore how {tech.name} can drive your business forward.
            </p>
            <button onClick={openContactDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default TechnologyPage;
