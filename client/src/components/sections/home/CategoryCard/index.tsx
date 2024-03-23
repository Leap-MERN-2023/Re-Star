"use client";

import * as React from "react";
import Router, { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

const cards = [
  {
    name: "Coffee with friends",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Restaurants ",
    img: "https://i.pinimg.com/474x/89/2f/90/892f9019e20cb88637f4cbdb3c757bf4.jpg",
  },
  {
    name: "Party with friends",
    img: "https://i.pinimg.com/474x/66/fe/b2/66feb2eb79915062c3365664239ae925.jpg",
  },
];

export function CategoryCard() {
  const router = useRouter();
  return (
    <div className="mx:auto container">
      <div className="flex justify-around items-center  flex-wrap gap-10">
        {cards.map((card, i) => (
          <Card
            key={i}
            className="w-[350px] shadow-2xl rounded-2xl h-[350px] "
            onClick={() => {
              router.push("/details");
            }}
          >
            <img
              src={card.img}
              className="h-[200px] w-[350px] rounded-xl p-2"
            />
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
