"use client";

import { IMenu, IMenuContext } from "@/interface";
import myAxios from "@/utils/myAxios";
import { PropsWithChildren, createContext, useState } from "react";
import { toast } from "react-toastify";

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

const MenuProvider = ({ children }: PropsWithChildren) => {
  const [menus, setMenus] = useState<IMenu[]>([]);

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
