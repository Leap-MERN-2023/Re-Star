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
import { Textarea } from "../ui/textarea";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export function ReviewModal() {
  const [value, setValue] = useState(3);
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
            Leave a review and comment at the place of service
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Review
            </Label>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue: any) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea className="w-64" placeholder="Type your comment here." />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add review</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
