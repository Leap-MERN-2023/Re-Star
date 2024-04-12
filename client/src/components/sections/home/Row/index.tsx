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
  const { approvedOrgs } = useContext(RestaurantContext);

  return (
    <Swiper
      // spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <div className="flex justify-start ">
        {!approvedOrgs && <Skeleton />}

        {approvedOrgs
          .filter((e) => {
            return e.category === categoryId;
          })
          .map((org, i) => {
            return (
              <div key={i} className="">
                <SwiperSlide>
                  <RestaurantCard {...org} />
                </SwiperSlide>
              </div>
            );
          })}
      </div>
    </Swiper>
  );
};
