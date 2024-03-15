import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ReviewCard from "../Review";

const DetailTab = () => {
  const arr = [
    "https://b.zmtcdn.com/data/pictures/chains/1/931/c9325c676c7b9c23e1e71c765a129d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/c9325c676c7b9c23e1e71c765a129d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/c9325c676c7b9c23e1e71c765a129d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/1/931/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  ];
  return (
    <Tabs defaultValue="overview" className="w-full ]">
      <TabsList className="grid w-full grid-cols-4 bg-[#858484]">
        <TabsTrigger value="overview">Account</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="menu">Menu</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>overview</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reviews">
        <Card>
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
          </CardHeader>
          <ReviewCard />
        </Card>
      </TabsContent>
      <TabsContent value="photos">
        <Card>
          <CardHeader>
            <CardTitle>Photos</CardTitle>
          </CardHeader>
          <CardContent className=" rounded-md flex gap-1 flex-wrap">
            {arr.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="pic"
                width={"210px"}
                height={"210px"}
                style={{ borderRadius: "10px" }}
              />
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="menu">
        <Card>
          <CardHeader>
            <CardTitle>Menu</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-1">
            {arr.map((img, i) => (
              <Card className="w-72">
                <img
                  src={img}
                  alt="pic"
                  width={"288px"}
                  height={"210px"}
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />

                <CardContent>
                  {" "}
                  <p className="text-xl font-semibold mt-2 ">5 in 1 meal box</p>
                  <p className="flex-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="font-semibold text-lg text-green-400">
                    Price : 22.000₮
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DetailTab;
