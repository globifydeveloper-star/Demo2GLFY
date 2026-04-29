import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Full-Service Digital Agency UAE | AI & Tech Solutions",
  description: "Enterprise digital transformation, web apps, headless e-commerce, and high-performance marketing in Dubai & India. Explore Globify's core services.",
  alternates: {
    canonical: "/services",
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
            "serviceType": "Digital Transformation & Web Development",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            },
            "areaServed": ["United Arab Emirates", "India"]
          })
        }}
      />
      <ServicesClient />
    </>
  );
}
