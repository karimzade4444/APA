
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { Leader } from "@/data/leadership";

type LeadershipCardProps = {
  leader: Leader;
  index?: number;
  dark?: boolean;
};

export function LeadershipCard({
  leader,
  index = 0,
  dark = false,
}: LeadershipCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 22 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.3),
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col">
        {/* Фото */}
        <div className="relative block overflow-hidden border border-[#c9a45c]/35 bg-[#e9e5dc]">
          <div className="relative aspect-[4/4.7] overflow-hidden">
            <Image
              src={leader.photo}
              alt={leader.name}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061d35]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="h-px flex-1 bg-[#d4af62]/80" />

              <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-[#061d35]/80 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[#d4af62] group-hover:text-[#d4af62]">
                <ArrowUpRight size={17} />
              </span>
            </div>
          </div>
        </div>

        {/* Информация */}
        <div className="flex flex-1 flex-col border-b border-[#c9a45c]/40 bg-transparent pb-5 pt-5">
          <p className="mb-3 min-h-[34px] text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-[#9b7939] sm:text-[11px]">
            {leader.shortPosition}
          </p>

          <h3
            className={`text-lg font-semibold leading-snug transition-colors duration-300 sm:text-xl ${
              dark
                ? "text-white group-hover:text-[#d4af62]"
                : "text-[#061d35] group-hover:text-[#9b7939]"
            }`}
          >
            {leader.name}
          </h3>

          {(leader.degree || leader.academicTitle) && (
            <p className="mt-3 text-xs leading-5 text-[#061d35]/60">
              {[leader.degree, leader.academicTitle]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}

          <div className="mt-auto space-y-3 pt-5">
            {leader.phone && (
              <a
                href={`tel:${leader.phone.replace(/[^\d+]/g, "")}`}
                className="relative z-20 flex items-start gap-3 text-xs leading-5 text-[#061d35]/65 transition-colors hover:text-[#9b7939]"
              >
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0 text-[#b18b43]"
                />
                <span className="break-all">{leader.phone}</span>
              </a>
            )}

            {leader.email && (
              <a
                href={`mailto:${leader.email}`}
                className="relative z-20 flex items-start gap-3 text-xs leading-5 text-[#061d35]/65 transition-colors hover:text-[#9b7939]"
              >
                <Mail
                  size={15}
                  className="mt-0.5 shrink-0 text-[#b18b43]"
                />
                <span className="break-all">{leader.email}</span>
              </a>
            )}
          </div>

          <span
            className={`mt-6 inline-flex w-fit items-center gap-2 border-b pb-1 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 group-hover:gap-3 ${
              dark
                ? "border-[#c9a45c]/70 text-white group-hover:border-[#d4af62] group-hover:text-[#d4af62]"
                : "border-[#c9a45c]/70 text-[#061d35] group-hover:border-[#061d35]"
            }`}
          >
            Биография
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
      <Link
        href={`/leadership/${leader.slug}`}
        aria-label={`Открыть биографию: ${leader.name}`}
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a45c]"
      />
    </motion.article>
  );
}
