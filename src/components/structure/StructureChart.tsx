
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  ChevronDown,
  GraduationCap,
  Landmark,
  Microscope,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  structureChartBranches,
  structureChartLeadership,
  type StructureChartIcon,
} from "@/data/structure";

const chartIcons = {
  building: Building2,
  book: BookOpen,
  graduation: GraduationCap,
  landmark: Landmark,
  microscope: Microscope,
  network: Network,
  shield: ShieldCheck,
  users: Users,
} satisfies Record<StructureChartIcon, typeof Building2>;

export function StructureChart() {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleBranch = (id: string) => {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.55,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section className="overflow-hidden bg-[#f8f7f3] py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        {/* Заголовок */}
        <motion.div
          {...reveal()}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#c9a45c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.23em] text-[#a7833f]">
              Организационная схема
            </span>
            <span className="h-px w-9 bg-[#c9a45c]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#061d35] sm:text-4xl lg:text-5xl">
            Как устроена Академия
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#061d35]/60 sm:text-base">
            Руководство, образовательные и научные подразделения,
            управления и службы, обеспечивающие деятельность Академии.
            Нажмите на любой раздел, чтобы раскрыть его состав.
          </p>
        </motion.div>

        {/* Ректор */}
        <motion.div
          {...reveal(0.05)}
          className="relative mx-auto max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#c9a45c]/60 bg-[#061d35] px-6 py-7 text-center shadow-[0_16px_40px_rgba(6,29,53,0.13)] sm:px-9">
            <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full border border-[#c9a45c]/20" />
            <div className="pointer-events-none absolute -right-5 -top-9 h-28 w-28 rounded-full border border-[#c9a45c]/20" />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [0, 4, 0, -4, 0] }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a45c]/60 bg-white/5 text-[#d4af62]"
            >
              <Landmark size={27} strokeWidth={1.4} />
            </motion.div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af62]">
              Руководство Академии
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Ректор
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Сафарзода Даврон Джурахон
            </p>

            <Link
              href="/about/leadership"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#d4af62] transition-colors hover:text-white"
            >
              Состав руководства
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Соединительная линия */}
        <div className="relative mx-auto h-12 w-px bg-[#c9a45c]" />

        {/* Проректоры */}
        <motion.div {...reveal(0.1)}>
          <div className="mb-5 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#a7833f]">
              <Users size={15} />
              Проректоры
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {structureChartLeadership.map((person, index) => {
              const Icon = chartIcons[person.icon];

              return (
                <motion.div
                  key={person.title}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 14 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  whileHover={
                    reduceMotion ? undefined : { y: -4 }
                  }
                  className="group relative flex h-full min-h-60 flex-col rounded-xl border border-[#e4dccd] bg-white p-4 text-center transition-colors duration-300 hover:border-[#c9a45c]"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f2eee5] text-[#a7833f] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#061d35] group-hover:text-[#d4af62]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h4 className="flex flex-1 items-center justify-center text-sm font-semibold leading-5 text-[#061d35]">
                    {person.title}
                  </h4>

                  <p className="mt-2 flex min-h-10 items-center justify-center text-xs leading-5 text-[#061d35]/50">
                    {person.subtitle}
                  </p>

                  <div className="mx-auto mt-4 h-px w-8 shrink-0 bg-[#c9a45c]/70 transition-all duration-300 group-hover:w-14" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Линия к основным направлениям */}
        <div className="mx-auto flex h-16 flex-col items-center">
          <div className="h-full w-px bg-[#c9a45c]" />
          <div className="h-2 w-2 rounded-full border border-[#c9a45c] bg-[#f8f7f3]" />
        </div>

        <motion.div {...reveal(0.15)} className="mb-7 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a7833f]">
            Основные направления деятельности
          </span>
        </motion.div>

        {/* Основные ветви */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {structureChartBranches.map((branch, index) => {
            const Icon = chartIcons[branch.icon];
            const isOpen = expanded.includes(branch.id);

            return (
              <motion.article
                key={branch.id}
                {...reveal(0.05 * index)}
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-white transition-colors duration-300 ${
                  isOpen
                    ? "border-[#c9a45c]/70 shadow-[0_12px_35px_rgba(6,29,53,0.07)]"
                    : "border-[#e4dccd] hover:border-[#c9a45c]/60"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleBranch(branch.id)}
                  className="flex h-full w-full flex-1 flex-col p-5 text-left sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-semibold tabular-nums tracking-widest text-[#b88d3c]">
                      {branch.number}
                    </span>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-[#061d35] text-[#d4af62]"
                          : "bg-[#f2eee5] text-[#a7833f]"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="mt-5 flex min-h-12 items-center text-lg font-semibold leading-6 text-[#061d35]">
                    {branch.title}
                  </h3>

                  <p className="mt-2 min-h-10 flex-1 text-sm leading-5 text-[#061d35]/55">
                    {branch.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#e9e1d4] pt-4">
                    <span className="text-xs font-medium text-[#9b7939]">
                      {isOpen ? "Скрыть состав" : "Показать состав"}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#9b7939]"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </div>
                </button>

                {/* Раскрывающийся список */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="border-t border-[#e9e1d4] bg-[#fbfaf7] px-5 py-3 sm:px-6">
                    <div className="space-y-0">
                      {branch.items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={false}
                          animate={{
                            opacity: isOpen ? 1 : 0,
                            x: isOpen ? 0 : -6,
                          }}
                          transition={{
                            duration: 0.2,
                            delay:
                              isOpen && !reduceMotion
                                ? itemIndex * 0.035
                                : 0,
                          }}
                          className="flex items-start gap-3 border-b border-[#e9e1d4] py-3 last:border-b-0"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a45c]" />
                          <span className="text-sm leading-6 text-[#061d35]/75">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href={branch.href}
                      tabIndex={isOpen ? 0 : -1}
                      className="mt-3 inline-flex items-center gap-2 py-2 text-sm font-semibold text-[#9b7939] transition-colors hover:text-[#061d35]"
                    >
                      Перейти в раздел
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
