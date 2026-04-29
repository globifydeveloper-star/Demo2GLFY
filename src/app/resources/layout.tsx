import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resources & Thought Leadership | AI, Automation & Digital Transformation Insights | Globify",
  description: "Access whitepapers, case studies, webinars, and AI insights from Globify's digital transformation experts. Data-driven strategies for enterprise growth.",
  alternates: { canonical: "https://globify.ae/resources" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://globify.ae/resources"}]
          })
        }}
      />
      {children}</>;
}
