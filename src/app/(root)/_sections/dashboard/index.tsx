"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Welcome } from "@/app/(root)/_sections/dashboard/_components/welcome";
import { EmployeeSummaryList } from "@/app/(root)/_sections/dashboard/_components/employee-summary/employee-summary-list";
import { RoleSummaryList } from "@/app/(root)/_sections/dashboard/_components/role-summary/role-summary-list";
import { Chart } from "@/app/(root)/_sections/dashboard/_components/chart";

const WELCOME = "Welcome to the web portal.";

const employeeSummaryList = [
  {
    title: "total employee",
    total: "200",
  },
  {
    title: " taday's attendence",
    total: "30",
  },
  {
    title: "on leave",
    total: "8",
  },
];

const roleSummaryList = [
  {
    role: "front-end",
    total: "80",
  },
  {
    role: "back-end",
    total: "60",
  },
  {
    role: "ux/ui",
    total: "20",
  },
];

const chartData = [
  { month: "January", cv: 186, ob: 80, at: 200 },
  { month: "February", cv: 305, ob: 100, at: 100 },
  { month: "March", cv: 237, ob: 200, at: 50 },
  { month: "April", cv: 73, ob: 190, at: 150 },
  { month: "May", cv: 209, ob: 130, at: 200 },
  { month: "June", cv: 214, ob: 100, at: 300 },
];

export const DashboardSection = () => {
  const [doneTyping, setDoneTyping] = useState({
    isAnimation: false,
    isDone: false,
  });

  return (
    <section>
      <div className="w-full h-full py-4 flex flex-col gap-6">
        <div
          className={cn("h-[342px] sm:h-40", {
            "flex justify-center": !doneTyping.isDone,
          })}
        >
          {!doneTyping.isDone && (
            <div
              className={cn("w-full flex justify-center", {
                "animate-fadeIn-reverse": doneTyping.isAnimation,
              })}
            >
              <Welcome
                setDoneTyping={setDoneTyping}
                text={WELCOME}
                duration={1500}
              />
            </div>
          )}
          {doneTyping.isDone && (
            <div className="w-full flex justify-center animate-fadeIn">
              <EmployeeSummaryList data={employeeSummaryList || []} />
            </div>
          )}
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-7">
            <Chart data={chartData || []} />
          </div>
          <div className="col-span-12 xl:col-span-5">
            <RoleSummaryList data={roleSummaryList || []} />
          </div>
        </div>
      </div>
    </section>
  );
};
