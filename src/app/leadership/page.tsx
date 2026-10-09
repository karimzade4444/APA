import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Landmark } from "lucide-react";
import { LeadershipGrid } from "@/components/leadership/LeadershipGrid";

export const metadata: Metadata = {
  title: "Руководство Академии | Академия государственного управления",
  description:
    "Руководство Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3]">
      {/* Верхний декоративный блок */}
      <section className="relative isolate overflow-hidden bg-[#061d35]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#c9a45c]/20" />
          <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#c9a45c]/20" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d35] via-[#061d35]/95 to-[#102d49]/80" />
        </div>

        <div className="site-container relative py-14 sm:py-20 lg:py-24">
          {/* Навигационная цепочка */}
          <nav
            aria-label="Навигационная цепочка"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#d4af62]"
            >
              Главная
            </Link>

            <ChevronRight size={15} />

            <span className="text-[#d4af62]">Руководство Академии</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62] sm:text-sm">
                Академия государственного управления
              </span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Руководство{" "}
              <span className="text-[#d4af62]">Академии</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Руководство Академии обеспечивает организацию образовательной,
              научной и административной деятельности, направленной на
              подготовку квалифицированных кадров для государственной службы.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
              <Landmark size={19} className="text-[#d4af62]" />
              <span>
                При Президенте Республики Таджикистан
              </span>
            </div>
          </div>

          {/* Золотая линия */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-[#c9a45c]/70 via-[#c9a45c]/20 to-transparent sm:mt-16" />
        </div>
      </section>

      {/* Карточки руководителей */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7833f] sm:text-sm">
                Структура управления
              </p>

              <h2 className="text-2xl font-semibold tracking-tight text-[#061d35] sm:text-3xl lg:text-4xl">
                Администрация Академии
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#c9a45c]" />
            </div>

            <p className="max-w-md text-sm leading-6 text-[#061d35]/65 sm:text-base">
              Информация о руководителях, их образовании, учёных степенях
              и профессиональной деятельности.
            </p>
          </div>

          <LeadershipGrid />
        </div>
      </section>
    </main>
  );
}

