<<<<<<< HEAD
# Photography Portfolio

A fast, minimal portfolio for a working photographer: weddings, portraits, landscapes, street and commercial work in one site. Built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

## What's included

- Home page with full-bleed hero, featured projects and browse-by-category tiles
- Work gallery with shareable category filters (`/gallery?category=weddings`)
- Project pages with a masonry layout that keeps each photo's real proportions, plus a keyboard- and swipe-friendly lightbox and next-project link
- Services page with "Enquire" buttons that pre-select the right option in the contact form
- About page and a working contact form (email delivery via Resend, honeypot + rate limiting)
- Clean white, light-only theme (a dark palette is kept commented out in `globals.css`)
- SEO basics: per-project titles and social previews, `sitemap.xml`, `robots.txt`
- Accessible by default: skip link, focus styles, reduced-motion support, labelled controls

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Make it yours (in this order)

1. **`src/config/site.ts`**: your name, tagline, location, email, Instagram, hero portrait and About text. The hero portrait should be a cut-out with a transparent background (`public/hero-portrait.webp`); update its `width`/`height` if you swap it.
2. **`src/data/projects.ts`**: your projects and photos (see "Adding your photos" below).
3. **`src/data/services.ts`**: the services and process steps you offer.
4. **`src/data/categories.ts`**: category names and order. Only categories that have projects are shown.
5. **`src/app/globals.css`**: colours (`--background`, `--foreground`, `--accent`, …).
6. **`src/app/layout.tsx`**: swap the fonts if you like (Cormorant Garamond + Inter by default).

## Adding your photos

1. Put images in `public/portfolio/<project-slug>/` (for example `public/portfolio/eleanor/01.jpg`).
2. In `src/data/projects.ts`, add a project and point `src` / `coverImage` at `/portfolio/eleanor/01.jpg`.
3. Set each photo's `width` and `height` to its **real pixel dimensions**. This is what keeps the layout stable and the proportions correct.
4. Set `featured: true` on up to three projects to show them on the home page.

Export web-sized JPEGs (about 2400px on the long edge is plenty). Next.js generates optimised AVIF/WebP versions automatically.

Hosting photos elsewhere (S3, Cloudinary, etc.)? Add the hostname to `images.remotePatterns` in `next.config.ts`.

## Contact form setup

The form posts to `/api/contact`, which emails you through [Resend](https://resend.com) (free tier is plenty).

1. Create a Resend account and an API key. Verify your sending domain for production.
2. Copy `.env.example` to `.env.local` and fill it in:

   | Variable | Purpose |
   | --- | --- |
   | `RESEND_API_KEY` | Your Resend key |
   | `CONTACT_TO_EMAIL` | Where enquiries are delivered (defaults to the email in `site.ts`) |
   | `CONTACT_FROM_EMAIL` | Sender address on your verified domain |
   | `NEXT_PUBLIC_SITE_URL` | Your live URL (sitemap, social previews) |

3. Replying to an enquiry in your inbox goes straight to the visitor (their address is set as Reply-To).

Without `RESEND_API_KEY`, local development just prints each enquiry to the terminal. In production a missing key shows visitors a friendly "email me directly" message instead of silently failing.

Prefer [Formspree](https://formspree.io) or similar? Replace the `fetch("/api/contact", …)` call in `src/components/ui/ContactForm.tsx` with a POST to your Formspree endpoint and delete `src/app/api/contact/`.

> The built-in rate limiter is in-memory and per server instance, which is fine for a portfolio. If you ever see abuse, add a shared store (e.g. Upstash Redis) or Cloudflare Turnstile.

## Deploying

Vercel is the simplest option: push to GitHub, import the repo, add the environment variables above, deploy.

## Project structure

```
src/
├── config/site.ts        # name, contact details, bio, hero image
├── data/                 # projects, categories, services
├── lib/contact.ts        # contact form types + validation
├── app/
│   ├── page.tsx          # home
│   ├── gallery/          # work listing + [slug] project pages
│   ├── services/ about/ contact/
│   ├── api/contact/      # email endpoint
│   └── sitemap.ts robots.ts
└── components/           # layout, home, gallery, lightbox, ui
```

## Scripts

`npm run dev` · `npm run build` · `npm run start` · `npm run lint` · `npm run typecheck`

## Note on Tailwind + Turbopack

This project uses `@tailwindcss/turbopack`, which must be registered in `next.config.ts` (`turbopack.rules`). It already is. If you ever remove that block, the site will build but render completely unstyled.
=======
# Photography-portfolio
Sanju Rangodage photography site
>>>>>>> d02f6d923dc9a2de94de06271b4b35fc43244b6e
