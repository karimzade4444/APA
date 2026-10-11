
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
  Landmark,
  LibraryBig,
  Microscope,
  Network,
  Users,
  Building2,
} from "lucide-react";

const structureItems = [
  {
    number: "01",
    title: "Ректор и проректоры",
    description: "Руководство Академии",
    href: "/leadership",
    icon: Landmark,
    links: [
      { title: "Ректор и проректоры", href: "/leadership" },
    ],
  },
  {
    number: "02",
    title: "Два научно-исследовательских института",
    description: "Научная деятельность и исследования",
    icon: Microscope,
    links: [
      { title: "Научно-исследовательские институты", href: "/science/institutes" },
    ],
  },
  {
    number: "03",
    title: "Институт повышения квалификации и переподготовки государственных служащих",
    description: "Дополнительное профессиональное образование",
    icon: GraduationCap,
    links: [
      { title: "Повышение квалификации", href: "/education/professional-development" },
    ],
  },
  {
    number: "04",
    title: "Центр изучения «Школы государственности Эмомали Рахмона»",
    description: "Исследовательская и просветительская деятельность",
    icon: Building2,
    links: [
      { title: "О центре", href: "/science/centers" },
    ],
  },
  {
    number: "05",
    title: "Шесть управлений",
    description: "Административные подразделения Академии",
    icon: Network,
    links: [
      { title: "Список управлений", href: "/structure/management" },
    ],
  },
  {
    number: "06",
    title: "Четыре факультета",
    description: "Факультеты и направления подготовки",
    icon: GraduationCap,
    links: [
      { title: "Все факультеты", href: "/education/faculties" },
    ],
  },
  {
    number: "07",
    title: "Шестнадцать кафедр",
    description: "Образовательные и научные подразделения",
    icon: Users,
    links: [
      { title: "Все кафедры", href: "/education/departments" },
    ],
  },
  {
    number: "08",
    title: "Магистратура",
    description: "Подготовка специалистов на уровне магистратуры",
    icon: GraduationCap,
    links: [
      { title: "Обучение в магистратуре", href: "/education/masters" },
    ],
  },
  {
    number: "09",
    title: "Секретариат и помощник ректора",
    description: "Организационное обеспечение деятельности руководства",
    icon: Building2,
    links: [
      { title: "Информация о подразделении", href: "/structure/secretariat" },
    ],
  },
  {
    number: "10",
    title: "Научная библиотека",
    description: "Научные и образовательные информационные ресурсы",
    icon: LibraryBig,
    links: [
      { title: "Библиотека", href: "/library" },
    ],
  },
  {
    number: "11",
    title: "Медицинский пункт",
    description: "Медицинское обслуживание",
    icon: Building2,
    links: [
      { title: "Информация о медицинском пункте", href: "/structure/medical-center" },
    ],
  },
  {
    number: "12",
    title: "Гостиница",
    description: "Инфраструктура Академии",
    icon: Building2,
    links: [
      { title: "Информация о гостинице", href: "/structure/hotel" },
    ],
  },
  {
    number: "13",
    title: "Технологический парк",
    description: "Инновации и технологическое развитие",
    icon: Microscope,
    links: [
      { title: "О технологическом парке", href: "/science/technology-park" },
    ],
  },
];

export default function StructurePage() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#eee8dc]">
      {/* Заголовок */}
      <section className="relative overflow-hidden bg-[#061d35]">
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#c9a45c]/15" />
        <div className="pointer-events-none absolute -right-12 -top-16 h-72 w-72 rounded-full border border-[#c9a45c]/15" />

        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62]">
                Академия государственного управления
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Структура{" "}
              <span className="text-[#d4af62]">Академии</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Организационная структура, основные подразделения и направления
              деятельности Академии государственного управления при Президенте
              Республики Таджикистан.
            </p>

            <div className="mt-9 h-px max-w-3xl bg-gradient-to-r from-[#c9a45c]/70 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Структурные подразделения */}
      <section className="site-container py-12 sm:py-16 lg:py-20">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Организационная схема
            </p>
            <h2 className="text-2xl font-semibold text-[#061d35] sm:text-3xl">
              Подразделения Академии
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#061d35]/60">
            Наведите курсор на интересующий раздел или нажмите на него,
            чтобы увидеть доступную информацию.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {structureItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.number;

            return (
              <motion.article
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : (index % 3) * 0.07,
                }}
                onMouseEnter={() => setActiveItem(item.number)}
                onMouseLeave={() => setActiveItem(null)}
                className={`group relative flex flex-col border bg-[#fbfaf7] transition-all duration-300 ${
                  isActive
                    ? "border-[#c9a45c] shadow-[0_12px_32px_rgba(6,29,53,0.08)]"
                    : "border-white hover:border-[#c9a45c]/60"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() =>
                    setActiveItem(isActive ? null : item.number)
                  }
                  className="flex min-h-[150px] w-full items-start gap-4 p-5 text-left sm:p-6"
                >
                  <span className="pt-0.5 text-xl font-semibold tabular-nums text-[#b88d3c]">
                    {item.number}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-base font-medium leading-6 text-[#061d35] sm:text-lg">
                      {item.title}
                    </span>

                    <span className="mt-3 text-sm leading-6 text-[#061d35]/55">
                      {item.description}
                    </span>
                  </span>

                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? "rotate-45 border-[#c9a45c] bg-[#061d35] text-[#d4af62]"
                        : "border-[#c9a45c]/35 text-[#9b7939]"
                    }`}
                  >
                    {isActive ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <Icon size={16} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-[#c9a45c]/30 sm:mx-6" />

                    <div className="space-y-1 p-3 sm:p-4">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center justify-between gap-3 px-3 py-3 text-sm text-[#061d35]/75 transition-colors hover:bg-[#eee8dc] hover:text-[#9b7939]"
                        >
                          <span>{link.title}</span>
                          <ArrowUpRight size={15} className="shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`h-[2px] w-full origin-left bg-[#c9a45c] transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
