import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Globe2,
  GraduationCap,
  Landmark,
  LibraryBig,
  Microscope,
  ShieldCheck,
  Target,
} from "lucide-react";


import { academyAbout } from "@/data/about";
import AboutHeroSlider from "./AboutHeroSlider";

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a37d37]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold leading-tight text-[#09223d] md:text-3xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="group rounded-xl border border-[#e4dccd] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-lg">
      <div className="mb-4 h-1 w-10 rounded-full bg-[#c9a45c] transition-all group-hover:w-16" />
      <h3 className="text-lg font-semibold leading-snug text-[#09223d]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function PhotoGrid({
  photos,
}: {
  photos: { src: string; alt: string; title?: string }[];
}) {
  return (
    <div
      className={`mb-8 grid gap-4 ${
        photos.length === 3 ? "sm:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {photos.map((photo) => (
        <figure key={photo.src} className="min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#e5dfd3]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover  transition duration-500 hover:scale-105"
            />
          </div>
          {photo.title && (
            <figcaption className="mt-3 text-sm text-slate-500">
              {photo.title}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e9]">
      <section className="relative overflow-hidden bg-[#071d34] text-white">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full border border-[#c9a45c]/20" />
        <div className="pointer-events-none absolute -right-12 -top-20 h-[26rem] w-[26rem] rounded-full border border-[#c9a45c]/20" />

        <div className="site-container relative py-12 md:py-16 lg:py-20">
          <div className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition hover:text-[#e5c681]">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#e5c681]">Об Академии</span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-[#c9a45c] pl-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c681]">
                  Официальный портал
                </span>
              </div>

              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
                Об Академии
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/80 md:text-xl">
                Академия государственного управления при Президенте Республики
                Таджикистан
              </p>

              <div className="my-7 h-px w-20 bg-[#c9a45c]" />

              <p className="leading-8 text-white/70">
                Образование, наука и подготовка профессиональных кадров для
                государственного управления и государственной службы.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#history"
                  className="inline-flex items-center justify-center rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold text-[#071d34] transition hover:bg-[#e1c37f]"
                >
                  История Академии
                </a>
                <a
                  href="#education"
                  className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#c9a45c] hover:text-[#e5c681]"
                >
                  Образование
                </a>
              </div>
            </div>

            <AboutHeroSlider />
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent" />
      </section>

      <section className="site-container py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl bg-[#0b2947] p-7 text-white md:p-9">
            <div className="absolute -right-8 -top-8 opacity-10">
              <Landmark size={150} strokeWidth={0.8} />
            </div>
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9a45c]/50 text-[#e5c681]">
                <Target size={24} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c681]">
                Наша миссия
              </p>
              <p className="mt-4 text-lg leading-8 text-white/90">
                {academyAbout.mission}
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-[#e3d8c5] bg-white p-7 md:p-9">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5eddd] text-[#98712e]">
              <ShieldCheck size={24} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#98712e]">
              Основная цель
            </p>
            <p className="mt-4 text-lg leading-8 text-[#263b50]">
              {academyAbout.goal}
            </p>
          </article>
        </div>
      </section>

      <section
        id="history"
        className="scroll-mt-24 border-y border-[#e4dccd] bg-white py-14 md:py-20"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="Путь развития"
            title="История Академии"
            text="Основные этапы становления и развития системы подготовки кадров государственного управления."
          />

          <PhotoGrid photos={academyAbout.historyPhotos} />

          <div className="relative ml-2 border-l border-[#d8c39a] md:ml-4">
            {academyAbout.history.map((item) => (
              <article
                key={`${item.year}-${item.title}`}
                className="relative pb-9 pl-7 last:pb-0 md:pl-10"
              >
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-[#b58a3c] ring-1 ring-[#c9a45c]" />
                <p className="text-sm font-bold tracking-wider text-[#a37d37]">
                  {item.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#09223d] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Основные направления"
          title="Задачи и деятельность Академии"
          text="Работа Академии охватывает подготовку специалистов, развитие научных исследований и совершенствование практики государственного управления."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {academyAbout.responsibilities.map((item, index) => (
            <article
              key={item}
              className="flex gap-4 rounded-xl border border-[#e4dccd] bg-white p-5 md:p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3ead7] text-sm font-bold text-[#98712e]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-xl font-semibold text-[#09223d]">
            Основные направления деятельности
          </h3>
          <div className="flex flex-wrap gap-3">
            {academyAbout.activityAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#d9c9a9] bg-white px-4 py-2.5 text-sm text-[#243b51]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eae3d6] py-14 md:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Организационная структура"
            title="Структура Академии"
            text="Подразделения обеспечивают образовательную, научную, аналитическую и организационную деятельность учреждения."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academyAbout.structure.map((item, index) => (
              <div
                key={item}
                className="flex min-h-24 items-start gap-4 rounded-xl border border-white/80 bg-white/80 p-5"
              >
                <span className="mt-0.5 text-lg font-semibold text-[#b18a43]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium leading-6 text-[#19334b]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        className="scroll-mt-24 site-container py-14 md:py-20"
      >
        <SectionHeading
          eyebrow="Факультеты"
          title="Образовательная среда"
          text="Факультеты объединяют образовательные направления и создают условия для профессиональной подготовки специалистов."
        />

        <PhotoGrid photos={academyAbout.studentPhotos} />

        <div className="grid gap-5 md:grid-cols-2">
          {academyAbout.faculties.map((faculty) => (
            <InfoCard
              key={faculty.title}
              title={faculty.title}
              text={faculty.text}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-[#e4dccd] bg-white py-14 md:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Образование"
            title="Программы подготовки"
            text="Академия сочетает высшее профессиональное образование с дополнительной подготовкой и развитием компетенций государственных служащих."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {academyAbout.education.formats.map((format, index) => (
              <article
                key={format}
                className="rounded-xl border border-[#e4dccd] p-5"
              >
                <GraduationCap className="mb-5 text-[#ad843c]" size={27} />
                <p className="font-semibold leading-6 text-[#09223d]">
                  {format}
                </p>
                <p className="mt-3 text-xs tracking-widest text-slate-400">
                  НАПРАВЛЕНИЕ {String(index + 1).padStart(2, "0")}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#09223d] p-7 text-white md:p-9">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 shrink-0 text-[#e5c681]" size={28} />
              <div>
                <h3 className="text-xl font-semibold">
                  Подготовка в магистратуре
                </h3>
                <p className="mt-4 leading-7 text-white/75">
                  {academyAbout.education.mastersHistory}
                </p>
                <h4 className="mt-7 font-semibold text-[#e5c681]">
                  Направления магистратуры
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {academyAbout.education.mastersSpecialties.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 px-3 py-2 text-sm text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e4dccd] bg-[#faf8f3] p-7 md:p-9">
            <div className="flex items-start gap-4">
              <Microscope className="mt-1 shrink-0 text-[#a37d37]" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-[#09223d]">
                  Научные специальности PhD
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Направления научной подготовки, перечисленные в материалах
                  Академии.
                </p>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                  {academyAbout.education.phdSpecialties.map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="font-semibold text-[#a37d37]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Научный потенциал"
          title="Исследования и научные проекты"
          text="Исследовательская работа посвящена актуальным вопросам развития государства, государственной службы и управленческой практики."
        />

        <PhotoGrid photos={academyAbout.conferencePhotos} />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {academyAbout.research.projects.map((project) => (
            <InfoCard
              key={project.title}
              title={project.title}
              text={project.text}
            />
          ))}
        </div>

        <div className="mt-9 rounded-xl border border-[#e4dccd] bg-white p-6 md:p-8">
          <h3 className="flex items-center gap-3 text-lg font-semibold text-[#09223d]">
            <LibraryBig className="text-[#a37d37]" size={23} />
            Научно-методическая деятельность
          </h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {academyAbout.research.activities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a45c]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#eae3d6] py-14 md:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Издательская деятельность"
            title="Научные журналы"
            text="Публикации и периодические издания способствуют распространению научных результатов."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {academyAbout.publications.map((publication) => (
              <InfoCard
                key={publication.title}
                title={publication.title}
                text={publication.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Международные связи"
          title="Международное сотрудничество"
          text="Сотрудничество с зарубежными образовательными, научными и государственными учреждениями способствует обмену опытом."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {academyAbout.internationalPartners.map((partner) => (
            <div
              key={partner}
              className="flex items-start gap-3 rounded-lg border border-[#e4dccd] bg-white p-4"
            >
              <Globe2 className="mt-0.5 shrink-0 text-[#a37d37]" size={20} />
              <p className="text-sm leading-6 text-slate-700">{partner}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e4dccd] bg-white py-14 md:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Материальная база"
            title="Инфраструктура и ресурсы"
            text="Учебная и научная инфраструктура обеспечивает условия для образовательного процесса и исследовательской работы."
          />

          <PhotoGrid photos={academyAbout.infrastructurePhotos} />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {academyAbout.infrastructure.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#e4dccd] p-6"
              >
                {index === 0 ? (
                  <LibraryBig className="mb-5 text-[#a37d37]" size={28} />
                ) : index === 1 ? (
                  <Building2 className="mb-5 text-[#a37d37]" size={28} />
                ) : index === 2 ? (
                  <Globe2 className="mb-5 text-[#a37d37]" size={28} />
                ) : (
                  <ShieldCheck className="mb-5 text-[#a37d37]" size={28} />
                )}
                <h3 className="font-semibold text-[#09223d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#09223d] p-7 text-white md:p-9">
            <h3 className="text-xl font-semibold">Приоритеты развития</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {academyAbout.priorities.map((priority) => (
                <div key={priority} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d8b56b]" />
                  <p className="text-sm leading-6 text-white/80">{priority}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Преемственность руководства"
          title="Руководители Академии"
          text="Руководители, перечисленные в исторических материалах."
        />

        <div className="overflow-hidden rounded-xl border border-[#e4dccd] bg-white">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 bg-[#09223d] px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white md:px-7">
            <span>Фамилия и имя</span>
            <span>Период</span>
          </div>
          {academyAbout.formerRectors.map((rector, index) => (
            <div
              key={`${rector.name}-${rector.years}`}
              className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-7 ${
                index % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"
              }`}
            >
              <div>
                <p className="font-medium text-[#18334d]">{rector.name}</p>
                {rector.note && (
                  <p className="mt-1 text-xs text-slate-500">{rector.note}</p>
                )}
              </div>
              <span className="text-right text-sm text-slate-600">
                {rector.years}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071d34] py-12 text-white md:py-16">
        <div className="site-container flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e5c681]">
              Академия государственного управления
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Образование. Наука. Государственное управление.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Узнайте больше о новостях, образовательных программах и
              деятельности Академии.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md border border-[#c9a45c] px-6 py-3 text-sm font-semibold text-[#f0d89f] transition hover:bg-[#c9a45c] hover:text-[#071d34]"
          >
            На главную
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
