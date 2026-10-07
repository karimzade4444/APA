"use client";

import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { news } from "@/data/news";
import NewsCard from "./NewsCard";
import Sidebar from "@/components/sidebar/Sidebar";

const NewsSection = () => {
  const [featuredNews, ...otherNews] = news;

  return (
    <section className="bg-[#f1ece2] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_332px]">
          <div className="min-w-0">
            <Reveal>
              <div className="mb-10 flex flex-col gap-4 border-b border-[#061d35]/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#d4af62]" />

                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#b18a3d]">
                      Академия
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl font-semibold text-[#061d35] md:text-5xl">
                    Последние новости
                  </h2>
                </div>

                <Link
                  href="/news"
                  className="shrink-0 text-sm font-medium uppercase tracking-wide text-[#061d35] transition-colors duration-300 hover:text-[#b18a3d]"
                >
                  Все новости →
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
              <Reveal delay={0.1}>
                <NewsCard
                  title={featuredNews.title}
                  date={featuredNews.date}
                  image={featuredNews.image}
                  href={featuredNews.href}
                  featured
                />
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {otherNews.slice(0, 2).map((item, index) => (
                  <Reveal key={item.id} delay={0.15 + index * 0.1}>
                    <NewsCard
                      title={item.title}
                      date={item.date}
                      image={item.image}
                      href={item.href}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-[#c9a45c]/40 lg:pl-8">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
