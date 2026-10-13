"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedTextVariant = "rise" | "fade";

type AnimatedTextProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: AnimatedTextVariant;
};

const AnimatedText = ({
  children,
  delay = 0,
  duration = 0.7,
  className,
  variant = "rise",
}: AnimatedTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const initial = {
    rise: { opacity: 0, y: 12 },
    fade: { opacity: 0 },
  }[variant];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : initial}
      animate={{ opacity: 1, y: 0 }}
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

export default AnimatedText;
