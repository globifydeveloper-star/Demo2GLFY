import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Marketing, SEO, PPC & Performance Growth",
  description: "Results-driven digital marketing services: SEO, PPC, social media, and CRO for businesses in UAE and India. Data-backed strategies that drive ROI.",
  alternates: { canonical: "https://globify.ae/digital-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Digital marketing","item":"https://globify.ae/digital-marketing"}]
          })
        }}
      />
      {children}</>;
}
