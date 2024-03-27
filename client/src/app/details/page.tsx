import React from "react";
import { DetailPicture } from "@/components/sections/details/DetailPicture";
import DetailTab from "@/components/sections/details/tabs";
import DetailCard from "@/components/sections/details/MainInfo";
import DetailSearch from "@/components/sections/details/DetailSearch";

const DetailsPage = () => {
  // Print out the picture URLs with alt text

  return (
    <div className="bg-[#fdf4ed] ">
      <div className="mx:auto container ">
        <DetailSearch />
        <DetailPicture />
      </div>
      <div className="mx:auto container">
        <DetailCard />
        <DetailTab />
      </div>
    </div>
  );
};

export default DetailsPage;
