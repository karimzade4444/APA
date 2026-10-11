
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Landmark,
  LibraryBig,
  Microscope,
  Network,
  Users,
} from "lucide-react";
import {
  structureCategories,
  structureItems,
} from "@/data/structure";

const icons = {
  leadership: Landmark,
  science: Microscope,
  education: GraduationCap,
  administration: Network,
  infrastructure: Building2,
};

export function StructureDirectory() {
  const [activeCategory, setActiveCategory] = useState("all");
  const reduceMotion = useReducedMotion();

  const filteredItems =
    activeCategory === "all"
      ? structureItems
      : structureItems.filter(
          (item) => item.category === activeCategory,
        );

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
            Выберите направление, чтобы найти нужное подразделение
            и перейти к подробной информации.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          {structureCategories.map((category) => {
            const selected = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={selected}
                className={`border px-4 py-2.5 text-sm transition-all duration-300 ${
                  selected
                    ? "border-[#061d35] bg-[#061d35] text-white"
                    : "border-[#061d35]/15 bg-[#fbfaf7] text-[#061d35]/70 hover:border-[#c9a45c] hover:text-[#061d35]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredItems.map((item, index) => {
            const Icon = icons[item.category];

            return (
              <motion.article
                layout
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : (index % 3) * 0.05,
                }}
                className="group relative flex min-h-[230px] flex-col overflow-hidden border border-white bg-[#fbfaf7] p-6 transition-colors duration-300 hover:border-[#c9a45c]/70 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xl font-semibold tabular-nums text-[#b88d3c]">
                    {item.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center border border-[#c9a45c]/35 text-[#9b7939] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#061d35] group-hover:text-[#d4af62]">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                </div>

                {item.count && (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#9b7939]">
                    Количество подразделений: {item.count}
                  </p>
                )}

                <h3 className="mt-4 text-lg font-semibold leading-7 text-[#061d35]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#061d35]/60">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#c9a45c]/70 pb-1 text-sm font-medium text-[#061d35] transition-all duration-300 hover:gap-3 hover:text-[#9b7939]"
                >
                  Подробнее
                  <ArrowUpRight size={16} />
                </Link>

                <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#c9a45c] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-8 flex items-center gap-3 text-sm text-[#061d35]/50">
          <LibraryBig size={17} className="text-[#a7833f]" />
          Сведения о подразделениях будут дополняться по мере подготовки
          официальной информации.
        </div>
      </div>
    </section>
  );
}
