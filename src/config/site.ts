/**
 * Everything personal about the site lives here.
 * Edit this file first: name, contact details, bio and hero image.
 */
export const siteConfig = {
  name: "Your Name",
  role: "Photographer",
  tagline: "Honest light. Lasting images.",
  description:
    "Portrait, wedding, landscape, street and commercial photography. Timeless imagery crafted with intention.",
  location: "Your City, Country",
  email: "hello@example.com",
  instagram: {
    handle: "yourhandle",
    url: "https://instagram.com/yourhandle",
  },
  // Used for the sitemap and social previews. Set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Home-page hero: a cut-out portrait (transparent background) shown on white.
  // Replace the file in /public and update width/height to match.
  heroImage: {
    src: "/hero-portrait.webp",
    alt: "Portrait of the photographer",
    width: 1161,
    height: 1354,
  },

  // Image used when the site is shared on social media / messaging apps.
  ogImage: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    alt: "Mountain lake at dawn",
  },

  about: {
    portrait: {
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=900&q=80",
      alt: "Portrait of the photographer",
    },
    heading: "Hello, I'm Your Name.",
    paragraphs: [
      "I'm a photographer based in Your City, drawn to quiet moments and honest stories. With a love of natural light and a patient, unobtrusive approach, I make images that feel true to the people and places in front of the lens.",
      "Whether it's a wedding day, a portrait session, a commercial project or a long walk with a camera, my focus stays the same: honest light, honest emotion, and photographs that last.",
    ],
    closing: "Let's make something meaningful together.",
    // Short facts shown beside the bio. Edit, add or remove freely.
    facts: [
      { label: "Based in", value: "Your City, Country" },
      { label: "Available", value: "Worldwide, by arrangement" },
      { label: "Shooting since", value: "20XX" },
    ],
  },
} as const;
