"use client";

import { IFavoritesContext } from "@/interface";
import myAxios from "@/utils/myAxios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserProvider";

export const FavoritesContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext
);

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState([]);
  const { token } = useContext(UserContext);
  const [loved, setLoved] = useState(false);

  const getFavorites = async () => {
    const {
      data: { favorites },
    } = await myAxios.get("/favorite", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFavorites(favorites.organizations);
  };

  useEffect(() => {
    if (token) {
      getFavorites();
    }
  }, [token]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
