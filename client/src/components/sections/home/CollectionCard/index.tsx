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
    <div className="mx:auto container bg-secondary">
      <div className="">
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
            <div className="p-4" key={i}>
              <p className="text-3xl  font-bold  text-[#605b6f] md:ml-[3%] uppercase py-2">
                {category.name}
              </p>
              <CategoryRow categoryId={category?._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
