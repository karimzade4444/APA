import Link from "next/link";
import { ArrowUpRight, BellRing, Newspaper } from "lucide-react";
import NewsCard from "@/components/home/NewsCard";
import Reveal from "@/components/animations/Reveal";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { news } from "@/data/news";

export default function NewsPage() {
  const items = news.filter((item) => item.category === "news");

  return (
    <main className="bg-[#f1ece2] py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Главная", href: "/" },
            { label: "Новости" },
          ]}
        />

        <Reveal>
          <section className="relative mb-12 overflow-hidden border border-[#c9a45c]/35 bg-[#061d35] px-6 py-9 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#c9a45c]/20" />
            <div className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#c9a45c]/15" />
            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3 text-[#d4af62]">
                  <Newspaper size={17} strokeWidth={1.5} />
                  <p className="text-xs font-medium uppercase tracking-[0.25em]">
                    Жизнь Академии
                  </p>
                </div>
                <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
                  Новости
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  События, встречи и сотрудничество Академии.
                </p>
              </div>

              <Link
                href="/announcements"
                className="inline-flex shrink-0 items-center gap-2 border border-[#d4af62]/50 px-4 py-3 text-sm text-[#f2d797] transition-colors hover:bg-[#d4af62] hover:text-[#061d35]"
              >
                <BellRing size={16} />
                Объявления
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </section>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              image={item.image}
              href={item.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
