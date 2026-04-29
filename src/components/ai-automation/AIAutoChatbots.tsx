"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Users, Globe, Headphones, Link2, Languages } from "lucide-react";

const features = [
  { icon: Headphones, title: "Customer Support Automation", desc: "Handle 80% of support queries instantly — from FAQs to order tracking — reducing wait times and agent workload." },
  { icon: Users, title: "Sales & Lead Qualification", desc: "Capture, qualify, and route leads automatically through intelligent conversational flows." },
  { icon: Globe, title: "WhatsApp, Web & Omnichannel", desc: "Deploy bots across WhatsApp, website, Facebook Messenger, and more — all from one platform." },
  { icon: MessageSquare, title: "AI Assistants for Teams", desc: "Internal bots that help employees access HR policies, IT support, and knowledge bases instantly." },
  { icon: Link2, title: "CRM & ERP Integration", desc: "Connect your chatbot to Salesforce, HubSpot, SAP, and other systems for seamless data flow." },
  { icon: Languages, title: "Multilingual Support", desc: "Serve global audiences with AI bots that communicate fluently in Arabic, English, Hindi, and 50+ languages." },
];

const AIAutoChatbots = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Conversational AI</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-5">
              Chatbots & Conversational AI
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Transform customer engagement with intelligent chatbots that handle support, qualify leads, and drive conversions — 24/7, across every channel your customers use.
            </p>
            <a
              href="#lead-capture"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
            >
              Build Your Chatbot <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl border border-border hover:border-primary/20 transition-all"
              >
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutoChatbots;
