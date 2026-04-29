import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Process Automation & Workflows, Smart Business Automation | Globify",
  description: "Streamline repetitive tasks with intelligent automation, from data entry to order processing. Reduce costs by 60% and errors by 99%. UAE & India.",
  alternates: { canonical: "https://globify.ae/process-automation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://globify.ae"},{"@type":"ListItem","position":2,"name":"Process automation","item":"https://globify.ae/process-automation"}]
          })
        }}
      />
      {children}</>;
}
