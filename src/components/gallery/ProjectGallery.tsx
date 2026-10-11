"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types";
import Lightbox from "@/components/lightbox/Lightbox";

/** Masonry layout that keeps each photo's real proportions (no cropping). */
export default function ProjectGallery({ project }: { project: Project }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = project.photos.length;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 md:gap-6">
        {project.photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`Open photo ${index + 1} of ${count}: ${photo.alt}`}
            className="group mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden bg-surface md:mb-6"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={project.photos}
          currentIndex={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i === null ? i : (i - 1 + count) % count))}
          onNext={() => setOpenIndex((i) => (i === null ? i : (i + 1) % count))}
          title={project.title}
          year={project.year}
        />
      )}
    </>
  );
}
