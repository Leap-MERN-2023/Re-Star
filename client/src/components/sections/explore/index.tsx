"use client";

import React, { useContext, useEffect, useState } from "react";
import CategoryList from "./categoryList";
import myAxios from "@/utils/myAxios";

import SearchMap from "./searchMap";
import { RestaurantContext } from "@/context/RestaurantProvider";

const Explore = () => {
  const [mapOrgs, setMapOrgs] = useState<any>([]);

  const { approvedOrgs } = useContext(RestaurantContext);

  const mappedOrgByName = (name: string) => {
    const NameFilteredOrg = approvedOrgs.filter((res) =>
      res.name.toLowerCase().includes(name!.toLowerCase())
    );

    setMapOrgs(NameFilteredOrg);
  };

  const mappedOrgByCategory = (category: string) => {
    const NameFilteredOrg = approvedOrgs.filter(
      (res) => res.category === category
    );

    setMapOrgs(NameFilteredOrg);
  };
  const allOrg = () => {
    setMapOrgs(approvedOrgs);
  };

  return (
    <div className="flex items-center gap-10">
      <div className="flex mt-[100px]">
        <CategoryList
          mappedOrgByCategory={mappedOrgByCategory}
          allOrg={allOrg}
        />
        <SearchMap
          mappedOrgByName={mappedOrgByName}
          mapOrgs={mapOrgs == false ? approvedOrgs : mapOrgs}
        />
      </div>
    </div>
  );
};

export default Explore;
