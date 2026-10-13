
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  ChevronRight,
  GraduationCap,
  Landmark,
  LibraryBig,
  Microscope,
  Network,
  Users,
} from "lucide-react";

import {
  managementDepartments,
  otherStructureItems,
  researchCenters,
  structureItems,
  type StructureItem,
} from "@/data/structure";

const categoryLabels: Record<string, string> = {
  leadership: "Руководство",
  science: "Наука и инновации",
  education: "Образование",
  administration: "Управления",
  infrastructure: "Инфраструктура",
};

const icons = {
  leadership: Landmark,
  science: Microscope,
  education: GraduationCap,
  administration: Network,
  infrastructure: Building2,
};

export function StructureDirectory() {
  const reduceMotion = useReducedMotion();

  const [activeId, setActiveId] = useState("educational-process");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const activeItem = structureItems.find(
    (item) => item.id === activeId,
  );

  const activeManagement = activeItem?.id === "management"
    ? activeItem.children?.find((item) => item.id === activeId)
    : undefined;

  const managementItem = structureItems.find(
    (item) => item.id === "management",
  );

  const activeDepartment =
    managementDepartments[activeId] ?? [];

  const isManagement = Boolean(managementDepartments[activeId]);

  const getChildren = (item: StructureItem) => {
    if (item.id === "management") {
      return item.children ?? [];
    }

    if (item.id === "research-institutes") {
      return item.children ?? [];
    }

    if (item.id === "professional-development") {
      return item.children ?? [];
    }

    if (item.id === "statehood-center") {
      return [
        {
          id: "statehood-center-info",
          title: "Центр изучения «Школы государственности Эмомали Рахмона»",
          href: "/science/centers/statehood",
        },
      ];
    }

    if (item.id === "faculties") {
      return [
        {
          id: "all-faculties",
          title: "Все факультеты",
          href: "/education/faculties",
        },
      ];
    }

    if (item.id === "departments") {
      return [
        {
          id: "all-departments",
          title: "Все кафедры",
          href: "/education/departments",
        },
      ];
    }

    if (item.id === "technology-park") {
      return [
        {
          id: "technology-park-info",
          title: "О технологическом парке",
          href: "/science/technology-park",
        },
      ];
    }

    return item.children ?? [];
  };

  const activeChildren = isManagement
    ? activeDepartment
    : activeItem
      ? getChildren(activeItem)
      : [];

  const showCenters = activeId === "centers";
  const showOther = activeId === "other";

  const selectItem = (id: string) => {
    setActiveId(id);
    setMobileExpanded((current) => current === id ? null : id);
  };

  return (
    <section
      id="subdivisions"
      className="bg-[#eee8dc] py-16 sm:py-20 lg:py-24"
    >
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7833f]">
            Организационная схема
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#061d35] sm:text-4xl">
            Подразделения Академии
          </h2>

          <p className="mt-4 text-base leading-7 text-[#061d35]/65">
            Выберите подразделение, чтобы посмотреть его структуру
            и перейти к доступной информации.
          </p>
        </motion.div>

        <div className="grid overflow-hidden border border-[#061d35]/10 bg-white shadow-[0_20px_60px_rgba(6,29,53,0.07)] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Левая панель */}
          <div className="border-b border-[#061d35]/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
            <div className="mb-3 flex items-center justify-between px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.17em] text-[#a7833f]">
                Структура
              </span>
              <span className="text-xs text-[#061d35]/40">
                01—13
              </span>
            </div>

            <div className="space-y-1">
              {structureItems.map((item) => {
                const Icon = icons[item.category];
                const selected =
                  activeId === item.id ||
                  (item.id === "management" &&
                    Boolean(managementDepartments[activeId]));

                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => {
                      if (item.id !== "management") {
                        setActiveId(item.id);
                      }
                    }}
                    onClick={() => {
                      if (item.id === "management") {
                        setActiveId("educational-process");
                        setMobileExpanded((current) =>
                          current === "management" ? null : "management",
                        );
                      } else {
                        selectItem(item.id);
                      }
                    }}
                    aria-expanded={
                      item.id === "management"
                        ? mobileExpanded === "management"
                        : selected
                    }
                    className={`group flex w-full items-start gap-3 rounded-xl px-3 py-3.5 text-left transition-colors duration-200 sm:px-4 ${
                      selected
                        ? "bg-[#f2f0eb] text-[#a66f19]"
                        : "text-[#061d35] hover:bg-[#f7f5f1]"
                    }`}
                  >
                    <span
                      className={`mt-0.5 shrink-0 text-xs font-semibold tabular-nums ${
                        selected ? "text-[#b88d3c]" : "text-[#061d35]/35"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-5 sm:text-[15px]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs text-[#061d35]/45">
                        {categoryLabels[item.category]}
                        {item.count ? ` · ${item.count}` : ""}
                      </span>
                    </span>

                    <ChevronRight
                      size={17}
                      className={`mt-1 shrink-0 transition-transform duration-300 ${
                        selected
                          ? "translate-x-0.5 text-[#b88d3c]"
                          : "text-[#061d35]/45"
                      }`}
                    />
                  </button>
                );
              })}

              <button
                type="button"
                onMouseEnter={() => setActiveId("centers")}
                onClick={() => selectItem("centers")}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                  showCenters
                    ? "bg-[#f2f0eb] text-[#a66f19]"
                    : "text-[#061d35] hover:bg-[#f7f5f1]"
                }`}
              >
                <Microscope size={17} />
                <span className="flex-1">Центры</span>
                <ChevronRight size={17} />
              </button>

              <button
                type="button"
                onMouseEnter={() => setActiveId("other")}
                onClick={() => selectItem("other")}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                  showOther
                    ? "bg-[#f2f0eb] text-[#a66f19]"
                    : "text-[#061d35] hover:bg-[#f7f5f1]"
                }`}
              >
                <Building2 size={17} />
                <span className="flex-1">Другие подразделения</span>
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          {/* Правая панель */}
          <div className="relative min-h-[360px] bg-[#fbfaf7] p-5 sm:p-7 lg:p-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeId}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              >
                <div className="mb-7 border-b border-[#c9a45c]/30 pb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a7833f]">
                    {showCenters
                      ? "Научные и специализированные центры"
                      : showOther
                        ? "Организационные подразделения"
                        : isManagement
                          ? "Структура управления"
                          : categoryLabels[activeItem?.category ?? "science"]}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-7 text-[#061d35] sm:text-2xl">
                    {showCenters
                      ? "Центры Академии"
                      : showOther
                        ? "Другие подразделения"
                        : isManagement
                          ? managementItem?.children?.find(
                              (item) => item.id === activeId,
                            )?.title
                          : activeItem?.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#061d35]/55">
                    {showCenters
                      ? "Специализированные направления деятельности."
                      : showOther
                        ? "Подразделения организационного обеспечения."
                        : isManagement
                          ? "Выберите отдел для получения дополнительной информации."
                          : activeItem?.description}
                  </p>
                </div>

                {showCenters ? (
                  <div className="space-y-1">
                    {researchCenters.map((center, index) => (
                      <motion.div
                        key={center.id}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: reduceMotion ? 0 : index * 0.035,
                        }}
                      >
                        <Link
                          href={center.href ?? "/science/centers"}
                          className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3.5 text-sm text-[#061d35] transition-colors hover:bg-white hover:text-[#a7833f]"
                        >
                          <span>{center.title}</span>
                          <ArrowRight
                            size={16}
                            className="shrink-0 transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : showOther ? (
                  <div className="space-y-1">
                    {otherStructureItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href ?? "/structure"}
                        className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3.5 text-sm text-[#061d35] transition-colors hover:bg-white hover:text-[#a7833f]"
                      >
                        <span>{item.title}</span>
                        <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                ) : activeChildren.length > 0 ? (
                  <div className="space-y-1">
                    {activeChildren.map((child, index) => (
                      <motion.div
                        key={child.id}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: reduceMotion ? 0 : index * 0.035,
                        }}
                      >
                        {child.href ? (
                          <Link
                            href={child.href}
                            className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3.5 text-sm text-[#061d35] transition-colors hover:bg-white hover:text-[#a7833f]"
                          >
                            <span>{child.title}</span>
                            <ArrowRight
                              size={16}
                              className="shrink-0 transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        ) : (
                          <div className="flex items-center gap-3 rounded-lg px-3 py-3.5 text-sm text-[#061d35]">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a45c]" />
                            <span>{child.title}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-40 flex-col items-start justify-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center border border-[#c9a45c]/40 text-[#a7833f]">
                      <LibraryBig size={21} strokeWidth={1.5} />
                    </div>

                    <p className="max-w-sm text-sm leading-7 text-[#061d35]/60">
                      Для этого подразделения пока не добавлен перечень
                      внутренних отделов. Подробная информация будет
                      опубликована после подготовки официальных данных.
                    </p>

                    {activeItem?.href && (
                      <Link
                        href={activeItem.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9b7939] hover:text-[#061d35]"
                      >
                        Перейти к разделу
                        <ArrowDownRight size={16} />
                      </Link>
                    )}
                  </div>
                )}

                {activeItem?.href && !isManagement && !showCenters && !showOther && (
                  <div className="mt-7 border-t border-[#c9a45c]/25 pt-5">
                    <Link
                      href={activeItem.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#9b7939] transition-colors hover:text-[#061d35]"
                    >
                      Открыть раздел
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-[#061d35]/45">
          Состав подразделений отображается по предоставленным материалам.
          Неуказанные внутренние отделы будут добавлены после подтверждения
          официальных сведений.
        </p>
      </div>
    </section>
  );
}
