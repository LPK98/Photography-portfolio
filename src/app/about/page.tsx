import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/home/CallToAction";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, ${siteConfig.role.toLowerCase()} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden bg-surface lg:col-span-2">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-3 lg:pt-8">
            <p className="eyebrow">
              {siteConfig.role} · {siteConfig.location}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-normal leading-tight md:text-6xl">
              {about.heading}
            </h1>
            <div className="mt-6 h-px w-12 bg-accent" aria-hidden />

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-foreground/75">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="mt-8 font-serif text-2xl italic text-accent">{about.closing}</p>

            <dl className="mt-12 grid max-w-xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
