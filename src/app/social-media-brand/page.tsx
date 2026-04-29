"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";

import { motion } from "framer-motion";
import { ArrowRight, Share2, Heart, Users, Camera, MessageCircle, TrendingUp } from "lucide-react";

const stats = [
  { value: "10x", label: "Engagement Increase" },
  { value: "500K+", label: "Followers Grown" },
  { value: "85%", label: "Brand Recall Lift" },
  { value: "3x", label: "Social-Driven Revenue" },
];

const services = [
  { icon: Share2, title: "Social Media Strategy", desc: "Platform-specific strategies with content pillars, posting cadence, and audience growth tactics tailored to your brand voice and business goals." },
  { icon: Camera, title: "Content Creation", desc: "Scroll-stopping visuals, short-form videos, carousels, and stories crafted by designers and copywriters who understand what performs." },
  { icon: Users, title: "Community Management", desc: "Active community engagement, comment moderation, DM responses, and reputation management that builds loyalty and trust." },
  { icon: Heart, title: "Influencer Marketing", desc: "Strategic influencer partnerships, micro and macro collaborations, UGC campaigns, and affiliate programs that amplify reach authentically." },
  { icon: MessageCircle, title: "Social Commerce", desc: "Shoppable posts, Instagram/TikTok shops, and social-first sales funnels that convert followers into paying customers." },
  { icon: TrendingUp, title: "Analytics & Growth", desc: "Monthly performance reporting, competitor benchmarking, trend analysis, and data-driven optimization to continuously grow engagement." },
];

const platforms = [
  { name: "Instagram", focus: "Visual storytelling, Reels, Shopping", audience: "18-44 demographic" },
  { name: "LinkedIn", focus: "B2B thought leadership, employee advocacy", audience: "Decision makers" },
  { name: "TikTok", focus: "Short-form video, trends, viral content", audience: "Gen Z & Millennials" },
  { name: "Facebook", focus: "Community groups, ads, marketplace", audience: "25-55 demographic" },
  { name: "YouTube", focus: "Long-form, Shorts, brand documentaries", audience: "All demographics" },
  { name: "X (Twitter)", focus: "Real-time engagement, industry news", audience: "Tech & business" },
];

const SocialMediaBrand = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Social Media & Brand Growth</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-hero-foreground leading-[1.08] mb-6">
              Turn Followers<br />Into Loyal<br />Customers
            </h1>
            <p className="text-hero-foreground/50 text-lg max-w-xl leading-relaxed mb-8">
              Strategic social media management that builds authentic brand communities, drives engagement, and converts attention into revenue.
            </p>
            <a href="#lead-capture" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3">
              Build Your Brand <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-hero border-t border-hero-foreground/[0.06]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-hero-foreground/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1]">Complete Social Media<br />Management</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-hero-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Platform Expertise</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1]">We Know Every<br />Platform Inside Out</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {platforms.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 rounded-2xl border border-border hover:border-primary/20 transition-colors">
                <h3 className="text-base font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted mb-1">{p.focus}</p>
                <p className="text-xs text-primary/70">{p.audience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">Let's Grow Your<br />Social Presence</h2>
              <p className="text-hero-foreground/40 text-sm">Get a custom social media strategy tailored to your brand, audience, and business goals.</p>
            </motion.div>
            <motion.form
              onSubmit={async (e) => {
                e.preventDefault();
                const btn = e.currentTarget.querySelector('button');
                if (btn) btn.disabled = true;
                const formData = new FormData(e.currentTarget);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    body: formData,
                  });
                  if (!res.ok) throw new Error("Failed to submit");
                  typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
                  import("sonner").then(({ toast }) => {
                    toast.success("Strategy Requested!", {
                      description: "We'll be in touch within 24 hours.",
                    });
                  });
                  (e.target as HTMLFormElement).reset();
                } catch (error) {
                  import("sonner").then(({ toast }) => {
                    toast.error("Something went wrong. Please try again later.");
                  });
                } finally {
                  if (btn) btn.disabled = false;
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <input type="hidden" name="source" value="Social Media Strategy" />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Work Email *"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground placeholder:text-hero-foreground/30 text-sm focus:outline-none focus:border-primary/40"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  required
                  name="platform"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground/50 text-sm focus:outline-none focus:border-primary/40"
                >
                  <option value="">Primary Platform *</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>TikTok</option>
                  <option>Multiple Platforms</option>
                </select>
                <select
                  required
                  name="followers"
                  className="w-full px-4 py-3 rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/[0.08] text-hero-foreground/50 text-sm focus:outline-none focus:border-primary/40"
                >
                  <option value="">Current Follower Count *</option>
                  <option>Under 1,000</option>
                  <option>1,000 – 10,000</option>
                  <option>10,000 – 100,000</option>
                  <option>100,000+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                Get My Social Strategy <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="social-media" links={["digital-marketing", "seo", "paid-ads", "ecommerce", "ai-chatbots", "cro"]} variant="light" />
      <Footer />
    </div>
  );
};

export default SocialMediaBrand;
