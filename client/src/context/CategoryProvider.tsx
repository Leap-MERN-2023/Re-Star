"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/utils/myAxios";

interface ICategory {
  name: string;
  image: string;
  description: string;
  _id: string;
}

interface ICategoryContext {
  categories: ICategory[];
}

export const CategoryContext = createContext({} as ICategoryContext);

const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const {
      data: { categories },
    } = await myAxios.get("/category/get");
    setCategories(categories);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
