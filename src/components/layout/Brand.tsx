"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Brand = () => {
  return (
    <div className="flex items-center gap-4">
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
        className="mt-3 mb-3 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d4af62]"
      >
        <Image
          src="/images/logo/academy-logo.png"
          alt="Academy Logo"
          width={200}
          height={200}
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-md font-medium uppercase tracking-[0.18em] text-[#d4af62]"
        >
          АКАДЕМИЯ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-serif text-lg font-semibold leading-tight text-white"
        >
          ГОСУДАРСТВЕННОГО УПРАВЛЕНИЯ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xs text-white/60"
        >
          при Президенте Республики Таджикистан
        </motion.p>
      </div>
    </div>
  );
};

export default Brand;
