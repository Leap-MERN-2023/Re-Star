"use client";
import { DetailPicture } from "@/components/sections/details/DetailPicture";
import DetailCard from "@/components/sections/details/MainInfo";
import DetailTab from "@/components/sections/details/tabs";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { ReviewContext } from "@/context/ReviewProvider";
import { useContext, useEffect } from "react";

export default function OrgByIdPage({ params }: { params: { id: string } }) {
  const { setOrgIdContext, orgById } = useContext(RestaurantContext);
  const { getReviewById, review, reviewsLoading } = useContext(ReviewContext);

  useEffect(() => {
    getReviewById(params.id);
  }, []);
  setOrgIdContext(params.id);

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
          _id={""}
        />
        {reviewsLoading && <div> I am loading</div>}
        {!reviewsLoading && <DetailTab reviews={review} />}
      </div>
    </div>
  );
}
