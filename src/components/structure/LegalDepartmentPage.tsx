import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  FileText,
  Landmark,
  Scale,
} from "lucide-react";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { DepartmentHeadCard } from "@/components/structure/DepartmentHeadCard";
import {
  legalDepartmentDuties,
  legalDepartmentHead,
  legalDepartmentPage,
  legalDepartmentResponsibilities,
} from "@/data/legalDepartment";

function TextList({
  items,
  ordered = false,
}: {
  items: readonly string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";

  return (
    <List className="grid gap-3 md:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex gap-3 border border-[#e8dcc0] bg-white p-4 sm:p-5"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-xs font-semibold text-[#9b7939]">
            {ordered ? String(index + 1).padStart(2, "0") : <FileText size={15} />}
          </span>
          <span className="text-sm leading-7 text-[#061d35]/75">{item}</span>
        </li>
      ))}
    </List>
  );
}

export default function LegalDepartmentPage() {
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
              { label: legalDepartmentPage.title },
            ]}
          />

          <div className="mt-10 max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62] sm:text-sm">
                {legalDepartmentPage.eyebrow}
              </span>
            </div>
            <div className="flex items-start gap-5">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center border border-[#c9a45c]/50 bg-white/5 text-[#d4af62] sm:flex">
                <Scale size={32} strokeWidth={1.4} />
              </div>
              <div>
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {legalDepartmentPage.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                  {legalDepartmentPage.intro}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-white/60">
              <Landmark size={19} className="mt-0.5 shrink-0 text-[#d4af62]" />
              <span>{legalDepartmentPage.summary}</span>
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-[#c9a45c]/70 via-[#c9a45c]/20 to-transparent sm:mt-16" />
        </div>
      </section>

      <section className="site-container space-y-12 py-14 sm:py-20 lg:py-24">
        <section aria-labelledby="legal-basis-heading">
          <div className="mb-5 flex items-center gap-3">
            <BriefcaseBusiness size={20} className="text-[#9b7939]" />
            <h2
              id="legal-basis-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Положение и правовая основа
            </h2>
          </div>
          <div className="space-y-4 border-l-2 border-[#c9a45c] bg-white p-5 text-sm leading-7 text-[#061d35]/75 shadow-[0_16px_40px_rgba(6,29,53,0.04)] sm:p-7 sm:text-base">
            <p>{legalDepartmentPage.legalBasis}</p>
            <p>{legalDepartmentPage.cooperation}</p>
          </div>
        </section>

        <section aria-labelledby="legal-head-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Руководство
            </p>
            <h2
              id="legal-head-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Начальник отдела
            </h2>
          </div>
          <DepartmentHeadCard
            name={legalDepartmentHead.name}
            role={legalDepartmentHead.role}
            note={legalDepartmentHead.note}
            eyebrow="Юридический отдел"
            portraitClassName="h-52 sm:h-60"
          />
        </section>

        <section aria-labelledby="legal-duties-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Основные задачи
            </p>
            <h2
              id="legal-duties-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Задачи отдела
            </h2>
          </div>
          <TextList items={legalDepartmentDuties} ordered />
        </section>

        <section aria-labelledby="legal-staffing-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Штат отдела
            </p>
            <h2
              id="legal-staffing-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Три сотрудника
            </h2>
          </div>
          <TextList items={legalDepartmentPage.staffing} />
        </section>

        <section aria-labelledby="legal-responsibilities-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Полномочия и направления работы
            </p>
            <h2
              id="legal-responsibilities-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Основные направления деятельности
            </h2>
          </div>
          <TextList items={legalDepartmentResponsibilities} />
        </section>

        <div className="flex justify-start">
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
