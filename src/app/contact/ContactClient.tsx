"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle } from "lucide-react";
// import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const router = useRouter();

    try {
      const res = await fetch("https://0vv875sc0i.execute-api.ap-south-1.amazonaws.com/dev/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

     router.push("/thank-you");
      (e.target as HTMLFormElement).reset();

    } catch (error) {
        // toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-hero pt-32 pb-24">
        <div className="cont  ainer mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-center mb-16"
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                Get in Touch
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-hero-foreground leading-[1.08] mb-6">
                Let's Build Something<br />Extraordinary Together
              </h1>

              <p className="text-hero-foreground/50 text-lg max-w-xl mx-auto leading-relaxed">
                Whether you have a specific project in mind or need strategic guidance, our team is ready to help you scale.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* FORM / SUCCESS */}
              <motion.div
  layout
  transition={{ duration: 0.4 }}
  className="lg:col-span-3 p-8 sm:p-10 rounded-[2rem] border border-hero-foreground/[0.06] bg-hero-foreground/[0.02]"
>

  {/* SUCCESS STATE */}
  {isSuccess && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center min-h-[400px]"
    >
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />

      <h2 className="text-2xl font-semibold text-hero-foreground mb-2">
        Message Sent Successfully
      </h2>

      <p className="text-hero-foreground/60 mb-6 max-w-md">
        We’ve received your request. Our team will get back to you within 24 hours.
      </p>

      <button
        onClick={() => setIsSuccess(false)}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition"
      >
        Send Another Message
      </button>
    </motion.div>
  )}

  {/* FORM STATE */}
  {!isSuccess && (
    <motion.form
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <input type="hidden" name="source" value="Global Contact Page" />

      <div className="grid sm:grid-cols-2 gap-6">
        <input required name="name" placeholder="Full Name" className="input" />
        <input required name="email" type="email" placeholder="Email" className="input" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <input required name="phone" placeholder="Phone" className="input" />
        <input name="company" placeholder="Company" className="input" />
      </div>

      <select required name="service" className="input">
        <option value="">Select a service</option>
        <option>Web & App Development</option>
        <option>Shopify / E-Commerce</option>
        <option>Digital Marketing</option>
        <option>AI & Automation</option>
        <option>ERP Solutions</option>
      </select>

      <textarea required name="message" rows={4} placeholder="Your message..." className="input" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

    </motion.form>
  )}

</motion.div>

              {/* RIGHT SIDE (unchanged) */}
              <motion.div className="lg:col-span-2 space-y-6">
                {offices.map((o) => (
                  <div key={o.city} className="p-5 border rounded-xl">
                    <h4>{o.city}</h4>
                    <p>{o.address}</p>
                    <p>{o.phone}</p>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactClient;
