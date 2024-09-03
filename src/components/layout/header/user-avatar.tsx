"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { logoutApi, getCurrentUserApi } from "@/actions/fake-call-api";

import { PATH_NAME } from "@/utilities/contans";
import { formatAvatarText } from "@/utilities/format";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserDropdown } from "@/components/layout/header/user-dropdown";

export const UserAvatar = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  const doLogout = async () => {
    try {
      const result: any = await logoutApi();
      if (result?.logout) router.push(PATH_NAME.LOGIN);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    (async () => {
      if (!user) {
        try {
          const result: { email: string } | null = await getCurrentUserApi();
          if (result) setUser(result);
        } catch (error) {
          //
        }
      }
    })();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="p-0 h-auto rounded-full border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="bg-gray-500 text-white text-lg">
              {formatAvatarText(user?.email)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <UserDropdown doLogout={doLogout} user={user} />
    </DropdownMenu>
  );
};

export default UserAvatar;
