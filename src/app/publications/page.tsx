import Link from "next/link";
import {
  ArrowDown,
  BellRing,
  BookOpen,
  Newspaper,
} from "lucide-react";
import ArticleCard from "@/components/articles/ArticleCard";
import NewsCard from "@/components/home/NewsCard";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Reveal from "@/components/animations/Reveal";
import {
  announcements,
  articles,
  news as allNews,
} from "@/data/news";

const news = allNews.filter((item) => item.category === "news");
const categories = [
  { id: "news", label: "Новости", icon: Newspaper },
  { id: "announcements", label: "Объявления", icon: BellRing },
  { id: "articles", label: "Статьи", icon: BookOpen },
];

export default function PublicationsPage() {
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

        <Reveal>
          <header className="relative mb-10 overflow-hidden border border-[#c9a45c]/35 bg-[#061d35] px-6 py-9 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#c9a45c]/20" />
            <div className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#c9a45c]/15" />
            <div className="relative max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#d4af62]">
                Новости, объявления и материалы Академии
              </p>
              <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
                Публикации
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Все новости, объявления и статьи Академии Государственного управления при Президенте Республики Таджикистан .
              </p>
            </div>
          </header>
        </Reveal>

        <nav
          aria-label="Категории публикаций"
          className="mb-14 flex flex-wrap gap-3 border-b border-[#061d35]/15 pb-7"
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="inline-flex items-center gap-2 border border-[#c9a45c]/45 bg-white/70 px-4 py-2.5 text-sm text-[#061d35] transition-colors hover:border-[#061d35] hover:bg-[#061d35] hover:text-[#f2d797]"
            >
              <Icon size={16} />
              {label}
              <ArrowDown size={14} className="text-[#a37b2f]" />
            </Link>
          ))}
        </nav>

        <section id="news" className="scroll-mt-32 pb-14">
          <div className="mb-6 flex items-end justify-between border-b border-[#061d35]/15 pb-4">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#9b7939]">
                <Newspaper size={15} />
                События Академии
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#061d35]">
                Новости
              </h2>
            </div>
            <span className="text-sm tabular-nums text-[#061d35]/45">
              {news.length.toString().padStart(2, "0")}
            </span>
          </div>
          {news.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  image={item.images[0]}
                  href={item.href}
                  delay={index * 0.08}
                />
              ))}
            </div>
          ) : (
            <p className="bg-white/70 p-5 text-sm text-[#061d35]/60">
              Пока нет новостей.
            </p>
          )}
        </section>

        <section
          id="announcements"
          className="scroll-mt-32 border-t border-[#061d35]/10 py-14"
        >
          <div className="mb-6 flex items-end justify-between border-b border-[#061d35]/15 pb-4">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#9b7939]">
                <BellRing size={15} />
                Важная информация
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#061d35]">
                Объявления
              </h2>
            </div>
            <span className="text-sm tabular-nums text-[#061d35]/45">
              {announcements.length.toString().padStart(2, "0")}
            </span>
          </div>
          {announcements.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {announcements.map((item, index) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  image={item.images[0]}
                  href={item.href}
                  delay={index * 0.08}
                  eyebrow="Объявление"
                />
              ))}
            </div>
          ) : (
            <p className="bg-white/70 p-5 text-sm text-[#061d35]/60">
              Пока нет объявлений.
            </p>
          )}
        </section>

        <section
          id="articles"
          className="scroll-mt-32 border-t border-[#061d35]/10 py-14"
        >
          <div className="mb-6 flex items-end justify-between border-b border-[#061d35]/15 pb-4">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#9b7939]">
                <BookOpen size={15} />
                Наука и аналитика
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#061d35]">
                Статьи
              </h2>
            </div>
            <span className="text-sm tabular-nums text-[#061d35]/45">
              {articles.length.toString().padStart(2, "0")}
            </span>
          </div>
          {articles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  date={article.date}
                  image={article.images[0]}
                  href={article.href}
                  category={article.category}
                  delay={index * 0.08}
                />
              ))}
            </div>
          ) : (
            <p className="bg-white/70 p-5 text-sm text-[#061d35]/60">
              Пока нет статей и публикаций.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
