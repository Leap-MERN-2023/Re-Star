import React from "react";
import { DetailPicture } from "@/components/sections/details/DetailPicture";
import DetailTab from "@/components/sections/details/tabs";
import DetailCard from "@/components/sections/details/Cards";

const Page = () => {
  // Print out the picture URLs with alt text

  return (
    <div className="  bg-[#fdf4ed] h-screen">
      <div className="mx:auto container">
        <DetailPicture />
      </div>
      <div className="mx:auto container">
        <DetailCard />
        <DetailTab />
      </div>
    </div>
  );
};

export default Page;
