import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
};

const Breadcrumbs = ({ items, variant = "dark" }: BreadcrumbsProps) => {
  const colors =
    variant === "dark"
      ? {
          link: "text-white/60 hover:text-[#e5c681]",
          current: "text-[#e5c681]",
          separator: "text-white/40",
        }
      : {
          link: "text-[#061d35]/60 hover:text-[#a37b2f]",
          current: "text-[#a37b2f]",
          separator: "text-[#061d35]/35",
        };

  return (
    <nav
      aria-label="Навигационная цепочка"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm"
    >
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className="contents">
            {index > 0 && (
              <ChevronRight
                aria-hidden="true"
                className={colors.separator}
                size={15}
              />
            )}
            {item.href && !isCurrent ? (
              <Link href={item.href} className={`transition ${colors.link}`}>
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isCurrent ? "page" : undefined}
                className={isCurrent ? colors.current : colors.link}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
