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
  const plugin = React.useRef(
    AutoPlay({ delay: 1500, stopOnInterraction: true })
  );
  return (
    <div>
      {!orgMenus ? (
        <div className="p-10">
          "This restaurant has not posted any of their menus"
        </div>
      ) : (
        categories.map((category) => (
          <Carousel
            plugins={[plugin.current]}
            className="w-full p-3 rounded-lg shadow-xl  "
          >
            <CarouselContent className="-ml-1 ">
              {orgMenus
                .filter((menu) => menu.category == category)
                .map((menu) => (
                  <CarouselItem className="pl-1  sm:basis-1 md:basis-1/2 lg:basis-1/3 ">
                    <div>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/431496684_425982866675811_4402109109499232244_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0F7bIciPPQkAX_w1lcc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSlH3Z9JXLA-JVGNGMyYG-kL2numnrFBaCst_Aq3zN5gA&oe=661F5419"
                          className="h-[260px] w-[260px] rounded-full "
                        />
                        <img
                          src={menu.image}
                          className="h-[200px] w-[200px] rounded-full  absolute"
                        />
                      </div>
                      <div className="flex justify-center">
                        <p className="font-bold text-[20px]">{menu.price}</p>
                      </div>
                      <div className="flex justify-center">
                        <p className="font-bold text-[20px]">
                          {menu.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ))
      )}
    </div>
  );
};
