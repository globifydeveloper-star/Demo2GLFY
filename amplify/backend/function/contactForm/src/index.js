const { Resend } = require("resend");

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
let body = {};

try {
  if (event.body) {
    body = typeof event.body === "string"
      ? JSON.parse(event.body)
      : event.body;
  } else if (event.arguments) {
    body = event.arguments; // fallback (Amplify sometimes uses this)
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

    const adminEmail = resend.emails.send({
      from: "Globify Leads <noreply@globify.ae>",
      to: "info@globify.in",
      subject: subjectLine,
      html: emailHtml,
    });

    let userEmail = null;
    if (email) {
      userEmail = resend.emails.send({
        from: "Globify <noreply@globify.ae>",
        to: email,
        subject: "We've received your inquiry",
        html: `<p>Thanks ${name || "there"}, we’ll contact you soon.</p>`,
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