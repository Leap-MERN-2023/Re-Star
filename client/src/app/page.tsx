"use client";

import { CollectionCard } from "@/components/sections/home/CollectionCard";
import Search from "@/components/sections/home/Search";

export default function Home() {
  return (
    <div className="bg-[#fdf4ed] w-screen overflow-y-hidden ">
      <Search />
      {/* <CategoryCard /> */}
      <CollectionCard />
    </div>
  );
}
