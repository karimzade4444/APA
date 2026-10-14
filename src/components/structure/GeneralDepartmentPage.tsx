import Link from "next/link";
import {
  Archive,
  ArrowLeft,
  ClipboardList,
  FileCheck2,
  FileText,
  Inbox,
  Landmark,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { DepartmentHeadCard } from "@/components/structure/DepartmentHeadCard";
import {
  generalDepartmentActivities,
  generalDepartmentHead,
  generalDepartmentPage,
  generalDepartmentStaff,
} from "@/data/generalDepartment";

const activityIcons = [
  FileText,
  FileCheck2,
  Inbox,
  Mail,
  Archive,
  Users,
  ClipboardList,
];

export default function GeneralDepartmentPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#061d35]">
      <section className="relative isolate overflow-hidden bg-[#061d35]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#061d35] via-[#061d35]/95 to-[#102d49]/80" />
          <div className="absolute -right-24 -top-32 h-lg w-lg rounded-full border border-[#c9a45c]/20" />
          <div className="absolute -right-12 -top-20 h-104 w-104 rounded-full border border-[#c9a45c]/20" />
        </div>
        <div className="site-container relative z-10 py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Об Академии", href: "/about" },
              { label: "Структура", href: "/about/structure" },
              {
                label: "Управление кадров, делопроизводства и специальных работ",
                href: "/structure/management/hr-department",
              },
              { label: generalDepartmentPage.title },
            ]}
          />

          <div className="mt-10 max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af62] sm:text-sm">
                {generalDepartmentPage.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {generalDepartmentPage.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {generalDepartmentPage.intro}
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-white/60">
              <Landmark size={19} className="mt-0.5 shrink-0 text-[#d4af62]" />
              <span>
                Академия государственного управления при Президенте Республики
                Таджикистан
              </span>
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-[#c9a45c]/70 via-[#c9a45c]/20 to-transparent sm:mt-16" />
        </div>
      </section>

      <section className="site-container space-y-12 py-14 sm:py-20 lg:py-24">
        <section
          aria-labelledby="general-department-head-heading"
          className="mx-auto max-w-2xl"
        >
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Руководство
            </p>
            <h2
              id="general-department-head-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Начальник отдела
            </h2>
          </div>
          <DepartmentHeadCard
            name={generalDepartmentHead.name}
            role={generalDepartmentHead.role}
            eyebrow="Общий отдел"
            portraitClassName="h-48 sm:h-56"
          />
        </section>

        <section aria-labelledby="general-department-about-heading">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#9b7939]" />
            <h2
              id="general-department-about-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Положение и организация работы
            </h2>
          </div>
          <div className="space-y-4 border-l-2 border-[#c9a45c] bg-white p-5 text-sm leading-7 text-[#061d35]/75 shadow-[0_16px_40px_rgba(6,29,53,0.04)] sm:p-7 sm:text-base">
            <p>{generalDepartmentPage.legalBasis}</p>
            <p>{generalDepartmentPage.responsibility}</p>
          </div>
        </section>

        <section aria-labelledby="general-department-activities-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Основные направления
            </p>
            <h2
              id="general-department-activities-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Направления деятельности Общего отдела
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {generalDepartmentActivities.map((activity, index) => {
              const ActivityIcon = activityIcons[index];

              return (
                <li
                  key={activity.title}
                  className="flex gap-4 border border-[#e8dcc0] bg-white p-5 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f2eee5] text-[#9b7939]">
                    <ActivityIcon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-6 text-[#061d35]">
                      {activity.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#061d35]/65">
                      {activity.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="general-department-staff-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Штат отдела
            </p>
            <h2
              id="general-department-staff-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Четыре штатные должности
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {generalDepartmentStaff.map((position) => (
              <li
                key={position}
                className="flex min-h-24 items-center gap-3 border border-[#e8dcc0] bg-white p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-[#9b7939]">
                  <Users size={17} />
                </span>
                <span className="text-sm font-medium leading-6 text-[#061d35]/80">
                  {position}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-[#d6c596] bg-[#061d35] p-6 text-white sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/60 bg-white/5 text-[#d4af62]">
              <FileCheck2 size={22} />
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af62]">
                Цель работы
              </p>
              <p className="text-sm leading-7 text-white/80 sm:text-base">
                {generalDepartmentPage.purpose}
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap justify-between gap-4">
          <Link
            href="/structure/management/hr-department"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#18334d] transition-colors hover:text-[#9b7939]"
          >
            <ArrowLeft size={17} />
            К управлению кадров
          </Link>
          <Link
            href="/about/structure"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#18334d] transition-colors hover:text-[#9b7939]"
          >
            <Landmark size={17} />
            К структуре Академии
          </Link>
        </div>
      </section>
    </main>
  );
}
