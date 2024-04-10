"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FaStar } from "react-icons/fa";
import { Textarea } from "../../../ui/textarea";
import Rating from "@mui/material/Rating";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ReviewContext } from "@/context/ReviewProvider";
import { DialogClose } from "@radix-ui/react-dialog";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { BiEdit } from "react-icons/bi";

interface IReviewModal {
  revData?: any;
  orgId?: string;
}

export function ReviewModal({ revData }: IReviewModal) {
  const [score, setScore] = useState(null);
  const [editedScore, setEditedScore] = useState(revData?.score);
  const [message, setMessage] = useState("");
  const handleChange = (e: any) => setMessage(e.target.value);
  const { addReview, isOpen, editReview } = useContext(ReviewContext);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (score === null) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [score]);

  const { orgById } = useContext(RestaurantContext);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {!revData ? (
          <Button className=" bg-secondary hover:bg-secondary text-primary">
            <FaStar size={"25px"} style={{ margin: 4 }} />
            Add Review
          </Button>
        ) : (
          <Button
            variant="outline"
            className=" bg-secondary hover:bg-secondary text-primary"
          >
            <BiEdit className="h-5 w-5 mx-2" />
            Edit Review
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> {!revData ? " Add Review" : "Edit review"}</DialogTitle>
          <DialogDescription>
            {!revData
              ? " Leave a review and message at the place of service"
              : "Edit your old review"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Score
            </Label>
            <Rating
              name="simple-controlled"
              value={!revData ? score : editedScore}
              id="score"
              className="text-secondary"
              onChange={(event, newValue: any) => {
                !revData ? setScore(newValue) : setEditedScore(newValue);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4 ">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea
              id="message"
              className="w-64 placeholder:text-primary bg-secondary"
              placeholder={
                !revData ? "Type your comment here." : revData?.message
              }
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={!revData ? isDisabled : false}
              type="submit"
              onClick={() =>
                !revData
                  ? addReview(score, message, orgById._id)
                  : editReview(editedScore, message, revData._id, orgById._id)
              }
              className="bg-secondary text-primary"
            >
              Add review
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
