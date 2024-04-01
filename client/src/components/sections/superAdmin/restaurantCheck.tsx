import { RestaurantContext } from "@/context/RestaurantProvider";
import React, { useContext } from "react";

const RestaurantCheck = () => {
  const getRestaurant = useContext(RestaurantContext);
  const { org } = useContext(RestaurantContext);
  console.log("ORGS", org);
  return (
    <div>
      {org.map((e) => (
        <p>{e.name}sdf</p>
      ))}
    </div>
  );
};

export default RestaurantCheck;
