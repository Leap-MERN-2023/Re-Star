import * as React from "react";

import { Card } from "@/components/ui/card";

const cards = [
  {
    name: "Coffee with friends",
    img: "https://i.pinimg.com/564x/fd/da/3a/fdda3a22f715f03d23f1824591c24b3f.jpg",
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

export function CollectionCard() {
  return (
    <div>
      <div>
        <h1 className="flex justify-center text-4xl text-[#9f9dba] font-extrabold">
          Collections
        </h1>
        <p className="flex justify-center items-center">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Mongolia, based on trends
        </p>
      </div>
      <div className="flex justify-center items-center gap-[30px]">
        {cards.map((card) => (
          <Card className="w-[450px] border-4 border-[#7c84b8] rounded-2xl justify-center items-center ">
            <img src={card.img} className="h-[300px] w-[450px] rounded-xl " />
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
