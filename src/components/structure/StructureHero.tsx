
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronRight, Landmark } from "lucide-react";
import Link from "next/link";
import { structureIntro } from "@/data/structure";

export function StructureHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#061d35]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-[#c9a45c]/15" />
        <div className="absolute -right-8 -top-16 h-[300px] w-[300px] rounded-full border border-[#c9a45c]/15" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c9a45c]/60 to-transparent" />
      </div>

      <div className="site-container relative py-14 sm:py-20 lg:py-24">
        <motion.nav
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Навигационная цепочка"
          className="mb-12 flex items-center gap-2 text-sm text-white/55"
        >
          <Link href="/" className="transition-colors hover:text-[#d4af62]">
            Главная
          </Link>
          <ChevronRight size={15} />
          <Link
            href="/about"
            className="transition-colors hover:text-[#d4af62]"
          >
            Об Академии
          </Link>
          <ChevronRight size={15} />
          <span className="text-[#d4af62]">Структура Академии</span>
        </motion.nav>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#c9a45c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62]">
              {structureIntro.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Структура
            <span className="block font-normal text-[#d4af62]">
              Академии
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            {structureIntro.description}
          </p>

          <div className="mt-9 flex items-center gap-3 text-sm text-white/55">
            <Landmark size={19} className="text-[#d4af62]" />
            Академия государственного управления при Президенте
            Республики Таджикистан
          </div>
        </motion.div>
      </div>
    </section>
  );
}
