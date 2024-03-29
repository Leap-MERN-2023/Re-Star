"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BiPhone } from "@/components/icons";
import { useRouter } from "next/navigation";
import { FaStar } from "@/components/icons";

import Checkbox from "@mui/material/Checkbox";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function RestaurantCard({ address, favorite, data }: any) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const router = useRouter();
  return (
    <div
      className=" flex justify-center items-center "
      onClick={() => router.push(`http://localhost:3000/details/${data._id}`)}
    >
      <Card className="">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          className="h-[200px] w-[380px] rounded-lg p-1"
        />
        <CardHeader>
          <div className="grid grid-cols-2">
            <CardTitle className="text-xl">{data?.name}</CardTitle>
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
          <div className="flex flex-cols-2 justify-between items-center gap-2">
            <div className="text-sm text-gray-400 ">
              Location: {data?.address}
            </div>
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
