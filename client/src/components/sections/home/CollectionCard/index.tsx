"use client";
import * as React from "react";
import Router, { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

const cards = [
  {
    name: "Coffee with friends",
    img: "https://i.pinimg.com/564x/fd/da/3a/fdda3a22f715f03d23f1824591c24b3f.jpg",
  },
  {
    name: "Restaurants ",
    img: "https://images.unsplash.com/photo-1710675567250-3d17ac149a20?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Party with friends",
    img: "https://images.unsplash.com/photo-1710675567250-3d17ac149a20?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function CollectionCard() {
  const router = useRouter();
  return (
    <div className="mx:auto container">
      <div className="p-2">
        <h1 className=" text-4xl  font-extrabold   p-2 rounded-md text-[#847c9b]">
          Collections
        </h1>
        <p className=" p-2 rounded-md text-[#545360] font-semibold">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Mongolia, based on trends
        </p>
      </div>
      <div className="flex justify-around items-center  flex-wrap">
        {cards.map((card) => (
          <Card
            className="w-[350px] shadow-2xl rounded-2xl h-[350px] "
            onClick={() => {
              router.push("/details");
            }}
          >
            <img src={card.img} className="h-[200px] w-[350px] rounded-xl " />
            <div className="p-4">
              <h1 className="font-bold text-[#847c9b] text-4xl">{card.name}</h1>
              <p className="font-bold text-[#bcb3ca] text-2xl">Description</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
