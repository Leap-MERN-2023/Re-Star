"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

import { UserContext } from "./UserProvider";

import { toast } from "react-toastify";

import myAxios from "@/utils/myAxios";

import { IMenu, IMenuContext } from "@/interface";

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

const MenuProvider = ({ children }: PropsWithChildren) => {
  const [menus, setMenus] = useState<IMenu[]>([]);
  const { token } = useContext(UserContext);

  const getMenuByOrgId = async (orgId: string) => {
    try {
      const {
        data: { orgMenus },
      } = await myAxios.get(`menu/get/${orgId}`);

      setMenus(orgMenus[0].foods);
    } catch (error: any) {
      toast.error("error :", error);
    }
  };

  return (
    <MenuContext.Provider value={{ menus, getMenuByOrgId }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
