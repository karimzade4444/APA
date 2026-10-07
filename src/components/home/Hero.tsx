import { GraduationCap, University } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-170 overflow-hidden bg-[#061d35]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/academy-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#061d35]/40" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#061d35]/95 via-[#061d35]/85 to-[#061d35]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-170 max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          {/* Decorative line */}
          <div className="mb-7 flex items-center gap-4">
            <div className="h-px w-16 bg-[#d4af62]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#d4af62]">
              Академия государственного управления при Президенте Республики
              Таджикистан
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-[1.1] text-white md:text-3xl lg:text-6xl">
            Знания.
            <br />
            Управление.
            <br />
            <span className="text-[#d4af62]">Будущее.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 md:text-lg text-justify">
            Подготовка высококвалифицированных специалистов для государственной
            службы и эффективного управления в интересах развития Республики
            Таджикистан.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="border border-[#d4af62] bg-[#d4af62] px-7 py-3 text-sm font-medium uppercase tracking-wide text-[#061d35] transition duration-300 hover:bg-transparent hover:text-[#d4af62] flex items-center gap-2"
            >
              <University className="size-6 shrink-0 mb-1" />
              Об Академии
            </Link>

            <Link
              href="/admission"
              className="flex items-center gap-2 border border-white/40 bg-white/5 px-7 py-3 text-sm font-medium uppercase tracking-wide text-white backdrop-blur-sm transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
            >
              <GraduationCap className="size-6 shrink-0 mb-1" />
              Поступление
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d4af62]/70 to-transparent" />
    </section>
  );
};

export default Hero;
