"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FocusEvent, MouseEvent } from "react";
import type { NavigationItem } from "@/types/navigation";
import StaggerItem from "../animations/StraggerItem";
import Stagger from "../animations/Stragger";

type MenuTreeProps = {
  items: NavigationItem[];
  onNavigate: () => void;
};

type MenuTreeItemProps = {
  item: NavigationItem;
  onNavigate: () => void;
};

const subscribeToPortalTarget = () => () => {};
const getPortalTarget = () => document.body;
const getServerPortalTarget = () => null;

const MenuTreeItem = ({ item, onNavigate }: MenuTreeItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const flyoutRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasOpenedByClick, setHasOpenedByClick] = useState(false);
  const portalTarget = useSyncExternalStore<HTMLElement | null>(
    subscribeToPortalTarget,
    getPortalTarget,
    getServerPortalTarget,
  );
  const [flyoutPosition, setFlyoutPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const hasChildren = Boolean(item.children?.length);
  const isOpen = isHovered || isFocused;

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (!isOpen || !hasChildren) return;

    const updatePosition = () => {
      const anchor = itemRef.current?.getBoundingClientRect();
      const flyout = flyoutRef.current;
      if (!anchor || !flyout) return;

      const margin = 12;
      const width = flyout.offsetWidth;
      const height = Math.min(
        flyout.scrollHeight,
        window.innerHeight - margin * 2,
      );
      const fitsRight = anchor.right + width + margin <= window.innerWidth;
      const left = fitsRight
        ? anchor.right
        : Math.max(margin, anchor.left - width);
      const top = Math.min(
        Math.max(margin, anchor.top),
        window.innerHeight - height - margin,
      );

      setFlyoutPosition({ left, top });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [hasChildren, isOpen]);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      window.dispatchEvent(new Event("navigation-flyout-leave"));
    }, 300);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hasChildren || hasOpenedByClick) return;

    event.preventDefault();
    setHasOpenedByClick(true);
    setIsFocused(true);
    return;
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (
      nextTarget instanceof Node &&
      (itemRef.current?.contains(nextTarget) ||
        flyoutRef.current?.contains(nextTarget) ||
        (nextTarget instanceof Element &&
          nextTarget.closest("[data-navigation-flyout]")))
    ) {
      return;
    }

    setIsFocused(false);
    setHasOpenedByClick(false);
  };

  return (
    <StaggerItem>
      <div
        ref={itemRef}
        className="group relative"
        onMouseEnter={() => {
          cancelClose();
          setIsHovered(true);
        }}
        onMouseLeave={scheduleClose}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={handleBlur}
      >
        <Link
          href={item.href}
          onClick={(event) => {
            handleClick(event);
            if (!event.defaultPrevented) {
              onNavigate();
            }
          }}
          aria-expanded={hasChildren ? isOpen : undefined}
          className="flex items-center justify-between rounded-none px-4 py-2 text-sm text-white/80 transition-[padding,background-color,color] duration-300 hover:bg-white/5 hover:pl-5 hover:text-[#d4af62]"
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

      </div>
      {portalTarget &&
        createPortal(
          <AnimatePresence>
            {hasChildren && isOpen && (
              <motion.div
                ref={flyoutRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => {
                  cancelClose();
                  setIsHovered(true);
                }}
                onMouseLeave={scheduleClose}
                onFocusCapture={() => setIsFocused(true)}
                onBlurCapture={handleBlur}
                data-navigation-flyout
                style={{
                  position: "fixed",
                  left: flyoutPosition?.left ?? -10000,
                  top: flyoutPosition?.top ?? 12,
                  maxHeight: "calc(100dvh - 24px)",
                  visibility: flyoutPosition ? "visible" : "hidden",
                }}
                className="z-[100] min-w-70 overflow-y-auto overscroll-contain border border-[#c9a45c]/30 bg-[#061d35] p-3 shadow-2xl"
              >
                <div className="mb-3 border-b border-[#d4af62] pb-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
                    {item.title}
                  </p>
                </div>

                <MenuTree items={item.children!} onNavigate={onNavigate} />
              </motion.div>
            )}
          </AnimatePresence>,
          portalTarget,
        )}
    </StaggerItem>
  );
};

const MenuTree = ({ items, onNavigate }: MenuTreeProps) => {
  return (
    <Stagger stagger={0.06}>
      <div className="space-y-1">
        {items.map((item) => (
          <MenuTreeItem
            key={item.href}
            item={item}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </Stagger>
  );
};

export default MenuTree;
