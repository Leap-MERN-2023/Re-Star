"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "@/components/icons";

import Checkbox from "@mui/material/Checkbox";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { IOrg } from "@/interface";

interface IProps extends IOrg {
  favoite?: any;
}

export function RestaurantCard({ name, address, images }: IProps) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className=" flex justify-center items-center ">
      <Card className="w-72 h-80">
        <img src={images.at(1)} className="h-1/2 w-full rounded-lg p-1" />
        <CardHeader>
          <div className="grid grid-cols-2">
            <CardTitle className="text-xl">{name}</CardTitle>
            <div className="text-sm flex justify-end">
              <Badge className="bg-green-500">
                4.8
                <span className="m-1">
                  <FaStar />
                </span>
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-cols-2 justify-center items-center gap-2">
            <Label className="text-sm text-gray-400">{address}</Label>
            <Label className="text-sm text-green-500 ">$$$</Label>
            <div className="flex justify-end ml-6">
              <Checkbox
                {...label}
                icon={<FaRegHeart className="text-red-500 w-6 h-6 " />}
                checkedIcon={<FaHeart className="text-red-500 w-6 h-6" />}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default RestaurantCard;
