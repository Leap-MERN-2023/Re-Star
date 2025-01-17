"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/utils/myAxios";
import { UserContext } from "./UserProvider";
import { toast } from "react-toastify";

interface ICategory {
  name: string;
  image: string;
  description: string;
  _id: string;
}

interface ICategoryContext {
  categories: ICategory[];
  addCategory: (dataForm: any) => {};
}

export const CategoryContext = createContext({} as ICategoryContext);

const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);

  const { token } = useContext(UserContext);

  const getCategory = async () => {
    try {
      const {
        data: { categories },
      } = await myAxios.get("/category/get");
      setCategories(categories);
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  const addCategory = async (dataForm: any) => {
    try {
      const {
        data: { categories },
      } = await myAxios.post("/category/add", dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Successfully added category");
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  useEffect(() => {
    if (token) {
      getCategory();
    }
  }, [token]);

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
