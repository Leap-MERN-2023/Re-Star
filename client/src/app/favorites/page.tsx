"use client";
import React, { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesProvider";
import RestaurantCard from "@/components/sections/restaurantCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log("favs in page", favorites);
  return (
    <div>
      <h1>Favorites Page</h1>
      {favorites.map((favorite, index) => (
        <RestaurantCard favorite={favorite} key={index} />
      ))}
    </div>
  );
};

export default FavoritesPage;
