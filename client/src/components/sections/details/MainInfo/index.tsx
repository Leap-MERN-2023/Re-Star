import React, { useContext, useEffect, useState } from "react";
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
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { CategoryContext } from "@/context/CategoryProvider";

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
  const { categories } = useContext(CategoryContext);
  // console.log("CATS IN ID PAGE", categories);

  const cat = categories?.filter(
    (cat) => (cat._id as string) === (category as string)
  );
  console.log("cattttttt", cat);
  const averageScore = calculateAverage(scores);

  const router = useRouter();

  return (
    <Card className="mt-4">
      <CardHeader className="text-3xl block w-full ">
        <CardTitle className=" flex  flex-col justify-between items-center md:flex-row gap-2">
          <div>
            <h1 className="text-3xl font-bold ">{name}</h1>
          </div>
          <div className="flex flex-wrap text-lg ">
            <IoMdRestaurant size={30} className=" text-green-600" /> :
            {cat.length > 0 ? cat[0].name : "Loading"}
          </div>

          <div className="flex mr-11">
            <Badge className="mr-3 bg-green-600 text-white flex justify-center items-center h-[30px]">
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
            <GrMapLocation className="text-[#4ec154] font-bold" size={28} />
            <p className="text-primary">{address}</p>
          </CardDescription>
          <CardDescription className="text-xl mt-1 flex gap-3 ">
            <FiBell className="text-[#4ec154] font-bold" size={28} />
            <p className="text-primary">{description}</p>
          </CardDescription>
          <div className="flex gap-10 mt-3">
            <p className="text-lg text-[#329531] font-semibold">
              Open at: {openTime}
            </p>
            <p className="text-lg text-[#f33b3b] font-semibold">
              Close at: {closeTime}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap grid grid-cols-4 gap-3">
        <Button className="bg-secondary text-primary hover:bg-secondary hover:scale-105">
          <MdAssistantDirection
            size={"25px"}
            style={{ margin: 6 }}
            onClick={() => router.push("/explore")}
          />
          Direction
        </Button>
        <Button className="bg-secondary text-primary hover:bg-black hover:scale-105">
          <CiBookmarkRemove size={"25px"} style={{ margin: 4 }} />
          Save
        </Button>
        <Button className="bg-secondary text-primary hover:bg-secondary hover:scale-105">
          <ShareButton />
        </Button>
        <Button className="bg-secondary text-primary hover:bg-secondary hover:scale-105">
          <ReviewModal />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MainInfo;
