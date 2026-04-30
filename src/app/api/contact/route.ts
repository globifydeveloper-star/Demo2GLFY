import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract non-hidden fields
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (!key.startsWith("_")) {
        data[key] = value.toString();
      }
    });

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
    } = data;

    // A fallback subject line if not provided
    const subjectLine = "New Lead Submission - Globify.in";

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #171717; background-color: #FFFFFF; border: 1px solid #E5E5E5; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #0F1219; padding: 24px; text-align: center; border-bottom: 4px solid #E8590C;">
          <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 600; letter-spacing: -0.5px;">Globify Leads</h1>
        </div>
        <div style="padding: 32px 24px;">
          <h2 style="color: #E8590C; font-size: 20px; margin-top: 0; margin-bottom: 24px;">New Lead Submission</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            ${name ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; width: 35%; color: #737373;"><strong>Name:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${name}</td></tr>` : ""}
            ${email ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Email:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${email}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Phone:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${phone}</td></tr>` : ""}
            ${company ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Company:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${company}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Service:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${service}</td></tr>` : ""}
            ${plan ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Plan/Package:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${plan}</td></tr>` : ""}
            ${projectType ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Project Type:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${projectType}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; color: #737373;"><strong>Budget:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #E5E5E5; font-weight: 500;">${budget}</td></tr>` : ""}
          </table>
          
          <h3 style="margin-top: 32px; margin-bottom: 12px; color: #E8590C; font-size: 16px;">Message:</h3>
          <div style="background-color: #F9F9F9; padding: 16px; border-radius: 6px; border: 1px solid #E5E5E5; white-space: pre-wrap; font-size: 15px; color: #4A4A4A; line-height: 1.5;">${message || "No message provided."}</div>
        </div>
      </div>
    `;

    const adminEmailPromise = resend.emails.send({
      from: "Globify Leads <noreply@globify.ae>",
      to: "sales@globify.in",
      subject: subjectLine,
      html: emailHtml,
    });

    // Fire the user confirmation email concurrently if email is provided
    let userEmailPromise = null;
    if (email) {
      const userEmailHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #171717; background-color: #FFFFFF; border: 1px solid #E5E5E5; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #0F1219; padding: 24px; text-align: center; border-bottom: 4px solid #E8590C;">
            <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 600; letter-spacing: -0.5px;">Globify</h1>
          </div>
          <div style="padding: 32px 24px;">
            <h2 style="color: #E8590C; font-size: 20px; margin-top: 0; margin-bottom: 16px;">Thanks for reaching out!</h2>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 16px;">Hi ${name ? name.split(' ')[0] : 'there'},</p>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 16px; color: #4A4A4A;">We've received your request and our team is currently reviewing it. One of our experts will get back to you within 24 hours.</p>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 24px; color: #4A4A4A;">If you have any immediate questions, feel free to reply directly to this email.</p>
            <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 24px 0;">
            <p style="font-size: 15px; margin: 0; color: #171717;">Best regards,<br/><strong style="color: #E8590C;">The Globify Team</strong></p>
          </div>
          <div style="background-color: #F9F9F9; padding: 16px; text-align: center; font-size: 13px; color: #737373;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Globify. All rights reserved.</p>
          </div>
        </div>
      `;

      userEmailPromise = resend.emails.send({
        from: "Globify <noreply@globify.ae>",
        to: email,
        subject: "We've received your inquiry - Globify",
        html: userEmailHtml,
      });
    }

    // 1. MAP DATA STRICTLY TO CRM SCHEMA
    const getField = (possibleKeys: string[]) => {
      const key = Object.keys(data).find(k => possibleKeys.some(pK => k.toLowerCase().includes(pK.toLowerCase())));
      return key ? data[key] : "";
    };

    const crmName = getField(["Name"]);
    const crmCompany = getField(["Company"]) || "N/A";
    const crmEmail = getField(["Email"]);
    const crmPhone = getField(["Phone"]);
    const crmCountry = getField(["Country"]) || "UAE";
    const crmDescription = getField(["Message", "Tell Us", "Project", "Requirements"]);
    const rawService = getField(["Service", "Project Type", "Package"]);
    
    let serviceInterest = "Website Development";
    const serviceLower = rawService.toLowerCase();
    if (serviceLower.includes("ecommerce") || serviceLower.includes("shopify") || serviceLower.includes("magento")) serviceInterest = "E-commerce Development";
    else if (serviceLower.includes("erp") || serviceLower.includes("medoc") || serviceLower.includes("system")) serviceInterest = "ERP / Business System";
    else if (serviceLower.includes("app")) serviceInterest = "Mobile App";
    else if (serviceLower.includes("marketing") || serviceLower.includes("seo") || serviceLower.includes("ppc")) serviceInterest = "Digital Marketing";
    else if (serviceLower.includes("ai") || serviceLower.includes("automation")) serviceInterest = "AI / Automation";
    else if (serviceLower.includes("migration") || serviceLower.includes("revamp")) serviceInterest = "Revamp / Migration";

    // 2. SEND TO LOVABLE CRM
    const CRM_ENDPOINT = "https://tqfmxqbpvqqbpwlzpcgp.supabase.co/functions/v1/capture-lead";
    
    const crmPromise = fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: crmName,
        company: crmCompany,
        email: crmEmail,
        phone: crmPhone,
        country: crmCountry,
        description: crmDescription,
        service_interest: serviceInterest,
      }),
    }).catch(err => {
      console.error("Failed to send lead to CRM:", err);
      return null;
    });

    // Wait for emails and CRM to finish
    const [adminResult, userResult] = await Promise.all([
      adminEmailPromise,
      userEmailPromise,
      crmPromise,
    ]);

    if (adminResult.error) {
      console.error("Resend API Error (Admin):", adminResult.error);
      return NextResponse.json({ error: adminResult.error.message }, { status: 400 });
    }

    if (userResult && userResult.error) {
      console.error("Resend API Error (User):", userResult.error);
      // We still return success if the admin got the lead, but we log the error
    }

    return NextResponse.json({ success: true, responseData: adminResult.data });
  } catch (error) {
    console.error("Internal Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
