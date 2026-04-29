"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Activity, Calendar, FileText, CreditCard, FlaskConical, Pill, BarChart3, MessageSquare } from "lucide-react";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CaseStudyBreadcrumb from "@/components/CaseStudyBreadcrumb";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import portfolioMedoc from "@/assets/portfolio-medoc.jpeg";

const modules = [
  { icon: FileText, title: "EMR", desc: "Complete digital patient records — history, prescriptions, lab results, and treatment plans accessible instantly during consultations." },
  { icon: Calendar, title: "Appointments & Scheduling", desc: "Smart doctor calendars, queue management, and automated SMS/WhatsApp reminders to reduce no-shows." },
  { icon: Activity, title: "OPD/IPD Management", desc: "End-to-end outpatient and inpatient workflows — registration, consultation, token management, and digital prescriptions." },
  { icon: CreditCard, title: "Billing & Invoicing", desc: "GST-ready invoices, multiple payment modes, discounts, and real-time revenue tracking." },
  { icon: FlaskConical, title: "Laboratory (LIS)", desc: "Digital test orders, sample tracking, automated workflows, and e-reports linked to patient records." },
  { icon: Pill, title: "Pharmacy Management", desc: "Stock control, batch/expiry tracking, barcode billing, POS dispensing, and audit controls." },
  { icon: BarChart3, title: "MIS Dashboards", desc: "Real-time dashboards for revenue trends, doctor productivity, inventory usage, and GST reports." },
  { icon: MessageSquare, title: "WhatsApp & SMS Reminders", desc: "Automated appointment alerts, follow-ups, payment notifications, and test result updates." },
];

const clinicTypes = ["General Physician", "Specialty Clinics", "Multi-Specialty", "Dental", "Ayurveda", "Pediatric", "Dermatology & Cosmetology", "Diagnostics & Lab", "Physiotherapy", "Ophthalmology", "Fertility & IVF", "Psychiatry"];

const techStack = ["React", "Node.js", "PostgreSQL", "REST APIs", "Cloud Infrastructure", "WhatsApp Business API", "SMS Gateway", "Role-Based Access Control"];

const results = [
  { metric: "2,000+", label: "Clinics & Hospitals" },
  { metric: "8,000+", label: "Doctors Using Daily" },
  { metric: "10+", label: "Years of Expertise" },
  { metric: "99%", label: "Client Satisfaction" },
];

const CaseStudyMedoc = () => {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="min-h-screen">
      
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
          <CaseStudyBreadcrumb name="MEDOC HMS" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 font-display">Our Product — Healthcare</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-2 font-display">MEDOC HMS</h1>
              <p className="text-lg text-primary font-medium mb-4">All-in-One Clinic Management Software</p>
              <p className="text-lg text-white/50 leading-relaxed mb-6">Cloud-based hospital management system built for Indian healthcare. Simplifies appointments, billing, EMR, pharmacy, LIMS, and reporting — trusted by 2,000+ clinics nationwide.</p>
              <div className="flex flex-wrap gap-2">
                {["Healthcare", "SaaS", "Cloud", "EMR"].map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
              <img src={portfolioMedoc.src} alt="MEDOC HMS clinic management dashboard" className="w-full h-[350px] object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl font-bold text-primary font-display mb-1">{r.metric}</p>
                <p className="text-sm text-muted-foreground">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6"><div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">Why MEDOC HMS?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">MEDOC HMS is India's #1 clinic management software designed for busy clinics. Staff learn the system quickly, reduce errors, and work faster without constant training. The platform maintains complete digital patient records including history, prescriptions, lab results, and treatment plans — accessible instantly during consultations.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">With secure cloud-based architecture, clinics access data anytime, from anywhere. Information stays secure, backed up, and available even during power or system failures. The system provides powerful clinic management features without expensive hardware or high upfront costs — ideal for solo clinics and multi-specialty centers alike.</p>
            <p className="text-muted-foreground leading-relaxed">With 10+ years of experience building clinic management software for real-world Indian healthcare workflows, MEDOC is designed to reduce daily operational load and improve patient care.</p>
          </motion.div>
        </div></div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 font-display">Complete Clinic Management Suite</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {modules.map((m, i) => (
                <motion.div key={m.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-2xl border border-border hover:border-primary/20 transition-all bg-background">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <m.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinic Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Clinics We Serve</p>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Built for Every Clinical Workflow</h2>
            <div className="flex flex-wrap gap-3">
              {clinicTypes.map(type => (
                <span key={type} className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 border border-border px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />{type}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Tech Stack</p>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map(tech => (<span key={tech} className="px-4 py-2.5 rounded-full text-sm font-medium bg-primary/5 text-foreground border border-border">{tech}</span>))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
            <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">"MEDOC HMS transformed how we run our multi-specialty clinic. From appointment booking to billing and lab reports — everything is paperless now. Our staff efficiency improved dramatically and patient wait times dropped by 40%."</p>
            <p className="font-semibold text-foreground">Dr. Rajesh Kumar</p>
            <p className="text-sm text-muted-foreground">Medical Director, Multi-Specialty Clinic</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Ready to Digitize Your Clinic?</h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">Join 2,000+ clinics running smarter with MEDOC HMS.</p>
            <button onClick={() => openContactDialog()} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">Book a Free Demo <ArrowRight className="w-4 h-4" /></button>
          </motion.div>
        </div>
      </section>

      <RelatedCaseStudies current="medoc-hms" />
      <Footer />
    </div>
  );
};

export default CaseStudyMedoc;
