"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/animations/Reveal";

const links = [
  {
    title: "Об Академии",
    href: "/about",
  },
  {
    title: "Руководство Академии",
    href: "/leadership",
  },
  {
    title: "Обращение к ректору",
    href: "/about/leadership/appeal",
  },
  {
    title: "Факультеты",
    href: "/about/faculties",
  },
  {
    title: "Кафедры",
    href: "/about/departments",
  },
  {
    title: "Поступление",
    href: "/admission",
  },
];

const InfoLinks = () => {
  return (
    <Reveal delay={0.3}>
      <div className="border border-[#d4af62]/25 bg-[#061d35]">
        <div className="border-b border-[#d4af62]/30 px-5 py-4">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[#d4af62]">
            Информационные разделы
          </p>
        </div>

        <div className="p-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 border-b border-white/5 px-3 py-3 last:border-0"
              >
                <span className="text-[#d4af62] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="text-sm text-white/75 transition-colors duration-300 group-hover:text-[#d4af62]">
                  {link.title}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default InfoLinks;
