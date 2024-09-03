import React from "react";
import Link from "next/link";

import { PATH_NAME } from "@/utilities/contans";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRightIcon } from "@/components/ui/icons";

import { dataSidebar } from "@/components/layout/sidebar/data";
import { ItemSidebar } from "@/components/layout/sidebar/item-sidebar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="sm:hidden rounded-full h-auto px-2"
        >
          <ArrowRightIcon className="h-6 w-6" />
          <span className="sr-only">show sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="flex flex-col gap-4 pt-4">
          <div className="flex items-center justify-center">
            <Link href={`/${PATH_NAME.HOME}`}>
              <h3 className="capitalize py-2 px-3 border border-foreground light:border-[#03274E] rounded-full text-xl leading-tight font-bold light:text-[#03274E] ">
                moovtek
              </h3>
            </Link>
          </div>
          {dataSidebar?.map((nav) => (
            <ItemSidebar
              key={nav.href}
              title={nav.title}
              href={nav.href}
              className="text-muted-foreground hover:text-secondary-foreground hover:bg-slate-300"
            >
              <nav.Icon />
            </ItemSidebar>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
