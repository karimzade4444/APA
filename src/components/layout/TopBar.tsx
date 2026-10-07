"use client";

import { motion } from "motion/react";
import { Phone, Search } from "lucide-react";

const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 border-b border-[#c9a45c]/40 text-sm text-white"
    >
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between px-6 2xl:max-w-336">
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-xs text-white/60"
        >
          Официальный сайт Академии государственного управления при Президенте
          Республики Таджикистан
        </motion.p>

        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-white/80"
          >
            <Phone size={15} />
            <span>+992 (37) 224-17-86</span>
            <span className="text-white/30">|</span>
            <span>info@apa.tj</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <button className="cursor-pointer font-medium text-[#d4af62]">
              RU
            </button>

            <span className="cursor-default text-white/20">|</span>

            <button className="cursor-pointer text-white/70 transition hover:text-[#d4af62]">
              TJ
            </button>

            <span className="cursor-default text-white/20">|</span>

            <button className="cursor-pointer text-white/70 transition hover:text-[#d4af62]">
              EN
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            aria-label="Поиск"
            className="cursor-pointer text-white transition hover:text-[#d4af62]"
          >
            <Search size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
