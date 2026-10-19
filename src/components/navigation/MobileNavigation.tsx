"use client";

import { AnimatePresence, motion, stagger, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect,useRef, useState, useSyncExternalStore } from "react";
import type { NavigationItem } from "@/types/navigation";

const submenuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const navVariants: Variants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      opacity: { duration: 0.18 },
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
      opacity: { duration: 0.12 },
    },
  },
};

const subscribeToViewport = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getViewportExtent = () => Math.max(window.innerWidth, window.innerHeight);
const getServerViewportExtent = () => 1024;

type MobileMenuItemsProps = {
  items: NavigationItem[];
  pathname: string;
  openPath: string[];
  ancestors: string[];
  onToggle: (item: NavigationItem, ancestors: string[]) => void;
  onNavigate: () => void;
};

const isPathActive = (pathname: string, href: string) =>
  href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

const hasActiveDescendant = (items: NavigationItem[], pathname: string): boolean =>
  items.some(
    (item) =>
      isPathActive(pathname, item.href) ||
      Boolean(item.children && hasActiveDescendant(item.children, pathname)),
  );

const MobileMenuItems = ({
  items,
  pathname,
  openPath,
  ancestors,
  onToggle,
  onNavigate,
}: MobileMenuItemsProps) => (
  <motion.ul
    variants={navVariants}
    className="space-y-1"
  >
    {items.map((item) => {
      const hasChildren = Boolean(item.children?.length);
      const isOpen = openPath.includes(item.href);
      const isActive =
        isPathActive(pathname, item.href) ||
        Boolean(item.children && hasActiveDescendant(item.children, pathname));
      const submenuId = `mobile-submenu-${item.href.replace(/[^a-zA-Z0-9]+/g, "-")}`;

      return (
        <motion.li
          key={item.href}
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-stretch">
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`flex min-w-0 flex-1 items-start rounded-sm px-3 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#c9a45c]/15 text-[#e5c681]"
                  : "text-white/90 hover:bg-white/5 hover:text-[#e5c681]"
              }`}
            >
              {ancestors.length > 0 && (
                <span
                  aria-hidden="true"
                  className="mr-3 w-3 shrink-0 text-center text-[#c9a45c]/70"
                >
                  —
                </span>
              )}
              <span className="min-w-0 flex-1">{item.title}</span>
            </Link>

            {hasChildren && (
              <button
                type="button"
                aria-label={`${isOpen ? "Свернуть" : "Развернуть"}: ${item.title}`}
                aria-expanded={isOpen}
                aria-controls={submenuId}
                onClick={() => onToggle(item, ancestors)}
                className={`flex w-12 shrink-0 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#c9a45c] ${
                  isOpen
                    ? "bg-[#c9a45c]/15 text-[#e5c681]"
                    : "text-[#d4af62] hover:bg-white/5"
                }`}
              >
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} aria-hidden="true" />
                </motion.span>
              </button>
            )}
          </div>

          <AnimatePresence initial={false}>
            {hasChildren && isOpen && (
              <motion.div
                id={submenuId}
                variants={submenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="overflow-hidden"
              >
                <div className="ml-3 mt-1 border-l border-[#c9a45c]/40 pl-2">
                  <MobileMenuItems
                    items={item.children!}
                    pathname={pathname}
                    openPath={openPath}
                    ancestors={[...ancestors, item.href]}
                    onToggle={onToggle}
                    onNavigate={onNavigate}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      );
    })}
  </motion.ul>
);

const MobileNavigation = ({ items }: { items: NavigationItem[] }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openPath, setOpenPath] = useState<string[]>([]);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsOpen(false);
        setOpenPath([]);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);
  const shouldReduceMotion = useReducedMotion();
  const viewportExtent = useSyncExternalStore(
    subscribeToViewport,
    getViewportExtent,
    getServerViewportExtent,
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setOpenPath([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleSubmenu = (item: NavigationItem, ancestors: string[]) => {
    if (openPath.includes(item.href)) {
      setOpenPath(ancestors);
      return;
    }

    setOpenPath([...ancestors, item.href]);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenPath([]);
  };

  return (
    <nav
    ref={menuRef}
      aria-label="Основная навигация"
      className="relative border-y border-[#c9a45c]/40 bg-[#061d35] lg:hidden"
    >
      <div className="site-container flex min-h-12 items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af62]">
          Меню
        </span>
        <motion.button
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          animate={isOpen ? "open" : "closed"}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen((open) => !open);
            setOpenPath([]);
          }}
          className="flex size-10 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 hover:text-[#e5c681] focus-visible:outline-2 focus-visible:outline-[#c9a45c]"
        >
          <svg width="23" height="23" viewBox="0 0 23 23" aria-hidden="true">
            <motion.path
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.button>
      </div>

      <motion.nav
        id="mobile-navigation-menu"
        aria-label="Разделы сайта"
        aria-hidden={!isOpen}
        inert={!isOpen}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={viewportExtent}
        variants={{
          open: {
            height: "auto",
            clipPath: `circle(${viewportExtent * 2 + 200}px at calc(100% - 2.5rem) -24px)`,
            transition: {
              height: { type: "spring", stiffness: 1000, damping: 80 },
              clipPath: {
                type: "spring",
                stiffness: shouldReduceMotion ? 1000 : 20,
                damping: shouldReduceMotion ? 80 : undefined,
                restDelta: 2,
              },
            },
          },
          closed: {
            height: 0,
            clipPath: "circle(30px at calc(100% - 2.5rem) -24px)",
            transition: {
              height: { delay: 0.5, duration: 0.2 },
              clipPath: shouldReduceMotion
                ? { duration: 0.1 }
                : {
                    delay: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                  },
            },
          },
        }}
        className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-7rem)] overflow-x-hidden overflow-y-auto overscroll-contain bg-[#061d35] shadow-2xl"
      >
        <div className="site-container relative py-3">
          <MobileMenuItems
            items={items}
            pathname={pathname}
            openPath={openPath}
            ancestors={[]}
            onToggle={toggleSubmenu}
            onNavigate={closeMenu}
          />
        </div>
      </motion.nav>
    </nav>
  );
};

export default MobileNavigation;
