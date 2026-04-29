"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";

const DTLeadCapture = () => {
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
    <section id="lead-capture" className="py-16 sm:py-24 bg-hero">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">
              Free Digital Audit
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
              Get Your Free Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                Transformation Audit
              </span>
            </h2>
            <p className="text-hero-foreground/40 text-sm leading-relaxed mb-8">
              Receive a comprehensive technology gap analysis, ROI forecast, and
              a personalized transformation strategy, completely free.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free consultation with a transformation specialist",
                "Technology gap analysis & ROI forecast",
                "Personalized strategy session",
                "No obligation, 100% free",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-hero-foreground/60"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-primary">
              <Clock className="w-4 h-4" />
              <span className="font-medium">
                Limited slots available, book your session today
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-6 sm:p-8 rounded-2xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  id="fullName"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/40"
                />
                <input
                  id="company"
                  name="company"
                  maxLength={100}
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/40"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  maxLength={255}
                  placeholder="Work Email *"
                  className="w-full px-4 py-3 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/40"
                />
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  maxLength={20}
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/40"
                />
              </div>
              <div className="relative">
                <select
                  required
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm focus:outline-none focus:border-primary/40 appearance-none pr-10"
                >
                  <option value="">Select Your Role *</option>
                  <option>CEO / Founder</option>
                  <option>CTO / Tech Lead</option>
                  <option>IT Manager</option>
                  <option>Operations Manager</option>
                  <option>Other</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hero-foreground/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <textarea
                id="challenges"
                name="message"
                required
                rows={3}
                maxLength={2000}
                placeholder="Current challenges or goals... *"
                className="w-full px-4 py-3 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10 text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/40 resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Get My Free Audit <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DTLeadCapture;
