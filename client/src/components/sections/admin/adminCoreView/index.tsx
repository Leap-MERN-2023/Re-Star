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
            <div className="flex flex-wrap text-lg text-gray-500">
              {" "}
              <IoMdRestaurant size={30} color="green" /> : {category.name}
            </div>

            <div className="flex mr-11 ">
              <Badge className="mr-2 bg-green-500">
                4.6
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
        <CardContent className="mt-0">
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
          <div></div>
        </CardContent>
        <CardFooter className="flex-wrap  gap-3  grid grid-cols-4">
          <AddPhotos id={_id} />

          <Button variant={"outline"}>
            <FaShare color="#858484" size={"25px"} style={{ margin: 4 }} />
            Share
          </Button>
          <MenuModal />
          <EditOrganization />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminCoreView;
