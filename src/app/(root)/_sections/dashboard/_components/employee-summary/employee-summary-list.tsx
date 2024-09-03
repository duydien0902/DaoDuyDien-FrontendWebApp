import React from "react";
import { EmployeeSummaryItem } from "@/app/(root)/_sections/dashboard/_components/employee-summary/employee-summary-item";

interface EmployeeSummaryListProps {
  data:
    | {
        title: string;
        total: string | number;
      }[]
    | [];
}

export const EmployeeSummaryList = ({ data }: EmployeeSummaryListProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
      {data?.map((item: any, i) => (
        <EmployeeSummaryItem key={i} item={item} index={i} />
      ))}
    </div>
  );
};
