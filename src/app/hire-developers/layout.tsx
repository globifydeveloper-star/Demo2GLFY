import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hire Dedicated Developers from India | Globify",
  description: "Hire skilled remote developers from India at 60-70% lower cost. React, Node.js, Python, Shopify, Mobile, DevOps and more. Start in 48 hours with pre-vetted offshore development teams.",
  alternates: { canonical: "https://globify.ae/hire-developers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Hire developers","item":"https://globify.ae/hire-developers"}]
          })
        }}
      />
      {children}</>;
}
