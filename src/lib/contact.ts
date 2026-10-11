export const inquiryTypes = [
  { id: "weddings", label: "Wedding or event" },
  { id: "portraits", label: "Portrait session" },
  { id: "commercial", label: "Commercial / editorial" },
  { id: "other", label: "Something else" },
] as const;

export type InquiryTypeId = (typeof inquiryTypes)[number]["id"];

export function isInquiryType(value: unknown): value is InquiryTypeId {
  return inquiryTypes.some((t) => t.id === value);
}

export interface ContactPayload {
  name: string;
  email: string;
  type: InquiryTypeId;
  date: string;
  message: string;
  /** Honeypot: real visitors never fill this in. */
  website: string;
}

export const limits = { name: 100, email: 200, date: 40, message: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(
  input: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "Invalid request." };
  }
  const raw = input as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const data: ContactPayload = {
    name: str(raw.name),
    email: str(raw.email),
    type: isInquiryType(raw.type) ? raw.type : "other",
    date: str(raw.date),
    message: str(raw.message),
    website: str(raw.website),
  };

  if (!data.name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(data.email))
    return { ok: false, error: "Please enter a valid email address." };
  if (data.message.length < 10)
    return { ok: false, error: "Please tell me a little more about your project." };
  if (
    data.name.length > limits.name ||
    data.email.length > limits.email ||
    data.date.length > limits.date ||
    data.message.length > limits.message
  ) {
    return { ok: false, error: "One of the fields is too long." };
  }

  return { ok: true, data };
}
