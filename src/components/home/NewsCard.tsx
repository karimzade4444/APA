"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type NewsCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
};

const NewsCard = ({
  title,
  date,
  image,
  href,
  featured = false,
}: NewsCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden border border-[#d8d1c5] bg-white shadow-sm"
    >
      <Link href={href} className="block">
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/10]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/85 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 border border-[#d4af62]/60 bg-[#061d35]/90 px-3 py-1.5">
            <span className="text-[11px] font-medium tracking-wide text-[#d4af62]">
              {date}
            </span>
          </div>

          {featured && (
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="max-w-2xl font-serif text-2xl font-semibold leading-tight text-white md:text-3xl">
                {title}
              </h3>

              <div className="mt-4 h-px w-12 bg-[#d4af62] transition-all duration-500 group-hover:w-24" />
            </div>
          )}
        </div>

        {!featured && (
          <div className="p-5">
            <h3 className="line-clamp-3 font-serif text-lg font-semibold leading-snug text-[#061d35] transition-colors duration-300 group-hover:text-[#b18a3d]">
              {title}
            </h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-[#061d35]/50">{date}</span>

              <span className="text-sm text-[#b18a3d] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        )}
      </Link>
    </motion.article>
  );
};

export default NewsCard;
