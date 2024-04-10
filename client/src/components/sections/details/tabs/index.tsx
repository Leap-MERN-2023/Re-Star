"use client";
import React, { PropsWithChildren } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MenuTab } from "./menuTab";
import PhotosTab from "./photosTab";
import ReviewTab from "./reviewTab";

const DetailTab = (props: { reviews?: any }) => {
  const { reviews } = props;

  return (
    <Tabs defaultValue="reviews" className="w-full ">
      <TabsList className="grid w-full grid-cols-3  shadow text-primary mt-3 bg-secondary">
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="menu">Menu</TabsTrigger>
      </TabsList>
      <TabsContent value="reviews">
        <Card>
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
            {reviews?.map((revData: any, index: any) => (
              <ReviewTab revData={revData} key={index} />
            ))}
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="photos">
        <Card>
          <PhotosTab />
        </Card>
      </TabsContent>
      <TabsContent value="menu">
        <Card>
          <MenuTab />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DetailTab;
