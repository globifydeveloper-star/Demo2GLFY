import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services — Web, App, E-Commerce, AI & Marketing",
  description: "Explore Globify's full-stack digital services: web development, mobile apps, e-commerce, digital marketing, AI automation, and ERP solutions for UAE & India.",
  alternates: { canonical: "https://globify.ae/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Services","item":"https://globify.ae/services"}]
          })
        }}
      />
      {children}</>;
}
