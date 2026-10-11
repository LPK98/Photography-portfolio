import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind v4 needs its loader registered for Turbopack, otherwise
  // globals.css is passed through untouched and the site renders unstyled.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // Using a CDN or storage bucket for your own photos?
      // Add its hostname here. Photos placed in /public need nothing extra.
    ],
  },
};

export default nextConfig;
