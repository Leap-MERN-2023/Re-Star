"use client";
import React from "react";
import CategoryList from "./categoryList";
import SearchPlace from "./searchPlace";
import SearchMap from "./searchMap";

const Explore = () => {
  return (
    <div className="flex gap-5">
      <div>
        <CategoryList />
      </div>
      <div className="cat flex-1 gap-10">
        <div>
          <SearchPlace />
        </div>
      </div>
      <div className="map flex-1 gap-10">
        <div>
          <SearchMap />
        </div>
      </div>
    </div>
  );
};

export default Explore;
