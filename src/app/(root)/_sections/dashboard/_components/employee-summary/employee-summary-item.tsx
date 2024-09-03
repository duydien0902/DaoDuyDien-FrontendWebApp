import React from "react";

interface EmployeeSummaryItemProps {
  item: {
    title: string;
    total: string | number;
  };
  index: number;
}

export const EmployeeSummaryItem = ({
  item,
  index,
}: EmployeeSummaryItemProps) => {
  return (
    <div
      className="p-6 text-md md:text-lg font-bold h-fit sm:h-40 w-full flex flex-row justify-between items-center gap-2 shadow-lg border rounded-md transition-all opacity-0 animate-slideIn"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <p className="capitalize">
        {item.title.split(" ").map((word, index) => {
          if (word.trim() === "") return;
          return (
            <React.Fragment key={index}>
              {word}
              <br />
            </React.Fragment>
          );
        })}
      </p>
      <p>{item.total}</p>
    </div>
  );
};
