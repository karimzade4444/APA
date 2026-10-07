"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

import type { QuickLink } from "@/data/quickLinks";

type QuickLinkCardProps = {
  item: QuickLink;
  index: number;
};

const QuickLinkCard = ({ item, index }: QuickLinkCardProps) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link
        href={item.href}
        className="relative block aspect-[1.9/1] overflow-hidden border border-white/20 bg-[#061d35]"
      >
        {/* Основное состояние */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center transition-opacity duration-500 group-hover:opacity-0">
          <Icon
            strokeWidth={1.5}
            className="h-10 w-10 text-white transition-transform duration-500 group-hover:scale-110"
          />

          <h3 className="mt-3 font-serif text-base font-semibold uppercase tracking-wide text-white">
            {item.title}
          </h3>

          <div className="mt-3 h-px w-10 bg-[#d4af62] transition-all duration-500 group-hover:w-16" />
        </div>

        {/* Фотография, выезжающая снизу */}
        <div className="absolute inset-0 z-20 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Затемнение */}
          <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/95 via-[#061d35]/30 to-transparent" />

          {/* Золотая линия сверху */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-[#d4af62]" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-xs font-medium tracking-[0.2em] text-[#d4af62]">
                0{index + 1}
              </span>

              <span className="h-px w-8 bg-[#d4af62]" />
            </div>

            <h3 className="font-serif text-lg font-semibold text-white">
              {item.title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/70">
              Перейти
              <span className="text-[#d4af62] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>

        {/* Номер */}
        <span className="absolute right-4 top-4 z-30 font-serif text-sm text-white/30">
          0{index + 1}
        </span>
      </Link>
    </motion.div>
  );
};

export default QuickLinkCard;
