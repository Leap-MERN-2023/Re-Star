"use client";
import React, { useContext, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ReviewTab from "../../details/tabs/reviewTab";
import { MenuTab } from "../../details/tabs/menuTab";
import PhotosTab from "../../details/tabs/photosTab";
import { MenuContext } from "@/context/MenuProvider";

export const AdminMenuView = ({ name, _id }: any) => {
  const { getMenuByOrgId, menus } = useContext(MenuContext);

  useEffect(() => {
    console.log("_id", _id);
    if (_id) {
      getMenuByOrgId(_id);
    }
  }, [_id]);
  console.log("menus12", menus);
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
