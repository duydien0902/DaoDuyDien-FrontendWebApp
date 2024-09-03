import { InfoUserData, InfoUser } from "@/types/user";

import {
  AUTH_HARDCODE,
  HARD_CODE_TOKEN,
  STORAGE_KEY,
} from "@/utilities/contans";

const TIME_OUT = 1000;
const TIME_ZERO = 0;

const getToltalUser = (data: InfoUser[]) => {
  return data?.length > 0 ? data?.length : 0;
};

//Users
export const queryUserApi: (
  obj: InfoUserData,
  tab: string
) => Promise<InfoUserData> = (obj: InfoUserData, tab: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (tab === "active") {
        const data = obj.data.filter((item) => item.status);
        const total = getToltalUser(data);
        resolve({ data, total });
      } else if (tab === "inactite") {
        const data = obj.data.filter((item) => !item.status);
        const total = getToltalUser(data);
        resolve({ data, total });
      } else {
        resolve(obj);
      }
    }, TIME_OUT);
  });
};

export const createUserApi = (
  obj: InfoUserData | null,
  user: InfoUser
): Promise<InfoUserData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!obj) {
        resolve(null);
        return;
      }
      const data = [user, ...obj.data];
      const total = getToltalUser(data);

      resolve({ data, total });
    }, TIME_OUT);
  });
};

export const deleteUserApi = (
  obj: InfoUserData | null,
  ids: string[]
): Promise<InfoUserData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!obj) {
        resolve(null);
        return;
      }
      const data = obj.data.filter((user) => !ids.includes(user.id));
      const total = getToltalUser(data);

      resolve({ data, total });
    }, TIME_OUT);
  });
};

export const updateUserApi = (
  obj: InfoUserData | null,
  update: InfoUser,
  id: string | any
): Promise<{ updatedData: InfoUserData | null; index: number | null }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!obj || !id) {
        resolve({ updatedData: null, index: null });
        return;
      }
      let updatedIndex: number | null = null;

      const updatedData = obj.data.map((item, index) => {
        if (item.id === id) {
          updatedIndex = index;
          return { ...update, id: item.id };
        }
        return item;
      });

      resolve({
        updatedData: { data: updatedData, total: obj.total },
        index: updatedIndex,
      });
    }, TIME_OUT);
  });
};

//Auth
export const signInApi = (value: { email: string; password: string }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        AUTH_HARDCODE.email === value.email &&
        AUTH_HARDCODE.password === value.password
      ) {
        document.cookie = `token=${HARD_CODE_TOKEN}; path=/;`;
        localStorage.setItem(STORAGE_KEY.USER, value.email);
        resolve({ message: "success" });
      } else {
        reject({ error: "Email or password is incorrect!" });
      }
    }, TIME_OUT);
  });
};

export const logoutApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.cookie = "token=; Max-Age=0; path=/;";
      localStorage.removeItem(STORAGE_KEY.USER);
      resolve({ logout: "success" });
    }, TIME_ZERO);
  });
};

export const getCurrentUserApi = (): Promise<{ email: string } | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = localStorage.getItem(STORAGE_KEY.USER);
      if (user) resolve({ email: user });
    }, TIME_ZERO);
  });
};
