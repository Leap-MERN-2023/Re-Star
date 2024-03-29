"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BiPhone } from "@/components/icons";
import { useRouter } from "next/navigation";
import { FaStar } from "@/components/icons";

import Checkbox from "@mui/material/Checkbox";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IOrg } from "@/interface";

interface IProps extends IOrg {
  favorite?: any;
}

export function RestaurantCard({ name, address, images, _id }: IProps) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const router = useRouter();
  return (
    <div
      className=" flex justify-center items-center "
      onClick={() => router.push(`http://localhost:3000/details/${_id}`)}
    >
      <Card className="">
        <img
          src={images?.at(1)}
          className="h-[200px] w-[380px] rounded-lg p-1"
        />
        <CardHeader>
          <div className="grid grid-cols-2">
            <CardTitle className="text-xl">{name}</CardTitle>
            <div className="text-sm flex justify-end">
              <Badge className="bg-green-500 hover:bg-green-700">
                4.8
                <span className="m-1">
                  <FaStar />
                </span>
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-cols-2 justify-between items-center gap-2">
            <div className="text-sm text-gray-400 ">Location: {address}</div>
            <div className="flex justify-end ml-6">
              <Checkbox
                {...label}
                icon={<FaRegHeart className="text-red-500 w-10 h-10 " />}
                checkedIcon={<FaHeart className="text-red-500 w-10 h-10" />}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default RestaurantCard;
