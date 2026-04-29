import type { Metadata } from "next";
import EcommerceClient from "./EcommerceClient";

export const metadata: Metadata = {
  title: "E-Commerce & Headless Commerce Development UAE",
  description: "Build high-converting Shopify Plus stores, headless e-commerce platforms, and scalable B2B/B2C marketplaces with Globify UAE.",
  alternates: {
    canonical: "/ecommerce",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "E-Commerce Development & Strategy",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            }
          })
        }}
      />
      <EcommerceClient />
    </>
  );
}
