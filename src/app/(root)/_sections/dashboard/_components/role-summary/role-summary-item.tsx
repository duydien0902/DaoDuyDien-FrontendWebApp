import React from "react";

import { cn } from "@/lib/utils";

interface RoleSummaryItemProps {
  item: {
    role: string;
    total: number | string;
  };
}

export const RoleSummaryItem = ({ item }: RoleSummaryItemProps) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-2 text-sm md:text-base lg:text-lg font-bold p-6 border rounded-md capitalize",
        {
          "bg-green-300 text-green-800": item.role === "front-end",
          "bg-orange-300 text-orange-800": item.role === "back-end",
          "bg-pink-300 text-pink-800 uppercase": item.role === "ux/ui",
        }
      )}
    >
      <p>
        {item.role} <span className="capitalize">devloper</span>
      </p>
      <p>{item.total}</p>
    </div>
  );
};
