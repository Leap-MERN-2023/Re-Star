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

  // const [avScore, setAvScore] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const { loggedUser } = useContext(UserContext);

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
      getReviewById(orgId);
    } catch (error) {
      toast.error("Error in AddReview COntext");
    }
  };

  const deleteReview = async (reviewId: string, orgId: string) => {
    try {
      await myAxios.delete("/review", { data: { reviewId } });
      console.log("DeleteReview successful");
      getReviewById(orgId);
    } catch (error) {
      console.log("Error in DeleteReview Context", error);
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
      toast("Review amjilltai uurchlugdluu");
    } catch (error) {
      console.log("Error in EditReview Context");
    }
  };

  // const averageScoreCalc = async (orgId: string) => {
  //   try {
  //     const {
  //       data: { averageScore },
  //     } = await myAxios.get("/review/averageScore", {
  //       data: { orgId },
  //     });
  //     // setAvScore(averageScore);
  //     console.log("data", averageScore);
  //     // return averageScore;
  //   } catch (error) {
  //     toast(`${error}`);
  //   }
  // };

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
        // averageScoreCalc,
        // avScore,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
