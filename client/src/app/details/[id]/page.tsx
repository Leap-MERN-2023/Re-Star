"use client";
import { DetailPicture } from "@/components/sections/details/DetailPicture";
import DetailCard from "@/components/sections/details/MainInfo";
import DetailTab from "@/components/sections/details/tabs";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { useContext } from "react";

export default function OrgByIdPage({ params }: { params: { id: string } }) {
  console.log("params in [id]", params);
  const { setOrgIdContext, orgById } = useContext(RestaurantContext);
  setOrgIdContext(params.id);
  console.log("orgById In Page", orgById);
  return (
    <div className="bg-[#fdf4ed] ">
      <div className="mx:auto container ">
        <DetailPicture images={orgById?.images} />
      </div>
      <div className="mx:auto container">
        <DetailCard
          name={orgById?.name}
          category={orgById?.category}
          openTime={orgById?.openTime}
          closeTime={orgById?.closeTime}
          address={orgById?.address}
          description={orgById?.description}
          phoneNumber={orgById?.phoneNumber}
        />
        <DetailTab />
      </div>
    </div>
  );
}
