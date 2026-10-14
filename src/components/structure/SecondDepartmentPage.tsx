import Link from "next/link";
import {
  ArrowLeft,
  ClipboardList,
  FileText,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { DepartmentHeadCard } from "@/components/structure/DepartmentHeadCard";
import {
  secondDepartmentDuties,
  secondDepartmentHead,
  secondDepartmentPage,
  secondDepartmentStaff,
  secondDepartmentStudentRecords,
} from "@/data/secondDepartment";

function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="grid gap-3 md:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex gap-3 border border-[#e8dcc0] bg-white p-4 sm:p-5"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-xs font-semibold text-[#9b7939]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-7 text-[#061d35]/75">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function SecondDepartmentPage() {
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
              { label: secondDepartmentPage.title },
            ]}
          />

          <div className="mt-10 max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af62] sm:text-sm">
                {secondDepartmentPage.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {secondDepartmentPage.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {secondDepartmentPage.intro}
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
          aria-labelledby="second-department-head-heading"
          className="mx-auto max-w-2xl"
        >
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Руководство
            </p>
            <h2
              id="second-department-head-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Начальник отдела
            </h2>
          </div>
          <DepartmentHeadCard
            name={secondDepartmentHead.name}
            role={secondDepartmentHead.role}
            photo={secondDepartmentHead.photo}
            phones={secondDepartmentHead.phones}
            email={secondDepartmentHead.email}
            eyebrow="Второй отдел"
            portraitClassName="h-68 sm:h-84"
            priority
          />
        </section>

        <section aria-labelledby="second-department-about-heading">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#9b7939]" />
            <h2
              id="second-department-about-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Положение и организация работы
            </h2>
          </div>
          <div className="space-y-4 border-l-2 border-[#c9a45c] bg-white p-5 text-sm leading-7 text-[#061d35]/75 shadow-[0_16px_40px_rgba(6,29,53,0.04)] sm:p-7 sm:text-base">
            <p>{secondDepartmentPage.legalBasis}</p>
            <p>{secondDepartmentPage.appointment}</p>
          </div>
        </section>

        <section aria-labelledby="second-department-staff-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Штат отдела
            </p>
            <h2
              id="second-department-staff-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Четыре штатные должности
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {secondDepartmentStaff.map((position) => (
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

        <section aria-labelledby="second-department-duties-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Мобилизационная и военно-учётная работа
            </p>
            <h2
              id="second-department-duties-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Основные обязанности отдела
            </h2>
          </div>
          <NumberedList items={secondDepartmentDuties} />
        </section>

        <section aria-labelledby="second-department-records-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Учёт движения студентов
            </p>
            <h2
              id="second-department-records-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Работа с документами студентов
            </h2>
          </div>
          <NumberedList items={secondDepartmentStudentRecords} />
        </section>

        <section className="border border-[#d6c596] bg-[#061d35] p-6 text-white sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/60 bg-white/5 text-[#d4af62]">
              <ClipboardList size={22} />
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af62]">
                Ответственное хранение
              </p>
              <p className="text-sm leading-7 text-white/80 sm:text-base">
                Отдел обеспечивает точное ведение военно-учётных документов,
                своевременное взаимодействие с военными комиссариатами и
                контроль изменений в составе студентов.
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
            <FileText size={17} />
            К структуре Академии
          </Link>
        </div>
      </section>
    </main>
  );
}
