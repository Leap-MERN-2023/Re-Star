import React from "react";
import Pictures from "@/components/sections/details/Pictures";
import DetailTab from "@/components/sections/details/tabs";
import DetailCard from "@/components/sections/details/Cards";

const Page = () => {
  // Print out the picture URLs with alt text

  return (
    <div className="mx-auto container">
      <Pictures />
      <div>
        <DetailCard />
        <DetailTab />
      </div>
    </div>
  );
};

export default Page;
