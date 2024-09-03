import React from "react";

import { APP } from "@/utilities/contans";
import { capitalizeFirstLetters } from "@/utilities/format";

const AppVersion = () => {
  return (
    <div>
      <h3 className="font-bold text-xl hidden sm:block">
        {capitalizeFirstLetters(APP.NAME)} - {APP.VERSION}
      </h3>
    </div>
  );
};

export default AppVersion;
