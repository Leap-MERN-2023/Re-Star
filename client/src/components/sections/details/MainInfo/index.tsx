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
import ShareButton from "../../shareButton";

interface IProps extends IInfo {
  reviews?: any;
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
  _id,
}: IProps) => {
  console.log(reviews);

  const scores = reviews?.map((review: any) => review.score);
  const calculateAverage = (scores: number[]) => {
    if (scores.length === 0) return 0;
    const total = scores.reduce((acc: number, curr: number) => acc + curr, 0);
    return total / scores.length;
  };

  const averageScore = calculateAverage(scores);

  return (
    <Card className="mt-4">
      <CardHeader className="text-3xl block w-full ">
        <CardTitle className=" flex  flex-col justify-between items-center md:flex-row gap-2">
          <div>
            <h1 className="text-3xl font-bold ">{name}</h1>
          </div>
          <div className="flex flex-wrap text-lg ">
            <IoMdRestaurant size={30} className=" text-green-600" /> :{" "}
            {category}
          </div>

          <div className="flex mr-11">
            <Badge className="mr-3 bg-green-600 text-white flex justify-center items-center">
              {averageScore}
              <span className="m-1">
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
        <div className="">
          <CardDescription className="text-lg text-gray-400  flex gap-3 ">
            <GrMapLocation className="text-green-600" size={28} />
            <p className="text-primary">{address}</p>
          </CardDescription>
          <CardDescription className="text-xl mt-1 flex gap-3 ">
            <FiBell className="text-green-600" size={28} />
            <p className="text-primary">{description}</p>
          </CardDescription>
          <div className="flex gap-10 mt-3">
            <p className="text-lg text-[#329531] font-semibold">
              Open at: {openTime}
            </p>
            <p className="text-lg text-[#ef3737] font-semibold">
              Close at: {closeTime}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap grid grid-cols-4 gap-3">
        <Button variant="outline" className="bg-secondary">
          <MdAssistantDirection size={"25px"} style={{ margin: 6 }} />
          Direction
        </Button>
        <Button variant={"outline"} className="bg-secondary">
          <CiBookmarkRemove size={"25px"} style={{ margin: 4 }} />
          Save
        </Button>
        <Button variant={"outline"} className="bg-secondary">
          <ShareButton />
        </Button>
        <Button variant={"outline"} className="bg-secondary">
          <ReviewModal />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MainInfo;
