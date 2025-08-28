// app/(site)/properties/components/ImageGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[]; // full public URLs like /properties/96/photo1.jpg
};

export default function ImageGallery({ images }: Props) {
  const safeImages = images && images.length > 0 ? images : [];
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSrc = safeImages[activeIdx];

  return (
    <div className="w-full">
      {/* Main image (or placeholder) */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100">
        {activeSrc ? (
          <Image
            key={activeSrc}
            src={activeSrc}
            alt={`Image ${activeIdx + 1}`}
            fill
            className="object-cover"
            priority={false}
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-gray-400">
            No images yet
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="mt-3 grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
          {safeImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveIdx(i)}
              className={`relative aspect-square rounded-lg overflow-hidden border ${
                i === activeIdx ? "border-black" : "border-gray-200"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="10vw" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
