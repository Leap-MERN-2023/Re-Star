"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

import { CategoryContext } from "@/context/CategoryProvider";
import { CategoryRow } from "../Row";

export function CollectionCard() {
  const { categories } = React.useContext(CategoryContext);

  const router = useRouter();
  return (
    <div className="">
      <div className="p-4">
        <h1 className=" text-4xl  font-extrabold   p-2 rounded-md text-[#847c9b]">
          Collections
        </h1>
        <p className=" p-2 rounded-md text-[#545360] font-semibold">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Mongolia, based on trends
        </p>
      </div>
      <div className="flex justify-around items-start  flex-wrap gap-10 flex-col">
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
            <div className="" key={i}>
              <p className="text-4xl  font-extrabold rounded-md text-[#847c9b] text-left md:ml-[3%]">
                {category.name}
              </p>
              <div className="">
                <CategoryRow categoryId={category?._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
