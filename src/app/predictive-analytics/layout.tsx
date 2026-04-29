import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Predictive Analytics & AI Insights, Data-Driven Growth | Globify",
  description: "Leverage machine learning to forecast trends, optimize inventory, and make data-driven decisions that accelerate growth. Predictive analytics for UAE & India.",
  alternates: { canonical: "https://globify.ae/predictive-analytics" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Predictive analytics","item":"https://globify.ae/predictive-analytics"}]
          })
        }}
      />
      {children}</>;
}
