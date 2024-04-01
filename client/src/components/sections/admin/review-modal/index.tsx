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
import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "@/context/ReviewProvider";
import { DialogClose } from "@radix-ui/react-dialog";
import { RestaurantContext } from "@/context/RestaurantProvider";

export function ReviewModal() {
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState("");
  const handleChange = (e: any) => setMessage(e.target.value);
  const { addReview, isOpen } = useContext(ReviewContext);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (score === null) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [score]);
  console.log("message", message);
  const { orgById } = useContext(RestaurantContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <FaStar color="#858484" size={"25px"} style={{ margin: 4 }} />
          Add Review
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add review</DialogTitle>
          <DialogDescription>
            Leave a review and message at the place of service
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Score
            </Label>
            <Rating
              name="simple-controlled"
              value={score}
              id="score"
              onChange={(event, newValue: any) => {
                setScore(newValue);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea
              id="message"
              className="w-64"
              placeholder="Type your comment here."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={isDisabled}
              type="submit"
              onClick={() => addReview(score, message, orgById)}
            >
              Add review
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
