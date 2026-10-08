"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "@/components/animations/Reveal";
import { presidentSections } from "@/data/presidentSections";

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

        <a
          href="https://www.president.tj/president/biography"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Биография Президента Республики Таджикистан"
          className="relative block aspect-4/5 overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#d4af62]"
        >
          <Image
            src="/images/sidebar/president.png"
            alt="Президент Республики Таджикистан"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#061d35] via-transparent to-transparent opacity-70" />
        </a>

        <div className="px-5 py-5">
          <p className="text-xs leading-5 text-white/60">
            Президент Республики Таджикистан,
            <br />
            Лидер нации
          </p>

          <h3 className="mt-2">
            <a
              href="https://www.president.tj/president/biography"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-white transition-colors hover:text-[#d4af62] focus-visible:text-[#d4af62] focus-visible:outline-none"
            >
              Эмомали Рахмон
            </a>
          </h3>

          <div className="mt-4 h-px w-10 bg-[#d4af62] transition-all duration-500 group-hover:w-full" />

          <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
            {presidentSections.map((section, index) => (
              <li key={section.href}>
                <Reveal delay={0.15 + index * 0.08} y={12} duration={0.45}>
                  <motion.a
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group/link flex items-center gap-2 py-1 text-xs text-white/75 transition-colors hover:text-[#d4af62] focus-visible:text-[#d4af62] focus-visible:outline-none"
                  >
                    <span
                      aria-hidden="true"
                      className="text-[#d4af62] transition-transform group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                    {section.title}
                  </motion.a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Reveal>
  );
};

export default PresidentCard;
