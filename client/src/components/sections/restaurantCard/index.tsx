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
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "@/context/FavoritesProvider";
import { RestaurantContext } from "@/context/RestaurantProvider";

interface IProps extends IOrg {
  favorite?: boolean;
}

export function RestaurantCard({ name, address, images, _id }: IProps) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { setOrgIdContext } = useContext(RestaurantContext);

  const router = useRouter();
  const { addFavorite, favorites, deleteFavorite } =
    useContext(FavoritesContext);
  const [isExist, setIsExist] = useState(false);

  console.log("favs in rescard", favorites);

  console.log("FAvvv", favorites);
  const fav = favorites?.filter((fav: any) => fav?._id == _id);

  useEffect(() => {
    if (fav?.length > 0) {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  }, [fav]);

  const clickFavorite = () => {
    if (fav?.length > 0) {
      deleteFavorite(_id);
    } else {
      addFavorite(_id);
    }
  };

  return (
    <div
      className=" flex justify-center items-center "
      onClick={() => router.push(`http://localhost:3000/details/${_id}`)}
    >
      <Card className="w-80">
        <img
          src={images?.at(1)}
          className="h-52 w-full rounded-lg p-1 object-cover"
        />
        <CardHeader>
          <div className="grid grid-cols-2">
            <CardTitle
              className="text-xl"
              onClick={() => {
                setOrgIdContext(_id);
                router.push(`http://localhost:3000/details/${_id}`);
              }}
            >
              {name}
            </CardTitle>
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
                onClick={() => {
                  clickFavorite();
                }}
                {...label}
                icon={<FaRegHeart className="text-red-500 w-10 h-10 " />}
                checkedIcon={<FaHeart className="text-red-500 w-10 h-10" />}
                checked={isExist}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default RestaurantCard;
