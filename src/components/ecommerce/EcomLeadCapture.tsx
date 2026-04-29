"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const EcomLeadCapture = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to submit");
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Audit Requested!", {
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-capture" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">
              Let's Scale Your Commerce
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">
              Ready to Grow Your
              <br />
              E-Commerce Revenue?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Tell us about your business and we'll respond within 24 hours with
              a commerce growth strategy, platform recommendation, and
              transparent pricing.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Free store audit & opportunity analysis",
                "Platform recommendation & roadmap",
                "Marketplace expansion strategy",
                "Transparent pricing, no hidden fees",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-2">
                Multiple ways to start
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  "Free Audit",
                  "Growth Consultation",
                  "Store Optimization",
                  "Marketplace Expansion",
                ].map((cta) => (
                  <a
                    key={cta}
                    href="#lead-capture"
                    className="text-sm px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {cta}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    maxLength={100}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    maxLength={100}
                    placeholder="Your Brand"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    maxLength={255}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    maxLength={20}
                    placeholder="+971 50 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                  Business Type *
                </label>
                <select
                  required
                  name="businessType"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select type</option>
                  <option>D2C / B2C Brand</option>
                  <option>B2B Commerce</option>
                  <option>Marketplace Seller</option>
                  <option>Omnichannel Retailer</option>
                  <option>Startup / New Brand</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                    Current Platform *
                  </label>
                  <select
                    required
                    name="platform"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select platform</option>
                    <option>Shopify</option>
                    <option>WooCommerce</option>
                    <option>Magento</option>
                    <option>Custom Built</option>
                    <option>No Store Yet</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                    Monthly Revenue *
                  </label>
                  <select
                    required
                    name="revenue"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select range</option>
                    <option>Pre-Revenue</option>
                    <option>$0 – $50K/mo</option>
                    <option>$50K – $250K/mo</option>
                    <option>$250K – $1M/mo</option>
                    <option>$1M+/mo</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                  Growth Goals *
                </label>
                <textarea
                  required
                  rows={3}
                  name="message"
                  maxLength={1000}
                  placeholder="What are your main commerce goals? (e.g., scale revenue, expand to marketplaces, reduce CAC...)"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Get Your Free Commerce Audit
                  </>
                )}
              </button>
              <p className="text-sm text-muted-foreground/50 text-center mt-3">
                By submitting, you agree to our Privacy Policy. We'll respond
                within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcomLeadCapture;
