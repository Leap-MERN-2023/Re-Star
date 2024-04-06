"use client";
import React from "react";
import CategoryList from "./categoryList";
import SearchPlace from "./searchPlace";
import SearchMap from "./searchMap";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Input } from "@/components/ui/input";

const Explore = () => {
  return (
    <div className="flex items-center gap-10 ">
      <CategoryList />
      <SearchPlace />
      <SearchMap />
    </div>
  );
};

export default Explore;
