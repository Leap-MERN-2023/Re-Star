import React from "react";

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
  FiBell,
  FaShare,
  FaStar,
  GrMapLocation,
  IoMdRestaurant,
} from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { ReviewModal } from "@/components/sections/admin/review-modal";
import { IInfo } from "@/interface";
import { MenuModal } from "@/components/sections/admin/menu-modal";
import { EditOrganization } from "../../editRestaurant";
import { AddPhotos } from "../AddPhotos";

const AdminCoreView = ({
  _id,
  name,
  category,
  openTime,
  closeTime,
  address,
  description,
  phoneNumber,
}: IInfo) => {
  const categories = [
    " korean food",
    "original chickens",
    "tasty soups",
    "nice environment",
  ];

  return (
    <div className="">
      <Card className="mt-4">
        <CardHeader className="text-3xl block w-full">
          <CardTitle className=" flex justify-between items-center">
            <div>
              <h1 className=" font-bold text-5xl">{name}</h1>
            </div>
            <div className="flex flex-wrap text-lg ">
              {" "}
              <IoMdRestaurant size={30} /> : {category?.name}
            </div>

            <div className="flex  ">
              <Badge className="mr-2 bg-green-500 text-white h-[30px]">
                4.6
                <span className="">
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
        <CardContent className="mt-0">
          <div className="">
            <CardDescription className="text-lg text-gray-400  flex gap-3 text-primary">
              <GrMapLocation size={28} className="text-[#3dbe3b] " /> {address}
            </CardDescription>
            <CardDescription className="text-xl mt-1 flex gap-3 text-primary">
              <FiBell className="text-[#37c535] " size={28} /> {description}
            </CardDescription>
            <div className="flex gap-10 mt-3">
              <p className="text-lg text-[#37c535] font-medium">
                Open at: {openTime}{" "}
              </p>
              <p className="text-lg text-[#e03c3c] font-medium">
                Close at: {closeTime}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-wrap  gap-3  grid grid-cols-3">
          <AddPhotos id={_id} />
          <MenuModal id={_id} />
          <EditOrganization id={_id} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminCoreView;
