"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offices = [
  {
    city: "UAE",
    address: "Office 310, Al Qusais Plaza Building, Damascus Street, Qusais, Dubai UAE",
    phone: "+971-547308673",
  },
  {
    city: "India",
    address: "Amster House, Technopark Trivandrum, Kerala",
    phone: "+91 9544086877",
  },
  {
    city: "Germany",
    address: "101, Eichendorffring, 35394 Gießen",
    phone: "+49-1777072309",
  },
];

const ContactClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const data = Object.fromEntries(formData.entries());

const res = await fetch("https://0vv875sc0i.execute-api.ap-south-1.amazonaws.com/dev/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
      if (!res.ok) throw new Error("Failed to submit");
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("Message Sent!", {
        description: "We'll be in touch within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-hero pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-center mb-16"
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Get in Touch</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-hero-foreground leading-[1.08] mb-6">
                Let's Build Something<br />Extraordinary Together
              </h1>
              <p className="text-hero-foreground/50 text-lg max-w-xl mx-auto leading-relaxed">
                Whether you have a specific project in mind or need strategic guidance, our team is ready to help you scale.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Form Side */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.1 }}
                className="lg:col-span-3 p-8 sm:p-10 rounded-[2rem] border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="source" value="Global Contact Page" />
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-hero-foreground/70">Full Name *</label>
                      <input 
                        required 
                        name="name" 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3.5 rounded-xl bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-hero-foreground/70">Email Address *</label>
                      <input 
                        required 
                        name="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full px-4 py-3.5 rounded-xl bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-hero-foreground/70">Phone Number *</label>
                      <input 
                        required 
                        name="phone" 
                        type="tel" 
                        placeholder="+971 50 000 0000" 
                        className="w-full px-4 py-3.5 rounded-xl bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-hero-foreground/70">Company Name</label>
                      <input 
                        name="company" 
                        type="text" 
                        placeholder="Your Company" 
                        className="w-full px-4 py-3.5 rounded-xl bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-hero-foreground/70">How can we help? *</label>
                    <select 
                      required 
                      name="interest" 
                      className="w-full px-4 py-3.5 rounded-xl bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-hero-foreground/70 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option>Web & App Development</option>
                      <option>Shopify / E-Commerce</option>
                      <option>Digital Marketing & SEO</option>
                      <option>AI & Automation</option>
                      <option>ERP Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-hero-foreground/70">Message *</label>
                    <textarea 
                      required 
                      name="message" 
                      rows={4}
                      placeholder="Tell us a little bit about your project or inquiry..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-hero-foreground text-sm placeholder:text-hero-foreground/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending Message...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                  <p className="text-xs text-hero-foreground/30 text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy. We aim to respond within 24 hours.
                  </p>
                </form>
              </motion.div>

              {/* Contact Info Side */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 space-y-10"
              >
                <div>
                  <h3 className="text-xl font-bold text-hero-foreground mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <a href="mailto:sales@globify.in" className="flex items-center gap-4 p-4 rounded-xl border border-hero-foreground/[0.06] hover:border-primary/30 hover:bg-hero-foreground/[0.02] transition-all group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-hero-foreground/40 uppercase tracking-wider mb-1">Email Us</p>
                        <p className="text-sm font-medium text-hero-foreground">sales@globify.in</p>
                      </div>
                    </a>
                    <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-hero-foreground/[0.06] hover:border-[#25D366]/30 hover:bg-hero-foreground/[0.02] transition-all group" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}>
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageSquareQuote className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-hero-foreground/40 uppercase tracking-wider mb-1">WhatsApp Dubai</p>
                        <p className="text-sm font-medium text-hero-foreground">+971 54 730 8673</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-hero-foreground mb-6">Global Offices</h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div key={office.city} className="p-5 rounded-xl border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-hero-foreground">{office.city}</h4>
                        </div>
                        <p className="text-sm text-hero-foreground/50 leading-relaxed mb-3">
                          {office.address}
                        </p>
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-hero-foreground/70 hover:text-primary transition-colors" onClick={() => {
                          if (typeof window !== "undefined" && (window as any).gtag) {
                            (window as any).gtag('event', 'contact_call');
                          }
                        }}>
                          <Phone className="w-3.5 h-3.5" /> {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Lucide icon helper
function MessageSquareQuote(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default ContactClient;
