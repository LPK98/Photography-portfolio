"use client";

import { useState, type FormEvent } from "react";
import { inquiryTypes, type InquiryTypeId } from "@/lib/contact";
import { siteConfig } from "@/config/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";
const labelClass = "mb-2 block text-[10px] uppercase tracking-[0.2em] text-foreground/55";

export default function ContactForm({
  defaultType = "weddings",
}: {
  defaultType?: InquiryTypeId;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(
          body.error ??
            `Something went wrong. Please email ${siteConfig.email} directly.`
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError(
        `Couldn't reach the server. Please check your connection or email ${siteConfig.email}.`
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line p-10 text-center" role="status">
        <p className="font-serif text-3xl">Thank you.</p>
        <p className="mt-3 text-sm text-foreground/65">
          Your message is on its way. I&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border-b border-foreground/30 pb-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:border-accent hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="type" className={labelClass}>
            I&apos;m enquiring about
          </label>
          <select
            id="type"
            name="type"
            defaultValue={defaultType}
            className={`${fieldClass} bg-background`}
          >
            {inquiryTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={labelClass}>
            Date (optional)
          </label>
          <input id="date" name="date" type="date" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite" className="min-h-5 text-sm text-red-600 dark:text-red-400">
        {status === "error" && error}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-foreground px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
