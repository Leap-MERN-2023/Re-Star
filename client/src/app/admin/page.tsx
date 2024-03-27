"use client";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { UserContext } from "@/context/UserProvider";
import React, { useContext, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  const { getRestaurantById } = useContext(RestaurantContext);
  useEffect(() => {
    getRestaurantById();
  }, []);
  return (
    <div className="container mx-auto ">
      <div>
        <h1 className="text-3xl p-3 text-bold text-center">Admin Page</h1>
      </div>
      <div>
        <Tabs defaultValue="admin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="admin">Admin Page</TabsTrigger>
            <TabsTrigger value="delete">Delete Restaurant</TabsTrigger>
          </TabsList>
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Your Restaurant</CardTitle>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="delete" className="flex justify-center">
            <Card className="lg:w-1/3 w-full">
              <CardHeader>
                <CardTitle className="text-center">
                  Delete Your Own Restaurant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>
                    Once you delete you restaurant, you can't undo this action.
                    All the information about your restaurant will be dleted
                    immediatelly
                  </p>
                </div>
              </CardContent>
              <CardFooter className="w-full">
                <Button className="w-full">Delete Restaurant</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
