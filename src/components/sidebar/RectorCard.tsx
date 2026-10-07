"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/animations/Reveal";

const RectorCard = () => {
  return (
    <Reveal delay={0.2}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden border border-[#d4af62]/30 bg-white shadow-sm"
      >
        <div className="border-b border-[#061d35]/10 bg-[#f7f5f1] px-5 py-4">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-[#8e6b2c]">
            Руководство Академии
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e5df]">
          <Image
            src="/images/sidebar/rector.jpg"
            alt="Ректор Академии"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/60 via-transparent to-transparent" />
        </div>

        <div className="px-5 py-5">
          <p className="text-xs text-[#061d35]/50">Ректор Академии</p>

          <h3 className="mt-1 font-serif text-lg font-semibold text-[#061d35]">
            Сафарзода Даврон Джурахон
          </h3>

          <Link
            href="/about/leadership/rector"
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#8e6b2c] transition-all duration-300 hover:gap-3"
          >
            Подробнее
            <span>→</span>
          </Link>

          <div className="mt-4 h-px w-10 bg-[#d4af62] transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>
    </Reveal>
  );
};

export default RectorCard;
