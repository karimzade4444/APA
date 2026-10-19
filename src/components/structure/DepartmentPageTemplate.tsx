import Link from "next/link";
import {
  Archive,
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  ClipboardList,
  FileArchive,
  FileCheck2,
  FileText,
  Landmark,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { DepartmentHeadCard } from "@/components/structure/DepartmentHeadCard";
import { StructureReveal } from "@/components/structure/StructureReveal";
import type {
  DepartmentData,
  DepartmentSection,
  DepartmentSectionItem,
} from "@/data/departments";

const sectionIcons: Record<string, LucideIcon> = {
  archive: Archive,
  briefcase: BriefcaseBusiness,
  clipboard: ClipboardList,
  "file-archive": FileArchive,
  "file-check": FileCheck2,
  "file-text": FileText,
  shield: ShieldCheck,
  users: Users,
};

function SectionHeading({
  section,
}: {
  section: DepartmentSection;
}) {
  const Icon = section.icon ? sectionIcons[section.icon] : null;

  return (
    <div className="mb-5">
      {section.eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
          {section.eyebrow}
        </p>
      )}
      <div className="flex items-center gap-3">
        {Icon && <Icon size={20} className="shrink-0 text-[#9b7939]" />}
        <h2 className="text-xl font-semibold text-[#061d35] sm:text-2xl">
          {section.title}
        </h2>
      </div>
    </div>
  );
}

function isSectionItem(item: string | DepartmentSectionItem): item is DepartmentSectionItem {
  return typeof item !== "string";
}

function DepartmentSectionContent({
  section,
}: {
  section: DepartmentSection;
}) {
  if (section.type === "paragraphs") {
    return (
      <div className="space-y-4 border-l-2 border-[#c9a45c] bg-white p-5 text-sm leading-7 text-[#061d35]/75 shadow-[0_16px_40px_rgba(6,29,53,0.04)] sm:p-7 sm:text-base">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (section.type === "numbered") {
    return (
      <ol className="grid gap-3 md:grid-cols-2">
        {section.items?.map((item, index) => {
          const text = isSectionItem(item) ? item.title : item;

          return (
            <li
              key={text}
              className="flex gap-3 border border-[#e8dcc0] bg-white p-4 sm:p-5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-xs font-semibold text-[#9b7939]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-7 text-[#061d35]/75">{text}</span>
            </li>
          );
        })}
      </ol>
    );
  }

  if (section.type === "positions") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {section.items?.map((item) => {
          const text = isSectionItem(item) ? item.title : item;

          return (
            <li
              key={text}
              className="flex min-h-24 items-center gap-3 border border-[#e8dcc0] bg-white p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-[#9b7939]">
                <Users size={17} />
              </span>
              <span className="text-sm font-medium leading-6 text-[#061d35]/80">
                {text}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  if (section.type === "units") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {section.items?.map((item, index) => {
          const unit = isSectionItem(item)
            ? item
            : { title: item, positions: [] as readonly string[] };
          const UnitIcon = index === (section.items?.length ?? 0) - 1 ? Archive : Users;

          return (
            <article
              key={unit.title}
              className="flex h-full flex-col border border-[#e8dcc0] bg-white p-5 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f2eee5] text-[#9b7939]">
                  <UnitIcon size={19} strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-semibold leading-6 text-[#061d35]">
                  {unit.title}
                </h3>
              </div>
              {unit.positions && (
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
              )}
              {unit.href && (
                <Link
                  href={unit.href}
                  className="mt-auto inline-flex items-center gap-2 border-t border-[#e9e1d4] pt-4 text-sm font-semibold text-[#9b7939] transition-colors hover:text-[#061d35]"
                >
                  Перейти
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </article>
          );
        })}
      </div>
    );
  }

  if (section.type === "cards") {
    return (
      <>
        {section.paragraphs?.length ? (
          <div className="mb-4 space-y-3 text-sm leading-7 text-[#061d35]/65 sm:text-base">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        <ul className="grid gap-4 sm:grid-cols-2">
          {section.items?.map((item) => {
            const card = isSectionItem(item) ? item : { title: item };
            return (
              <li
                key={card.title}
                className="flex gap-4 border border-[#e8dcc0] bg-white p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f2eee5] text-[#9b7939]">
                  {section.icon === "archive" ? (
                    <FileArchive size={20} strokeWidth={1.5} />
                  ) : (
                    <FileText size={20} strokeWidth={1.5} />
                  )}
                </span>
                <div>
                  <h3 className="font-semibold leading-6 text-[#061d35]">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="mt-2 text-sm leading-6 text-[#061d35]/65">
                      {card.description}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <section className="border border-[#d6c596] bg-[#061d35] p-6 text-white sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/60 bg-white/5 text-[#d4af62]">
          <FileCheck2 size={22} />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af62]">
            {section.eyebrow ?? "Основная информация"}
          </p>
          <p className="text-sm leading-7 text-white/80 sm:text-base">
            {section.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function DepartmentPageTemplate({
  department,
}: {
  department: DepartmentData;
}) {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Об Академии", href: "/about" },
    { label: "Структура", href: "/about/structure" },
    ...(department.parent
      ? [{ label: department.parent.title, href: department.parent.href }]
      : []),
    { label: department.title },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#061d35]">
      <section className="relative isolate overflow-hidden bg-[#061d35]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-[#061d35] via-[#061d35]/95 to-[#102d49]/80" />
          <div className="absolute -right-24 -top-32 h-lg w-lg rounded-full border border-[#c9a45c]/20" />
          <div className="absolute -right-12 -top-20 h-104 w-104 rounded-full border border-[#c9a45c]/20" />
        </div>
        <div className="site-container relative z-10 py-12 md:py-16 lg:py-20">
          <Breadcrumbs items={breadcrumbs} />

          <StructureReveal className="mt-10 max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a45c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af62] sm:text-sm">
                {department.eyebrow}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {department.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {department.intro}
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-white/60">
              <Landmark size={19} className="mt-0.5 shrink-0 text-[#d4af62]" />
              <span>
                Академия государственного управления при Президенте Республики
                Таджикистан
              </span>
            </div>
          </StructureReveal>

          <div className="mt-12 h-px w-full bg-linear-to-r from-[#c9a45c]/70 via-[#c9a45c]/20 to-transparent sm:mt-16" />
        </div>
      </section>

      <section className="site-container space-y-12 py-14 sm:py-20 lg:py-24">
        {department.head && (
          <StructureReveal>
            <section className="mx-auto max-w-2xl" aria-labelledby="department-head-heading">
              <div className="mb-5 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833f]">
                  Руководство
                </p>
                <h2
                  id="department-head-heading"
                  className="text-xl font-semibold text-[#061d35] sm:text-2xl"
                >
                  {department.head.role}
                </h2>
              </div>
              <DepartmentHeadCard
                name={department.head.name}
                role={department.head.role}
                photo={department.head.photo}
                phones={department.head.phones}
                phone={department.head.phone?.label}
                phoneHref={department.head.phone?.href}
                email={department.head.email}
                eyebrow={department.title}
                portraitClassName="h-68 sm:h-84"
                priority
              />
            </section>
          </StructureReveal>
        )}

        {department.sections.map((section, index) => (
          <StructureReveal key={section.title} delay={index * 0.03}>
            <section aria-label={section.title}>
              {section.type !== "callout" && <SectionHeading section={section} />}
              <DepartmentSectionContent section={section} />
            </section>
          </StructureReveal>
        ))}

        {department.staffingNote && (
          <StructureReveal>
            <p className="flex items-start gap-3 border border-[#d8c28a]/60 bg-[#c9a45c]/10 p-4 text-sm leading-6 text-[#061d35]/70">
              <FileText size={17} className="mt-0.5 shrink-0 text-[#9b7939]" />
              <span>{department.staffingNote}</span>
            </p>
          </StructureReveal>
        )}

        <div className="flex flex-wrap justify-between gap-4">
          <Link
            href={department.parent?.href ?? "/about/structure"}
            className="inline-flex items-center gap-3 text-sm font-medium text-[#18334d] transition-colors hover:text-[#9b7939]"
          >
            <ArrowLeft size={17} />
            {department.parent ? "К управлению кадров" : "Вернуться к структуре Академии"}
          </Link>
          {department.parent && (
            <Link
              href="/about/structure"
              className="inline-flex items-center gap-3 text-sm font-medium text-[#18334d] transition-colors hover:text-[#9b7939]"
            >
              <Landmark size={17} />
              К структуре Академии
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
