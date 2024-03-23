"use client";

import { IRestaurantContext, IRestaurant } from "@/interface";
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

export const RestaurantContext = createContext<IRestaurantContext>(
  {} as IRestaurantContext
);

const RestaurantProvider = ({ children }: PropsWithChildren) => {
  const { loggedToken } = useContext(UserContext);
  const createRestaurant = async ({
    name,
    category,
    openTime,
    closeTime,
    address,
    description,
    phoneNumber,
    imgOne,
    imgTwo,
    imgThree,
  }: IRestaurant) => {
    try {
      console.log(
        `Values :, name ${name} openAt:${openTime}, close: ${closeTime}, address :${address},
         Desc:${description} No :${phoneNumber} category : ${category}`
      );

      const data = await myAxios.post(
        "/org/add",
        {
          name,
          category,
          openTime,
          closeTime,
          address,
          description,
          phoneNumber,
          image: { imgOne, imgTwo, imgThree },
        },
        {
          headers: {
            Authorization: `Bearer ${loggedToken}`,
          },
        }
      );

      console.log("Data :", data);

      toast.success("restaurant amjilttai uuslee");
    } catch (error) {
      toast.error(`Алдаа : ${error} `);
    }
  };

  return (
    <RestaurantContext.Provider value={{ createRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
