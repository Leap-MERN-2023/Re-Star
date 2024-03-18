import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaStar,
  FaClock,
  SlLike,
  SlDislike,
  BiSolidLike,
  BiSolidDislike,
} from "@/components/icons";
import { Button } from "@/components/ui/button";

const ReviewTab = () => {
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
              <p>Name of User</p>
              <p className="text-base text-gray-500">Count of reviews</p>
            </div>
          </div>
          <div className=" h-7 ">
            <Badge className="m-2 ">
              4.6
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
          <span className="text-gray-500">3 days ago</span>
        </div>
        <div className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsam repudiandae possimus quasi natus temporibus doloremque quae,
          pariatur nisi asperiores laboriosam illo blanditiis, est tenetur
          fugiat consequuntur voluptatem atque iusto.
        </div>
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
