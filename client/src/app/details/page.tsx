import React from "react";
import { DetailPicture } from "@/components/sections/details/DetailPicture";
import DetailTab from "@/components/sections/details/tabs";
import DetailCard from "@/components/sections/details/MainInfo";
import DetailSearch from "@/components/sections/details/DetailSearch";
import { IOrg } from "@/interface";

const DetailsPage = ({
  name,
  category,
  openTime,
  closeTime,
  address,
  description,
  phoneNumber,
  images,
}: IOrg) => {
  // Print out the picture URLs with alt text

  return (
    <div className="bg-[#fdf4ed] ">
      <div className="mx:auto container ">
        <DetailPicture images={images} />
      </div>
      <div className="mx:auto container">
        <DetailCard
          name={name}
          category={category}
          openTime={openTime}
          closeTime={closeTime}
          address={address}
          description={description}
          phoneNumber={phoneNumber}
        />
        <DetailTab />
      </div>
    </div>
  );
};

export default DetailsPage;
