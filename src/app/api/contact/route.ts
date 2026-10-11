import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { inquiryTypes, validateContact } from "@/lib/contact";

// Best-effort per-instance rate limit (resets on cold start / differs per serverless instance).
// For heavy traffic, swap in a shared store such as Upstash Redis.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > MAX_PER_WINDOW;
}

const oneLine = (s: string) => s.replace(/[\r\n\u0000-\u001f]+/g, " ").trim();

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  const data = result.data;

  // Honeypot filled in: pretend it worked so bots move on.
  if (data.website) return NextResponse.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again in a little while." },
      { status: 429 }
    );
  }

  const typeLabel = inquiryTypes.find((t) => t.id === data.type)?.label ?? data.type;
  const subject = `New enquiry (${typeLabel}) from ${oneLine(data.name)}`;
  const text = [
    `Name: ${oneLine(data.name)}`,
    `Email: ${oneLine(data.email)}`,
    `Enquiry: ${typeLabel}`,
    `Date: ${data.date || "not specified"}`,
    "",
    data.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Website Enquiries <onboarding@resend.dev>";

  if (!apiKey) {
    // Local development without email set up: log instead of failing.
    if (process.env.NODE_ENV !== "production") {
      console.log(`\n[contact form: RESEND_API_KEY not set, not sending]\n${subject}\n\n${text}\n`);
      return NextResponse.json({ ok: true });
    }
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        error: `The contact form isn't available right now. Please email ${siteConfig.email} directly.`,
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email, // hit "Reply" in your inbox to answer the visitor
        subject,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json(
        { error: `Your message couldn't be sent. Please email ${siteConfig.email} directly.` },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact form network error:", err);
    return NextResponse.json(
      { error: `Your message couldn't be sent. Please email ${siteConfig.email} directly.` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
