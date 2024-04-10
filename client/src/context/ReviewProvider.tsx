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

  const getReviewById = async (orgId: any) => {
    try {
      setReviewsLoading(true);

      const {
        data: { orgReview },
      } = await myAxios.get(`/review/${orgId}`);

      setReview(orgReview);
      setReviewsLoading(false);
    } catch (error) {
      toast.error(`error ${error}`);
    }
  };

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

      toast("New review added");
      getReviewById(orgId);
    } catch (error) {
      toast.error("Error in AddReview COntext");
    }
  };

  const deleteReview = async (reviewId: string, orgId: string) => {
    try {
      await myAxios.delete("/review", { data: { reviewId } });
      getReviewById(orgId);
    } catch (error) {
      toast.error(`error ${error}`);
    }
  };

  const editReview = async (
    editedScore: number,
    editedMessage: string,
    reviewId: string,
    orgId: string
  ) => {
    try {
      await myAxios.put("/review", {
        data: { editedScore, editedMessage, reviewId },
      });

      getReviewById(orgId);
      toast("Review updated");
    } catch (error) {
      toast.error(`error ${error}`);
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
        deleteReview,
        editReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
