"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FocusEvent } from "react";
import type { NavigationItem } from "@/types/navigation";
import StaggerItem from "../animations/StraggerItem";
import Stagger from "../animations/Stragger";

type MenuTreeProps = {
  items: NavigationItem[];
  onNavigate: () => void;
};

type MenuTreeItemsProps = MenuTreeProps & {
  openMenuHrefs: string[];
  setOpenMenuHrefs: (hrefs: string[]) => void;
  ancestorHrefs: string[];
};

type MenuTreeItemProps = {
  item: NavigationItem;
  onNavigate: () => void;
  openMenuHrefs: string[];
  setOpenMenuHrefs: (hrefs: string[]) => void;
  ancestorHrefs: string[];
};

const subscribeToPortalTarget = () => () => {};
const getPortalTarget = () => document.body;
const getServerPortalTarget = () => null;

const MenuTreeItem = ({
  item,
  onNavigate,
  openMenuHrefs,
  setOpenMenuHrefs,
  ancestorHrefs,
}: MenuTreeItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const flyoutRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
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
  const isOpen = isHovered || openMenuHrefs.includes(item.href);

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
      const width = Math.min(
        flyout.offsetWidth,
        window.innerWidth - margin * 2,
      );
      const height = Math.min(
        flyout.scrollHeight,
        window.innerHeight - margin * 2,
      );
      const left = Math.max(
        margin,
        Math.min(anchor.right, window.innerWidth - width - margin),
      );
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
    }, 0);
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
    setOpenMenuHrefs([]);
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
        onFocusCapture={(event) => {
          if (
            hasChildren &&
            !(event.target instanceof HTMLButtonElement)
          ) {
            setOpenMenuHrefs([...ancestorHrefs, item.href]);
          }
        }}
        onBlurCapture={handleBlur}
      >
        <div className="flex items-stretch">
          <Link
            href={item.href}
            onClick={onNavigate}
            className={`flex min-w-0 flex-1 items-start rounded-none px-4 py-2 text-sm transition-colors duration-300 ${
              hasChildren && isOpen
                ? "bg-[#c9a45c]/15 text-[#e5c681]"
                : "text-white/80 hover:bg-[#c9a45c]/10 hover:text-[#e5c681]"
            }`}
          >
            <span
              className={`mr-2 w-4 shrink-0 text-center transition duration-300 ${
                hasChildren && isOpen
                  ? "text-[#e5c681]"
                  : "text-[#c9a45c]/60 group-hover:text-[#d4af62]"
              }`}
            >
              —
            </span>

            <span className="min-w-0 flex-1">{item.title}</span>
          </Link>

          {hasChildren && (
            <button
              type="button"
              aria-label={`Открыть подменю: ${item.title}`}
              aria-expanded={isOpen}
              onClick={() => {
                if (openMenuHrefs.includes(item.href)) {
                  setOpenMenuHrefs(
                    openMenuHrefs.slice(0, ancestorHrefs.length),
                  );
                } else {
                  setOpenMenuHrefs([...ancestorHrefs, item.href]);
                }
              }}
              className={`flex shrink-0 items-center justify-center px-4 text-lg transition-colors duration-300 hover:bg-[#c9a45c]/10 focus-visible:outline-2 focus-visible:outline-[#c9a45c] ${
                isOpen ? "bg-[#c9a45c]/15 text-[#e5c681]" : "text-[#d4af62]"
              }`}
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
        </div>

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
                onFocusCapture={(event) => {
                  if (
                    hasChildren &&
                    !(event.target instanceof HTMLButtonElement)
                  ) {
                    setOpenMenuHrefs([...ancestorHrefs, item.href]);
                  }
                }}
                onBlurCapture={handleBlur}
                data-navigation-flyout
                style={{
                  position: "fixed",
                  left: flyoutPosition?.left ?? -10000,
                  top: flyoutPosition?.top ?? 12,
                  maxHeight: "calc(100dvh - 24px)",
                  visibility: flyoutPosition ? "visible" : "hidden",
                }}
                className="z-100 w-88 max-w-[calc(100vw-1.5rem)] overflow-y-auto overscroll-contain border border-[#c9a45c]/30 bg-[#061d35] p-3 shadow-2xl"
              >
                <div className="mb-3 border-b border-[#d4af62] pb-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
                    {item.title}
                  </p>
                </div>

                <MenuTreeItems
                  items={item.children!}
                  onNavigate={onNavigate}
                  openMenuHrefs={openMenuHrefs}
                  setOpenMenuHrefs={setOpenMenuHrefs}
                  ancestorHrefs={[...ancestorHrefs, item.href]}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          portalTarget,
        )}
    </StaggerItem>
  );
};

const MenuTreeItems = ({
  items,
  onNavigate,
  openMenuHrefs,
  setOpenMenuHrefs,
  ancestorHrefs,
}: MenuTreeItemsProps) => {
  return (
    <Stagger stagger={0.06}>
      <div className="space-y-1">
        {items.map((item) => (
          <MenuTreeItem
            key={item.href}
            item={item}
            onNavigate={onNavigate}
            openMenuHrefs={openMenuHrefs}
            setOpenMenuHrefs={setOpenMenuHrefs}
            ancestorHrefs={ancestorHrefs}
          />
        ))}
      </div>
    </Stagger>
  );
};

const MenuTree = ({ items, onNavigate }: MenuTreeProps) => {
  const [openMenuHrefs, setOpenMenuHrefs] = useState<string[]>([]);

  return (
    <MenuTreeItems
      items={items}
      onNavigate={onNavigate}
      openMenuHrefs={openMenuHrefs}
      setOpenMenuHrefs={setOpenMenuHrefs}
      ancestorHrefs={[]}
    />
  );
};

export default MenuTree;
