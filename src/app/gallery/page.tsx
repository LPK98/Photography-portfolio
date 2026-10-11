import type { Metadata } from "next";
import { Suspense } from "react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work",
  description: "Browse selected photography projects by category.",
};

export default function GalleryPage() {
  return (
    <div>
      <div className="border-b border-line pb-12 pt-16">
        <SectionHeading as="h1" eyebrow="Portfolio" title="Selected work" />
      </div>
      {/* useSearchParams needs a Suspense boundary to keep the page statically rendered */}
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <GalleryGrid />
      </Suspense>
    </div>
  );
}
