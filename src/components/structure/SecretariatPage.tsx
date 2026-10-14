"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { LeadershipOrbit } from "@/components/leadership/LeadershipHeroEffects";
import { DepartmentHeadCard } from "@/components/structure/DepartmentHeadCard";
import {
  secretariatOfficers,
  secretariatPage,
  secretariatResponsibilities,
} from "@/data/secretariat";

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function SecretariatPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#061d35]">
      <section className="relative isolate overflow-hidden bg-[#061d35]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#061d35] via-[#061d35]/95 to-[#102d49]/80" />
          <div className="absolute -right-24 -top-32 h-lg w-lg rounded-full border border-[#c9a45c]/20" />
          <div className="absolute -right-12 -top-20 h-104 w-104 rounded-full border border-[#c9a45c]/20" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/6" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[4%] top-0 size-72 rounded-full bg-[radial-gradient(circle,rgba(201,164,92,0.16)_0%,rgba(201,164,92,0.06)_42%,transparent_72%)] sm:right-[8%] sm:top-4 sm:size-96"
        />
        <LeadershipOrbit className="pointer-events-none absolute right-[8%] top-12 z-0 h-36 w-36 text-[#c9a45c]/70 sm:right-[12%] sm:top-16 sm:h-48 sm:w-48" />

        <div className="site-container relative z-10 py-12 md:py-16 lg:py-20">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Об Академии", href: "/about" },
                { label: "Структура", href: "/about/structure" },
                { label: secretariatPage.title },
              ]}
            />
          </Reveal>

          <div className="max-w-4xl">
            <Reveal delay={0.1}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#c9a45c]" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62] sm:text-sm">
                  {secretariatPage.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {secretariatPage.titlePartOne}{" "}
                <span className="text-[#d4af62]">{secretariatPage.titlePartTwo}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {secretariatPage.intro}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
                <Landmark size={19} className="text-[#d4af62]" />
                <span>{secretariatPage.summary}</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-[#c9a45c]/70 via-[#c9a45c]/20 to-transparent sm:mt-16" />
        </div>
      </section>

      <section className="site-container py-14 sm:py-20 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7833f] sm:text-sm">
              Руководящий аппарат
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-[#061d35] sm:text-3xl lg:text-4xl">
              Ответственные сотрудники
            </h2>
          </div>
          <div className="h-1 w-16 rounded-full bg-[#c9a45c]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {secretariatOfficers.map((person, index) => (
            <motion.article
              key={person.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="h-full"
            >
              <DepartmentHeadCard
                name={person.name}
                role={person.role}
                photo={person.photo}
                eyebrow={person.shortRole}
                description={person.description}
                phone={person.phone}
                email={person.email}
                portraitClassName="h-64 sm:h-72"
                priority={index === 0}
              />
            </motion.article>
          ))}
        </div>

        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 overflow-hidden border border-[#d6c596] bg-[#061d35] p-6 text-white sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/60 bg-white/5 text-[#d4af62]">
              <BriefcaseBusiness size={22} />
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#d4af62]">
                Функции структурного подразделения
              </p>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                Основные обязанности
              </h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {secretariatResponsibilities.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-sm border border-white/10 bg-white/2 p-4"
              >
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-[#d4af62]">
                  <FileText size={15} />
                </div>
                <p className="text-sm leading-7 text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-sm border border-[#c9a45c]/25 bg-[#0b2340] p-5 text-sm leading-7 text-white/80">
            <div className="mb-3 flex items-center gap-3 text-[#d4af62]">
              <ShieldCheck size={18} />
              <span className="font-medium uppercase tracking-[0.18em] text-xs">
                Сфера деятельности
              </span>
            </div>
            <p>
              Канцелярия и помощник ректора Академии действуют в соответствии с требованиями
              законодательства и обеспечивают бесперебойную работу административного аппарата,
              оперативное сопровождение ректора, а также качественную организацию документооборота,
              взаимодействия с внешними структурами и контроль исполнения поручений.
            </p>
          </div>
        </motion.section>

        <div className="mt-10 flex justify-start">
          <Link
            href="/about/structure"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#18334d] transition-colors hover:text-[#9b7939]"
          >
            <ArrowLeft size={17} />
            Вернуться к структуре Академии
          </Link>
        </div>
      </section>
    </main>
  );
}
