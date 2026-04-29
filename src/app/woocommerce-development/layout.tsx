import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WooCommerce Development Agency UAE & India | Expert WordPress Partners | Globify",
  description: "Top WooCommerce development agency in UAE & India. Custom WooCommerce stores, plugin development, migrations & CRO. Unlimited flexibility with WordPress. Get a free growth plan.",
  alternates: { canonical: "https://globify.ae/woocommerce-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Woocommerce development","item":"https://globify.ae/woocommerce-development"}]
          })
        }}
      />
      {children}</>;
}
