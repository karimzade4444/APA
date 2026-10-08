"use client";

import { useRef, type PointerEvent, type WheelEvent } from "react";
import Reveal from "@/components/animations/Reveal";
import OfficialResourceCard from "./OfficialResourceCard";
import { officialResources } from "@/data/officialResources";

const wrapAnimationTime = (time: number, duration: number) =>
  ((time % duration) + duration) % duration;

const OfficialResourcesSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    pointerId: number;
    startX: number;
    startTime: number;
    duration: number;
    cycleWidth: number;
    moved: boolean;
  } | null>(null);
  const suppressClick = useRef(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    const track = trackRef.current;
    const animation = track?.getAnimations()[0];
    const duration = animation?.effect?.getComputedTiming().duration;
    if (!animation || typeof duration !== "number" || !track) return;

    suppressClick.current = false;
    animation.pause();
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime: Number(animation.currentTime ?? 0),
      duration,
      cycleWidth: track.scrollWidth / 2,
      moved: false,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    if (Math.abs(deltaX) > 4 && !drag.moved) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (drag.moved) {
      const animation = trackRef.current?.getAnimations()[0];
      if (animation && drag.cycleWidth > 0 && drag.duration > 0) {
        animation.currentTime = wrapAnimationTime(
          drag.startTime - (deltaX / drag.cycleWidth) * drag.duration,
          drag.duration,
        );
      }
      event.preventDefault();
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragState.current?.pointerId !== event.pointerId) return;

    suppressClick.current = dragState.current.moved;
    dragState.current = null;
    trackRef.current?.getAnimations()[0]?.play();
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const horizontalDelta = event.deltaX || (event.shiftKey ? event.deltaY : 0);
    if (horizontalDelta === 0) return;

    const track = trackRef.current;
    const animation = track?.getAnimations()[0];
    const duration = animation?.effect?.getComputedTiming().duration;
    const cycleWidth = track ? track.scrollWidth / 2 : 0;
    if (
      !animation ||
      typeof duration !== "number" ||
      duration <= 0 ||
      cycleWidth === 0
    )
      return;

    event.preventDefault();
    animation.currentTime = wrapAnimationTime(
      Number(animation.currentTime ?? 0) +
        (horizontalDelta / cycleWidth) * duration,
      duration,
    );
  };

  return (
    <section className="overflow-hidden bg-[#f7f5f1] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-8 flex items-end justify-between border-b border-[#061d35]/10 pb-5">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d4af62]" />

                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a37b2f]">
                  Государственные ресурсы
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#061d35] md:text-4xl">
                Официальные ресурсы
              </h2>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[#061d35]/30 md:block">
              Республика Таджикистан
            </span>
          </div>
        </Reveal>
      </div>

      {/* Лента */}
      <div className="relative w-full overflow-hidden">
        {/* Левая мягкая маска */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#f7f5f1] to-transparent md:w-32" />

        {/* Правая мягкая маска */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#f7f5f1] to-transparent md:w-32" />

        <div
          aria-label="Официальные ресурсы"
          className="w-full touch-pan-y"
          onClickCapture={(event) => {
            if (!suppressClick.current) return;
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }}
          onPointerCancel={handlePointerUp}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
          role="region"
          tabIndex={0}
        >
          <div
            ref={trackRef}
            className="official-resources-track flex w-max cursor-grab select-none gap-3 px-6 active:cursor-grabbing"
          >
            {[...officialResources, ...officialResources].map(
              (resource, index) => (
                <OfficialResourceCard
                  key={`${resource.id}-${index}`}
                  resource={resource}
                />
              ),
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#061d35]/30">
          Официальные интернет-ресурсы государственных органов и партнёрских
          организаций
        </p>
      </div>
    </section>
  );
};

export default OfficialResourcesSection;