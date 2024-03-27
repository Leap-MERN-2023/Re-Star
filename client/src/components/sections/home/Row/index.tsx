import React from 'react'
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

const CategoryRow = () => {
    const router = useRouter()
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
        {
          name: "Clubs",
          img: "https://i.pinimg.com/474x/66/fe/b2/66feb2eb79915062c3365664239ae925.jpg",
        },
      ];
      
  return (
    <div className='flex gap-3'>
        {cards.map((card, i) => (
            <Card
            key={i}
            className="w-[350px] shadow-2xl rounded-2xl h-[350px]"
            onClick={() => {
              router.push("/details");
            }}
          >
            <img
              src={card.img}
              className="h-[200px] w-[350px] rounded-xl p-1"
            />
            <div className="p-4">
              <h1 className="font-bold text-gray-600 text-3xl items-center">{card.name}</h1>
              <p className="font-bold text-[#bcb3ca] text-2xl"></p>
            </div>
          </Card>))}
    </div>
  )
}

export default CategoryRow