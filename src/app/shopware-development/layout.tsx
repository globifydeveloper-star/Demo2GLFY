import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopware Development Agency | DACH E-Commerce | Globify",
  description: "Expert Shopware 6 development for Germany, Austria & Netherlands. API-first, headless-ready, B2B commerce. German-engineered e-commerce from €5,000.",
  alternates: { canonical: "https://globify.ae/shopware-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Shopware development","item":"https://globify.ae/shopware-development"}]
          })
        }}
      />
      {children}</>;
}
