import { InfoUser } from "@/types/user";

import { isEqual } from "lodash";

export const compareObj = (obj1: any, obj2: InfoUser) => {
  if (!obj1 || !obj2) {
    return null;
  }
  const result = isEqual(obj1, obj2);
  return result;
};
