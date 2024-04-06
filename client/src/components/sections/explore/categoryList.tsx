import { Card } from "@/components/ui/card";
import { CategoryContext } from "@/context/CategoryProvider";
import React, { useContext } from "react";

const CategoryList = () => {
  return (
    <div className="h-[100vh] p-5">
      <Card className="rounded w-[280px]  h-[900px]  md:w-[180px]  md:h-[750px] sm:w-[120px] sm:h-[500]  3xs:w-[80] 3xs:h-[300]     shadow-lg text-secondary p-5  ">
        <h1 className="text-primary flex justify-center font-bold text-[30px]">
          Category List
        </h1>
      </Card>
    </div>
  );
};

export default CategoryList;
