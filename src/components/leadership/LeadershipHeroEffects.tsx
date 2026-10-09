"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function LeadershipHeroReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 24, filter: "blur(6px)" }
      }
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LeadershipOrbit({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={shouldReduceMotion ? undefined : { rotate: 360 }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 36, ease: "linear", repeat: Infinity }
      }
      className={className}
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-current/50" />
      <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#e5c681] shadow-[0_0_18px_#e5c681]" />
      <span className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-current" />
    </motion.div>
  );
}
