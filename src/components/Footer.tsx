"use client";

import { Mail, Phone, MapPin, ShieldCheck, Award, BadgeCheck, Star } from "lucide-react";
import Link from 'next/link';

import globifyLogo from "@/assets/globify-logo.png";

const offices = [
  {
    city: "India",
    address: "Amster House, Technopark Trivandrum, Kerala",
    phone: "+91 9544086877",
  },
  {
    city: "UAE",
    address: "Office 310, Al Qusais Plaza Building, Damascus Street, Qusais, Dubai UAE",
    phone: "+971-547308673",
  },
  {
    city: "Germany",
    address: "101, Eichendorffring, 35394 Gießen",
    phone: "+49-1777072309",
  },
];

const Footer = () => {
  const services = [
    { label: "Web Development", href: "/web-development" },
    { label: "App Development", href: "/app-development" },
    { label: "E-Commerce", href: "/ecommerce" },
    { label: "Shopify Development", href: "/shopify-development" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "AI & Automation", href: "/ai-automation" },
    { label: "ERP Solutions", href: "/erp-solutions" },
    { label: "AI Transformation Framework", href: "/ai-transformation-framework" },
    { label: "CRO & Revenue Engineering", href: "/cro-revenue-engineering" },
  ];
  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer id="contact" className="section-dark border-t border-section-dark-foreground/10">

      {/* Global Offices */}
      <div className="container mx-auto px-5 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-6 sm:mb-8 text-center">Our Global Offices</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div key={office.city} className="p-6 rounded-2xl border border-section-dark-foreground/[0.06] hover:border-primary/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <h5 className="font-semibold text-section-dark-foreground text-sm">{office.city}</h5>
              </div>
              <p className="text-sm text-section-dark-foreground/40 leading-relaxed mb-3">{office.address}</p>
              <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-section-dark-foreground/50 hover:text-primary transition-colors" onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag('event', 'contact_call');
                  (window as any).gtag('event', 'conversion', {
                    send_to: 'AW-17163382693/470NCM_1kqEcEKXfkfg_',
                    value: 1.0,
                    currency: 'AED'
                  });
                }
              }}>
                <Phone className="w-3.5 h-3.5" /> {office.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-section-dark-foreground/[0.06]" />

      <div className="container mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="bg-white rounded-md px-3 py-1.5 inline-block">
                <img src={globifyLogo.src} alt="Globify - Design · Build · Scale" className="h-7 w-auto" width={120} height={28} />
              </div>
            </div>
            <p className="text-sm text-section-dark-foreground/50 leading-relaxed mb-6">
              Empowering businesses with innovative digital solutions, from custom development to AI-driven automation.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = ['ma','ilto:','sa','les@','glo','bify','.in'].join('')}
                className="flex items-center gap-2 text-sm text-section-dark-foreground/50 hover:text-primary transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" /> <span>sales<span className="hidden">nospam</span>@globify.in</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                { icon: ShieldCheck, label: "ISO 27001" },
                { icon: Award, label: "Google Partner" },
                { icon: BadgeCheck, label: "Shopify Partner" },
                { icon: Star, label: "Clutch Top Agency" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-section-dark-foreground/10 bg-section-dark-foreground/[0.04]"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-medium text-section-dark-foreground/50 whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-section-dark-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-section-dark-foreground/50 hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-section-dark-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm text-section-dark-foreground/50 hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (replaced dead newsletter) */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-section-dark-foreground mb-6">Get in Touch</h4>
            <p className="text-sm text-section-dark-foreground/50 mb-4">
              Ready to start your next project? Reach out to our team for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-section-dark-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 pb-20 lg:pb-0">
          <p className="text-sm text-section-dark-foreground/30">
            © 2026 Globify. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-section-dark-foreground/30 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-section-dark-foreground/30 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
