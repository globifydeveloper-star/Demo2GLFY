"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, Clock,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Layers,
  Globe, ChevronRight, MessageCircle, Phone,
  Send, Lock, CreditCard, Truck, Languages, Receipt, Loader2
} from "lucide-react";
import { toast } from "sonner";

const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('email', email);
    formData.append('source', `Shopify Spain - ${id}`);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("¡Gracias! Nos pondremos en contacto en breve.");
    } catch {
      toast.error("Algo salió mal. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>¡Gracias!</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Nuestros expertos en Shopify se pondrán en contacto en 24 horas.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Auditoría Gratis <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Casi listo — cuéntanos un poco más:</p>
          <Input required name="name" placeholder="Tu nombre *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Número de teléfono *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Nombre de la empresa" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select required name="revenue" className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Rango de ingresos mensuales</option>
            <option>Menos de €25K</option>
            <option>€25K – €100K</option>
            <option>€100K – €500K</option>
            <option>€500K+</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Enviando..." : "Obtener mi plan de crecimiento"}
          </Button>
        </form>
      )}
    </div>
  );
};

const ShopifySpain = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(230,35%,14%)] to-[hsl(240,40%,18%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                Expertos en Shopify en España — Globify
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Impulsa tu <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Tienda Shopify</span> en España
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                Escala tu marca con la agencia líder en desarrollo Shopify en España. Desde diseño personalizado hasta integración con pasarelas de pago locales — construimos tiendas que venden.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["Partners Oficiales", "Pagos Locales", "Integración Logística", "Optimizado para Conversión"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero-es" variant="dark" /></motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:block relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><ShoppingCart className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-white font-bold">Experiencia Local</h3>
                    <p className="text-white/40 text-sm">Madrid, Barcelona, Valencia</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: CreditCard, title: "Pasarelas de Pago", desc: "Redsys, Stripe, PayPal, Klarna." },
                    { icon: Truck, title: "Logística España", desc: "Correos, SEUR, DHL, MRW." },
                    { icon: Languages, title: "Multi-idioma", desc: "Castellano, Català, Galego, Euskara." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "100+", label: "Tiendas Lanzadas" },
              { val: "€20M+", label: "Ventas Procesadas" },
              { val: "Soporte Local", label: "Equipo en España" },
              { val: "4.9/5", label: "Valoración Clientes" },
              { val: "Shopify", label: "Agencia Partner" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <WebDevClients />

      {/* WHY SHOPIFY SPAIN */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">¿Listo para escalar tu negocio en España?</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Únete a las marcas líderes en España que confían en Globify para su éxito en Shopify. Obtén tu sesión de estrategia gratuita hoy mismo.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid-es" variant="dark" /></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(230,35%,14%)] to-[hsl(240,40%,18%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">Crea una tienda que enamore a tus clientes</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-10">Deja de adivinar y empieza a vender. Nuestro equipo de Shopify está listo para llevar tu marca al siguiente nivel.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-8"><InlineLeadForm id="final-es" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white gap-2 font-semibold">Reserva una llamada</Button>
              <a href="https://wa.me/971547308673?text=Hola%20Globify%2C%20estoy%20interesado%20en%20el%20desarrollo%20de%20Shopify%20en%20España." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}><MessageCircle className="w-5 h-5" /> WhatsApp</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-spain" links={["shopify-dev", "shopify-plus", "shopify-themes", "ecommerce", "digital-marketing", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default ShopifySpain;
