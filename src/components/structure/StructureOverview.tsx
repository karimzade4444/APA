
"use client";

import { motion, useReducedMotion } from "motion/react";
import { structurePrinciples } from "@/data/structure";

export function StructureOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="site-container py-16 sm:py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7833f]">
            Как устроена Академия
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#061d35] sm:text-4xl">
            Единая система
            <span className="block text-[#a7833f]">
              управления и развития
            </span>
          </h2>

          <div className="my-6 h-px w-16 bg-[#c9a45c]" />

          <p className="max-w-lg text-base leading-8 text-[#061d35]/65">
            Деятельность Академии обеспечивается взаимодействием
            руководства, образовательных и научных подразделений,
            административных служб и инфраструктуры. Каждое направление
            выполняет свои задачи в рамках общей деятельности учреждения.
          </p>
        </motion.div>

        <div className="divide-y divide-[#c9a45c]/25 border-y border-[#c9a45c]/25">
          {structurePrinciples.map((item, index) => (
            <motion.article
              key={item.number}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              className="group grid gap-3 py-6 sm:grid-cols-[56px_1fr] sm:gap-5 sm:py-7"
            >
              <span className="text-lg font-semibold tabular-nums text-[#b88d3c] transition-transform duration-300 group-hover:translate-x-1">
                {item.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold text-[#061d35]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#061d35]/60 sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

