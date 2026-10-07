"use client";

import Link from "next/link";
import type { NavigationItem } from "@/types/navigation";
import StaggerItem from "../animations/StraggerItem";
import Stagger from "../animations/Stragger";


type MenuTreeProps = {
  items: NavigationItem[];
};

const MenuTree = ({ items }: MenuTreeProps) => {
  return (
    <Stagger stagger={0.06}>
      <div className="space-y-1">
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);

          return (
            <StaggerItem key={item.href}>
              <div className="group relative">
                <Link
                  href={item.href}
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

                {hasChildren && (
                  <div className="invisible absolute left-full top-0 z-50 min-w-[280px] translate-x-[-5px] border border-[#c9a45c]/30 bg-[#061d35] p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#d4af62] pb-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
                        {item.title}
                      </p>
                    </div>

                    <MenuTree items={item.children!} />
                  </div>
                )}
              </div>
            </StaggerItem>
          );
        })}
      </div>
    </Stagger>
  );
};

export default MenuTree;
