
"use client";

import { motion, useReducedMotion } from "motion/react";
import { leadership } from "@/data/leadership";
import { LeadershipCard } from "@/components/leadership/LeadershipCard";

export function LeadershipGrid() {
  const reduceMotion = useReducedMotion();

  const leaders = leadership
    .filter((leader) => leader.published)
    .sort((a, b) => a.order - b.order);

  const rector = leaders.find((leader) => leader.order === 1);
  const firstViceRector = leaders.find((leader) => leader.order === 2);
  const viceRectors = leaders.filter((leader) => leader.order >= 3);

  const sectionAnimation = {
    initial: reduceMotion ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.65, ease: "easeOut" as const },
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* РЕКТОР — центральная фигура */}
      {rector && (
        <motion.section {...sectionAnimation}>
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a45c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7939]">
              Ректор Академии
            </p>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-[#c9a45c]/35 bg-[#061d35]">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#c9a45c]/15" />
            <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-[#c9a45c]/15" />

            <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-14">
              <div className="mx-auto w-full max-w-[340px]">
                <LeadershipCard
                  leader={rector}
                  index={0}
                  dark
                />
              </div>

              <div className="relative py-2 text-white">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af62]">
                  Руководство Академии
                </p>

                <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {rector.name}
                </h3>

                <div className="my-6 h-px w-20 bg-[#c9a45c]" />

                <p className="max-w-xl text-base leading-8 text-white/75">
                  Ректор Академии государственного управления при
                  Президенте Республики Таджикистан.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {rector.degree && (
                    <span className="border border-[#c9a45c]/35 px-4 py-2 text-sm text-[#e5d1a0]">
                      {rector.degree}
                    </span>
                  )}

                  {rector.academicTitle && (
                    <span className="border border-white/15 px-4 py-2 text-sm text-white/80">
                      {rector.academicTitle}
                    </span>
                  )}
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/40">
                  Академия государственного управления
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ПЕРВЫЙ ПРОРЕКТОР */}
      {firstViceRector && (
        <motion.section {...sectionAnimation}>
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a45c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7939]">
              Первый проректор
            </p>
          </div>

          <div className="grid items-center gap-8 border-y border-[#c9a45c]/30 py-8 sm:py-10 lg:grid-cols-[250px_1fr] lg:gap-14">
            <div className="mx-auto w-full max-w-[250px]">
              <LeadershipCard
                leader={firstViceRector}
                index={1}
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-[#9b7939]">
                Первый проректор Академии
              </p>

              <h3 className="text-2xl font-semibold leading-snug text-[#061d35] sm:text-3xl">
                {firstViceRector.name}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#061d35]/70">
                Организация и координация образовательной деятельности
                Академии в соответствии с установленными задачами и
                направлениями работы.
              </p>

              {firstViceRector.degree && (
                <p className="mt-5 text-sm text-[#061d35]/65">
                  <span className="font-semibold text-[#061d35]">
                    Учёная степень:
                  </span>{" "}
                  {firstViceRector.degree}
                </p>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* ЧЕТЫРЕ ПРОРЕКТОРА */}
      {viceRectors.length > 0 && (
        <motion.section {...sectionAnimation}>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-10 bg-[#c9a45c]" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7939]">
                  Администрация
                </p>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-[#061d35] sm:text-3xl">
                Проректоры Академии
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#061d35]/60">
              Научная работа, международное сотрудничество,
              воспитательная деятельность и административное управление.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5">
            {viceRectors.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
              >
                <LeadershipCard
                  leader={leader}
                  index={index + 2}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
