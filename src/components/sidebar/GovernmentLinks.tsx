"use client";

import Link from "next/link";
import Reveal from "@/components/animations/Reveal";

const programs = [
  {
    title: "Стратегические документы Республики Таджикистан",
    href: "#",
  },
  {
    title: "Государственные программы развития",
    href: "#",
  },
  {
    title: "Национальные стратегии",
    href: "#",
  },
  {
    title: "Официальные документы",
    href: "#",
  },
];

const GovernmentLinks = () => {
  return (
    <Reveal delay={0.4}>
      <div className="border border-[#061d35]/10 bg-white shadow-sm">
        <div className="border-b border-[#061d35]/10 px-5 py-4">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-[#8e6b2c]">
            Государственные программы
          </p>
        </div>

        <div className="p-4">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group flex gap-2 border-b border-[#061d35]/10 py-3 last:border-0"
            >
              <span className="text-[#b18a3d]">→</span>

              <span className="text-xs leading-5 text-[#061d35]/70 transition-colors duration-300 group-hover:text-[#8e6b2c]">
                {program.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default GovernmentLinks;