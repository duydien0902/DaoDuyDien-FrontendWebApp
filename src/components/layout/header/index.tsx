import React from "react";

import ModeToggle from "@/components/mode-toggle";
import MobileSideBar from "@/components/layout/sidebar/mobile-sidebar";
import AppVersion from "@/components/layout/header/app-version";
import UserAvatar from "@/components/layout/header/user-avatar";
import Search from "@/components/layout/header/search";

const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between border-b">
      <MobileSideBar />
      <AppVersion />
      <div className="flex-1 flex justify-center pr-0 sm:justify-end sm:pr-2 lg:pr-16">
        <Search />
      </div>
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
