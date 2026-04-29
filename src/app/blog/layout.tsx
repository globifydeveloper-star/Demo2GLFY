import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog — Digital Commerce Insights & Trends",
  description: "Expert insights on e-commerce, Shopify, WordPress, mobile apps, AI automation, and marketplace strategies for businesses in UAE and India.",
  alternates: { canonical: "https://globify.ae/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://globify.ae/blog"}]
          })
        }}
      />
      {children}</>;
}
