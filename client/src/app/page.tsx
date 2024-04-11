"use client";

import { CollectionCard } from "@/components/sections/home/CollectionCard";
import Search from "@/components/sections/home/Search";

import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="bg-secondary  overflow-x-hidden ">
      <Search />
      <CollectionCard />
    </div>
  );
}
