"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { Leader } from "@/data/leadership";

type LeadershipCardProps = {
  leader: Leader;
  index?: number;
};

export default function LeadershipCard({
  leader,
  index = 0,
}: LeadershipCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1] as const,
      };

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -6, transition: { duration: 0.25 } }
      }
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#c9a45c]/25 bg-white shadow-[0_8px_30px_rgba(6,29,53,0.06)] transition-colors duration-300 hover:border-[#c9a45c]/70 hover:shadow-[0_20px_55px_rgba(6,29,53,0.13)]"
    >
      {/* Верхняя декоративная линия */}
      <div className="relative h-1 w-full overflow-hidden bg-[#061d35]">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#b38b3e] via-[#f0d69a] to-[#c9a45c]"
          initial={false}
          whileHover={shouldReduceMotion ? undefined : { x: "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </div>

      {/* Фотография */}
      <Link
        href={`/leadership/${leader.slug}`}
        aria-label={`Подробнее о руководителе: ${leader.name}`}
        className="relative block overflow-hidden bg-[#061d35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a45c]"
      >
        <div className="relative aspect-[4/4.2] w-full overflow-hidden">
          <Image
            src={leader.photo}
            alt={leader.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          {/* Затемнение в нижней части фото */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d35]/75 via-transparent to-[#061d35]/5" />

          {/* Декоративное вращающееся кольцо */}
          <motion.div
            aria-hidden="true"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-[#e0c47e]/70 bg-[#061d35]/35 text-[#f0d69a] backdrop-blur-sm"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          >
            <span className="block size-3 rounded-full border border-current" />
          </motion.div>

          {/* Имя на фотографии при наведении */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f0d69a]">
              Руководство Академии
            </p>
          </div>
        </div>
      </Link>

      {/* Информация */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-[#061d35] transition-colors duration-300 group-hover:text-[#9b762e] sm:text-xl">
          {leader.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {leader.position}
        </p>

        {(leader.degree || leader.academicTitle) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {leader.degree && (
              <span className="rounded-md border border-[#c9a45c]/30 bg-[#c9a45c]/10 px-2.5 py-1 text-xs font-medium text-[#74571e]">
                {leader.degree}
              </span>
            )}

            {leader.academicTitle && (
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {leader.academicTitle}
              </span>
            )}
          </div>
        )}

        {/* Контакты */}
        {(leader.phone || leader.email) && (
          <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
            {leader.phone && (
              <a
                href={`tel:${leader.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#9b762e]"
              >
                <Phone className="size-4 shrink-0 text-[#b38b3e]" />
                <span className="break-all">{leader.phone}</span>
              </a>
            )}

            {leader.email && (
              <a
                href={`mailto:${leader.email}`}
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#9b762e]"
              >
                <Mail className="size-4 shrink-0 text-[#b38b3e]" />
                <span className="break-all">{leader.email}</span>
              </a>
            )}
          </div>
        )}

        {/* Переход к полной биографии */}
        <div className="mt-auto pt-6">
          <Link
            href={`/leadership/${leader.slug}`}
            className="inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-[#c9a45c]/45 px-4 py-3 text-sm font-medium text-[#061d35] transition-all duration-300 hover:border-[#061d35] hover:bg-[#061d35] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] focus-visible:ring-offset-2"
          >
            <span>Полная биография</span>
            <motion.span
              className="flex"
              whileHover={shouldReduceMotion ? undefined : { x: 3, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="size-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
