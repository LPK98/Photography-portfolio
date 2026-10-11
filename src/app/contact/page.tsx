import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/config/site";
import { isInquiryType } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about weddings, portraits and commercial work.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const defaultType = isInquiryType(type) ? type : "weddings";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-10">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-serif text-5xl font-normal leading-tight md:text-6xl">
            Let&apos;s talk.
          </h1>
          <div className="mt-6 h-px w-12 bg-accent" aria-hidden />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-foreground/70">
            Tell me about your project: what, when and where. I reply to every
            enquiry personally, usually within a couple of days.
          </p>

          <div className="mt-10 space-y-3 border-t border-line pt-8 text-sm">
            <p className="text-foreground/60">{siteConfig.location}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-accent"
            >
              @{siteConfig.instagram.handle}
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm defaultType={defaultType} />
        </div>
      </div>
    </div>
  );
}
