"use client";

import { motion } from "motion/react";

type TypewriterProps = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
};

const Typewriter = ({
  text,
  delay = 0,
  speed = 0.045,
  className,
}: TypewriterProps) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay,
        duration: 0.3,
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * speed,
            duration: 0.01,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default Typewriter;