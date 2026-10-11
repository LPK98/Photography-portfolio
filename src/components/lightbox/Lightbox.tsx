"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Photo } from "@/types";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
  year?: number;
}

const SWIPE_THRESHOLD = 50; // px

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  title,
  year,
}: LightboxProps) {
  const photo = photos[currentIndex];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Always call the latest handlers without re-running the setup effect below
  const handlers = useRef({ onClose, onPrev, onNext });
  useEffect(() => {
    handlers.current = { onClose, onPrev, onNext };
  });

  // Keyboard controls + scroll lock + return focus to the thumbnail on close (runs once)
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handlers.current.onClose();
      if (e.key === "ArrowLeft") handlers.current.onPrev();
      if (e.key === "ArrowRight") handlers.current.onNext();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, []);

  if (!photo) return null;

  const multiple = photos.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} photo viewer` : "Photo viewer"}
      className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0a] text-white"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || !multiple) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (delta > SWIPE_THRESHOLD) onPrev();
        else if (delta < -SWIPE_THRESHOLD) onNext();
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50" aria-live="polite">
          {String(currentIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="p-2 text-2xl leading-none text-white/70 hover:text-white"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Image area */}
      <div className="relative flex flex-1 items-center justify-center px-4 md:px-16">
        {multiple && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 z-10 p-3 text-3xl text-white/60 transition-colors hover:text-white md:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>
        )}

        <Image
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          className="max-h-[75vh] w-auto max-w-full object-contain"
          priority
        />

        {multiple && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 z-10 p-3 text-3xl text-white/60 transition-colors hover:text-white md:right-6"
            aria-label="Next photo"
          >
            ›
          </button>
        )}
      </div>

      {/* Caption */}
      <div className="py-6 text-center">
        {title && (
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">{title}</p>
        )}
        {year && <p className="mt-1 text-xs text-white/40">{year}</p>}
      </div>
    </div>
  );
}
