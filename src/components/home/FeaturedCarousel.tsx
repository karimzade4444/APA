"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent, ReactNode, TouchEvent } from "react";

type FeaturedCarouselProps = {
  label: string;
  slides: ReactNode[];
};

const AUTOPLAY_INTERVAL = 3000;
const SWIPE_THRESHOLD = 50;

const FeaturedCarousel = ({ label, slides }: FeaturedCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (
      !(event.relatedTarget instanceof Node) ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setIsPaused(false);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX === null || endX === undefined) {
      return;
    }

    const distance = endX - startX;

    if (distance > SWIPE_THRESHOLD) {
      goToPrevious();
    } else if (distance < -SWIPE_THRESHOLD) {
      goToNext();
    }
  };

  return (
    <div
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      className="mx-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex touch-pan-y transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              aria-hidden={index !== activeIndex}
              inert={index !== activeIndex}
              className="w-full shrink-0"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Предыдущий слайд"
            onClick={goToPrevious}
            className="flex size-9 items-center justify-center border border-[#c9a45c]/50 text-[#061d35] transition-colors hover:bg-[#061d35] hover:text-[#d4af62]"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Перейти к слайду ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-2 transition-all ${
                  index === activeIndex
                    ? "w-6 bg-[#b18a3d]"
                    : "w-2 bg-[#061d35]/25 hover:bg-[#b18a3d]/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Следующий слайд"
            onClick={goToNext}
            className="flex size-9 items-center justify-center border border-[#c9a45c]/50 text-[#061d35] transition-colors hover:bg-[#061d35] hover:text-[#d4af62]"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedCarousel;
