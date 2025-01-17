import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CategoryContext } from "@/context/CategoryProvider";
import React, { useContext, useState } from "react";

const CategoryList = ({ mappedOrgByCategory, allOrg, ClearCategory }: any) => {
  const { categories } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="h-[100vh] p-5">
      <Card className="rounded  w-[480px]   md:w-[300px] sm:w-[120px] sm:h-[500]  3xs:w-[80] 3xs:h-[300]     shadow-lg text-secondary p-5  ">
        <h1 className="text-primary flex justify-center font-bold text-[30px]">
          Category List
        </h1>
        <div className="flex flex-col text-black gap-4 mt-5">
          <Button onClick={allOrg}>All</Button>
          {categories.map((category, i) => (
            <Button
              key={i}
              className=""
              onClick={() => mappedOrgByCategory(category?._id)}
            >
              <div>{category.name}</div>
            </Button>
          ))}
          <Button onClick={ClearCategory}>Clear</Button>
        </div>
      </Card>
    </div>
  );
};

export default CategoryList;
