"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MegaMenu from "@/components/navigation/MegaMenu";
import { navigation } from "@/data/navigation";

const Navigation = () => {
  return (
    <nav className="border-y border-[#c9a45c]/40 bg-[#061d35]">
      <div className="mx-auto flex max-w-7xl items-center px-6">
        <NavigationMenu>
          <NavigationMenuList className="gap-0">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="h-12 cursor-pointer rounded-none bg-transparent px-5 text-sm font-light uppercase tracking-wide text-white hover:bg-white/5 hover:text-[#d4af62] focus:bg-white/5 focus:text-[#d4af62] data-popup-open:bg-white/5 data-popup-open:hover:bg-white/5 data-open:bg-white/5 data-open:hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-[#d4af62] duration-300">
                      {item.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <MegaMenu items={item.children} title={item.title} />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="flex h-12 items-center rounded-none px-5 text-sm font-light uppercase tracking-wide text-white transition hover:bg-white/5 hover:text-[#d4af62]"
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
