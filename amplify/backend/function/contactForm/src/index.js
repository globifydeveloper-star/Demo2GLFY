const { Resend } = require("resend");

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    let body = {};

    try {
      if (event.body) {
        body =
          typeof event.body === "string"
            ? JSON.parse(event.body)
            : event.body;
      } else if (event.arguments) {
        body = event.arguments;
      } else {
        console.log("No body found:", JSON.stringify(event));
      }
    } catch (e) {
      console.log("Error parsing body:", event.body);
    }

    /* ---------------- EXTRACT DATA ---------------- */
    const {
      name,
      email,
      phone,
      company,
      service,
      interest, // fallback from frontend
      plan,
      projectType,
      budget,
      message,
    } = body;

    const finalService = service || interest || "";

    const subjectLine = "New Lead Submission - Globify.in";

    /* ---------------- ADMIN EMAIL ---------------- */
    const emailHtml = `
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border:1px solid #eee; border-radius:8px; overflow:hidden;">
      
      <div style="background:#0F1219; padding:20px; text-align:center; border-bottom:4px solid #E8590C;">
        <h2 style="color:#fff; margin:0;">Globify Leads</h2>
      </div>

      <div style="padding:24px;">
        <h3 style="color:#E8590C;">New Lead Submission</h3>

        <table style="width:100%;">
          ${name ? `<tr><td><b>Name:</b></td><td>${name}</td></tr>` : ""}
          ${email ? `<tr><td><b>Email:</b></td><td>${email}</td></tr>` : ""}
          ${phone ? `<tr><td><b>Phone:</b></td><td>${phone}</td></tr>` : ""}
          ${company ? `<tr><td><b>Company:</b></td><td>${company}</td></tr>` : ""}
          ${finalService ? `<tr><td><b>Service:</b></td><td>${finalService}</td></tr>` : ""}
          ${plan ? `<tr><td><b>Plan:</b></td><td>${plan}</td></tr>` : ""}
          ${projectType ? `<tr><td><b>Project:</b></td><td>${projectType}</td></tr>` : ""}
          ${budget ? `<tr><td><b>Budget:</b></td><td>${budget}</td></tr>` : ""}
        </table>

        <h4 style="margin-top:20px;">Message:</h4>
        <div style="background:#f9f9f9; padding:12px;">
          ${message || "No message"}
        </div>
      </div>

    </div>
    `;

    const adminEmail = resend.emails.send({
      from: "Globify Leads <noreply@globify.ae>",
      to: "info@globify.in",
      subject: subjectLine,
      html: emailHtml,
    });

    /* ---------------- USER EMAIL ---------------- */
    let userEmail = null;

    if (email) {
      const firstName = name?.split(" ")[0] || "there";

      const userEmailHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border:1px solid #eee; border-radius:8px; overflow:hidden;">
        
        <div style="background:#0F1219; padding:20px; text-align:center; border-bottom:4px solid #E8590C;">
          <h2 style="color:#fff; margin:0;">Globify</h2>
        </div>

        <div style="padding:24px;">
          <h3 style="color:#E8590C;">Thanks for reaching out!</h3>

          <p>Hi ${firstName},</p>

          <p style="color:#555;">
            We've received your request and our team is reviewing it.
            One of our experts will get back to you within 24 hours.
          </p>

          <p style="color:#555;">
            If you have any urgent questions, just reply to this email.
          </p>

          <hr style="margin:20px 0;" />

          <p>
            Best regards,<br/>
            <strong style="color:#E8590C;">Globify Team</strong>
          </p>
        </div>

        <div style="background:#f9f9f9; padding:12px; text-align:center; font-size:12px;">
          © ${new Date().getFullYear()} Globify
        </div>

      </div>
      `;

      userEmail = resend.emails.send({
        from: "Globify <noreply@globify.ae>",
        to: email,
        subject: "We've received your inquiry",
        html: userEmailHtml,
      });
    }

    await Promise.all([adminEmail, userEmail]);

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};