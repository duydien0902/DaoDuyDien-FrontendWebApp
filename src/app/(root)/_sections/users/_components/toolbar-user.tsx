import React from "react";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon } from "@/components/ui/icons";

interface ToolbarUserProps {
  tabs: string[];
  handleTab: (v: string) => void;
  showComfirmDelete: () => void;
  showForm: () => void;
  disable: boolean;
}

export const ToolbarUser = ({
  tabs,
  handleTab,
  showComfirmDelete,
  showForm,
  disable,
}: ToolbarUserProps) => {
  return (
    <div className="w-full gap-4 flex justify-between items-center">
      <div>
        <TabsList>
          {tabs?.map((tab) => (
            <TabsTrigger
              className="capitalize"
              key={tab}
              value={tab}
              onClick={() => handleTab(tab)}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <div className="gap-1.5 sm:gap-2 flex items-center">
        <Button
          onClick={showForm}
          className="flex items-center px-3 sm:px-4 gap-2 text-sm h-9"
        >
          <PlusIcon className="w-3 h-3 sm:w-5 sm:h-5" />
          <p className="hidden sm:block capitalize">add user</p>
        </Button>
        <Button
          disabled={disable}
          onClick={showComfirmDelete}
          className="text-white flex items-center px-3 sm:px-4 gap-2 text-sm h-9 bg-red-600 hover:bg-red-700"
        >
          <TrashIcon className="w-3 h-3 sm:w-5 sm:h-5" />
          <p className="hidden sm:block capitalize">delete</p>
        </Button>
      </div>
    </div>
  );
};
