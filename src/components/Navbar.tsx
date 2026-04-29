"use client";

import { usePathname } from 'next/navigation';import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Smartphone, Cpu, Megaphone, ShoppingCart, Database, ArrowRight, Stethoscope, BarChart3, Factory, Truck, Package, Activity, Users } from "lucide-react";
import Link from 'next/link';

import globifyLogo from "@/assets/globify-logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import megaMenuServices from "@/assets/mega-menu-services.jpg";
import megaMenuIndustries from "@/assets/mega-menu-industries.jpg";
import megaMenuProducts from "@/assets/mega-menu-products.jpg";
import { useContactDialog } from "@/contexts/ContactDialogContext";

// Defer mega menu image preloads so they don't compete with critical resources
if (typeof window !== "undefined") {
  const preload = () => {
    [megaMenuServices, megaMenuIndustries, megaMenuProducts].forEach((imgObj) => {
      const img = new Image();
      img.src = imgObj.src;
    });
  };
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(preload);
  } else {
    setTimeout(preload, 2000);
  }
}

const servicesMenu = [
  { icon: Globe, title: "Web Development", desc: "Websites & web apps that convert", href: "/web-development" },
  { icon: Smartphone, title: "App Development", desc: "Native & cross-platform mobile apps", href: "/app-development" },
  { icon: Cpu, title: "AI & Automation", desc: "Intelligent automation & ML solutions", href: "/ai-automation" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC & growth strategies", href: "/digital-marketing" },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Shopify, headless & custom stores", href: "/ecommerce" },
  { icon: Database, title: "ERP Solutions", desc: "Custom enterprise resource planning", href: "/erp-solutions" },
];

const ecommercePlatforms = [
  { icon: ShoppingCart, title: "Shopify Development", desc: "Custom Shopify stores & themes", href: "/shopify-development" },
  { icon: ShoppingCart, title: "WooCommerce Development", desc: "WordPress-powered e-commerce", href: "/woocommerce-development" },
  { icon: ShoppingCart, title: "Magento / Adobe Commerce", desc: "Enterprise-grade commerce", href: "/magento-development" },
  { icon: ShoppingCart, title: "PrestaShop Development", desc: "Open-source e-commerce for Europe", href: "/prestashop-development" },
  { icon: ShoppingCart, title: "Shopware Development", desc: "German-engineered commerce", href: "/shopware-development" },
  { icon: ShoppingCart, title: "BigCommerce Development", desc: "SaaS commerce at scale", href: "/bigcommerce-development" },
  { icon: ShoppingCart, title: "Wix E-Commerce", desc: "Quick-launch online stores", href: "/wix-ecommerce" },
  { icon: ShoppingCart, title: "Migration Services", desc: "Seamless platform migrations", href: "/migration-services" },
];

const marketingServices = [
  { icon: Megaphone, title: "SEO, AEO & Content Strategy", desc: "Data-driven SEO, AEO & organic growth", href: "/seo-content-strategy" },
  { icon: Megaphone, title: "Paid Advertising & PPC", desc: "Google Ads, Meta & LinkedIn", href: "/paid-advertising" },
  { icon: Megaphone, title: "Social Media & Branding", desc: "Audience growth & brand storytelling", href: "/social-media-brand" },
];

const industriesMenu = [
  { icon: Stethoscope, title: "Healthcare", desc: "HIPAA-compliant digital health solutions", href: "/industries/healthcare" },
  { icon: BarChart3, title: "Fintech", desc: "Secure financial platforms & apps", href: "/industries/fintech" },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "Omnichannel commerce experiences", href: "/industries/retail" },
  { icon: Truck, title: "Supply Chain", desc: "Logistics & inventory optimization", href: "/industries/supply-chain" },
  { icon: Factory, title: "Manufacturing", desc: "Industry 4.0 & smart factory solutions", href: "/industries/manufacturing" },
  { icon: Activity, title: "SaaS & Startups", desc: "MVP development & rapid scaling", href: "/industries/saas-startups" },
];

const productsMenu = [
  { icon: Stethoscope, title: "MEDOC", desc: "Hospital Management System", href: "/products" },
  { icon: Package, title: "EKASYS", desc: "Enterprise Resource Planning", href: "/products" },
];

type MegaMenuKey = "services" | "industries" | "products" | null;

type MegaMenuItem = { icon: React.ElementType; title: string; desc: string; href: string };

const MobileAccordion = ({ label, items, onClose }: { label: string; items: MegaMenuItem[]; onClose: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hero-foreground/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-hero-foreground/80 hover:text-primary transition-colors py-3.5 text-[15px] font-medium"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-2 pb-3 space-y-0.5">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-hero-foreground/60 hover:text-primary hover:bg-hero-foreground/5 transition-all"
                >
                  <item.icon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium leading-tight">{item.title}</p>
                    <p className="text-sm text-hero-foreground/30 leading-tight">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenuKey>(null);
  const { openContactDialog } = useContactDialog();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = usePathname();

  // Close mega menu on route change
  useEffect(() => {
    setActiveMega(null);
    setIsOpen(false);
  }, [location]);

  const handleEnter = (key: MegaMenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 200);
  };

  const handleMegaEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", mega: "services" as MegaMenuKey },
    { label: "Industries", href: "/industries/healthcare", mega: "industries" as MegaMenuKey },
    { label: "Products", href: "/products", mega: "products" as MegaMenuKey },
    { label: "Our Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-md border-b border-hero-foreground/10">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-white rounded-md px-3 py-1.5">
            <img src={globifyLogo.src} alt="Globify - Design · Build · Scale" className="h-7 w-auto" width={120} height={28} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega ? handleEnter(item.mega) : setActiveMega(null)}
              onMouseLeave={handleLeave}
            >
              {item.href.startsWith("/") ? (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium rounded-md transition-colors ${
                    activeMega === item.mega
                      ? "text-primary bg-primary/5"
                      : "text-hero-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === item.mega ? "rotate-180" : ""}`} />
                  )}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium rounded-md transition-colors ${
                    activeMega === item.mega
                      ? "text-primary bg-primary/5"
                      : "text-hero-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === item.mega ? "rotate-180" : ""}`} />
                  )}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Chat on WhatsApp"
           onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}>
            <img src={whatsappIcon.src} alt="WhatsApp" className="w-full h-full object-cover" width={36} height={36} />
          </a>
          <button
            onClick={openContactDialog}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-md text-[15px] font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-hero-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Menu Panels */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.15 }}
            className="hidden lg:flex absolute top-full left-0 right-0 z-50 justify-center pt-2"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleLeave}
          >
            <div className="w-[calc(100%-3rem)] max-w-[1440px] h-[360px] bg-background rounded-2xl shadow-2xl shadow-foreground/10 border border-border/20 px-12 py-10 overflow-hidden">
              {activeMega === "services" && (
                <div className="flex gap-10 h-full">
                  {/* Promo Card */}
                  <Link
                    href="/services"
                    className="group flex-shrink-0 w-[280px] rounded-[20px] relative overflow-hidden flex flex-col justify-end"
                  >
                    <img src={megaMenuServices.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative z-10 p-7 pt-32">
                      <p className="text-hero-foreground font-semibold text-[20px] leading-[1.2] mb-1">Solutions that drive business results</p>
                      <p className="text-hero-foreground/60 text-sm leading-relaxed mb-5">Deliver customer value and drive business outcomes</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        View All Services <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                  {/* Columns */}
                  <div className="flex-1 grid grid-cols-3 gap-x-12">
                    <div>
                      <p className="text-sm text-muted-foreground/50 mb-5">Development</p>
                      {servicesMenu.slice(0, 2).map((item) => (
                        <Link key={item.title} href={item.href} className="block mb-6 group">
                          <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</p>
                          <p className="text-sm text-muted-foreground/70 mt-1 leading-relaxed">{item.desc}</p>
                        </Link>
                      ))}
                      <Link href="/erp-solutions" className="block mb-6 group">
                        <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">ERP Solutions</p>
                        <p className="text-sm text-muted-foreground/70 mt-1 leading-relaxed">Custom enterprise resource planning</p>
                      </Link>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground/50 mb-5">Growth</p>
                      {/* AI & Automation */}
                      <Link href="/ai-automation" className="block mb-6 group">
                        <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">AI & Automation</p>
                        <p className="text-sm text-muted-foreground/70 mt-1 leading-relaxed">Intelligent automation & ML solutions</p>
                      </Link>
                      {/* Digital Marketing */}
                      <Link href="/digital-marketing" className="block mb-3 group">
                        <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">Digital Marketing</p>
                        <p className="text-sm text-muted-foreground/70 mt-0.5 leading-relaxed">SEO, PPC & growth strategies</p>
                      </Link>
                      {marketingServices.map((item) => (
                        <Link key={item.title} href={item.href} className="block mb-2 group">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary group-hover:underline transition-colors leading-snug">{item.title}</p>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground/50 mb-5">Enterprise</p>
                      {/* E-Commerce */}
                      <Link href="/ecommerce" className="block mb-3 group">
                        <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">E-Commerce</p>
                        <p className="text-sm text-muted-foreground/70 mt-0.5 leading-relaxed">Shopify, headless & custom stores</p>
                      </Link>
                      {/* Platform sub-links – top 3 only */}
                      {ecommercePlatforms.slice(0, 3).map((item) => (
                        <Link key={item.title} href={item.href} className="block mb-2 group">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary group-hover:underline transition-colors leading-snug">{item.title}</p>
                        </Link>
                      ))}
                      <Link href="/ecommerce" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline mt-1">
                        View All Platforms <span aria-hidden="true">→</span>
                      </Link>
                      <Link href="/hire-developers" className="mt-4 flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-semibold hover:bg-foreground/90 transition-colors w-fit">
                        <Users className="w-4 h-4" /> Hire a Developer
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMega === "industries" && (
                <div className="flex gap-10 h-full">
                  <Link
                    href="/industries/healthcare"
                    className="group flex-shrink-0 w-[280px] rounded-[20px] relative overflow-hidden flex flex-col justify-end"
                  >
                    <img src={megaMenuIndustries.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative z-10 p-7 pt-32">
                      <p className="text-hero-foreground font-semibold text-[20px] leading-[1.2] mb-1">Tailored solutions across verticals</p>
                      <p className="text-hero-foreground/60 text-sm leading-relaxed mb-5">Industry-specific digital expertise</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Explore Industries <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                  <div className="flex-1 grid grid-cols-3 gap-x-12">
                    <div>
                      <p className="text-sm text-muted-foreground/50 mb-5">Regulated</p>
                      {industriesMenu.slice(0, 2).map((item) => (
                        <Link key={item.title} href={item.href} className="block mb-6 group">
                          <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</p>
                          <p className="text-sm text-muted-foreground/70 mt-1 leading-relaxed">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground/50 mb-5">Commerce</p>
                      {industriesMenu.slice(2, 4).map((item) => (
                        <Link key={item.title} href={item.href} className="block mb-6 group">
                          <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</p>
                          <p className="text-sm text-muted-foreground/70 mt-1 leading-relaxed">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground/50 mb-5">Tech</p>
                      {industriesMenu.slice(4).map((item) => (
                        <Link key={item.title} href={item.href} className="block mb-6 group">
                          <p className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</p>
                          <p className="text-sm text-muted-foreground/70 mt-1 leading-relaxed">{item.desc}</p>
                        </Link>
                      ))}
                      <Link href="/hire-developers" className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-semibold hover:bg-foreground/90 transition-colors">
                        <Users className="w-4 h-4" /> Hire a Developer
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMega === "products" && (
                <div className="flex gap-10 h-full">
                  <Link
                    href="/products"
                    className="group flex-shrink-0 w-[280px] rounded-[20px] relative overflow-hidden flex flex-col justify-end"
                  >
                    <img src={megaMenuProducts.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative z-10 p-7 pt-32">
                      <p className="text-hero-foreground font-semibold text-[20px] leading-[1.2] mb-1">Enterprise-grade platforms</p>
                      <p className="text-hero-foreground/60 text-sm leading-relaxed mb-5">Scalable, secure, and built for growth</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        View Products <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-x-12">
                      {productsMenu.map((item) => (
                        <Link key={item.title} href={item.href} className="block group p-5 rounded-xl border border-border/40 hover:border-primary/20 hover:bg-muted/5 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-[18px] font-bold text-foreground group-hover:text-primary transition-colors mb-1">{item.title}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link href="/hire-developers" className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-semibold hover:bg-foreground/90 transition-colors w-fit">
                      <Users className="w-4 h-4" /> Hire a Developer
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>

      {/* Mobile Menu - outside nav to avoid backdrop-blur containing block */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-hero lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="p-6 pt-24 space-y-1">
              <Link href="/" onClick={() => setIsOpen(false)} className="block py-3.5 text-[15px] font-medium text-hero-foreground/80 hover:text-primary border-b border-hero-foreground/[0.06]">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block py-3.5 text-[15px] font-medium text-hero-foreground/80 hover:text-primary border-b border-hero-foreground/[0.06]">
                About Us
              </Link>
              
              <MobileAccordion label="Services" items={[...servicesMenu, ...ecommercePlatforms, ...marketingServices, { icon: Users, title: "Hire Developers", desc: "Dedicated developers from India", href: "/hire-developers" }]} onClose={() => setIsOpen(false)} />
              <MobileAccordion label="Industries" items={[...industriesMenu, { icon: Users, title: "Hire Developers", desc: "Dedicated developers from India", href: "/hire-developers" }]} onClose={() => setIsOpen(false)} />
              <MobileAccordion label="Products" items={[...productsMenu, { icon: Users, title: "Hire Developers", desc: "Dedicated developers from India", href: "/hire-developers" }]} onClose={() => setIsOpen(false)} />

              <Link href="/projects" onClick={() => setIsOpen(false)} className="block py-3.5 text-[15px] font-medium text-hero-foreground/80 hover:text-primary border-b border-hero-foreground/[0.06]">
                Our Projects
              </Link>
              <Link href="/resources" onClick={() => setIsOpen(false)} className="block py-3.5 text-[15px] font-medium text-hero-foreground/80 hover:text-primary border-b border-hero-foreground/[0.06]">
                Resources
              </Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="block py-3.5 text-[15px] font-medium text-hero-foreground/80 hover:text-primary border-b border-hero-foreground/[0.06]">
                Blog
              </Link>

              <div className="pt-8 pb-10 space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openContactDialog();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-[15px] hover:bg-primary/90 transition-colors"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
