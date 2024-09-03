import React from "react";

import { TrendingDownIcon, TrendingUpIcon } from "@/components/ui/icons";

interface RenderPercentageProps {
  title: string;
  percen: number | string;
  color: string;
}

export const RenderPercentage = ({
  title,
  percen,
  color,
}: RenderPercentageProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-2.5 h-2.5 rounded-[2px]"
        style={{ backgroundColor: color }}
      />
      <p>{title}</p>
      {+percen >= 0 && (
        <div className="text-green-500 flex items-center">
          <p>{percen}%</p>
          <TrendingUpIcon />
        </div>
      )}
      {!(+percen >= 0) && (
        <div className="text-red-500 flex items-center">
          <p>{percen}%</p>
          <TrendingDownIcon />
        </div>
      )}
    </div>
  );
};
