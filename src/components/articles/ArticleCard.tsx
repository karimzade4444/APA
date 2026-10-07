"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type ArticleCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
};

const ArticleCard = ({
  title,
  date,
  image,
  href,
  featured = false,
}: ArticleCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden border border-[#d8d1c5] bg-white"
    >
      <Link href={href} className="block">
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/80 via-transparent to-transparent" />

          {featured && (
            <span className="absolute left-4 top-4 border border-[#d4af62]/60 bg-[#061d35]/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#d4af62]">
              {date}
            </span>
          )}

          {featured && (
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
                Аналитика
              </span>

              <h3 className="mt-2 max-w-3xl font-serif text-2xl font-semibold leading-tight text-white md:text-3xl">
                {title}
              </h3>

              <div className="mt-4 h-px w-12 bg-[#d4af62] transition-all duration-500 group-hover:w-24" />
            </div>
          )}
        </div>

        {!featured && (
          <div className="p-5">
            <p className="text-xs text-[#061d35]/45">{date}</p>

            <h3 className="mt-2 line-clamp-3 min-h-[4.5rem] font-serif text-lg font-semibold leading-6 text-[#061d35] transition-colors duration-300 group-hover:text-[#a37b2f]">
              {title}
            </h3>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#a37b2f]">
              Читать
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        )}
      </Link>
    </motion.article>
  );
};

export default ArticleCard;
