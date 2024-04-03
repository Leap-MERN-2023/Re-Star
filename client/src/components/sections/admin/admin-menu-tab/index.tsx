"use client";

import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MenuContext } from "@/context/MenuProvider";
import { Button } from "@/components/ui/button";
import { MdModeEdit } from "@/components/icons";
import { EditOrgMenu } from "../editOrg";
export const AdminMenuTab = () => {
  const { menus } = useContext(MenuContext);

  const categories = ["Dessert", "Drink", "Main Course", "Alcohol"];

  return (
    <div>
      {categories.map((category) => (
        <div className="p-6">
          <div>
            <h1 className="font-bold text-[25px]">{category}</h1>
          </div>
          <div className="flex gap-10 ">
            <Swiper
              className="mySwiper "
              modules={[Pagination, Autoplay, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {menus
                .filter((menu) => menu.category == category)
                .map((menu) => (
                  <SwiperSlide>
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
                      <div className="flex justify-center ">
                        <div className="">
                          <div className="text-center">
                            <p className="font-semibold  font-serif text-[20px]">
                              {menu.price}₮{" "}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-[20px] font-semibold  font-serif">
                              {menu.description}
                            </p>
                          </div>
                        </div>
                        <EditOrgMenu {...menu} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
};
