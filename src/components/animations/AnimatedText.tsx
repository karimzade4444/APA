"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedTextProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

const AnimatedText = ({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
