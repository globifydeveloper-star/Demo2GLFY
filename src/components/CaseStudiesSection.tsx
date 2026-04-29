"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import Link from 'next/link';


import portfolioAmericanKoil from "@/assets/portfolio-american-koil.jpg";
import portfolioMoher from "@/assets/portfolio-moher.jpeg";
import portfolioWilson from "@/assets/portfolio-wilson-new.jpeg";
import portfolioInstaRunway from "@/assets/portfolio-instarunway.jpeg";
import portfolioJudithLeiber from "@/assets/portfolio-judith-leiber.jpeg";
import portfolioKatMaconie from "@/assets/portfolio-kat-maconie.jpeg";
import portfolioBeflare from "@/assets/portfolio-beflare.jpg";
import portfolioEkasysRetail from "@/assets/portfolio-ekasys-retail.jpg";
import portfolioMedoc from "@/assets/portfolio-medoc.jpeg";
import portfolioEkasysRE from "@/assets/portfolio-ekasys-realestate.jpg";

const projects = [
  {
    title: "Wilson",
    category: "Sports E-commerce & Retail",
    description: "A century of innovation meets modern technology — UI/UX design, web development, e-commerce, and SEO for a global sports brand.",
    image: portfolioWilson.src,
    stats: { metric: "500K+", label: "Monthly Users" },
    tags: ["UI/UX", "Web Dev", "E-Commerce", "SEO"],
    slug: "wilson",
  },
  {
    title: "American Koil",
    category: "Sleep & Mattress Solutions",
    description: "Premium sleep brand transformed with a compelling digital storefront, immersive product pages, and seamless checkout.",
    image: portfolioAmericanKoil.src,
    stats: { metric: "180%", label: "Revenue Growth" },
    tags: ["UI/UX", "Web Dev", "E-Commerce"],
  },
  {
    title: "Moher",
    category: "Fashion E-Commerce",
    description: "Multi-brand fashion retailer's complete digital overhaul — UI/UX, web development, e-commerce, branding, and performance marketing.",
    image: portfolioMoher.src,
    stats: { metric: "45%", label: "Bounce Rate Drop" },
    tags: ["UI/UX", "E-Commerce", "Branding", "Marketing"],
    slug: "moher",
  },
  {
    title: "InstaRunway",
    category: "Fashion & Lifestyle Marketplace",
    description: "Luxury fashion and lifestyle marketplace with stunning UI/UX design, web development, and e-commerce integration.",
    image: portfolioInstaRunway.src,
    stats: { metric: "3.2x", label: "Conversion Lift" },
    tags: ["UI/UX", "Web Dev", "E-Commerce"],
    slug: "instarunway",
  },
  {
    title: "Judith Leiber",
    category: "Luxury Fashion & Accessories",
    description: "Iconic luxury brand's digital presence reimagined with elegant UI/UX, web development, and e-commerce solutions.",
    image: portfolioJudithLeiber.src,
    stats: { metric: "220%", label: "Online Sales Growth" },
    tags: ["UI/UX", "Web Dev", "E-Commerce"],
    slug: "judith-leiber",
  },
  {
    title: "Kat Maconie",
    category: "Luxury E-commerce & Retail",
    description: "Bold luxury footwear brand elevated with striking UI/UX, web development, e-commerce, and SEO strategy.",
    image: portfolioKatMaconie.src,
    stats: { metric: "85%", label: "Organic Traffic Up" },
    tags: ["UI/UX", "Web Dev", "E-Commerce", "SEO"],
    slug: "kat-maconie",
  },
  {
    title: "Beflare",
    category: "Event Management Platform",
    description: "Modern wedding photography and event management web platform with elegant UI/UX and seamless web development.",
    image: portfolioBeflare.src,
    stats: { metric: "150%", label: "Lead Generation" },
    tags: ["UI/UX", "Web Dev"],
  },
  {
    title: "Ekasys ERP",
    category: "Retail & Distribution Management",
    description: "Enterprise retail and distribution management system with comprehensive UI/UX design and app development.",
    image: portfolioEkasysRetail.src,
    stats: { metric: "40%", label: "Efficiency Gain" },
    tags: ["UI/UX", "App Dev"],
    slug: "ekasys-erp",
  },
  {
    title: "Ekasys Real Estate",
    category: "Real Estate Management System",
    description: "Complete real estate management application with property tracking, tenant management, and financial analytics.",
    image: portfolioEkasysRE.src,
    stats: { metric: "300+", label: "Properties Managed" },
    tags: ["UI/UX", "App Dev"],
  },
  {
    title: "Medoc HMS",
    category: "Clinical Chains & Hospitals",
    description: "Comprehensive hospital management system for clinical chains with patient records, scheduling, and real-time analytics.",
    image: portfolioMedoc.src,
    stats: { metric: "200+", label: "Hospitals Onboarded" },
    tags: ["UI/UX", "App Dev"],
    slug: "medoc-hms",
  },
];

const CaseStudiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const rafRef = useRef<number>(0);

  // Auto-scroll using rAF + refs to avoid re-renders
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let lastTime = 0;
    const speed = 0.8; // px per frame at 60fps

    const tick = (time: number) => {
      if (lastTime) {
        const delta = time - lastTime;
        if (!isPausedRef.current && !isDraggingRef.current) {
          const maxScroll = el.scrollWidth - el.clientWidth;
          if (el.scrollLeft >= maxScroll - 1) {
            el.scrollLeft = 0;
          } else {
            el.scrollLeft += speed * (delta / 16);
          }
        }
      }
      lastTime = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    isPausedRef.current = true;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(() => { isPausedRef.current = false; }, 800);
  };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    dragStart.current = { x: e.pageX, scrollLeft: scrollRef.current.scrollLeft };
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }, []);

  const onMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.removeProperty("user-select");
    }
  }, []);

  return (
    <section id="projects" className="py-28 bg-section-dark relative overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 font-display">
                Portfolio
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] font-display">
                <span className="text-section-dark-foreground">Work That </span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Speaks</span>
                <br />
                <span className="text-section-dark-foreground/30">For Itself</span>
              </h2>
            </motion.div>

            {/* Nav arrows + View all */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-section-dark-foreground/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5 text-section-dark-foreground/50" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-section-dark-foreground/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5 text-section-dark-foreground/50" />
              </button>
              <Link
                href="/projects"
                className="hidden lg:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all font-display ml-4"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => { onMouseUp(); isPausedRef.current = false; }}
          onMouseEnter={() => isPausedRef.current = true}
          className="flex gap-6 overflow-x-auto scrollbar-hide pl-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pr-6 pb-4 cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        >
          {projects.map((project, i) => {
            const cardContent = (
              <>
                {/* Image */}
                <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    draggable={false}
                  />
                  {/* Strong gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/70 to-[#0a0a1a]/20" />

                  {/* Stat badge */}
                  <div className="absolute top-5 right-5 bg-[#0a0a1a]/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <p className="text-2xl font-bold text-primary font-display">
                      {project.stats.metric}
                    </p>
                    <p className="text-[10px] text-section-dark-foreground/60 font-medium tracking-wider uppercase">
                      {project.stats.label}
                    </p>
                  </div>

                  {/* Project number */}
                  <div className="absolute top-5 left-6 text-[80px] font-bold text-white/[0.06] leading-none font-display select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-1 font-display">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/[0.08] backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3 font-display">
                      View Case Study <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex-shrink-0 w-[85vw] md:w-[550px] lg:w-[600px] rounded-2xl overflow-hidden border border-section-dark-foreground/[0.06] hover:border-primary/20 transition-all duration-500 snap-start pointer-events-auto"
              >
                {project.slug ? (
                  <Link href={`/case-study/${project.slug}`} className="block">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="container mx-auto px-6 mt-8 lg:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all font-display"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
