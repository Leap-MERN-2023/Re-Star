"use client";
import * as React from "react";
import Router, { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CategoryContext } from "@/context/CategoryProvider";
import CategoryRow from "../Row";



export function CollectionCard() {
  const { categories } = React.useContext(CategoryContext);
  const router = useRouter();
  return (
    <div className="mx:auto container">
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
        {categories.map((category, i) => (
          <div className="">
            <p className="text-4xl  font-extrabold   p-2 rounded-md text-[#847c9b]">{category.name}</p>
          <CategoryRow />
          </div>
        ))}
      </div>
    </div>
  );
}
