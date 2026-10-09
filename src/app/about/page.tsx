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
import { AboutOrbit, AboutReveal } from "./AboutAnimations";
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
    <AboutReveal className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a37d37]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold leading-tight text-[#09223d] md:text-3xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-7 text-slate-600">{text}</p>}
    </AboutReveal>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <AboutReveal className="h-full" rotate={1}>
      <article className="group h-full rounded-xl border border-[#e4dccd] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-lg">
        <div className="mb-4 h-1 w-10 rounded-full bg-[#c9a45c] transition-all group-hover:w-16" />
        <h3 className="text-lg font-semibold leading-snug text-[#09223d]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
      </article>
    </AboutReveal>
  );
}

function PhotoGrid({
  photos,
}: {
  photos: { src: string; alt: string; title?: string }[];
}) {
  return (
    <div
      className={`mb-8 grid auto-rows-fr gap-4 ${
        photos.length === 3 ? "sm:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {photos.map((photo) => (
        <AboutReveal
          key={photo.src}
          className="h-full min-w-0"
          rotate={photo.src.length % 2 === 0 ? 1.5 : -1.5}
        >
          <figure className="flex h-full flex-col">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#e5dfd3]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            {photo.title && (
              <figcaption className="mt-auto pt-3 text-sm text-slate-500">
                {photo.title}
              </figcaption>
            )}
          </figure>
        </AboutReveal>
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
        <AboutOrbit className="pointer-events-none absolute right-[8%] top-12 h-36 w-36 text-[#c9a45c]/70 md:right-[12%] md:top-16 md:h-48 md:w-48" />

        <div className="site-container relative py-12 md:py-16 lg:py-20">
          <div className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition hover:text-[#e5c681]">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#e5c681]">Об Академии</span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <AboutReveal className="max-w-2xl" rotate={-1} y={18}>
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
            </AboutReveal>

            <AboutReveal rotate={1} delay={0.15} y={30}>
              <AboutHeroSlider />
            </AboutReveal>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent" />
      </section>

      <section className="site-container py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <AboutReveal className="h-full" rotate={-1}>
            <article className="relative h-full overflow-hidden rounded-2xl bg-[#0b2947] p-7 text-white md:p-9">
              <div className="absolute -right-8 -top-8 opacity-10">
                <Landmark size={150} strokeWidth={0.8} />
              </div>
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9a45c]/50 text-[#e5c681]">
                  <Target
                    className="transition-transform duration-500 hover:rotate-180 motion-reduce:transition-none"
                    size={24}
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c681]">
                  Наша миссия
                </p>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  {academyAbout.mission}
                </p>
              </div>
            </article>
          </AboutReveal>

          <AboutReveal className="h-full" rotate={1} delay={0.1}>
            <article className="h-full rounded-2xl border border-[#e3d8c5] bg-white p-7 md:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5eddd] text-[#98712e]">
                <ShieldCheck
                  className="transition-transform duration-500 hover:rotate-12 motion-reduce:transition-none"
                  size={24}
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#98712e]">
                Основная цель
              </p>
              <p className="mt-4 text-lg leading-8 text-[#263b50]">
                {academyAbout.goal}
              </p>
            </article>
          </AboutReveal>
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
              <AboutReveal
                key={`${item.year}-${item.title}`}
                className="relative pb-9 pl-7 last:pb-0 md:pl-10"
                delay={0}
                rotate={-0.5}
                y={18}
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
              </AboutReveal>
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

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
          {academyAbout.responsibilities.map((item, index) => (
            <AboutReveal
              key={item}
              className="flex h-full gap-4 rounded-xl border border-[#e4dccd] bg-white p-5 md:p-6"
              delay={Math.min(index * 0.05, 0.25)}
              rotate={index % 2 === 0 ? -1 : 1}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3ead7] text-sm font-bold text-[#98712e]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-7 text-slate-700">{item}</p>
            </AboutReveal>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-xl font-semibold text-[#09223d]">
            Основные направления деятельности
          </h3>
          <div className="flex flex-wrap gap-3">
            {academyAbout.activityAreas.map((item, index) => (
              <AboutReveal
                key={item}
                delay={Math.min(index * 0.04, 0.2)}
                rotate={index % 2 === 0 ? 2 : -2}
                y={12}
              >
                <span className="inline-block rounded-full border border-[#d9c9a9] bg-white px-4 py-2.5 text-sm text-[#243b51]">
                  {item}
                </span>
              </AboutReveal>
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

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academyAbout.structure.map((item, index) => (
              <AboutReveal
                key={item}
                className="flex min-h-24 items-start gap-4 rounded-xl border border-white/80 bg-white/80 p-5"
                delay={Math.min(index * 0.04, 0.24)}
                rotate={index % 2 === 0 ? -1 : 1}
              >
                <span className="mt-0.5 text-lg font-semibold text-[#b18a43]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium leading-6 text-[#19334b]">{item}</p>
              </AboutReveal>
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

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
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

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {academyAbout.education.formats.map((format, index) => (
              <AboutReveal
                key={format}
                className="h-full"
                rotate={index % 2 === 0 ? -1 : 1}
              >
                <article className="flex h-full flex-col rounded-xl border border-[#e4dccd] p-5">
                  <GraduationCap
                    className="mb-5 text-[#ad843c] transition-transform duration-500 hover:rotate-12 motion-reduce:transition-none"
                    size={27}
                  />
                  <p className="font-semibold leading-6 text-[#09223d]">
                    {format}
                  </p>
                  <p className="mt-auto whitespace-nowrap pt-3 text-xs tracking-widest text-slate-400">
                    НАПРАВЛЕНИЕ {String(index + 1).padStart(2, "0")}
                  </p>
                </article>
              </AboutReveal>
            ))}
          </div>

          <AboutReveal className="mt-8" rotate={-0.5}>
            <div className="rounded-2xl bg-[#09223d] p-7 text-white md:p-9">
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
          </AboutReveal>

          <AboutReveal className="mt-8" rotate={0.5} delay={0.1}>
            <div className="rounded-2xl border border-[#e4dccd] bg-[#faf8f3] p-7 md:p-9">
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
          </AboutReveal>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <SectionHeading
          eyebrow="Научный потенциал"
          title="Исследования и научные проекты"
          text="Исследовательская работа посвящена актуальным вопросам развития государства, государственной службы и управленческой практики."
        />

        <PhotoGrid photos={academyAbout.conferencePhotos} />

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {academyAbout.research.projects.map((project) => (
            <InfoCard
              key={project.title}
              title={project.title}
              text={project.text}
            />
          ))}
        </div>

        <AboutReveal className="mt-9" rotate={-0.5}>
          <div className="rounded-xl border border-[#e4dccd] bg-white p-6 md:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-[#09223d]">
              <LibraryBig className="text-[#a37d37]" size={23} />
              Научно-методическая деятельность
            </h3>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {academyAbout.research.activities.map((item, index) => (
                <li key={item}>
                  <AboutReveal
                    delay={Math.min(index * 0.04, 0.2)}
                    rotate={index % 2 === 0 ? -0.5 : 0.5}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a45c]" />
                    {item}
                  </AboutReveal>
                </li>
              ))}
            </ul>
          </div>
        </AboutReveal>
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
        <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {academyAbout.internationalPartners.map((partner, index) => (
            <AboutReveal
              key={partner}
              className="flex items-start gap-3 rounded-lg border border-[#e4dccd] bg-white p-4"
              delay={Math.min(index * 0.04, 0.2)}
              rotate={partner.length % 2 === 0 ? -1 : 1}
            >
              <Globe2 className="mt-0.5 shrink-0 text-[#a37d37]" size={20} />
              <p className="text-sm leading-6 text-slate-700">{partner}</p>
            </AboutReveal>
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

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {academyAbout.infrastructure.map((item, index) => (
              <AboutReveal
                key={item.title}
                className="h-full rounded-xl border border-[#e4dccd] p-6"
                delay={Math.min(index * 0.05, 0.25)}
                rotate={index % 2 === 0 ? -1 : 1}
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
              </AboutReveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#09223d] p-7 text-white md:p-9">
            <h3 className="text-xl font-semibold">Приоритеты развития</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {academyAbout.priorities.map((priority, index) => (
                <AboutReveal
                  key={priority}
                  className="flex gap-3"
                  delay={Math.min(index * 0.04, 0.2)}
                  rotate={index % 2 === 0 ? -0.5 : 0.5}
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d8b56b]" />
                  <p className="text-sm leading-6 text-white/80">{priority}</p>
                </AboutReveal>
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

        <AboutReveal rotate={-0.5}>
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
        </AboutReveal>
      </section>

      <section className="bg-[#071d34] py-12 text-white md:py-16">
        <div className="site-container flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <AboutReveal className="max-w-2xl" rotate={-0.5}>
            
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Образование. Наука. Государственное управление.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Узнайте больше о новостях, образовательных программах и
              деятельности Академии.
            </p>
          </AboutReveal>
          <AboutReveal rotate={1} delay={0.15}>
            <Link
              href="/"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-md border border-[#c9a45c] px-6 py-3 text-sm font-semibold text-[#f0d89f] transition hover:bg-[#c9a45c] hover:text-[#071d34]"
            >
              На главную
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45 motion-reduce:transition-none" size={17} />
            </Link>
          </AboutReveal>
        </div>
      </section>
    </main>
  );
}
