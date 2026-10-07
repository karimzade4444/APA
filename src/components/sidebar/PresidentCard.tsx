"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "@/components/animations/Reveal";

const PresidentCard = () => {
  return (
    <Reveal delay={0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden border border-[#d4af62]/30 bg-[#061d35]"
      >
        <div className="border-b border-[#d4af62]/30 px-5 py-4">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-[#d4af62]">
            Президент
          </p>
        </div>

        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src="/images/sidebar/president.png"
            alt="Президент Республики Таджикистан"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#061d35] via-transparent to-transparent opacity-70" />
        </div>

        <div className="px-5 py-5">
          <p className="text-xs leading-5 text-white/60">
            Президент Республики Таджикистан,
            <br />
            Лидер нации
          </p>

          <h3 className="mt-2 font-serif text-lg text-white">Эмомали Рахмон</h3>

          <div className="mt-4 h-px w-10 bg-[#d4af62] transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>
    </Reveal>
  );
};

export default PresidentCard;
