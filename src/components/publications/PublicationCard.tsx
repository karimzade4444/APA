"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type PublicationCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
  topic?: string;
  delay?: number;
  featured?: boolean;
  className?: string;
};

export default function PublicationCard({
  title,
  date,
  image,
  href,
  topic,
  delay = 0,
  featured = false,
  className,
}: PublicationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -3, transition: { duration: 0.2 } }
      }
      initial={
        shouldReduceMotion
          ? false
          : featured
            ? { opacity: 0 }
            : { opacity: 0, y: 12 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group overflow-hidden border border-[#d8d1c5] bg-white shadow-sm ${className ?? ""}`}
    >
      <Link href={href} className="block h-full">
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-video" : "aspect-4/3"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 75vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/85 via-[#061d35]/10 to-transparent" />
          {topic && (
            <span className="hidden sm:block absolute left-3 top-3 max-w-[calc(100%-1.5rem)] border border-[#d4af62]/50 bg-[#061d35]/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#f2d797]">
              {topic}
            </span>
          )}

          {featured && (
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <time className="text-xs text-white/65">{date}</time>
              <h3 className="mt-2 line-clamp-3 max-w-3xl font-serif text-xl font-semibold leading-tight text-white md:text-3xl">
                {title}
              </h3>
              <div className="mt-4 h-px w-12 bg-[#d4af62] transition-all duration-300 group-hover:w-20" />
            </div>
          )}
        </div>

        {!featured && (
          <div className="flex min-h-44 flex-col p-5">
            <time className="text-xs text-[#000000]">{date}</time>
            <h3 className="mt-2 line-clamp-3 min-h-18 font-serif text-lg font-semibold leading-6 text-[#061d35] transition-colors duration-300 group-hover:text-[#a37b2f]">
              {title}
            </h3>
            <span className="mt-auto flex items-center gap-2 pt-4 text-xs font-medium uppercase tracking-wide text-[#a37b2f]">
              Подробнее
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        )}
      </Link>
    </motion.article>
  );
}
