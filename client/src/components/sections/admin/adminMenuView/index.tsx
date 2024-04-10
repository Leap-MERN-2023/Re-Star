"use client";

import React, { useContext, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { MenuContext } from "@/context/MenuProvider";

import ReviewTab from "../../details/tabs/reviewTab";
import { AdminMenuTab } from "../admin-menu-tab";

export const AdminMenuView = ({ name, _id }: any) => {
  const { getMenuByOrgId, menus } = useContext(MenuContext);

  useEffect(() => {
    if (_id) {
      getMenuByOrgId(_id);
    }
  }, [_id]);

  return (
    <Tabs defaultValue="reviews" className="w-full mt-3">
      <TabsList className="grid w-full grid-cols-2 bg-secondary text-white">
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
          <AdminMenuTab orgId={_id} />
        </Card>
      </TabsContent>
    </Tabs>
  );
};
