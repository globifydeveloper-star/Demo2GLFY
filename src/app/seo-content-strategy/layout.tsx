import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO, AEO & Content Strategy, Organic Growth That Compounds",
  description: "Data-driven SEO, AEO, and content marketing services. Technical SEO, answer engine optimization, content strategy, link building, and local SEO that drives sustainable organic traffic and leads.",
  alternates: { canonical: "https://globify.ae/seo-content-strategy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Seo content strategy","item":"https://globify.ae/seo-content-strategy"}]
          })
        }}
      />
      {children}</>;
}
