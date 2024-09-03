import React from "react";

import { LogoutIcon, SettingIcon, UserIcon } from "@/components/ui/icons";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface UserDropdownProps {
  doLogout: () => void;
  user: { email: string } | null;
}

export const UserDropdown = ({ doLogout, user }: UserDropdownProps) => {
  return (
    <DropdownMenuContent className="w-56" align="end" sideOffset={8}>
      <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <SettingIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuItem onClick={doLogout}>
        <LogoutIcon className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
