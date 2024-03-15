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
import { FaStar, FaClock, SlLike, SlDislike } from "@/components/icons";
import { Button } from "@/components/ui/button";

const ReviewCard = () => {
  return (
    <div>
      <Card className="w-96 bg-slate-200">
        <CardHeader className="flex justify-between w-96">
          <CardTitle className=" flex justify-between items-center">
            <div className="flex items-center gap-5">
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
            <div className="flex mr-11">
              <Badge className="mr-2">
                4.6{" "}
                <span className="m-2">
                  <FaStar />
                </span>{" "}
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <FaClock size={28} color="green" />
            <span className="mx-4">Dining :</span>{" "}
            <span className="text-gray-500">3 days ago</span>
          </div>
          <div className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ipsam repudiandae possimus quasi natus temporibus doloremque quae,
            pariatur nisi asperiores laboriosam illo blanditiis, est tenetur
            fugiat consequuntur voluptatem atque iusto.
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="lg">
            <SlLike className="h-4 w-4" />
            Helpful
          </Button>
          <Button variant="outline" size="lg">
            <SlDislike className="h-4 w-4" />
            Unhelpful
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReviewCard;
