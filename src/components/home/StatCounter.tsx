"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  delay?: number;
};

const StatCounter = ({
  value,
  suffix = "",
  label,
  description,
  delay = 0,
}: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="h-px w-8 bg-[#d4af62] transition-all duration-500 group-hover:w-16" />

        <span className="text-xs uppercase tracking-[0.2em] text-white/45">
          0{Math.round(delay * 10 + 1)}
        </span>
      </div>

      <div className="font-serif text-6xl font-semibold leading-none text-[#d4af62] md:text-7xl">
        {count}
        {suffix}
      </div>

      <h3 className="mt-5 text-sm font-medium uppercase tracking-[0.12em] text-white">
        {label}
      </h3>

      {description && (
        <p className="mt-2 max-w-xs text-xs leading-5 text-white/45">
          {description}
        </p>
      )}

      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d4af62] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default StatCounter;
