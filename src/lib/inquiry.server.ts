import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  companyName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  country: z.string().trim().min(2).max(80),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  product: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(1500),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(data: z.infer<typeof inquirySchema>): string {
  const { name, companyName, email, country, phone, product, quantity, message } = data;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;padding:0}
    .wrapper{max-width:600px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}
    .header{background:linear-gradient(135deg,#1a2744 0%,#0f1d3a 100%);padding:32px 40px;text-align:center}
    .header h1{color:#D4AF37;margin:0;font-size:26px;letter-spacing:3px;font-weight:900}
    .header p{color:rgba(255,255,255,.55);margin:6px 0 0;font-size:13px}
    .body{padding:32px 40px}
    .body h2{color:#1a2744;font-size:17px;margin:0 0 24px;border-bottom:2px solid #D4AF37;padding-bottom:10px}
    .field{margin-bottom:16px}
    .field label{display:block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#999;margin-bottom:4px}
    .field .value{font-size:15px;color:#1a2744;font-weight:500}
    .msg-box{background:#f8f9fa;border-left:3px solid #D4AF37;padding:16px;border-radius:0 8px 8px 0;margin-top:6px}
    .msg-box p{margin:0;font-size:14px;color:#444;line-height:1.7}
    .footer{background:#f8f9fa;padding:18px 40px;text-align:center;border-top:1px solid #eee}
    .footer p{color:#bbb;font-size:11px;margin:0}
    a{color:#D4AF37}
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>HAYYA</h1>
      <p>New Export Inquiry — hayya-eg.com</p>
    </div>
    <div class="body">
      <h2>&#127757; Inquiry Details</h2>
      <div class="field"><label>Full Name</label><div class="value">${escapeHtml(name)}</div></div>
      <div class="field"><label>Company</label><div class="value">${escapeHtml(companyName)}</div></div>
      <div class="field"><label>Email</label><div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div></div>
      <div class="field"><label>Country</label><div class="value">${escapeHtml(country)}</div></div>
      ${phone ? `<div class="field"><label>Phone</label><div class="value">${escapeHtml(phone)}</div></div>` : ""}
      ${product ? `<div class="field"><label>Product Interest</label><div class="value">${escapeHtml(product)}</div></div>` : ""}
      ${quantity ? `<div class="field"><label>Quantity</label><div class="value">${escapeHtml(quantity)}</div></div>` : ""}
      <div class="field">
        <label>Message</label>
        <div class="msg-box"><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p></div>
      </div>
    </div>
    <div class="footer">
      <p>Sent automatically from hayya-eg.com &middot; ${new Date().toUTCString()}</p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Server function — runs on the server (Cloudflare Worker / Node).
 * Validates the inquiry payload and sends an email via Resend API.
 * The RESEND_API_KEY env var is never exposed to the browser.
 */
export const sendInquiry = createServerFn({ method: "POST" })
  .validator((raw: unknown) => inquirySchema.parse(raw))
  .handler(async ({ data }) => {
    // Access env depending on runtime (Cloudflare Workers vs Node)
    const apiKey =
      (typeof process !== "undefined" && process.env?.RESEND_API_KEY) ||
      // @ts-expect-error — available in Cloudflare Workers context
      (typeof globalThis.__env__ !== "undefined" && globalThis.__env__?.RESEND_API_KEY) ||
      "";

    if (!apiKey) {
      throw new Error("Email service is not configured. Please set RESEND_API_KEY.");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HAYYA Inquiries <onboarding@resend.dev>",
        to: ["rezk@hayya-eg.com"],
        reply_to: data.email,
        subject: `New Inquiry: ${data.companyName} (${data.country})`,
        html: buildEmailHtml(data),
        text: [
          "New inquiry from HAYYA contact form",
          "=====================================",
          `Name:     ${data.name}`,
          `Company:  ${data.companyName}`,
          `Email:    ${data.email}`,
          `Country:  ${data.country}`,
          `Phone:    ${data.phone || "—"}`,
          `Product:  ${data.product || "—"}`,
          `Quantity: ${data.quantity || "—"}`,
          "",
          "Message:",
          data.message,
          "=====================================",
          `Sent: ${new Date().toUTCString()}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend API error: ${err}`);
    }

    return { ok: true };
  });
