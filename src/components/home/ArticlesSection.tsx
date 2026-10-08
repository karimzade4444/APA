"use client";

import Link from "next/link";

import ArticleCard from "@/components/articles/ArticleCard";
import Reveal from "@/components/animations/Reveal";
import { articles } from "@/data/articles";
import FeaturedCarousel from "./FeaturedCarousel";

const ArticlesSection = () => {
  return (
    <section className="py-20">
        {/* Section heading */}
        <Reveal>
          <div className="mb-12 flex items-end justify-between border-b border-[#061d35]/10 pb-5">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d4af62]" />

                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a37b2f]">
                  Наука и аналитика
                </span>
              </div>

              <h2 className="font-serif text-4xl font-semibold text-[#061d35] md:text-5xl">
                Статьи и публикации
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#061d35]/55">
                Научные исследования, аналитические материалы и публикации
                преподавателей и специалистов Академии.
              </p>
            </div>

            <Link
              href="/articles"
              className="hidden text-sm font-medium uppercase tracking-wide text-[#061d35] transition-colors duration-300 hover:text-[#a37b2f] md:block"
            >
              Все публикации →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <FeaturedCarousel
            label="Последние статьи и публикации"
            slides={articles.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                date={article.date}
                image={article.image}
                href={article.href}
                featured
              />
            ))}
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              date={article.date}
              image={article.image}
              href={article.href}
            />
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-8 md:hidden">
          <Link
            href="/articles"
            className="inline-flex border border-[#061d35] px-6 py-3 text-sm font-medium uppercase tracking-wide text-[#061d35] transition duration-300 hover:bg-[#061d35] hover:text-white"
          >
            Все публикации
          </Link>
        </div>
    </section>
  );
};

export default ArticlesSection;