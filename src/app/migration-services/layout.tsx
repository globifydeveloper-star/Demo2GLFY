import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "E-Commerce Migration Services | Zero Downtime | Globify",
  description: "Migrate your store to Shopify, WooCommerce, or headless commerce. Zero downtime, full SEO preservation, complete data migration. 100+ successful migrations.",
  alternates: { canonical: "https://globify.ae/migration-services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Migration services","item":"https://globify.ae/migration-services"}]
          })
        }}
      />
      {children}</>;
}
