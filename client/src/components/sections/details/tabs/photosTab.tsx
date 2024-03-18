"use client";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const PhotosTab = () => {
  const arr = [
    "https://b.zmtcdn.com/data/pictures/chains/1/931/c9325c676c7b9c23e1e71c765a129d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/c9325c676c7b9c23e1e71c765a129d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/c9325c676c7b9c23e1e71c765a129d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  ];
  return (
    <div>
      <CardHeader>
        <CardTitle>Photos</CardTitle>
      </CardHeader>
      <CardContent className=" rounded-md flex gap-1 flex-wrap">
        {arr.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="pic"
            width={"300px"}
            height={"300px"}
            style={{ borderRadius: "20px", padding: "10px" }}
            className="hover:"
          />
        ))}
      </CardContent>
    </div>
  );
};

export default PhotosTab;
