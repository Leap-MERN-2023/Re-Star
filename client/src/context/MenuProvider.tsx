"use client";

import { IReviewContext, IReview, IMenuContext, IMenu } from "@/interface";
import myAxios from "@/utils/myAxios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export const MenuContext = createContext<IMenuContext>(
  {} as IMenuContext
);

const MenuProvider = ({ children }: PropsWithChildren) => {
  const [review, setReview] = useState<IMenu>({
    category: "",
    name: "",
    description:"",
    Price:"",
    Image:"",
    user: "",
    organization: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const addMenuItem= async (score: number | null, message: string) => {
    try {
      const userId = "65fa7ae08e9bd3ea7ad022dd";
      const orgId = "65fa955f1694bfcff98611d3";
      const data = await myAxios.post("/MenuItem", {
        organization: orgId,
        user: userId,
        category: "",
        name: "",
        description:"",
        Price:"",
        Image:"",

      });
      setIsOpen(!isOpen);
      toast("Shine review amjilltai uuslee");
    } catch (error) {
      toast.error("Алдаа");
    }
  };

  return (
    <MenuContext.Provider
      value={{
        review,
        isOpen,
        addMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
