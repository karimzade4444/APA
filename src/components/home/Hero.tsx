"use client";
import Link from "next/link";
import AnimatedText from "@/components/animations/AnimatedText";
import { GraduationCap, University } from "lucide-react";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const LazyHeroVideo = dynamic(() => import("./LazyVideoHero"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#171717]" />,
});

const Hero = () => {
  return (
    <section className="relative min-h-[34rem] overflow-hidden bg-[#061d35] sm:min-h-[38rem] lg:min-h-130">
      <Suspense fallback={<div className="absolute inset-0 bg-[#171717]" />}>
        <LazyHeroVideo />
      </Suspense>

      <div className="absolute inset-0 bg-[#061d35]/65" />

      <div className="absolute inset-0 bg-linear-to-r from-[#061d35]/95 via-[#061d35]/45 to-[#061d35]/10" />

      <div className="site-container relative z-10 flex min-h-[34rem] items-center sm:min-h-[38rem] lg:min-h-140">
        <div className="max-w-3xl">
          <AnimatedText delay={0.08} variant="rise">
            <div className="mb-5 flex items-start gap-3 sm:mb-7 sm:items-center sm:gap-4">
              <div className="mt-2 h-px w-4 shrink-0 bg-[#d4af62] sm:mt-0 sm:w-16" />

              <span className="max-w-2xl text-[0.65rem] font-medium uppercase leading-5 tracking-[0.16em] text-[#d4af62] sm:text-xs sm:tracking-[0.25em]">
                Академия государственного управления при Президенте Республики
                Таджикистан
              </span>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.16} variant="fade">
            <h2 className="font-serif text-5xl font-semibold leading-[1.1] text-white md:text-6xl lg:text-6xl">
              Знания.
              <br />
              Управление.
              <br />
              <span className="text-[#d4af62]">Будущее.</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.24} variant="rise">
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:mt-7 sm:text-base sm:leading-7 md:text-md text-justify">
              Подготовка высококвалифицированных специалистов для
              государственной службы и эффективного управления в интересах
              развития Республики Таджикистан.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.32} variant="fade">
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Link
                href="/about"
                className="flex items-center gap-2 border border-[#d4af62] bg-[#d4af62] px-4 py-3 text-xs font-medium uppercase tracking-wide text-[#061d35] transition duration-300 hover:bg-transparent hover:text-[#d4af62] sm:px-7 sm:text-sm"
              >
                <University className="mb-1" />
                Об Академии
              </Link>

              <Link
                href="/admission"
                className="flex items-center gap-2 border border-white/40 bg-white/5 px-4 py-3 text-xs font-medium uppercase tracking-wide text-white backdrop-blur-sm transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62] sm:px-7 sm:text-sm"
              >
                <GraduationCap className="mb-1" />
                Поступление
              </Link>
            </div>
          </AnimatedText>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d4af62]/70 to-transparent" />
    </section>
  );
};

export default Hero;
