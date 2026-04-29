import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://globify.ae'),
  title: {
    default: "Globify — Design · Build · Scale",
    template: "%s | Globify"
  },
  description: "Globify is a 360° digital commerce and technology partner delivering web development, ERP solutions, and performance-driven digital growth.",
  keywords: [
    "web development UAE",
    "ERP solutions",
    "ecommerce development",
    "Shopify development",
    "digital transformation",
    "performance marketing",
  ],
  openGraph: {
    title: "Globify — Design · Build · Scale",
    description: "End-to-end web, ERP, and digital commerce solutions for scalable business growth.",
    url: "https://globify.ae",
    siteName: "Globify",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Globify — Design · Build · Scale",
    description: "Web, ERP & digital commerce solutions built for growth.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1NB1MSL4R6" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1NB1MSL4R6');
            gtag('config', 'AW-17163382693');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Globify",
              url: "https://globify.ae",
              logo: "https://globify.ae/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/globify",
                "https://www.instagram.com/globify",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Globify",
              url: "https://globify.ae",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://globify.ae/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
