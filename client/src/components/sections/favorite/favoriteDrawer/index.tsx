import React, { useContext } from "react";
import FavoriteCard from "../favoriteCard";
import { FavoritesContext } from "@/context/FavoritesProvider";

const FavoriteDrawer = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log("FAV DRAWER FAV CARD", favorites);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-[500px] min-h-full bg-white text-base-content">
          <h1 className="text-2xl text-black font-medium flex justify-center">
            Your favorites
          </h1>
          {favorites?.map((favorite, index) => (
            <FavoriteCard favorite={favorite} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteDrawer;
