import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaStar,
  FaClock,
  BiSolidLike,
  BiSolidDislike,
} from "@/components/icons";
import { Button } from "@/components/ui/button";

const ReviewTab = ({ revData }: any) => {
  return (
    <Card className=" border-[#858484] border-[3px]  md:w-96">
      <CardHeader>
        <CardTitle className=" flex justify-between ">
          <div className="flex items-center gap-5 ">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                width={"100px"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-lg ">
              <p>{revData?.user}</p>
              <p className="text-base text-gray-500">Count of reviews</p>
            </div>
          </div>
          <div className=" h-7 ">
            <Badge className="m-2 ">
              {revData?.score}
              <span className="">
                <FaStar />
              </span>
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <FaClock size={28} color="green" />
          <span className="mx-4">Dining :</span>
          <span className="text-gray-500">{revData?.createdAt}</span>
        </div>
        <div className="my-3">{revData?.message}</div>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Button variant="outline" className="bg-[#858484] text-white">
          <BiSolidLike className="h-5 w-5 mx-2" />
          Helpful
        </Button>
        <Button variant="outline" className="bg-[#858484] text-white">
          <BiSolidDislike className="h-5 w-5 mx-2" />
          Unhelpful
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReviewTab;
