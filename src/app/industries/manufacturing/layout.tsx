import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Manufacturing, Predictive Maintenance & Autonomous Production | Globify",
  description: "Globify builds AI-powered smart factory platforms with predictive maintenance, computer vision quality control, and autonomous production optimization. AEO-optimized. 45% OEE improvement.",
  alternates: { canonical: "https://globify.ae/industries/manufacturing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://globify.ae/industries"},{"@type":"ListItem","position":3,"name":"Manufacturing","item":"https://globify.ae/industries/manufacturing"}]
          })
        }}
      />
      {children}</>;
}
