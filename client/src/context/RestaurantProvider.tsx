"use client";

import { IReviewContext, IReview } from "@/interface";
import myAxios from "@/utils/myAxios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface IRestaurantContext {}

export const RestaurantContext = createContext<IRestaurantContext>({});

const ReviewProvider = ({ children }: PropsWithChildren) => {
  return (
    <RestaurantContext.Provider value={{}}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default ReviewProvider;
