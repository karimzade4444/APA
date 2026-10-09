import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  GraduationCap,
  Microscope,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "История Академии",
    description:
      "История создания, ключевые этапы становления и развития Академии.",
    href: "/about/history",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Руководство",
    description: "Ректор, проректоры и руководство Академии.",
    href: "/about/leadership",
    icon: Building2,
  },
  {
    number: "03",
    title: "Структура",
    description: "Организационная структура и основные подразделения Академии.",
    href: "/about/structure",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Научная деятельность",
    description:
      "Научные исследования и развитие профессионального образования.",
    href: "/science",
    icon: Microscope,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f1ece2] text-[#061d35]">
      {/* Заголовок страницы */}
      <section className="relative overflow-hidden bg-[#061d35]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,92,0.18),transparent_55%)]" />

        <div className="site-container relative py-16 md:py-24">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/55">
            <Link href="/" className="transition-colors hover:text-[#d4af62]">
              Главная
            </Link>

            <span>/</span>

            <span className="text-[#d4af62]">Об Академии</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d4af62]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#d4af62]">
                Об Академии
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
              Академия государственного управления
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              Академия государственного управления при Президенте Республики
              Таджикистан — учреждение, деятельность которого связана с
              подготовкой и профессиональным развитием кадров для
              государственной службы.
            </p>

            <div className="mt-9 h-px w-24 bg-[#d4af62]" />
          </div>
        </div>
      </section>

      {/* Основная информация */}
      <section className="site-container py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a37b2f]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a37b2f]">
                Наша деятельность
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-snug md:text-4xl">
              Знания и профессионализм для государственной службы
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#061d35]/75 md:text-base">
            <p>
              Академия объединяет образовательную и научную деятельность,
              направленную на развитие компетенций специалистов в сфере
              государственного управления.
            </p>

            <p>
              На этой странице будут представлены официальные сведения об
              Академии, её истории, целях, задачах и организационной структуре.
            </p>

            <p className="border-l-2 border-[#c9a45c] pl-5">
              Информация о деятельности, истории и структуре будет дополнена на
              основании официальных материалов Академии.
            </p>
          </div>
        </div>
      </section>

      {/* Разделы Академии */}
      <section className="border-y border-[#061d35]/10 bg-white/60 py-16 md:py-20">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#a37b2f]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a37b2f]">
                  Структура сайта
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Познакомьтесь с Академией
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#061d35]/60">
              Основные сведения, руководство и направления деятельности
              Академии.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <Link
                  key={section.number}
                  href={section.href}
                  className="group flex min-h-64 flex-col border border-[#061d35]/10 bg-[#f1ece2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:bg-[#061d35] hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-[#a37b2f] group-hover:text-[#d4af62]">
                      {section.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-[#a37b2f] transition-colors group-hover:text-[#d4af62]"
                    />
                  </div>

                  <h3 className="mt-9 font-serif text-xl font-semibold transition-colors group-hover:text-white">
                    {section.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#061d35]/65 transition-colors group-hover:text-white/65">
                    {section.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#a37b2f] group-hover:text-[#d4af62]">
                    Подробнее
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
