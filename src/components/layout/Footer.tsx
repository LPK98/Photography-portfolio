import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/gallery", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-foreground/60">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-2 text-sm text-foreground/60 md:text-right">
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

        <p className="mt-12 text-xs text-foreground/40">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
