import React, { useContext } from "react";

import { useRouter } from "next/navigation";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { Skeleton } from "@/components/ui/skeleton";
import RestaurantCard from "../../restaurantCard";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CategoryRow = ({ categoryId }: { categoryId: string }) => {
  const router = useRouter();
  const { org } = useContext(RestaurantContext);

  return (
    <div className="flex gap-10  ">
      {!org && <Skeleton />}
      {org
        .filter((e) => {
          return e.category === categoryId;
        })
        .map((org, i) => {
          return (
            <div key={i} className="">
              <RestaurantCard {...org} />
            </div>
          );
        })}
    </div>
  );
};
