"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { FaStar } from "@/components/icons";

import Checkbox from "@mui/material/Checkbox";


export function FavoriteCard({ favorite }: any) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-200 w-[500px] h-[190px] m-10 hover:scale-105">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          className="h-[180px] w-[260px] border-white-200 rounded-lg p-2"
        />
          <CardHeader>
            <div className="">
            <CardTitle className="text-xl">Yuna</CardTitle>
              <Badge className="bg-green-500">
                4.8
                <span className="m-1">
                  <FaStar />
                </span>
              </Badge>
            </div>
            <Label className="text-sm text-gray-400">
              Seoul Gudamj, Ulaanbaatar
            </Label>
          </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center ">
            <div className="flex">
                <Checkbox
                    {...label}
                    icon={<FaRegHeart className="text-red-500 w-6 h-6 " />}
                    checkedIcon={<FaHeart className="text-red-500 w-6 h-6" />}
                  />
                  </div>
                </div>
        </CardContent>
      
    </div>
  );
}
export default FavoriteCard;
