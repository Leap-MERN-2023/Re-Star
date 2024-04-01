import React, { useContext } from "react";
import AddCategory from "./addCategory";
import { CategoryContext } from "@/context/CategoryProvider";
import RestaurantCheck from "./restaurantCheck";

const SuperAdmin = () => {
  return (
    <div className="">
      <AddCategory />
      <RestaurantCheck />
    </div>
  );
};

export default SuperAdmin;
