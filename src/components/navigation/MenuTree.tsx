"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import type { NavigationItem } from "@/types/navigation";
import StaggerItem from "../animations/StraggerItem";
import Stagger from "../animations/Stragger";

type MenuTreeProps = {
  items: NavigationItem[];
};

type MenuTreeItemProps = {
  item: NavigationItem;
};

const MenuTreeItem = ({ item }: MenuTreeItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasOpenedByClick, setHasOpenedByClick] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  const isOpen = isHovered || isFocused;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hasChildren || hasOpenedByClick) return;

    event.preventDefault();
    setHasOpenedByClick(true);
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (
      !(event.relatedTarget instanceof Node) ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setIsFocused(false);
      setHasOpenedByClick(false);
    }
  };

  return (
    <StaggerItem>
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={handleBlur}
      >
        <Link
          href={item.href}
          onClick={handleClick}
          aria-expanded={hasChildren ? isOpen : undefined}
          className="flex items-center justify-between rounded-none px-4 py-3 text-sm text-white/80 transition-[padding,background-color,color] duration-300 hover:bg-white/5 hover:pl-5 hover:text-[#d4af62]"
        >
          <span>
            <span className="mr-2 text-[#c9a45c]/60 transition duration-300 group-hover:text-[#d4af62]">
              —
            </span>

            {item.title}
          </span>

          {hasChildren && (
            <span className="ml-4 text-[#d4af62] transition duration-300 group-hover:translate-x-1">
              →
            </span>
          )}
        </Link>

        <AnimatePresence>
          {hasChildren && isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-full top-0 z-50 min-w-70 border border-[#c9a45c]/30 bg-[#061d35] p-4 shadow-2xl"
            >
              <div className="mb-3 border-b border-[#d4af62] pb-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
                  {item.title}
                </p>
              </div>

              <MenuTree items={item.children!} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StaggerItem>
  );
};

const MenuTree = ({ items }: MenuTreeProps) => {
  return (
    <Stagger stagger={0.06}>
      <div className="space-y-1">
        {items.map((item) => (
          <MenuTreeItem key={item.href} item={item} />
        ))}
      </div>
    </Stagger>
  );
};

export default MenuTree;
