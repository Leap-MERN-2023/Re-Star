"use client";
import React, { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesProvider";
import RestaurantCard from "@/components/sections/restaurantCard";
import FavoriteCard from "@/components/sections/favoriteCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log("favs in page", favorites);
  return (
    <div>
      <h1 className="text-lg text-gray-800">Your favorites</h1>
      {/* {favorites.map((favorite, index) => ( */}
      {/* // <FavoriteCard favorite={favorite} key={index} /> */}
      <FavoriteCard />
      {/* ))} */}
    </div>
  );
};

export default FavoritesPage;
