import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RoleSummaryItem } from "@/app/(root)/_sections/dashboard/_components/role-summary/role-summary-item";

interface RoleSummaryListProps {
  data:
    | {
        role: string;
        total: number | string;
      }[]
    | [];
}

export const RoleSummaryList = ({ data }: RoleSummaryListProps) => {
  return (
    <Card className="shadow-lg border rounded-md">
      <CardHeader>
        <CardTitle>Role</CardTitle>
        <CardDescription>Displays roles within the company.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" flex flex-col gap-4">
          {data?.map((item: { role: string; total: number | string }, i) => (
            <RoleSummaryItem item={item} key={i} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              AI and DA roles are coming soon
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Expected date October - January 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
