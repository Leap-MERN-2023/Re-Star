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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={4}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-screen  container mySwiper "
      spaceBetween={20}
    >
      <div className="">
        {!org && <Skeleton />}
        {org
          .filter((e) => {
            return e.category === categoryId;
          })
          .map((org, i) => {
            return (
              <div key={i}>
                <SwiperSlide className="">
                  <RestaurantCard {...org} />
                </SwiperSlide>
              </div>
            );
          })}
      </div>
    </Swiper>
  );
};
