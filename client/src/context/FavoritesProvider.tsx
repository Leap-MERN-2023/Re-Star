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
import { AxiosResponse } from "axios";

export const FavoritesContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext
);

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState([]);
  const { token } = useContext(UserContext);
  const [fav1, setFav1] = useState(false);

  const getFavorites = async () => {
    try {
      const {
        data: { favorites },
      } = await myAxios.get("/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavorites(favorites?.organizations);
      setFav1(!fav1);
    } catch (error: any) {
      toast.error(
        `Error in deleting restaurant: ${
          error.response ? error.response.data.message : error
        } `
      );
    }
  };

  useEffect(() => {
    if (token) {
      getFavorites();
    }
  }, [token]);

  const addFavorite = async (orgId: string) => {
    try {
      const {
        data: { favorites },
      } = await myAxios.put(
        "/favorite",
        {
          orgId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getFavorites();

      toast.success("Successfully added to favorites");
    } catch (error) {
      toast.error(`error ${error}`);
    }
  };

  const deleteFavorite = async (orgId: string) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const {
        data: { favorites },
      } = await myAxios.delete("/favorite", {
        headers,
        data: { orgId },
      });
      getFavorites();
    } catch (error) {
      toast.error(`error ${error}`);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
