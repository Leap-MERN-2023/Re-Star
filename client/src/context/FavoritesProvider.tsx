"use client";

import { IFavoritesContext } from "@/interface";
import myAxios from "@/utils/myAxios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FavoritesContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext
);

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState([]);
  const getFavorites = async () => {
    const {
      data: { favorites },
    } = await myAxios.get("/favorite", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmQ1MTQwZjM3Mzg4YjZhYTQwZGZmZiIsImlhdCI6MTcxMTM1MjA5NiwiZXhwIjoxNzExNDM4NDk2fQ.SXSenoStWw_TUIG3Th9CMZB5PyZrUhZDc4C8rIgiNEA",
      },
    });
    setFavorites(favorites.organizations);
  };
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        getFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
