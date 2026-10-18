"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Brand = () => {
  return (
    <Link
      href="/"
      aria-label="Академия государственного управления — главная страница"
      className="flex min-w-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af62] focus-visible:ring-offset-4 focus-visible:ring-offset-[#061d35] sm:gap-4"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          rotate: -3,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="my-2 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d4af62] sm:my-3 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
      >
        <Image
          src="/images/logo/academy-logo.png"
          alt="Academy Logo"
          width={200}
          height={200}
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className="min-w-0">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.12em] text-[#d4af62] sm:text-sm lg:text-base lg:tracking-[0.18em]"
        >
          АКАДЕМИЯ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className=" text-[0.65rem] font-semibold leading-snug tracking-[0.03em] text-white sm:text-sm sm:tracking-[0.08em] lg:text-lg lg:tracking-[0.12em]"
        >
          ГОСУДАРСТВЕННОГО УПРАВЛЕНИЯ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text- text-[0.65rem] text-white/60 sm:block sm:text-xs"
        >
          при Президенте Республики Таджикистан
        </motion.p>
      </div>
    </Link>
  );
};

export default Brand;
