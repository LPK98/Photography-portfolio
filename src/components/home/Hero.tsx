import Image from "next/image";
import { siteConfig } from "@/config/site";
import ButtonLink from "@/components/ui/ButtonLink";

/** White split hero: introduction on the left, cut-out portrait on the right. */
export default function Hero() {
  const { heroImage } = siteConfig;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-0 px-6 md:min-h-[calc(100svh-4rem)] md:grid-cols-2 lg:px-10">
        {/* Text */}
        <div className="self-center py-14 md:py-24">
          <p className="eyebrow">
            {siteConfig.role} · {siteConfig.location}
          </p>
          <h1 className="mt-5 font-serif text-6xl font-normal leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <div className="mt-8 h-px w-16 bg-accent" aria-hidden />
          <p className="mt-8 max-w-md font-serif text-2xl italic text-accent md:text-3xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/gallery">View work</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Get in touch
            </ButtonLink>
          </div>
        </div>

        {/* Portrait: stands on the bottom edge of the hero */}
        <div className="relative flex items-end justify-center md:h-[min(80svh,720px)] md:justify-end">
          {/* Soft warm arch so the white shirt reads against the white page. Delete this div for pure white. */}
          <div
            className="absolute bottom-0 left-1/2 h-[88%] w-[78%] -translate-x-1/2 rounded-t-full bg-surface md:left-auto md:right-[6%] md:translate-x-0"
            aria-hidden
          />
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            sizes="(max-width: 768px) 90vw, 620px"
            className="relative z-10 h-auto w-full max-w-[420px] object-contain object-bottom md:h-full md:w-auto md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
