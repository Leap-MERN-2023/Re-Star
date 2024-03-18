import React from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import {
  MdAssistantDirection,
  CiBookmarkRemove,
  FaShare,
  FaStar,
} from "@/components/icons";

import { Badge } from "@/components/ui/badge";

const MainInfo = () => {
  const categories = [
    " korean food",
    "original chickens",
    "tasty soups",
    "nice environment",
  ];
  return (
    <Card className="mt-4">
      <CardHeader className="text-3xl block w-full ">
        <CardTitle className=" flex justify-between items-center">
          <div>
            <h1 className="text-[#858484] font-bold text-3xl">
              Name of Restaurant
            </h1>
          </div>

          <div className="flex mr-11">
            <Badge className="mr-2">
              4.6
              <span className="m-2">
                <FaStar />
              </span>
            </Badge>
            <div>
              <p className="text-xs font-sans"> 3,110</p>
              <p className="text-xs">Dining reviews</p>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((name, i) => (
            <p
              key={i}
              className="rounded-full px-3  border-2 border-[#858484] inline-block p-1 font-medium"
            >
              {name}
            </p>
          ))}
        </div>
        <CardDescription className="text-xl mt-2 font-semibold">
          Where is this place
        </CardDescription>
        <p>
          <span className="text-[#6B6B6B] text-lg"> Open now :</span> 10 PM -
          1AM
        </p>
      </CardContent>
      <CardFooter className="flex  gap-3">
        <Button variant="outline">
          <MdAssistantDirection
            color="#858484"
            size={"25px"}
            style={{ margin: 6 }}
          />
          Direction
        </Button>
        <Button variant={"outline"}>
          <CiBookmarkRemove
            color="#858484"
            size={"25px"}
            style={{ margin: 4 }}
          />
          Save
        </Button>
        <Button variant={"outline"}>
          <FaShare color="#858484" size={"25px"} style={{ margin: 4 }} />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MainInfo;
