import Link from "next/link";
import AnimatedText from "@/components/animations/AnimatedText";

const Hero = () => {
  return (
    <section className="relative min-h-150 overflow-hidden bg-[#061d35]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/academy-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#061d35]/65" />

      <div className="absolute inset-0 bg-linear-to-r from-[#061d35]/95 via-[#061d35]/65 to-[#061d35]/20" />

      <div className="relative z-10 mx-auto flex min-h-150 max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <AnimatedText delay={0.2}>
            <div className="mb-7 flex items-center gap-4">
              <div className="h-px w-16 bg-[#d4af62]" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#d4af62]">
                Академия государственного управления
              </span>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.45} duration={1}>
            <h2 className="font-serif text-5xl font-semibold leading-[1.1] text-white md:text-6xl lg:text-7xl">
              Знания.
              <br />
              Управление.
              <br />
              <span className="text-[#d4af62]">Будущее.</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.8}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Подготовка высококвалифицированных специалистов для
              государственной службы и эффективного управления в интересах
              развития Республики Таджикистан.
            </p>
          </AnimatedText>

          <AnimatedText delay={1.1}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="border border-[#d4af62] bg-[#d4af62] px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-[#061d35] transition duration-300 hover:bg-transparent hover:text-[#d4af62]"
              >
                Об Академии
              </Link>

              <Link
                href="/admission"
                className="border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white backdrop-blur-sm transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
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
