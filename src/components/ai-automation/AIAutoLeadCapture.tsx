"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const SelectWithChevron = ({
  id,
  required,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
}) => (
  <div className="relative">
    <select
      id={id}
      required={required}
      {...props}
      className="w-full bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-xl px-4 py-3 text-sm text-hero-foreground/60 focus:outline-none focus:border-primary/40 appearance-none pr-10"
    >
      {children}
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
);

const AIAutoLeadCapture = () => {
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
    <section id="lead-capture" className="py-16 sm:py-28 bg-hero">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-5">
                Ready to Automate & Scale?
              </h2>
              <p className="text-hero-foreground/50 leading-relaxed mb-8">
                Tell us about your automation goals and we'll create a tailored
                roadmap, including a free AI opportunity assessment and ROI
                estimate.
              </p>
              <div className="space-y-4">
                {[
                  "Free AI & Automation Audit",
                  "Custom Automation Roadmap",
                  "Proof of Concept Development",
                  "No-Obligation Consultation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-hero-foreground/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-hero-foreground/[0.03] border border-hero-foreground/[0.06] rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    id="fullName"
                    name="name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    maxLength={100}
                    className="col-span-1 bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-xl px-4 py-3 text-sm text-hero-foreground placeholder:text-hero-foreground/25 focus:outline-none focus:border-primary/40"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Work Email *"
                    required
                    maxLength={255}
                    className="col-span-1 bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-xl px-4 py-3 text-sm text-hero-foreground placeholder:text-hero-foreground/25 focus:outline-none focus:border-primary/40"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    maxLength={20}
                    className="col-span-1 bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-xl px-4 py-3 text-sm text-hero-foreground placeholder:text-hero-foreground/25 focus:outline-none focus:border-primary/40"
                  />
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    maxLength={100}
                    className="col-span-1 bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-xl px-4 py-3 text-sm text-hero-foreground placeholder:text-hero-foreground/25 focus:outline-none focus:border-primary/40"
                  />
                </div>
                <SelectWithChevron id="industry" name="industry" required>
                  <option value="">Industry *</option>
                  <option>E-Commerce & Retail</option>
                  <option>Healthcare</option>
                  <option>Manufacturing</option>
                  <option>IT & SaaS</option>
                  <option>Finance & Banking</option>
                  <option>Education</option>
                  <option>Real Estate</option>
                  <option>Other</option>
                </SelectWithChevron>
                <SelectWithChevron
                  id="automationGoal"
                  name="automationGoal"
                  required
                >
                  <option value="">Primary Automation Goal *</option>
                  <option>Reduce operational costs</option>
                  <option>Automate customer support</option>
                  <option>Streamline HR & recruitment</option>
                  <option>Automate finance & approvals</option>
                  <option>Implement predictive analytics</option>
                  <option>Build custom AI solution</option>
                  <option>Microsoft Power Platform</option>
                  <option>Other</option>
                </SelectWithChevron>
                <SelectWithChevron id="budget" name="budget" required>
                  <option value="">Budget Range *</option>
                  <option>$5K – $15K</option>
                  <option>$15K – $50K</option>
                  <option>$50K – $150K</option>
                  <option>$150K+</option>
                </SelectWithChevron>
                <SelectWithChevron id="timeline" name="timeline" required>
                  <option value="">Timeline *</option>
                  <option>Immediate (1–2 weeks)</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6+ months / Ongoing</option>
                </SelectWithChevron>
                <textarea
                  id="challenges"
                  name="message"
                  required
                  placeholder="Key challenges or goals... *"
                  rows={3}
                  maxLength={2000}
                  className="w-full bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] rounded-xl px-4 py-3 text-sm text-hero-foreground placeholder:text-hero-foreground/25 focus:outline-none focus:border-primary/40 resize-none"
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
                      Get Your Free AI Audit <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-sm text-hero-foreground/20 text-center mt-3">
                  No spam. No obligation. Your data is secure.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutoLeadCapture;
