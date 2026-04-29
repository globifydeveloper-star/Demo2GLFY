import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO & AEO Services — Search & Answer Engine Optimization",
  description: "Advanced SEO and Answer Engine Optimization (AEO) services: technical SEO, content strategy, link building, and AI search optimization for ChatGPT, Perplexity & Google AI.",
  alternates: { canonical: "https://globify.ae/seo-aeo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Seo aeo","item":"https://globify.ae/seo-aeo"}]
          })
        }}
      />
      {children}</>;
}
