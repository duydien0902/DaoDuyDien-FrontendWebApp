import React from "react";

import Header from "@/components/layout/header";
import DesktopSideBar from "@/components/layout/sidebar/desktop-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen relative flex flex-col">
      <DesktopSideBar />
      <div className="pl-0 sm:pl-14 lg:pl-64">
        <div className="flex flex-col">
          <Header />
          <main className="px-4">{children}</main>
        </div>
      </div>
    </main>
  );
}
