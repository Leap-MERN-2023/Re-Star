import React from "react";
import { DetailPicture } from "@/components/sections/details/DetailPicture";
import DetailTab from "@/components/sections/details/tabs";
import DetailCard from "@/components/sections/details/MainInfo";

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
  _id,
}: IOrg) => {
  return (
    <div className="bg-secondary ">
      <div className="mx:auto container  ">
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
          _id={_id}
        />
        <DetailTab />
      </div>
    </div>
  );
};

export default DetailsPage;
