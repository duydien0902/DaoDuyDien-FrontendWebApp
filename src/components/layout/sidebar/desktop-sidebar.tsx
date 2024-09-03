import Link from "next/link";
import React from "react";

import { PATH_NAME } from "@/utilities/contans";

import {
  dataSidebar,
  dataSidebarTypes,
} from "@/components/layout/sidebar/data";
import { ItemSidebar } from "@/components/layout/sidebar/item-sidebar";

const DesktopSideBar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 w-14 lg:w-64 bg-background border-r hidden sm:block">
      <nav className="px-3 py-4 flex flex-col w-full gap-4">
        <div className="flex items-center justify-center">
          <Link href={`/${PATH_NAME.HOME}`}>
            <h3 className="capitalize hidden lg:block py-2 px-3 border border-foreground light:border-[#03274E] rounded-full text-xl leading-tight font-bold light:text-[#03274E] ">
              moovtek
            </h3>
            <h3 className="capitalize block lg:hidden py-2 px-3 border border-foreground light:border-[#03274E] rounded-full text-xl leading-tight font-bold light:text-[#03274E] ">
              m
            </h3>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {dataSidebar?.map((nav: dataSidebarTypes) => (
            <ItemSidebar
              href={nav.href}
              title={nav.title}
              key={nav.href}
              className="lg:px-2 lg:py-3 lg:w-full lg:h-full lg:text-secondary lg:hover:text-secondary lg:justify-start lg:bg-slate-400 lg:hover:bg-secondary-foreground"
            >
              <nav.Icon />
            </ItemSidebar>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default DesktopSideBar;
