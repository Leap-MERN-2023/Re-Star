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
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CategoryRow = ({ categoryId }: { categoryId: string }) => {
  const router = useRouter();
  const { org } = useContext(RestaurantContext);

  const cards = [
    {
      name: "Coffee with friends",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Restaurants ",
      img: "https://i.pinimg.com/474x/89/2f/90/892f9019e20cb88637f4cbdb3c757bf4.jpg",
    },
    {
      name: "Party with friends",
      img: "https://i.pinimg.com/474x/66/fe/b2/66feb2eb79915062c3365664239ae925.jpg",
    },
    {
      name: "Clubs",
      img: "https://i.pinimg.com/474x/66/fe/b2/66feb2eb79915062c3365664239ae925.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-screen h-96"
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
