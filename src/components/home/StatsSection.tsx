"use client";

import Reveal from "@/components/animations/Reveal";
import StatCounter from "./StatCounter";

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#061d35] py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full border border-[#d4af62]/10 translate-x-1/2 -translate-y-1/2" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full border border-[#d4af62]/5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-12 bg-[#d4af62]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#d4af62]">
                Академия
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              Академия
              <br />
              <span className="text-[#d4af62]">в цифрах</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
              Академия объединяет образовательную, научную и аналитическую
              деятельность в сфере государственного управления и подготовки
              профессиональных кадров.
            </p>
          </div>
        </Reveal>

        {/* Statistics */}
        <div className="grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter
            value={4}
            label="Факультета"
            description="Основные образовательные подразделения Академии."
            delay={0.1}
          />

          <StatCounter
            value={16}
            label="Кафедр"
            description="Учебные и научные подразделения Академии."
            delay={0.2}
          />

          <StatCounter
            value={2}
            label="Исследовательских института"
            description="Научно-исследовательская деятельность Академии."
            delay={0.3}
          />

          <StatCounter
            value={1}
            suffix="+"
            label="Институт повышения квалификации"
            description="Профессиональное развитие государственных служащих."
            delay={0.4}
          />
        </div>

        {/* Bottom line */}
        <Reveal delay={0.5}>
          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-xs text-white/35">Структура Академии</p>

            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
              APA • 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StatsSection;
