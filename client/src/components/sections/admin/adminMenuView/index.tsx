"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ReviewTab from "../../details/tabs/reviewTab";
import { MenuTab } from "../../details/tabs/menuTab";
import PhotosTab from "../../details/tabs/photosTab";

export const AdminMenuView = () => {
  return (
    <Tabs defaultValue="reviews" className="w-full ">
      <TabsList className="grid w-full grid-cols-2 bg-[#858484] text-white">
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
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
      <TabsContent value="menu">
        <Card>
          <MenuTab />
        </Card>
      </TabsContent>
    </Tabs>
  );
};
