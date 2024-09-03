import { memo } from "react";

import { ColumnDef } from "@tanstack/react-table";

import { InfoUser } from "@/types/user";

import { capitalizeFirstLetters } from "@/utilities/format";

import { EllipsisIcon, TrashIcon, EditIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Active, InActive } from "@/components/ui/status-display";

export const createColumns = (
  showComfirmDelete: () => void,
  showFormUpdate: (user: InfoUser) => void,
  setCurrentIdsToDelete: (ids: string[]) => void
): ColumnDef<InfoUser>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullname",
    header: () => <div className="text-left">Full Name</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("fullname")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left">Email</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-left">Phone</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "role",
    header: () => <div className="text-left">Role</div>,
    cell: ({ row }) => (
      <div className="uppercase text-left font-medium">
        {capitalizeFirstLetters(row.getValue("role"))}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        {row.getValue("status") ? <Active /> : <InActive />}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const userInfo = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => showFormUpdate(userInfo)}>
              <EditIcon className="mr-2 h-4 w-4" />

              <span className="capitalize">edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600 focus:bg-red-600 focus:text-white"
              onClick={() => {
                setCurrentIdsToDelete([userInfo.id]);
                showComfirmDelete();
              }}
            >
              <TrashIcon className="mr-2 h-4 w-4" />

              <span className="capitalize">delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
