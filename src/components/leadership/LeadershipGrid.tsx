"use client";

import { motion, useReducedMotion } from "motion/react";
import { leadership } from "@/data/leadership";
import LeadershipCard from "./LeadershipCard";


export function LeadershipGrid() {
  const shouldReduceMotion = useReducedMotion();

  const leaders = leadership
    .filter((leader) => leader.published)
    .sort((a, b) => a.order - b.order);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {leaders.map((leader, index) => (
          <LeadershipCard
            key={leader.id}
            leader={leader}
            index={index}
          />
        ))}
      </div>

      {leaders.length === 0 && (
        <div className="rounded-2xl border border-[#c9a45c]/25 bg-[#061d35]/[0.03] px-6 py-16 text-center">
          <p className="text-lg font-medium text-[#061d35]">
            Информация о руководстве скоро появится.
          </p>
        </div>
      )}
    </motion.div>
  );
}
