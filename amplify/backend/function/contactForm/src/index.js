const { Resend } = require("resend");

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    let body = {};

    // Safe parsing
    try {
      if (event.body) {
        body =
          typeof event.body === "string"
            ? JSON.parse(event.body)
            : event.body;
      } else if (event.arguments) {
        body = event.arguments;
      } else {
        console.log("No body found, full event:", JSON.stringify(event));
      }
    } catch (e) {
      console.log("Error parsing body:", event.body);
    }

    console.log("PARSED BODY:", body);

    const {
      name,
      email,
      phone,
      company,
      service,
      plan,
      projectType,
      budget,
      message,
    } = body;

    // Basic validation (important)
    if (!name || !email) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const subjectLine = "New Lead Submission - Globify.in";

    const emailHtml = `
      <h2>New Lead</h2>
      <p><b>Name:</b> ${name || ""}</p>
      <p><b>Email:</b> ${email || ""}</p>
      <p><b>Phone:</b> ${phone || ""}</p>
      <p><b>Company:</b> ${company || ""}</p>
      <p><b>Service:</b> ${service || ""}</p>
      <p><b>Plan:</b> ${plan || ""}</p>
      <p><b>Project Type:</b> ${projectType || ""}</p>
      <p><b>Budget:</b> ${budget || ""}</p>
      <p><b>Message:</b> ${message || ""}</p>
    `;

    // ✅ SEND ADMIN EMAIL (awaited)
    const adminResponse = await resend.emails.send({
      from: "Globify Leads <noreply@globify.in>",
      to: "sales@globify.in",
      subject: subjectLine,
      html: emailHtml,
    });

    console.log("ADMIN EMAIL RESPONSE:", adminResponse);

    // ❌ If Resend failed → stop here
    if (adminResponse.error) {
      console.error("Admin email failed:", adminResponse.error);

      return {
        statusCode: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
          error: "Admin email failed",
          details: adminResponse.error.message,
        }),
      };
    }

    // ✅ SEND USER EMAIL (optional)
    if (email) {
      const userResponse = await resend.emails.send({
        from: "Globify <noreply@globify.in>",
        to: email,
        subject: "We've received your inquiry",
        html: `<p>Thanks ${name || "there"}, we’ll contact you soon.</p>`,
      });

      console.log("USER EMAIL RESPONSE:", userResponse);
    }

    // ✅ SUCCESS RESPONSE
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("LAMBDA ERROR:", err);

    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        error: "Internal server error",
        details: err.message,
      }),
    };
  }
};