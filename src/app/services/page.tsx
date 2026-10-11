import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/home/CallToAction";
import { processSteps, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding, portrait and commercial photography services.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-line pb-12 pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Ways we can work together"
          description="Every project is a little different. These are the most common ways I work. Get in touch for something bespoke."
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {services.map((service, i) => (
          <section
            key={service.id}
            className="grid gap-8 border-b border-line py-14 md:grid-cols-5 md:gap-12 md:py-20"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
                {service.title}
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/70">
                {service.description}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow">Includes</p>
              <ul className="mt-4 space-y-2.5 text-sm text-foreground/75">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-2xl">{service.priceNote}</p>
              <div className="mt-6">
                <ButtonLink href={`/contact?type=${service.inquiryType}`} variant="outline">
                  Enquire
                </ButtonLink>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading eyebrow="Process" title="How it works" />
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <p className="font-serif text-5xl text-accent">{i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction title="Let's talk about your project." />
    </>
  );
}
