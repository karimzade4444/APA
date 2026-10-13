"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedTextVariant = "rise" | "slide-left" | "slide-right" | "blur";

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
  duration = 0.8,
  className,
  variant = "blur",
}: AnimatedTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const initial = {
    rise: { opacity: 0, y: 35 },
    "slide-left": { opacity: 0, x: 28 },
    "slide-right": { opacity: 0, x: -28 },
    blur: { opacity: 0, y: 35, filter: "blur(8px)" },
  }[variant];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : initial}
      animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
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
