"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PhotoGalleryProps = {
  images: [string, ...string[]];
  title: string;
};

export default function PhotoGallery({ images, title }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="mt-8">
      <div className="group relative aspect-16/9 overflow-hidden border border-[#d8d1c5] bg-white">
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title} — фото ${activeIndex + 1}`}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 960px"
          className="gallery-image-in object-cover"
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-white/50 bg-[#061d35]/75 text-white transition-colors hover:bg-[#061d35]"
            >
              <ChevronLeft size={21} />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={showNext}
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-white/50 bg-[#061d35]/75 text-white transition-colors hover:bg-[#061d35]"
            >
              <ChevronRight size={21} />
            </button>
            <span className="absolute bottom-3 right-3 bg-[#061d35]/80 px-3 py-1 text-xs tabular-nums text-white">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`Показать фото ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden border-2 transition-colors ${
                index === activeIndex
                  ? "border-[#a37b2f]"
                  : "border-transparent hover:border-[#c9a45c]"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
