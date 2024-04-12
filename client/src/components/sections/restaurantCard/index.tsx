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
    <div className=" flex justify-center items-center transform transition-all hover:scale-105 hover:cursor-pointer ">
      <Card className="w-[350px] flex-wrap">
        <img
          src={images?.at(1)}
          className="h-52 w-full rounded-2xl p-3 object-cover "
          onClick={() => {
            setOrgIdContext(_id);
            router.push(`https://re-star-front.vercel.app/details/${_id}`);
          }}
        />
        <CardHeader>
          <div className="grid grid-cols-2 items-center ">
            <CardTitle
              className="font-bold  text-xl w-[200px] line-clamp-2 h-[50px] flex items-center"
              onClick={() => {
                setOrgIdContext(_id);
                router.push(`https://re-star-front.vercel.app/details/${_id}`);
              }}
            >
              {name}
            </CardTitle>
            <div className="text-sm flex justify-end h-[30px] items-center">
              <Badge className="bg-green-500 hover:bg-green-700 text-white items-center justify-center py-2 ">
                {4.5}
                <FaStar className="text-xs" />
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-cols-2 justify-between items-center gap-2">
            <div className="text-sm  font-medium line-clamp-2 ">
              Location: {address}
            </div>
            <div className="flex justify-end ml-6">
              <Checkbox
                onClick={() => {
                  clickFavorite();
                }}
                className="z-10"
                {...label}
                icon={<FaRegHeart className="text-red-500 w-8 h-8 " />}
                checkedIcon={<FaHeart className="text-red-500 w-8 h-8" />}
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
