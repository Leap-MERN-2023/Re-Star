import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SearchMap = () => {
  return (
    <div className="shadow-xl rounded">
      <div>
        <Input type="email" placeholder="Email" />
      </div>
      <div className="flex flex-col space-y-3 p-20">
        <div className="space-y-2"></div>
      </div>
    </div>
  );
};

export default SearchMap;
