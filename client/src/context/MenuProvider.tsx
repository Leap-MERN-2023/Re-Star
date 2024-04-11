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
  const [orgMenus, setOrgMenus] = useState<Array<IMenu> | null>(null);

  const getMenus = async (id: string) => {
    try {
      const {
        data: { menus },
      } = await myAxios.get(`/menu/get/${id}`);
      setOrgMenus(menus[0]?.foods);
    } catch (error) {
      toast.error(`error ${error}`);
    }
  };

  const getMenuByOrgId = async (orgId: string) => {
    try {
      const {
        data: { menus },
      } = await myAxios.get(`menu/get/${orgId}`);

      setMenus(menus[0].foods);
    } catch (error: any) {
      toast.error("Error while getting restaurant :", error);
    }
  };
  const DeleteMenuByOrgId = async (orgId: string, deleteId: string) => {
    try {
      await myAxios.delete(`/menu/`, {
        data: { orgId, deleteId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Successfully deleted");
      getMenuByOrgId(orgId);
    } catch (error: any) {
      toast.error("Error while deleting restaurant :", error);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        menus,
        getMenuByOrgId,
        DeleteMenuByOrgId,
        getMenus,
        orgMenus,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
