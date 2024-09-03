"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { capitalizeFirstLetter } from "@/utilities/format";

interface ItemSidebarProps {
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ItemSidebar = ({
  children,
  href,
  title,
  className,
}: ItemSidebarProps) => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        className={cn(
          "sm:w-8 sm:h-8 font-medium rounded-lg flex items-center justify-start sm:justify-center px-2 py-3 gap-2 transition-all ease-in-out duration-300",
          className,
          {
            "lg:bg-secondary-foreground w-full h-full sm:w-8 sm:h-8 lg:w-full lg:h-full sm:flex sm:items-center sm:justify-center text-secondary bg-slate-300":
              pathname === href,
          }
        )}
      >
        {children}
        <p className="text-sm block sm:hidden lg:block">
          {capitalizeFirstLetter(title)}
        </p>
      </div>
    </Link>
  );
};
