import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SearchPlace = () => {
  return (
    <div className="">
      <div>
        <Input
          type="search"
          placeholder="Search for restaurant, cuisine or dish"
          className=" w-full h-[60px] text-[20px] "
        />
      </div>

      <div className="space-y-2  h-[100vh] w-full rounded-lg flex shadow mt-10">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchPlace;
