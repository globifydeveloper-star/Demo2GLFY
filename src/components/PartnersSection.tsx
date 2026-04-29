"use client";

import { motion } from "framer-motion";

import shopifyLogo from "@/assets/partners/shopify.svg";
import metaLogo from "@/assets/partners/meta.svg";
import mailchimpLogo from "@/assets/partners/mailchimp.svg";
import awsLogo from "@/assets/partners/aws.svg";
import googleLogo from "@/assets/partners/google.svg";
import hubspotLogo from "@/assets/partners/hubspot.svg";
import microsoftLogo from "@/assets/partners/microsoft.svg";
import cloudflareLogo from "@/assets/partners/cloudflare.svg";
import stripeLogo from "@/assets/partners/stripe.svg";

type Partner = 
  | { type: "image"; name: string; logo: string }
  | { type: "text"; name: string; style: string; suffix?: string; suffixStyle?: string };

const partners: Partner[] = [
  { type: "image", name: "Shopify", logo: shopifyLogo.src },
  { type: "text", name: "klaviyo", style: "font-bold text-2xl md:text-3xl" },
  { type: "image", name: "Meta", logo: metaLogo.src },
  { type: "text", name: "CloudQ", style: "font-extrabold text-2xl md:text-3xl tracking-wide" },
  { type: "image", name: "Mailchimp", logo: mailchimpLogo.src },
  { type: "image", name: "AWS", logo: awsLogo.src },
  { type: "image", name: "Google", logo: googleLogo.src },
  { type: "image", name: "HubSpot", logo: hubspotLogo.src },
  { type: "text", name: "make.", style: "font-extrabold text-2xl md:text-3xl" },
  { type: "image", name: "Microsoft", logo: microsoftLogo.src },
  { type: "image", name: "Cloudflare", logo: cloudflareLogo.src },
  { type: "image", name: "Stripe", logo: stripeLogo.src },
];

const PartnersSection = () => {
  return (
    <section className="py-10 sm:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Our Digital Collaborators
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Powering next-level ecommerce
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed text-base">
            The digital ecosystem is packed with tools to level up your site, boost revenue, and create standout customer experiences. We've partnered with the best in the business to help you unlock next-level success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-10 sm:gap-y-14">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center min-h-[3rem] overflow-hidden"
            >
              {partner.type === "image" ? (
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                    className="h-7 sm:h-8 md:h-10 w-auto max-w-[80px] sm:max-w-[100px] md:max-w-none object-contain flex-shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-foreground font-semibold text-sm sm:text-sm md:text-base leading-tight truncate">{partner.name}</span>
                    <span className="text-muted-foreground text-[10px] sm:text-[10px] uppercase tracking-widest">Partner</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col min-w-0">
                  <span className={`text-foreground ${partner.style} truncate`}>
                    {partner.name}
                    {partner.suffix && <span className={partner.suffixStyle}>{partner.suffix}</span>}
                  </span>
                  <span className="text-muted-foreground text-[10px] sm:text-[10px] uppercase tracking-widest mt-0.5">Partner</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
