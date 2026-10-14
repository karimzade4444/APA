import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Archive,
  BriefcaseBusiness,
  FileText,
  Landmark,
  Mail,
  Phone,
  Users,
} from "lucide-react";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import {
  humanResourcesDuties,
  humanResourcesHead,
  humanResourcesPage,
  humanResourcesStaffingNote,
  humanResourcesUnits,
} from "@/data/humanResources";

export default function HumanResourcesPage() {
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
              { label: humanResourcesPage.title },
            ]}
          />

          <div className="mt-10 max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62] sm:text-sm">
                {humanResourcesPage.eyebrow}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {humanResourcesPage.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {humanResourcesPage.intro}
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
          aria-labelledby="human-resources-head-heading"
          className="mx-auto max-w-2xl"
        >
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Руководство
            </p>
            <h2
              id="human-resources-head-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Начальник управления
            </h2>
          </div>
          <article className="overflow-hidden border border-[#d8c28a]/70 bg-white shadow-[0_24px_60px_rgba(6,29,53,0.08)]">
            <div className="relative h-64 bg-[#061d35] sm:h-80">
              <Image
                src={humanResourcesHead.photo}
                alt={humanResourcesHead.name}
                fill
                priority
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/80 via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold leading-tight text-[#061d35] sm:text-3xl">
                {humanResourcesHead.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#18334d]">
                {humanResourcesHead.role}
              </p>
              <div className="mt-6 space-y-3 border-t border-[#e8dcc0] pt-5 text-sm text-[#061d35]/75">
                {humanResourcesHead.phones.map((phone) => (
                  <div key={phone.href} className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-[#9b7939]" />
                    <a
                      href={phone.href}
                      className="transition-colors hover:text-[#9b7939]"
                    >
                      {phone.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section aria-labelledby="human-resources-basis-heading">
          <div className="mb-5 flex items-center gap-3">
            <BriefcaseBusiness size={20} className="text-[#9b7939]" />
            <h2
              id="human-resources-basis-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Положение и правовая основа
            </h2>
          </div>
          <p className="border-l-2 border-[#c9a45c] bg-white p-5 text-sm leading-7 text-[#061d35]/75 shadow-[0_16px_40px_rgba(6,29,53,0.04)] sm:p-7 sm:text-base">
            {humanResourcesPage.legalBasis}
          </p>
        </section>

        <section aria-labelledby="human-resources-duties-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Кадровая политика и документация
            </p>
            <h2
              id="human-resources-duties-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Основные задачи управления
            </h2>
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {humanResourcesDuties.map((duty, index) => (
              <li
                key={duty}
                className="flex gap-3 border border-[#e8dcc0] bg-white p-4 sm:p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-xs font-semibold text-[#9b7939]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-7 text-[#061d35]/75">
                  {duty}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="human-resources-structure-heading">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
              Организационная структура
            </p>
            <h2
              id="human-resources-structure-heading"
              className="text-xl font-semibold text-[#061d35] sm:text-2xl"
            >
              Отделы и штатные должности
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {humanResourcesUnits.map((unit, index) => {
              const UnitIcon = index === humanResourcesUnits.length - 1 ? Archive : Users;

              return (
                <article
                  key={unit.name}
                  className="border border-[#e8dcc0] bg-white p-5 sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f2eee5] text-[#9b7939]">
                      <UnitIcon size={19} strokeWidth={1.6} />
                    </span>
                    <h3 className="text-base font-semibold leading-6 text-[#061d35]">
                      {unit.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 border-t border-[#e9e1d4] pt-4">
                    {unit.positions.map((position) => (
                      <li
                        key={position}
                        className="flex items-start gap-3 text-sm leading-6 text-[#061d35]/70"
                      >
                        <FileText
                          size={15}
                          className="mt-1 shrink-0 text-[#b88d3c]"
                        />
                        <span>{position}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="mt-4 flex items-start gap-3 border border-[#d8c28a]/60 bg-[#c9a45c]/10 p-4 text-sm leading-6 text-[#061d35]/70">
            <Mail size={17} className="mt-0.5 shrink-0 text-[#9b7939]" />
            <span>{humanResourcesStaffingNote}</span>
          </p>
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
