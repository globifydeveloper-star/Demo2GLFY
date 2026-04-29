import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moher Case Study | Globify Portfolio",
  description: "Read the Moher case study to see how Globify delivered transformative digital solutions, custom development, and measurable ROI.",
  alternates: { canonical: "/case-study/moher" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Moher Digital Transformation Case Study",
            "description": "Read the Moher case study to see how Globify delivered transformative digital solutions and custom development.",
            "author": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
            },
            "publisher": {
              "@type": "Organization",
              "name": "Globify",
              "logo": {
                "@type": "ImageObject",
                "url": "https://globify.ae/logo.png"
              }
            },
            "mainEntityOfPage": "https://globify.ae/case-study/moher",
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Case study","item":"https://globify.ae/case-study"},{"@type":"ListItem","position":3,"name":"Moher","item":"https://globify.ae/case-study/moher"}]
          })
        }}
      />
      {children}
    </>
  );
}
