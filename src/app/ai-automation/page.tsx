import type { Metadata } from "next";
import AiAutomationClient from "./AiAutomationClient";

export const metadata: Metadata = {
  title: "AI & Intelligent Automation Services | Globify UAE",
  description: "Enterprise AI implementations. Automate workflows, deploy machine learning, and extract actionable insights. Drive 60% operational efficiency with our AI solutions.",
  alternates: {
    canonical: "/ai-automation",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI & Intelligent Automation",
            "description": "Enterprise AI implementation, machine learning, and workflow automation services.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            },
            "areaServed": ["United Arab Emirates", "India", "Global"]
          })
        }}
      />
      <AiAutomationClient />
    </>
  );
}
