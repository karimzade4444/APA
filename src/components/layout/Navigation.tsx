"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import MegaMenu from "@/components/navigation/MegaMenu";
import { navigation } from "@/data/navigation";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isItemActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const hasActiveChild = (items: typeof navigation): boolean =>
    items.some(
      (item) =>
        isItemActive(item.href) ||
        (item.children ? hasActiveChild(item.children) : false),
    );

  return (
    <nav className="border-y border-[#c9a45c]/40 bg-[#061d35]">
      <div className="site-container flex items-center">
        <NavigationMenu
          value={openMenu}
          onValueChange={setOpenMenu}
          className="w-full max-w-none justify-start"
        >
          <NavigationMenuList className="justify-between gap-0">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.title} value={item.href}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger
                      className={`relative h-12 cursor-pointer rounded-none px-5 text-sm font-light uppercase tracking-wide transition duration-300 after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-center after:transition-transform ${
                        hasActiveChild(item.children)
                          ? "bg-[#c9a45c]/10 text-[#e5c681] after:scale-x-100 after:bg-[#c9a45c]"
                          : "bg-transparent text-white after:scale-x-0 after:bg-transparent hover:bg-white/5 hover:text-[#d4af62] hover:after:scale-x-100 hover:after:bg-[#c9a45c]"
                      } focus:bg-white/5 focus:text-[#d4af62] data-popup-open:bg-white/5 data-popup-open:hover:bg-white/5 data-open:bg-white/5 data-open:hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-[#d4af62]`}
                    >
                      {item.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <MegaMenu
                        items={item.children}
                        title={item.title}
                        onNavigate={() => setOpenMenu(null)}
                      />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    aria-current={isItemActive(item.href) ? "page" : undefined}
                    className={`relative flex h-12 items-center rounded-none px-5 text-sm font-light uppercase tracking-wide transition after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:transition-transform focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a45c] ${
                      isItemActive(item.href)
                        ? "bg-[#c9a45c]/10 text-[#e5c681] after:scale-x-100 after:bg-[#c9a45c]"
                        : "text-white after:scale-x-0 after:bg-transparent hover:bg-white/5 hover:text-[#d4af62] hover:after:scale-x-100 hover:after:bg-[#c9a45c]"
                    }`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
