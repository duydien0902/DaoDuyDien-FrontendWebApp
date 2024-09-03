import React from "react";

import { SearchIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="mx-2 sm:mx-0 flex w-full sm:w-[250px] md:w-[350px] items-center gap-3 border px-2 rounded-lg">
      <SearchIcon />
      <Input
        className="p-0 h-10 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
