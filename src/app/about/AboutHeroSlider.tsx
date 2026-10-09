"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { academyAbout } from "@/data/about";

export default function AboutHeroSlider() {
  const slides = academyAbout.heroSlides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <div className="group min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#c9a45c]/40 bg-[#102b45] shadow-2xl md:aspect-[5/4]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={index !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06172a]/90 via-[#06172a]/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="mb-3 h-px w-12 bg-[#d8b56b]" />

              <p className="max-w-sm text-lg font-semibold leading-snug text-white sm:text-xl">
                {slide.title || slide.alt}
              </p>

              <p className="mt-2 text-xs tracking-wider text-white/70">
                АКАДЕМИЯ • ТАДЖИКИСТАН
              </p>
            </div>
          </div>
        ))}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Предыдущая фотография"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#071d34]/60 text-white backdrop-blur transition hover:border-[#d8b56b] hover:bg-[#c9a45c] hover:text-[#071d34]"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Следующая фотография"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#071d34]/60 text-white backdrop-blur transition hover:border-[#d8b56b] hover:bg-[#c9a45c] hover:text-[#071d34]"
            >
              <ChevronRight size={21} />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Показать фотографию ${index + 1}`}
                aria-current={index === active}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-[#b58a3c]"
                    : "w-3 bg-[#c8c0b2] hover:bg-[#b58a3c]/60"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-slate-500">
            <Images size={15} />
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
