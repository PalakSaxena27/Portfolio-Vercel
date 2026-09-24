"use server";

import { headers } from "next/headers";
import { profile } from "@/data/resume";
import {
  emptyFields,
  escapeHtml,
  validate,
  type ContactFields,
  type ContactState,
} from "@/lib/contact";

/**
 * Best-effort throttle. Serverless instances are short-lived and not shared, so
 * this stops casual repeat submissions rather than a determined attacker — pair
 * it with a platform-level WAF rule if abuse ever becomes a real problem.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on long-lived instances.
  if (hits.size > 500) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(k);
    }
  }

  return false;
}

export async function sendMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const fields: ContactFields = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Hidden field no real person fills in.
  if (String(formData.get("company") ?? "")) {
    return {
      status: "success",
      message: "Thanks — your message has been sent.",
      errors: {},
      values: emptyFields,
    };
  }

  const errors = validate(fields);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values: fields,
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "That's a few messages in a row — please try again in a minute.",
      errors: {},
      values: fields,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || profile.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  // No mail provider wired up yet — tell the client so it can hand the message
  // to the visitor's own email app instead of silently dropping it.
  if (!apiKey) {
    return {
      status: "unconfigured",
      message: "Opening your email app…",
      errors: {},
      values: fields,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `Portfolio enquiry: ${fields.subject}`,
        text: [
          `From: ${fields.name} <${fields.email}>`,
          `Subject: ${fields.subject}`,
          "",
          fields.message,
        ].join("\n"),
        html: `
          <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">
            <h2 style="margin:0 0 16px">New message from your portfolio</h2>
            <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
            <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
            <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
            <div style="white-space:pre-wrap;border-left:3px solid #1f45ec;padding-left:14px">${escapeHtml(
              fields.message,
            )}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", response.status, await response.text());
      return {
        status: "error",
        message: "Something went wrong sending that. Please email me directly.",
        errors: {},
        values: fields,
      };
    }

    return {
      status: "success",
      message: "Thanks for reaching out — I'll get back to you shortly.",
      errors: {},
      values: emptyFields,
    };
  } catch (error) {
    console.error("Contact form failed:", error);
    return {
      status: "error",
      message: "Something went wrong sending that. Please email me directly.",
      errors: {},
      values: fields,
    };
  }
}
