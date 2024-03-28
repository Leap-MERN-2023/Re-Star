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
  console.log("orgByIdIn Page", orgById);
  return (
    <div className="bg-[#fdf4ed] ">
      <div className="mx:auto container ">
        <DetailPicture images={orgById[0]?.images} />
      </div>
      <div className="mx:auto container">
        <DetailCard
          name={orgById[0]?.name}
          category={orgById[0]?.category}
          openTime={orgById[0]?.openTime}
          closeTime={orgById[0]?.closeTime}
          address={orgById[0]?.address}
          description={orgById[0]?.description}
          phoneNumber={orgById[0]?.phoneNumber}
        />
        <DetailTab />
      </div>
    </div>
  );
}
