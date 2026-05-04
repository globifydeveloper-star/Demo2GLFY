export default function ThankYou() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#0F1219",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", padding: "2rem" }}>

      <div style={{ color: "#fff", fontSize: "22px", fontWeight: "700",
                    marginBottom: "1.5rem", letterSpacing: "1px" }}>Globify</div>

      <div style={{ background: "#fff", borderRadius: "16px", maxWidth: "520px",
                    width: "100%", padding: "3rem 2.5rem", textAlign: "center" }}>

        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#E8590C",
                      display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
               stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{ fontSize: "26px", fontWeight: "700", color: "#0F1219", marginBottom: "0.75rem" }}>
          Thank You!
        </h1>

        <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.65", marginBottom: "2rem" }}>
          We've received your inquiry and our team is already on it.
          You'll hear from one of our experts shortly.
        </p>

        <div style={{ background: "#f9f9f9", borderLeft: "4px solid #E8590C",
                      borderRadius: "0 8px 8px 0", padding: "1rem 1.25rem",
                      textAlign: "left", marginBottom: "2rem" }}>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.6" }}>
            <strong style={{ color: "#0F1219" }}>What happens next?</strong><br />
            Our team reviews your request and will get back to you within{" "}
            <strong style={{ color: "#0F1219" }}>24 hours</strong>. Check your inbox
            for a confirmation email. For urgent queries, reply directly to that email.
          </p>
        </div>

        <a href="/" style={{ display: "inline-block", background: "#E8590C", color: "#fff",
                             fontSize: "14px", fontWeight: "600", padding: "12px 28px",
                             borderRadius: "8px", textDecoration: "none" }}>
          Back to Home
        </a>

        <p style={{ marginTop: "1.5rem", fontSize: "12px", color: "#777" }}>
          © 2025 Globify &nbsp;·&nbsp; info@globify.in
        </p>
      </div>
    </div>
  );
}