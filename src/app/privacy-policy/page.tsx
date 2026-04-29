"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const PrivacyPolicy = () => {
  return (
    <>
      
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: February 17, 2026</p>

          <div className="prose prose-sm max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">We collect information you provide directly when you fill out contact forms, subscribe to our newsletter, request a consultation, or engage with our services. This may include your name, email address, phone number, company name, and project details.</p>
              <p className="leading-relaxed mt-3">We also automatically collect technical information such as your IP address, browser type, device information, pages visited, and referring URLs through cookies and similar technologies to improve our services and website experience.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To send project updates, proposals, and consultation follow-ups</li>
                <li>To send marketing communications (with your consent), including newsletters, industry insights, and service updates</li>
                <li>To improve our website, services, and user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To analyze website traffic and usage patterns for optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Sharing & Third Parties</h2>
              <p className="leading-relaxed">We do not sell your personal data. We may share information with trusted service providers who assist in operating our website, conducting business, or servicing you, including analytics providers, email marketing platforms, and cloud hosting services. These providers are contractually obligated to keep your information confidential.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies & Tracking</h2>
              <p className="leading-relaxed">Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p className="leading-relaxed">We implement industry-standard security measures including SSL encryption, secure data storage, access controls, and regular security audits to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p className="leading-relaxed">Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
              <p className="leading-relaxed">We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. International Data Transfers</h2>
              <p className="leading-relaxed">As Globify operates from India, UAE, and Germany, your data may be transferred to and processed in these countries. We ensure appropriate safeguards are in place to protect your data in compliance with applicable data protection laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions about this Privacy Policy or your personal data, please contact us at:</p>
              <p className="leading-relaxed mt-2">
                <strong>Email:</strong>{" "}
                <button
                  onClick={() => window.location.href = ['ma','ilto:','sa','les@','glo','bify','.in'].join('')}
                  className="text-primary hover:underline cursor-pointer"
                >
                  sales@globify.in
                </button>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
