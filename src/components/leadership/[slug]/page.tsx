
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import { leadership } from "@/data/leadership";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import {
  LeadershipHeroMotion,
  LeadershipSectionReveal,
} from "@/components/leadership/LeadershipBiographyMotion";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return leadership
    .filter((leader) => leader.published)
    .map((leader) => ({
      slug: leader.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leader = leadership.find(
    (item) => item.slug === slug && item.published,
  );

  if (!leader) {
    return { title: "Руководитель не найден" };
  }

  return {
    title: `${leader.name} | Руководство Академии`,
    description: `${leader.position}. Биография, образование и профессиональная деятельность.`,
  };
}

export default async function LeaderPage({ params }: PageProps) {
  const { slug } = await params;

  const leader = leadership.find(
    (item) => item.slug === slug && item.published,
  );

  if (!leader) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f7f3]">
      {/* Верхний блок */}
      <section className="relative isolate overflow-hidden bg-[#061d35]">
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full border border-[#c9a45c]/20 sm:h-[500px] sm:w-[500px]" />
        <div className="pointer-events-none absolute -right-10 -top-14 -z-10 h-64 w-64 rounded-full border border-[#c9a45c]/15 sm:h-[400px] sm:w-[400px]" />

        <div className="site-container py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Руководство", href: "/leadership" },
              { label: leader.shortPosition },
            ]}
          />

          <LeadershipHeroMotion className="grid items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
            {/* Фотография */}
            <div className="mx-auto w-full max-w-[340px]">
              <div className="relative border border-[#c9a45c]/50 p-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    priority
                    sizes="(max-width: 1023px) 85vw, 340px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <span className="absolute -bottom-2 -right-2 h-12 w-12 border-b-2 border-r-2 border-[#d4af62]" />
                <span className="absolute -left-2 -top-2 h-12 w-12 border-l-2 border-t-2 border-[#d4af62]" />
              </div>
            </div>

            {/* Имя и должность */}
            <div className="pb-4 text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.23em] text-[#d4af62] sm:text-sm">
                Руководство Академии
              </p>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {leader.name}
              </h1>

              <div className="my-6 h-px w-20 bg-[#c9a45c]" />

              <p className="max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                {leader.position}
              </p>

              {(leader.degree || leader.academicTitle) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {leader.degree && (
                    <span className="border border-[#c9a45c]/40 px-4 py-2 text-sm text-[#e6d5aa]">
                      {leader.degree}
                    </span>
                  )}

                  {leader.academicTitle && (
                    <span className="border border-white/20 px-4 py-2 text-sm text-white/75">
                      {leader.academicTitle}
                    </span>
                  )}
                </div>
              )}

              <Link
                href="/leadership"
                className="mt-9 inline-flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#d4af62]"
              >
                <ArrowLeft size={17} />
                Все руководители
              </Link>
            </div>
          </LeadershipHeroMotion>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a45c]/60 to-transparent" />
      </section>

      {/* Основная информация */}
      <section className="site-container py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="space-y-14">
            {/* Образование */}
            <LeadershipSectionReveal>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/40 text-[#9b7939]">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#9b7939]">
                    Академический путь
                  </p>
                  <h2 className="text-2xl font-semibold text-[#061d35] sm:text-3xl">
                    Образование
                  </h2>
                </div>
              </div>

              {leader.education.length > 0 ? (
                <div className="ml-2 space-y-0 border-l border-[#c9a45c]/50">
                  {leader.education.map((item, index) => (
                    <div key={`${item.institution}-${index}`} className="relative pb-8 pl-7 last:pb-0">
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#c9a45c] bg-[#f8f7f3]" />

                      {item.period && (
                        <p className="mb-2 text-sm font-semibold tracking-wide text-[#9b7939]">
                          {item.period}
                        </p>
                      )}

                      <h3 className="text-lg font-semibold leading-7 text-[#061d35]">
                        {item.institution}
                      </h3>

                      {item.specialty && (
                        <p className="mt-2 text-sm leading-7 text-[#061d35]/65">
                          {item.specialty}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#061d35]/60">
                  Информация об образовании уточняется.
                </p>
              )}
            </LeadershipSectionReveal>

            {/* Трудовая деятельность */}
            <LeadershipSectionReveal>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/40 text-[#9b7939]">
                  <BriefcaseBusiness size={22} />
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#9b7939]">
                    Профессиональный путь
                  </p>
                  <h2 className="text-2xl font-semibold text-[#061d35] sm:text-3xl">
                    Трудовая деятельность
                  </h2>
                </div>
              </div>

              {leader.career.length > 0 ? (
                <div className="ml-2 space-y-0 border-l border-[#c9a45c]/50">
                  {leader.career.map((item, index) => (
                    <div key={`${item.period}-${index}`} className="relative pb-8 pl-7 last:pb-0">
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#c9a45c] bg-[#f8f7f3]" />

                      <p className="mb-2 text-sm font-semibold tracking-wide text-[#9b7939]">
                        {item.period}
                      </p>

                      <p className="text-base leading-7 text-[#061d35]/80">
                        {item.position}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#061d35]/60">
                  Информация о трудовой деятельности уточняется.
                </p>
              )}
            </LeadershipSectionReveal>

            {/* Награды */}
            {leader.awards && leader.awards.length > 0 && (
              <LeadershipSectionReveal>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a45c]/40 text-[#9b7939]">
                    <Award size={22} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#9b7939]">
                      Признание заслуг
                    </p>
                    <h2 className="text-2xl font-semibold text-[#061d35] sm:text-3xl">
                      Награды и достижения
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {leader.awards.map((award, index) => (
                    <div
                      key={`${award}-${index}`}
                      className="flex gap-4 border-b border-[#c9a45c]/25 pb-4"
                    >
                      <Award
                        size={19}
                        className="mt-1 shrink-0 text-[#b18b43]"
                      />
                      <p className="leading-7 text-[#061d35]/80">{award}</p>
                    </div>
                  ))}
                </div>
              </LeadershipSectionReveal>
            )}
          </div>

          {/* Контакты */}
          <aside>
            <div className="h-fit border border-[#c9a45c]/35 bg-white p-6 sm:p-8 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7939]">
                Обратная связь
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#061d35]">
                Контактная информация
              </h2>

              <div className="my-6 h-px bg-[#c9a45c]/40" />

              {leader.phone && (
                <a
                  href={`tel:${leader.phone.replace(/[^\d+]/g, "")}`}
                  className="group flex items-start gap-4 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#061d35] text-[#d4af62] transition-colors group-hover:bg-[#9b7939] group-hover:text-white">
                    <Phone size={18} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs text-[#061d35]/50">
                      Телефон
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-[#061d35]">
                      {leader.phone}
                    </span>
                  </span>
                </a>
              )}

              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  className="group flex items-start gap-4 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#061d35] text-[#d4af62] transition-colors group-hover:bg-[#9b7939] group-hover:text-white">
                    <Mail size={18} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs text-[#061d35]/50">
                      Электронная почта
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-[#061d35]">
                      {leader.email}
                    </span>
                  </span>
                </a>
              )}

              {!leader.phone && !leader.email && (
                <p className="text-sm leading-6 text-[#061d35]/60">
                  Контактная информация пока не опубликована.
                </p>
              )}

              <div className="mt-6 border-t border-[#c9a45c]/25 pt-5">
                <Link
                  href="/leadership"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#061d35] transition-colors hover:text-[#9b7939]"
                >
                  Все руководители
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
