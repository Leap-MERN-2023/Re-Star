"use client";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { UserContext } from "@/context/UserProvider";
import React, { useContext, useEffect } from "react";

const Page = () => {
  const { getRestaurantById } = useContext(RestaurantContext);
  useEffect(() => {
    getRestaurantById();
  }, []);
  return <div>Page</div>;
};

export default Page;
