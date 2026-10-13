import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import ArticleCard from "@/components/articles/ArticleCard";
import Reveal from "@/components/animations/Reveal";
import { articles } from "@/data/news";

export default function ArticlesPage() {
  return (
    <main className="bg-[#f1ece2] py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Главная", href: "/" },
            { label: "Публикации" },
          ]}
        />
        <Reveal className="mb-12">
          <div className="relative overflow-hidden border border-[#c9a45c]/35 bg-[#061d35] px-6 py-9 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#c9a45c]/20" />
            <div className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#c9a45c]/15" />
            <div className="relative max-w-3xl">
              <div className="mb-4 flex items-center gap-3 text-[#d4af62]">
                <BookOpen size={17} strokeWidth={1.5} />
                <p className="text-xs font-medium uppercase tracking-[0.25em]">
                  Наука и аналитика
                </p>
              </div>
              <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
                Публикации и статьи
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Исследования и аналитические материалы преподавателей и
                специалистов Академии.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mb-6 flex items-end justify-between border-b border-[#061d35]/15 pb-4">
          <h2 className="font-serif text-2xl font-semibold text-[#061d35]">
            Все публикации
          </h2>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#9b7939] transition-colors hover:text-[#061d35]"
          >
            Новости <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              date={article.date}
              image={article.images[0]}
              href={article.href}
              category={article.category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
