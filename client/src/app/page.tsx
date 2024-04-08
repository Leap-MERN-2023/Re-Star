"use client";

import { CollectionCard } from "@/components/sections/home/CollectionCard";
import Search from "@/components/sections/home/Search";

export default function Home() {
  return (
    <div className="bg-secondary w-screen overflow-x-hidden ">
      <Search />
      <CollectionCard />
    </div>
  );
}
