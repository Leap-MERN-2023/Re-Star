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
<<<<<<< HEAD
    <div className="flex">
      <Card className=" shadow md:w-96 bg-secondary">
=======
    <div className="flex flex-col">
      <Card className=" shadow md:w-96">
>>>>>>> 16b6e85 (responsive edit)
        <CardHeader>
          <CardTitle className=" flex  sm:flex-col lg:flex-row ">
            <div className="flex items-center gap-5 ">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  width={"100px"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p>{revData?.user}</p>
                <p className="text-base text-gray-500">Count of reviews</p>
              </div>
            </div>
            <div className="  ">
              <Badge className="m-1  ">
                {revData?.score}
                <span className="flex ">
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
    </div>
  );
};

export default ReviewTab;
