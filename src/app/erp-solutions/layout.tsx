import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ERP Solutions, Custom Enterprise Resource Planning",
  description: "Custom ERP solutions for manufacturing, healthcare, and retail. MEDOC HMS and EKASYS ERP for businesses in UAE and India. Scalable and secure.",
  alternates: { canonical: "https://globify.ae/erp-solutions" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Erp solutions","item":"https://globify.ae/erp-solutions"}]
          })
        }}
      />
      {children}</>;
}
