"use client";

import { IReviewContext, IReview } from "@/interface";
import myAxios from "@/utils/myAxios";
import { StringToBoolean } from "class-variance-authority/types";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { RestaurantContext } from "./RestaurantProvider";
import { UserContext } from "./UserProvider";

export const ReviewContext = createContext<IReviewContext>(
  {} as IReviewContext
);

const ReviewProvider = ({ children }: PropsWithChildren) => {
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [review, setReview] = useState<IReview[]>([
    {
      score: 0,
      message: "",
      user: "",
      organization: "",
      _id: "",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const { loggedUser } = useContext(UserContext);
  const addReview = async (
    score: number | null,
    message: string,
    orgId: string
  ) => {
    try {
      await myAxios.post("/review", {
        organization: orgId,
        user: loggedUser,
        score,
        message,
      });
      setIsOpen(!isOpen);
      toast("Shine review amjilltai uuslee");
    } catch (error) {
      toast.error("Error in AddReview COntext");
    }
  };
  const getReviewById = async (orgId: any) => {
    try {
      setReviewsLoading(true);
      console.log("WORKING GETREVBYID");

      const {
        data: { orgReview },
      } = await myAxios.get(`/review/${orgId}`);
      console.log("REVIEW IN CONTEXT", orgReview);
      setReview(orgReview);
      setReviewsLoading(false);
    } catch (error) {
      console.log("Err in getReviewById COntext", error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        review,
        isOpen,
        addReview,
        getReviewById,
        reviewsLoading,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
