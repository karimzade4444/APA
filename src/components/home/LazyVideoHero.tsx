"use client";

import { useEffect, useState } from "react";

export default function LazyHeroVideo() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover object-top"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    >
      <source src="/videos/academy-hero.mp4" type="video/mp4" />
    </video>
  );
}
