"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

import { CategoryContext } from "@/context/CategoryProvider";
import { CategoryRow } from "../Row";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export function CollectionCard() {
  const { categories } = React.useContext(CategoryContext);

  return (
    <div className="bg-secondary  md:auto container">
      {/* <div className="flex justify-center items-start  "> */}
      {!categories && (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}

      <div className="">
        {categories.map((category, i) => (
          <div className="p-4 " key={i}>
            <p className="text-3xl  font-bold  text-primary md:ml-[3%] uppercase py-2">
              {category.name}
            </p>

            <CategoryRow categoryId={category?._id} />
          </div>
        ))}
      </div>

      {/* </div> */}
    </div>
  );
}
