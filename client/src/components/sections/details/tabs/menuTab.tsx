"use client";

import React, { useState, useEffect, useContext } from "react";

import AutoPlay from "embla-carousel-autoplay";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import myAxios from "@/utils/myAxios";
import { MenuContext } from "@/context/MenuProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const MenuTab = () => {
  const categories = ["Dessert", "Drink", "Main Course", "Alcohol"];

  const { orgMenus } = useContext(MenuContext);
  const { menus } = useContext(MenuContext);

  const plugin = React.useRef(
    AutoPlay({ delay: 1500, stopOnInterraction: true })
  );
  return (
    <div>
      {!orgMenus ? (
        <div className="p-10">
          This restaurant has not posted any of their menus
        </div>
      ) : (
        categories.map((category, i) => (
          <div key={i} className="p-6">
            <div>
              <h1 className="font-bold text-[25px]">{category}</h1>
            </div>
            <div className="flex gap-10 p-10 ">
              <Carousel className="w-full  rounded-lg shadow-xl justify-around  flex ">
                <CarouselContent className=" flex  p-5 justify-start w-full gap-10 ">
                  {menus
                    .filter((menu) => menu.category == category)
                    .map((menu, i) => (
                      <div key={i} className="">
                        <div className="flex justify-center items-center gap-10">
                          <img
                            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/434336546_798251238377443_7522391854054539304_n.png?stp=dst-png_s403x403&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AhXjA-ilSWIAb5oikhT&_nc_oc=AdhlnuOKh5MhZIhINswmbcCDgiyoL6Q6PZZ_6MOd_52__m5RWnld9yLV6Jw13M4FYwfZnkCVHK7yEmkT9ImpvDXC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdWCfN9xSB9iCHG4DTsSC0W2u9qtwFP4Is7qJaIvU_CHZQ&oe=663EDEEA"
                            className="h-[260px] w-[260px] rounded-full "
                          />
                          <img
                            src={menu.image}
                            className="h-[180px] w-[180px] rounded-full  absolute"
                          />
                        </div>
                        <div className="flex justify-center gap-10">
                          <div className="">
                            <div className="text-center">
                              <p className="font-semibold text-[20px]">
                                {menu.price}₮{" "}
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-[18px] font-semibold">
                                {menu.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
