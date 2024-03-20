"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AccountTab from "./accountTab";
import ReviewTab from "./reviewTab";
import { MenuTab } from "./menuTab";
import PhotosTab from "./photosTab";

const DetailTab = () => {
  return (
    <Tabs defaultValue="reviews" className="w-full ">
      <TabsList className="grid w-full grid-cols-3 bg-[#858484] text-white">
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="menu">Menu</TabsTrigger>
      </TabsList>
      <TabsContent value="reviews">
        <Card>
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
            <ReviewTab />
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
