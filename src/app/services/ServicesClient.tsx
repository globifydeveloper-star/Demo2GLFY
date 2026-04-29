"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Cpu, Megaphone, ShoppingCart, Database,
  ArrowRight, CheckCircle2, Layers, BarChart3, Shield, Zap,
  Users, Cloud, MessageSquareQuote, ChevronDown, Send,
  ClipboardList, Lightbulb, Code2, Rocket, HeadphonesIcon, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CrossLinkSection from "@/components/CrossLinkSection";
import Link from 'next/link';
import { toast } from "sonner";

import { useContactDialog } from "@/contexts/ContactDialogContext";
import ProcessSection from "@/components/ProcessSection";
import wilsonLogo from "@/assets/clients/wilson.png";
import instarunwayLogo from "@/assets/clients/instarunway.png";
import salomonLogo from "@/assets/clients/salomon.png";
import isroLogo from "@/assets/clients/isro.png";
import moherLogo from "@/assets/clients/moher.png";
import motoavenueLogo from "@/assets/clients/motoavenue.png";
import mrStartLogo from "@/assets/clients/mr-start.png";
import telnysLogo from "@/assets/clients/telnys.png";
import riadLogo from "@/assets/clients/riad.png";
import judithLeiberLogo from "@/assets/clients/judith-leiber.png";

const servicesClients = [
  { name: "Salomon", logo: salomonLogo.src },
  { name: "Wilson", logo: wilsonLogo.src },
  { name: "InstaRunway", logo: instarunwayLogo.src },
  { name: "ISRO", logo: isroLogo.src },
  { name: "Moher", logo: moherLogo.src },
  { name: "Moto Avenue", logo: motoavenueLogo.src },
  { name: "MR START", logo: mrStartLogo.src },
  { name: "Telnys", logo: telnysLogo.src },
  { name: "Ri-Ad", logo: riadLogo.src },
  { name: "Judith Leiber", logo: judithLeiberLogo.src },
];
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    icon: Globe,
    category: "Web Development",
    headline: "Websites That Convert",
    description: "We craft pixel-perfect, performance-optimized websites that establish credibility, engage visitors, and turn traffic into revenue.",
    link: "/web-development",
    capabilities: [
      "Corporate & Brand Websites",
      "CMS Solutions (WordPress, Drupal, Custom)",
      "Progressive Web Apps (PWA)",
      "Custom Web Applications",
      "Landing Pages & Microsites",
      "Web Portals & Dashboards",
    ],
  },
  {
    icon: Smartphone,
    category: "App Development",
    headline: "Apps People Love",
    description: "Native and cross-platform mobile applications built for performance, scalability, and delightful user experiences.",
    link: "/app-development",
    capabilities: [
      "Native iOS & Android Development",
      "Cross-Platform (React Native, Flutter)",
      "Enterprise Mobility Solutions",
      "App UI/UX Design",
      "App Store Optimization",
      "Maintenance & Support",
    ],
  },
  {
    icon: Cpu,
    category: "AI & Automation",
    headline: "Intelligent Automation",
    description: "Leverage cutting-edge AI and machine learning to automate workflows, extract insights, and create personalized experiences.",
    link: "/ai-automation",
    capabilities: [
      "AI-Powered Chatbots & Assistants",
      "Predictive Analytics & ML Models",
      "Process Automation (RPA)",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI-Driven Personalization",
    ],
  },
  {
    icon: Megaphone,
    category: "Digital Marketing",
    headline: "Growth That Compounds",
    description: "Data-driven marketing strategies that increase visibility, drive qualified traffic, and maximize ROI across all channels.",
    link: "/digital-marketing",
    capabilities: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing & Strategy",
      "Social Media Management",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
    ],
  },
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    headline: "Stores That Scale",
    description: "End-to-end eCommerce development from custom Shopify themes to headless commerce — built for conversion and growth.",
    link: "/ecommerce",
    capabilities: [
      "Shopify & Shopify Plus Development",
      "WooCommerce & Magento Solutions",
      "Headless Commerce Architecture",
      "Payment Gateway Integration",
      "Inventory & Order Management",
      "Multi-Channel Selling",
    ],
  },
  {
    icon: Database,
    category: "ERP Solutions",
    headline: "Systems That Unify",
    description: "Custom ERP platforms that integrate inventory, finance, HR, and supply chain into one intelligent system.",
    link: "/erp-solutions",
    capabilities: [
      "EKASYS ERP Platform",
      "MEDOC Hospital Management",
      "HR & Payroll Management",
      "Inventory & Warehouse Systems",
      "Financial & Accounting Modules",
      "Custom CRM Development",
    ],
  },
];

const strategies = [
  { icon: Layers, title: "Responsive-First Design", description: "Mobile-friendly, responsive solutions that ensure seamless experiences across all devices and screen sizes." },
  { icon: BarChart3, title: "SEO-Driven Development", description: "Clean code, optimized structure, and technical SEO best practices to maximize online visibility." },
  { icon: Shield, title: "Security & Compliance", description: "Enterprise-grade security with data encryption, compliance support, and regular vulnerability assessments." },
  { icon: Zap, title: "Performance Optimization", description: "Faster loading speeds, improved Core Web Vitals, and high reliability for flawless user experiences." },
  { icon: Users, title: "Conversion-Focused UX", description: "Intuitive interfaces and engaging user journeys that encourage interactions and drive higher conversions." },
  { icon: Cloud, title: "Cloud & API Integration", description: "Third-party APIs, CRMs, and cloud platforms integrated to enhance functionality and operations." },
];


const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50M+", label: "Users Impacted" },
  { value: "15+", label: "Years Experience" },
];

const faqs = [
  { q: "What services does Globify offer?", a: "We offer end-to-end digital services including web development, mobile apps, AI & automation, digital marketing, e-commerce, and custom ERP solutions — all tailored to your business goals." },
  { q: "Can you build both websites and mobile apps?", a: "Absolutely. We build responsive websites, progressive web apps, and native/cross-platform mobile applications using React Native, Flutter, Swift, and Kotlin." },
  { q: "How does Globify ensure high-quality development?", a: "We follow agile methodologies with code reviews, automated testing, CI/CD pipelines, and QA at every sprint to ensure enterprise-grade quality and reliability." },
  { q: "How can digital marketing from Globify help my business?", a: "Our data-driven marketing strategies, including SEO, PPC, content marketing, and social media, are designed to increase visibility, drive qualified traffic, and maximize ROI." },
  { q: "What is your typical project timeline?", a: "Timelines vary by scope — a marketing website takes 4-6 weeks, while complex web apps or ERP systems take 3-6 months. We provide a detailed timeline after discovery." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer flexible maintenance plans including bug fixes, performance monitoring, feature updates, and 24/7 priority support options." },
];

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="border border-border rounded-2xl overflow-hidden bg-card"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-muted/20 transition-colors"
          >
            <span className="font-semibold text-[15px] pr-4">{faq.q}</span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground/50 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          {openIndex === i && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="px-7 pb-6"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const ServicesPage = () => {
  const { openContactDialog } = useContactDialog();
  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero Section - SparxIT style */}
      <section className="pt-28 pb-20 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a] via-[#0a0a1a]/95 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img src={servicesHero.src} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a] to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                End-to-End Digital
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  Solutions for Growth
                </span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                From concept to scale — we deliver comprehensive digital services that transform businesses, engage users, and create lasting competitive advantages.
              </p>
              <button
                onClick={() => openContactDialog()}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0f0f24] border-y border-white/[0.06] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Clients + Why Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Clients marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-center text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground/60 mb-8">
              Trusted by Leading Brands Worldwide
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex">
                <div className="flex shrink-0 animate-marquee gap-20 items-center pr-20">
                  {servicesClients.map((client) => (
                    <img
                      key={client.name}
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      className="h-16 md:h-20 w-auto object-contain shrink-0"
                      style={{ background: 'transparent', mixBlendMode: 'multiply' }}
                    />
                  ))}
                </div>
                <div className="flex shrink-0 animate-marquee gap-20 items-center pr-20">
                  {servicesClients.map((client) => (
                    <img
                      key={`${client.name}-dup`}
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      className="h-16 md:h-20 w-auto object-contain shrink-0"
                      style={{ background: 'transparent', mixBlendMode: 'multiply' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust pillars */}
          <div className="border-t border-border pt-14">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "ISO 27001", label: "Certified Security", desc: "Enterprise-grade data protection and compliance standards." },
                { value: "24/7", label: "Dedicated Support", desc: "Round-the-clock assistance with guaranteed response times." },
                { value: "Agile", label: "Development Process", desc: "Iterative sprints with full transparency and weekly demos." },
                { value: "NDA", label: "IP Protection", desc: "Complete confidentiality with legally binding agreements." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm font-semibold mb-2">{item.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0a1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.1]">
                Comprehensive Digital Services
              </h2>
            </div>
            <p className="text-white/40 max-w-md text-sm leading-relaxed">
              Build future-ready digital experiences with our custom design and development services that are secure, scalable, and user-focused.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-[#0a0a1a] p-8 hover:bg-white/[0.03] transition-all duration-500"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent" />

                <div className="relative">
                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{service.category}</h3>
                  <p className="text-sm text-white/35 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capability tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.06]"
                      >
                        {cap}
                      </span>
                    ))}
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] text-white/30 border border-white/[0.06]">
                      +{service.capabilities.length - 3} more
                    </span>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 group-hover:text-primary transition-all duration-300 hover:gap-2.5"
                  >
                    Explore Service <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Strategies Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">
              Strategies That Drive Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We adopt proven strategies to design, develop, and optimize solutions that deliver exceptional performance, scalability, and engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-md shadow-black/[0.06] ring-4 ring-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#D45A00] flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Technology Stack - Bento Grid */}
      <section className="py-24 bg-[#0a0a1a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                Our Tech Arsenal
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.1]">
                Technologies We Master
              </h2>
            </div>
            <p className="text-white/40 max-w-md text-sm leading-relaxed">
              We leverage the best-in-class tools and frameworks to deliver robust, scalable, and future-proof solutions.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {/* Featured - React */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-8 flex flex-col justify-between group hover:border-primary/40 transition-all"
            >
              <div className="text-4xl mb-4">⚛️</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">React & Next.js</h3>
                <p className="text-sm text-white/40">Our core frontend framework for building blazing-fast, SEO-friendly applications.</p>
              </div>
            </motion.div>

            {/* Regular items */}
            {[
              { emoji: "🟢", name: "Node.js", desc: "Backend" },
              { emoji: "🐍", name: "Python", desc: "AI & ML" },
              { emoji: "☁️", name: "AWS", desc: "Cloud" },
              { emoji: "🔷", name: "TypeScript", desc: "Language" },
              { emoji: "🐳", name: "Docker", desc: "DevOps" },
              { emoji: "🍃", name: "MongoDB", desc: "NoSQL" },
              { emoji: "🐘", name: "PostgreSQL", desc: "SQL" },
              { emoji: "🔥", name: "Firebase", desc: "BaaS" },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 flex flex-col justify-between hover:border-white/15 hover:bg-white/[0.05] transition-all cursor-pointer group"
              >
                <span className="text-2xl mb-3">{tech.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{tech.name}</p>
                  <p className="text-[11px] text-white/30">{tech.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Featured - Shopify */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-2 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/15 p-6 flex flex-col justify-between group hover:border-green-500/30 transition-all"
            >
              <div className="text-3xl mb-3">🛒</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-0.5">Shopify & E-Commerce</h3>
                <p className="text-xs text-white/40">Custom themes, headless commerce, and Shopify Plus solutions.</p>
              </div>
            </motion.div>

            {/* More regular items */}
            {[
              { emoji: "📱", name: "Flutter", desc: "Mobile" },
              { emoji: "⚡", name: "Redis", desc: "Cache" },
              { emoji: "🤖", name: "TensorFlow", desc: "AI" },
              { emoji: "🔄", name: "GraphQL", desc: "API" },
              { emoji: "🎨", name: "Figma", desc: "Design" },
              { emoji: "🏗️", name: "Kubernetes", desc: "Orchestration" },
              { emoji: "📊", name: "Elasticsearch", desc: "Search" },
              { emoji: "🔐", name: "Auth0", desc: "Identity" },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.04 }}
                whileHover={{ y: -3 }}
                className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 flex flex-col justify-between hover:border-white/15 hover:bg-white/[0.05] transition-all cursor-pointer group"
              >
                <span className="text-2xl mb-3">{tech.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{tech.name}</p>
                  <p className="text-[11px] text-white/30">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center gap-6 text-white/30 text-sm"
          >
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span>
              <strong className="text-white/60">30+</strong> technologies across <strong className="text-white/60">8</strong> domains
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>
        </div>
      </section>


      {/* How We Work - Interactive Process */}
      <ProcessSection />

      {/* Results / ROI Section */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                Proven Results
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.1] mb-6">
                Real Impact,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                  Measurable ROI
                </span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                We don't just build — we deliver results that move the needle. Every project is measured against clear KPIs and business outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3.2x", label: "Average ROI for clients" },
                  { value: "67%", label: "Reduction in bounce rate" },
                  { value: "150%", label: "Increase in conversions" },
                  { value: "40%", label: "Faster time-to-market" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] relative">
                <MessageSquareQuote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-white/70 text-lg leading-relaxed mb-8 italic">
                  "Globify transformed our entire digital presence. Our e-commerce revenue increased by 340% within 6 months, and the custom ERP system reduced our operational costs by 45%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    RK
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Rajesh Kumar</p>
                    <p className="text-white/40 text-xs">CTO, InstaRunway</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-primary/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
            {/* Left column — heading + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">
                FAQs
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-5 font-display">
                Got questions?
                <br />
                We've got answers.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Everything you need to know about working with Globify. Can't find what you're looking for?
              </p>
              <button
                onClick={() => openContactDialog()}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all font-display"
              >
                Contact our team <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Right column — accordion */}
            <ServiceFAQ />
          </div>
        </div>
      </section>

      {/* Final CTA with Lead Capture */}
      <section className="py-24 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              Let's Build Together
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-4">
              Ready to Transform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                Your Business?
              </span>
            </h2>
            <p className="text-white/40 mb-10 text-sm leading-relaxed">
              Get a free consultation and project estimate. No commitment, no spam — just expert advice tailored to your goals.
            </p>

            {/* Lead Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                try {
                  const res = await fetch("/api/contact", { method: "POST", body: formData });
                  if (!res.ok) throw new Error();
                  toast.success("Request Submitted!", { description: "We'll get back to you within 24 hours." });
                  form.reset();
                } catch {
                  toast.error("Something went wrong. Please try again.");
                }
              }}
              className="space-y-3 max-w-lg mx-auto mb-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Work Email *"
                  className="w-full px-5 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-5 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
              >
                Get a Free Quote
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-white/25 text-xs">
              ✓ Free consultation &nbsp; ✓ No commitment &nbsp; ✓ Response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="services" links={["web-dev", "app-dev", "ecommerce", "digital-marketing", "ai-automation", "erp", "digital-transformation"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ServicesPage;
