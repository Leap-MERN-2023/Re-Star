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

export const ReviewContext = createContext<IReviewContext>(
  {} as IReviewContext
);

const ReviewProvider = ({ children }: PropsWithChildren) => {
  const [review, setReview] = useState<IReview>({
    score: 0,
    message: "",
    user: "",
    organization: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const addReview = async (score: number | null, message: string) => {
    try {
      const userId = "65fa7ae08e9bd3ea7ad022dd";
      const orgId = "65fa955f1694bfcff98611d3";
      const data = await myAxios.post("/review", {
        organization: orgId,
        user: userId,
        score,
        message,
      });
      setIsOpen(!isOpen);
      toast("Shine review amjilltai uuslee");
    } catch (error) {
      toast.error("Алдаа");
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        review,
        isOpen,
        addReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
