"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Loader2 } from "lucide-react";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import contactSupportImg from "@/assets/contact-support.png";
import { toast } from "sonner";

const WebDevLeadCapture = () => {
  const { openContactDialog } = useContactDialog();
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
      toast.success("Consultation Requested!", {
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
              Let's Talk
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">
              Ready to Build a Website
              <br />
              That Actually Converts?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Tell us about your project and we'll get back to you within 24
              hours with a tailored strategy, timeline, and transparent pricing,
              no obligations.
            </p>
            <div className="space-y-4">
              {[
                "Free 30-minute strategy consultation",
                "Custom website audit & CRO report",
                "Transparent pricing, no hidden fees",
                "Dedicated project manager assigned",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 rounded-2xl border border-border bg-card">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-2">
                Prefer a quick chat?
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Schedule a call directly with our solutions team.
              </p>
              <button
                onClick={openContactDialog}
                className="inline-flex items-center gap-3 text-sm font-semibold text-primary hover:gap-4 transition-all group"
              >
                <img
                  src={contactSupportImg.src}
                  alt="Contact support"
                  className="w-8 h-8 rounded-full object-cover"
                />
                Book a Call <ArrowRight className="w-4 h-4" />
              </button>
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
                    placeholder="Your Company"
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
                    placeholder="+971 50 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                  Project Type *
                </label>
                <select
                  required
                  name="projectType"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select project type</option>
                  <option>Corporate Website</option>
                  <option>E-Commerce Store</option>
                  <option>Custom Web Application</option>
                  <option>Website Redesign</option>
                  <option>Performance & CRO Optimization</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                  Estimated Budget *
                </label>
                <select
                  required
                  name="budget"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>$100,000+</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/70 mb-1.5 block">
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  maxLength={1000}
                  placeholder="Brief description of your goals, timeline, and requirements..."
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
                    <Send className="w-4 h-4" /> Get Your Free Consultation
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

export default WebDevLeadCapture;
