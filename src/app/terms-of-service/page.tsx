"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const TermsOfService = () => {
  return (
    <>
      
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: February 17, 2026</p>

          <div className="prose prose-sm max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing and using the Globify website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and clients of Globify.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p className="leading-relaxed">Globify provides digital solutions including web development, mobile app development, e-commerce solutions, digital marketing, AI & automation, ERP systems, and digital transformation consulting. Specific deliverables, timelines, and pricing are defined in individual project agreements and proposals.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
              <p className="leading-relaxed">All content on this website, including text, graphics, logos, images, and software, is the property of Globify or its content suppliers and is protected by international intellectual property laws. Upon full payment, clients receive ownership of custom deliverables as specified in their project agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Client Obligations</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and complete information for project execution</li>
                <li>Review and provide timely feedback on deliverables</li>
                <li>Ensure all content provided to Globify does not infringe third-party rights</li>
                <li>Make payments according to agreed schedules</li>
                <li>Maintain confidentiality of shared credentials and access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Payment Terms</h2>
              <p className="leading-relaxed">Payment terms are outlined in individual project proposals. Unless otherwise agreed, projects require an advance payment before commencement. Late payments may result in project delays or suspension. All fees are non-refundable once work has commenced unless otherwise stated in the agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p className="leading-relaxed">Globify shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Confidentiality</h2>
              <p className="leading-relaxed">Both parties agree to maintain confidentiality of proprietary information shared during the course of the engagement. This obligation survives the termination of any agreement between the parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
              <p className="leading-relaxed">Either party may terminate a project engagement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. Globify will provide all deliverables completed to that point.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
              <p className="leading-relaxed">These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Trivandrum, Kerala, India.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact</h2>
              <p className="leading-relaxed">For questions about these Terms of Service, contact us at:</p>
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

export default TermsOfService;
