"use client";

import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { news } from "@/data/news";
import NewsCard from "./NewsCard";
import FeaturedCarousel from "./FeaturedCarousel";

const NewsSection = () => {
  return (
    <section className="py-20">
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

      <Reveal delay={0.1}>
        <FeaturedCarousel
          label="Последние новости"
          slides={news.slice(0, 3).map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              image={item.image}
              href={item.href}
              featured
            />
          ))}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 min-[1920px]:grid-cols-4 min-[2560px]:grid-cols-5">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
