"use client";

import { motion } from "framer-motion";
import { BarChart3, GitBranch, Users, Target, Eye } from "lucide-react";

const analyticsFeatures = [
  { icon: BarChart3, title: "Real-Time Dashboards", desc: "Custom-built dashboards with live data from all channels — Google Ads, Meta, SEO, email, and CRM in one unified view." },
  { icon: GitBranch, title: "Attribution Modeling", desc: "Multi-touch attribution that shows which channels, campaigns, and touchpoints actually drive revenue — not just last-click." },
  { icon: Users, title: "Customer Insights", desc: "Deep audience segmentation, behavioral analysis, and cohort tracking that reveal who your best customers are and how to find more." },
  { icon: Target, title: "KPI Tracking & Alerts", desc: "Automated tracking of CAC, ROAS, LTV, conversion rates, and custom KPIs with real-time alerts when metrics deviate." },
  { icon: Eye, title: "Transparent Reporting", desc: "Weekly and monthly reports with executive summaries, channel performance, and actionable recommendations — no fluff, just insights." },
];

const DMAnalytics = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Analytics & Reporting</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-hero-foreground leading-[1.1] mb-4">
            Complete Visibility Into<br />What's Actually Working
          </h2>
          <p className="text-hero-foreground/40 text-sm max-w-2xl mx-auto">
            No guessing. No vanity metrics. Real-time dashboards and attribution models that show exactly where revenue comes from.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {analyticsFeatures.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-hero-foreground/[0.06] hover:border-primary/20 hover:bg-hero-foreground/[0.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-hero-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-hero-foreground/40 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DMAnalytics;
