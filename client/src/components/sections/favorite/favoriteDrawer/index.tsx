import React, { useContext } from "react";
import FavoriteCard from "../favoriteCard";
import { FavoritesContext } from "@/context/FavoritesProvider";

const FavoriteDrawer = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="drawer drawer-end z-20  shadow-white shadow-xl">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 min-h-full bg-secondary text-base-content  w-[600px] ">
          <h1 className="text-2xl text-primary font-medium flex justify-center mt-5">
            Your favorites
          </h1>
          <div className="mt-5">
            {favorites?.map((favorite, index) => (
              <FavoriteCard favorite={favorite} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDrawer;
