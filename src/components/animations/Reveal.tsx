"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export type RevealVariant =
  | "rise"
  | "fade";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  variant?: RevealVariant;
};

const Reveal = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 12,
  className,
  variant = "rise",
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  const initial = {
    rise: { opacity: 0, y },
    fade: { opacity: 0 },
  }[variant];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
