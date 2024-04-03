import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import {
  MdAssistantDirection,
  CiBookmarkRemove,
  FaShare,
  FaStar,
} from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { ReviewModal } from "@/components/sections/admin/review-modal";
import { IInfo } from "@/interface";
import { MenuModal } from "@/components/sections/admin/menu-modal";
import { IoMdRestaurant, GrMapLocation, FiBell } from "@/components/icons";
import { intersection } from "zod";

interface IProps extends IInfo {
  reviews: any;
}

const MainInfo = ({
  name,
  category,
  openTime,
  closeTime,
  address,
  description,
  phoneNumber,
  reviews,
}: IProps) => {
  console.log(reviews);

  const scores = reviews.map((review: any) => review.score);
  const calculateAverage = (scores: number[]) => {
    if (scores.length === 0) return 0;
    const total = scores.reduce((acc: number, curr: number) => acc + curr, 0);
    return total / scores.length;
  };

  const averageScore = calculateAverage(scores);

  return (
    <Card className="mt-4">
      <CardHeader className="text-3xl block w-full ">
        <CardTitle className=" flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold ">{name}</h1>
          </div>
          <div className="flex flex-wrap text-lg text-gray-500">
            {" "}
            <IoMdRestaurant size={30} color="green" /> : {category}
          </div>

          <div className="flex mr-11">
            <Badge className="mr-2  bg-green-600">
              {averageScore}
              <span className="m-2">
                <FaStar />
              </span>
            </Badge>
            <div>
              <p className="text-xs font-sans"> 3,110</p>
              <p className="text-xs">Dining reviews</p>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <CardDescription className="text-lg mt-2 text-black font-semibold">
          <GrMapLocation color="green" size={28} /> {address}
        </CardDescription>
        <CardDescription className="text-xl mt-2 text-purple-500 font-semibold">
          About my place : {description}
        </CardDescription>
        <div className="flex gap-10">
          <p className="text-lg text-[#329531] font-medium">
            Open at: {openTime}{" "}
          </p>
          <p className="text-lg text-[#a03636] font-medium">
            Close at: {closeTime}
          </p>
        </div> */}
        <div className="">
          <CardDescription className="text-lg text-gray-400  flex gap-3 font-serif">
            <GrMapLocation color="green" size={28} /> {address}
          </CardDescription>
          <CardDescription className="text-xl mt-1 flex gap-3 font-serif">
            <FiBell color="green" size={28} /> {description}
          </CardDescription>
          <div className="flex gap-10 mt-3">
            <p className="text-lg text-[#329531] font-medium">
              Open at: {openTime}{" "}
            </p>
            <p className="text-lg text-[#a03636] font-medium">
              Close at: {closeTime}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap grid grid-cols-4 gap-3">
        <Button variant="outline">
          <MdAssistantDirection
            color="#858484"
            size={"25px"}
            style={{ margin: 6 }}
          />
          Direction
        </Button>
        <Button variant={"outline"}>
          <CiBookmarkRemove
            color="#858484"
            size={"25px"}
            style={{ margin: 4 }}
          />
          Save
        </Button>
        <Button variant={"outline"}>
          <FaShare color="#858484" size={"25px"} style={{ margin: 4 }} />
          Share
        </Button>
        <ReviewModal />
      </CardFooter>
    </Card>
  );
};

export default MainInfo;
