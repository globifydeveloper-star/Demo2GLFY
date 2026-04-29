"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useContactDialog } from "@/contexts/ContactDialogContext";

import portfolioAmericanKoil from "@/assets/portfolio-american-koil.jpg";
import portfolioMoher from "@/assets/portfolio-moher.jpeg";
import portfolioWilson from "@/assets/portfolio-wilson-new.jpeg";
import portfolioInstaRunway from "@/assets/portfolio-instarunway.jpeg";
import portfolioJudithLeiber from "@/assets/portfolio-judith-leiber.jpeg";
import portfolioKatMaconie from "@/assets/portfolio-kat-maconie.jpeg";
import portfolioBeflare from "@/assets/portfolio-beflare.jpg";
import portfolioEkasysRetail from "@/assets/portfolio-ekasys-retail.jpg";
import portfolioEkasysRE from "@/assets/portfolio-ekasys-realestate.jpg";
import portfolioMedoc from "@/assets/portfolio-medoc.jpeg";
import portfolioSalomon from "@/assets/portfolio-salomon.jpg";

const categories = ["All", "E-Commerce", "Web App", "App Development", "Healthcare", "ERP"];

const projects = [
  {
    title: "Wilson",
    slug: "wilson",
    category: "E-Commerce",
    description: "A century of innovation meets modern technology — UI/UX design, web development, e-commerce, and SEO for a global sports brand.",
    image: portfolioWilson.src,
    stats: { metric: "500K+", label: "Monthly Users" },
    tags: ["UI/UX", "Web Dev", "E-Commerce", "SEO"],
    year: "2024",
  },
  {
    title: "Salomon",
    slug: "salomon",
    category: "E-Commerce",
    description: "GCC distributor store for a world-leading outdoor sports brand — custom Shopify theme with Arabic RTL, multi-language, and multi-country localization.",
    image: portfolioSalomon.src,
    stats: { metric: "320%", label: "Revenue Growth" },
    tags: ["Shopify", "GCC", "E-Commerce", "Performance"],
    year: "2024",
  },
  {
    title: "American Koil",
    category: "E-Commerce",
    description: "Premium sleep brand transformed with a compelling digital storefront, immersive product pages, and seamless checkout.",
    image: portfolioAmericanKoil.src,
    stats: { metric: "180%", label: "Revenue Growth" },
    tags: ["UI/UX", "Web Dev", "E-Commerce"],
    year: "2024",
  },
  {
    title: "Moher",
    slug: "moher",
    category: "E-Commerce",
    description: "Multi-brand fashion retailer's complete digital overhaul — UI/UX, web development, e-commerce, branding, and performance marketing.",
    image: portfolioMoher.src,
    stats: { metric: "45%", label: "Bounce Rate Drop" },
    tags: ["UI/UX", "E-Commerce", "Branding", "Marketing"],
    year: "2023",
  },
  {
    title: "InstaRunway",
    slug: "instarunway",
    category: "E-Commerce",
    description: "Luxury fashion and lifestyle marketplace with stunning UI/UX design, web development, and e-commerce integration.",
    image: portfolioInstaRunway.src,
    stats: { metric: "3.2x", label: "Conversion Lift" },
    tags: ["UI/UX", "Web Dev", "E-Commerce"],
    year: "2024",
  },
  {
    title: "Judith Leiber",
    slug: "judith-leiber",
    category: "E-Commerce",
    description: "Iconic luxury brand's digital presence reimagined with elegant UI/UX, web development, and e-commerce solutions.",
    image: portfolioJudithLeiber.src,
    stats: { metric: "220%", label: "Online Sales Growth" },
    tags: ["UI/UX", "Web Dev", "E-Commerce"],
    year: "2024",
  },
  {
    title: "Kat Maconie",
    slug: "kat-maconie",
    category: "E-Commerce",
    description: "Bold luxury footwear brand elevated with striking UI/UX, web development, e-commerce, and SEO strategy.",
    image: portfolioKatMaconie.src,
    stats: { metric: "85%", label: "Organic Traffic Up" },
    tags: ["UI/UX", "Web Dev", "E-Commerce", "SEO"],
    year: "2023",
  },
  {
    title: "Beflare",
    category: "Web App",
    description: "Modern wedding photography and event management web platform with elegant UI/UX and seamless web development.",
    image: portfolioBeflare.src,
    stats: { metric: "150%", label: "Lead Generation" },
    tags: ["UI/UX", "Web Dev"],
    year: "2024",
  },
  {
    title: "Ekasys ERP – Retail",
    slug: "ekasys-erp",
    category: "ERP",
    description: "Enterprise retail and distribution management system with comprehensive UI/UX design and app development.",
    image: portfolioEkasysRetail.src,
    stats: { metric: "40%", label: "Efficiency Gain" },
    tags: ["UI/UX", "App Dev"],
    year: "2024",
  },
  {
    title: "Ekasys – Real Estate",
    slug: "ekasys-erp",
    category: "App Development",
    description: "Complete real estate management application with property tracking, tenant management, and financial analytics.",
    image: portfolioEkasysRE.src,
    stats: { metric: "300+", label: "Properties Managed" },
    tags: ["UI/UX", "App Dev"],
    year: "2023",
  },
  {
    title: "Medoc HMS",
    slug: "medoc-hms",
    category: "Healthcare",
    description: "Comprehensive hospital management system for clinical chains with patient records, scheduling, and real-time analytics.",
    image: portfolioMedoc.src,
    stats: { metric: "2,000+", label: "Clinics Onboarded" },
    tags: ["UI/UX", "App Dev"],
    year: "2024",
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openContactDialog } = useContactDialog();

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">
              Our Projects
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 font-display">
              Crafted with Purpose,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                Built to Perform
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Explore our portfolio of 500+ projects across industries — each designed to solve real problems and deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-display ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted/20 text-muted-foreground hover:bg-muted/40 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filtered.map((project, i) => {
                const card = (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/20 transition-all duration-500 bg-card"
                >
                  <div className="relative aspect-[3/2] md:aspect-auto md:h-[380px] bg-[#0a0a1a] overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" draggable={false} />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/80 via-transparent to-[#0a0a1a]/90" />
                    <div className="absolute top-2 left-5 right-4 md:top-5 md:left-7 md:right-5 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-primary mb-0.5 md:mb-1 font-display">{project.category}</p>
                        <h3 className="text-lg md:text-3xl font-bold text-white font-display group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-7 bg-[#0a0a1a]">
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] md:text-sm font-semibold tracking-wider uppercase px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/10 text-white/70 border border-white/[0.08]">{tag}</span>
                      ))}
                    </div>
                    <p className="text-[11px] md:text-sm text-white/60 leading-relaxed mb-2 md:mb-3 max-w-md">{project.description}</p>
                    <div className="flex items-center justify-between">
                       <span className="inline-flex items-center gap-2 text-[11px] md:text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 font-display">
                         View Case Study <ExternalLink className="w-3.5 h-3.5" />
                       </span>
                       <div className="text-right">
                         <p className="text-sm md:text-base font-bold text-primary font-display">{project.stats.metric}</p>
                         <p className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-wider">{project.stats.label}</p>
                       </div>
                     </div>
                  </div>
                </motion.div>
                );

                return project.slug ? (
                  <Link href={`/case-study/${project.slug}`} key={project.title} className="block">{card}</Link>
                ) : (
                  <div key={project.title}>{card}</div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Have a Project in Mind?
            </h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our proven expertise.
            </p>
            <button
              onClick={() => openContactDialog()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
