"use client";

import { motion } from "motion/react";
import Typewriter from "../animations/TypeWriter";

const HeaderQuote = () => {
  return (
    <div className="hidden max-w-xs text-right lg:block">
      <Typewriter
        text="«Знание — основа развития сильного государства»"
        delay={0.8}
        speed={0.045}
        className="font-serif text-lg italic leading-5 text-[#d4b477]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3.2,
          duration: 0.8,
        }}
        className="mt-2 text-xs text-white/60"
      >
        Эмомали Рахмон
      </motion.p>
    </div>
  );
};

export default HeaderQuote;
