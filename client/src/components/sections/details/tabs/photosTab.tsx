"use client";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const PhotosTab = (props: { images?: string[] }) => {
  const pictures = [
    "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
    "https://i.pinimg.com/736x/67/86/94/67869432930f288a4f31328f20793cc8.jpg",
  ];
  const { images = pictures } = props;
  return (
    <div>
      <CardHeader>
        <CardTitle>Photos</CardTitle>
      </CardHeader>
      <CardContent className=" rounded-md flex gap-1 flex-wrap">
        {images.map((picture: any, index: number) => (
          <img
            src={picture}
            alt="pic"
            width={"300px"}
            height={"200px"}
            style={{ borderRadius: "20px", padding: "10px" }}
            className="hover:"
          />
        ))}
      </CardContent>
    </div>
  );
};

export default PhotosTab;
