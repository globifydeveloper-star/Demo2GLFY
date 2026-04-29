import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Transformation Services, Strategy, Automation & Growth",
  description: "Enterprise digital transformation services for UAE and India. Strategy consulting, ERP automation, AI integration, cloud migration. ROI-focused solutions for CEOs, CTOs & IT leaders.",
  alternates: { canonical: "https://globify.ae/digital-transformation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Digital transformation","item":"https://globify.ae/digital-transformation"}]
          })
        }}
      />
      {children}</>;
}
