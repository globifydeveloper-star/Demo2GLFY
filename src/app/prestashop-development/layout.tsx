import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PrestaShop Development Agency | EU E-Commerce Experts | Globify",
  description: "Expert PrestaShop development for European markets. GDPR-native, multi-language stores for France, Spain, Italy & beyond. Open-source e-commerce from €2,500.",
  alternates: { canonical: "https://globify.ae/prestashop-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Prestashop development","item":"https://globify.ae/prestashop-development"}]
          })
        }}
      />
      {children}</>;
}
