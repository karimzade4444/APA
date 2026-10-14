
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { ProfilePortrait } from "@/components/leadership/ProfilePortrait";
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
            <ProfilePortrait
              name={leader.name}
              photo={leader.photo}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              imageClassName="object-cover group-hover:scale-[1.04]"
              showActionIcon
              fillParent
            />
          </div>
        </div>

        {/* Информация */}
        <div className="flex flex-1 flex-col border-b border-[#c9a45c]/40 bg-transparent pb-5 pt-5">
          <p className="mb-3 min-h-8.5 text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-[#9b7939] sm:text-[11px]">
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
            <p
              className={`mt-3 text-xs leading-5 ${
                dark ? "text-white/70" : "text-[#061d35]/60"
              }`}
            >
              {[leader.degree, leader.academicTitle]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}

          <div className="mt-auto space-y-3 pt-5">
            {leader.phone && (
              <a
                href={`tel:${leader.phone.replace(/[^\d+]/g, "")}`}
                className={`relative z-20 flex items-start gap-3 text-xs leading-5 transition-colors ${
                  dark
                    ? "text-white/80 hover:text-[#d4af62]"
                    : "text-[#061d35]/65 hover:text-[#9b7939]"
                }`}
              >
                <Phone
                  size={15}
                  className={`mt-0.5 shrink-0 ${
                    dark ? "text-[#d4af62]" : "text-[#b18b43]"
                  }`}
                />
                <span className="break-all">{leader.phone}</span>
              </a>
            )}

            {leader.email && (
              <a
                href={`mailto:${leader.email}`}
                className={`relative z-20 flex items-start gap-3 text-xs leading-5 transition-colors ${
                  dark
                    ? "text-white/80 hover:text-[#d4af62]"
                    : "text-[#061d35]/65 hover:text-[#9b7939]"
                }`}
              >
                <Mail
                  size={15}
                  className={`mt-0.5 shrink-0 ${
                    dark ? "text-[#d4af62]" : "text-[#b18b43]"
                  }`}
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
        href={`/about/leadership/${leader.slug}`}
        aria-label={`Открыть биографию: ${leader.name}`}
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a45c]"
      />
    </motion.article>
  );
}
