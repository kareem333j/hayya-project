declare var Deno: {
  env: { get(key: string): string | undefined };
  serve(handler: (req: Request) => Promise<Response> | Response): void;
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TO_EMAIL = "rezk@hayya-eg.com";
const FROM_EMAIL = "inquiries@hayya-eg.com"; // must be a verified domain in Resend

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { name, companyName, email, country, phone, product, quantity, message } = body;

  // Build a clean HTML email
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #1a2744 0%, #0f1d3a 100%); padding: 32px 40px; text-align: center; }
    .header h1 { color: #D4AF37; margin: 0; font-size: 24px; letter-spacing: 2px; }
    .header p { color: rgba(255,255,255,0.6); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 32px 40px; }
    .body h2 { color: #1a2744; font-size: 18px; margin: 0 0 24px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; }
    .field { margin-bottom: 18px; }
    .field label { display: block; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 4px; }
    .field .value { font-size: 15px; color: #1a2744; font-weight: 500; }
    .message-box { background: #f8f9fa; border-left: 3px solid #D4AF37; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; }
    .message-box p { margin: 0; font-size: 14px; color: #444; line-height: 1.6; }
    .footer { background: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #eee; }
    .footer p { color: #999; font-size: 12px; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>HAYYA</h1>
      <p>New Inquiry Received</p>
    </div>
    <div class="body">
      <h2>&#127757; New Export Inquiry</h2>
      <div class="field">
        <label>Full Name</label>
        <div class="value">${escapeHtml(name ?? "")}</div>
      </div>
      <div class="field">
        <label>Company</label>
        <div class="value">${escapeHtml(companyName ?? "")}</div>
      </div>
      <div class="field">
        <label>Email</label>
        <div class="value"><a href="mailto:${escapeHtml(email ?? "")}" style="color:#D4AF37;">${escapeHtml(email ?? "")}</a></div>
      </div>
      <div class="field">
        <label>Country</label>
        <div class="value">${escapeHtml(country ?? "")}</div>
      </div>
      ${phone ? `<div class="field"><label>Phone</label><div class="value">${escapeHtml(phone)}</div></div>` : ""}
      ${product ? `<div class="field"><label>Product Interest</label><div class="value">${escapeHtml(product)}</div></div>` : ""}
      ${quantity ? `<div class="field"><label>Quantity</label><div class="value">${escapeHtml(quantity)}</div></div>` : ""}
      <div class="field">
        <label>Message</label>
        <div class="message-box"><p>${escapeHtml(message ?? "").replace(/\n/g, "<br>")}</p></div>
      </div>
    </div>
    <div class="footer">
      <p>Sent automatically from hayya-eg.com contact form &middot; ${new Date().toUTCString()}</p>
    </div>
  </div>
</body>
</html>
`;

  const plainText = [
    "New inquiry from HAYYA contact form",
    "=====================================",
    `Name:     ${name}`,
    `Company:  ${companyName}`,
    `Email:    ${email}`,
    `Country:  ${country}`,
    `Phone:    ${phone ?? "—"}`,
    `Product:  ${product ?? "—"}`,
    `Quantity: ${quantity ?? "—"}`,
    "",
    "Message:",
    message,
    "=====================================",
    `Sent: ${new Date().toUTCString()}`,
  ].join("\n");

  const resendPayload = {
    from: `HAYYA Inquiries <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    reply_to: email,
    subject: `New Inquiry: ${companyName} (${country})`,
    html,
    text: plainText,
  };

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resendPayload),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text();
    console.error("Resend error:", errText);
    return new Response(JSON.stringify({ error: "Failed to send email", details: errText }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const resendData = await resendRes.json();
  console.log("Email sent successfully:", resendData.id);

  return new Response(JSON.stringify({ ok: true, id: resendData.id }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
