"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/animations/Reveal";

const resources = [
  {
    title: "Официальный сайт Президента Республики Таджикистан",
    shortTitle: "Президент Республики Таджикистан",
    href: "#",
  },
  {
    title: "Национальный портал государственных услуг",
    shortTitle: "Государственные услуги",
    href: "#",
  },
  {
    title: "Единый государственный информационный ресурс",
    shortTitle: "Государственные ресурсы",
    href: "#",
  },
  {
    title: "Национальный туристический портал Таджикистана",
    shortTitle: "Туризм Таджикистана",
    href: "#",
  },
];

const OfficialResources = () => {
  return (
    <Reveal delay={0.45}>
      <div className="border border-[#d4af62]/25 bg-[#061d35]">
        <div className="border-b border-[#d4af62]/30 px-5 py-4">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-[#d4af62]">
            Официальные ресурсы
          </p>
        </div>

        <div className="p-3">
          {resources.map((resource, index) => (
            <Link
              key={resource.shortTitle}
              href={resource.href}
              className="block"
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
                className="group flex items-center gap-3 border-b border-white/5 px-3 py-3 last:border-0"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d4af62]/30 text-[#d4af62] transition-colors duration-300 group-hover:border-[#d4af62] group-hover:bg-[#d4af62] group-hover:text-[#061d35]">
                  <span className="text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-medium text-white/80 transition-colors duration-300 group-hover:text-[#d4af62]">
                    {resource.shortTitle}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-white/40">
                    Официальный ресурс
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default OfficialResources;
