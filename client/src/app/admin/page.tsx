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
import DetailsPage from "../details/page";
import { EditOrganization } from "@/components";

const Page = () => {
  const { getRestaurantById, userOrgs, deleteRestaurantById } =
    useContext(RestaurantContext);

  useEffect(() => {
    getRestaurantById();
  }, []);

  return (
    <div className="container mx-auto ">
      <div className="flex">
        <h1 className="text-3xl p-3 text-bold text-center flex-1">
          Admin Page{" "}
        </h1>
        <div className="flex-1 ">
          <EditOrganization />
        </div>
      </div>
      <div>
        {userOrgs.length === 0 ? (
          "Empty"
        ) : (
          <Tabs defaultValue={userOrgs[0]?.name} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              {userOrgs.map((org) => (
                <TabsTrigger value={org.name}>Admin Page</TabsTrigger>
              ))}

              <TabsTrigger value="delete">Delete Restaurant</TabsTrigger>
            </TabsList>
            {userOrgs.map((org) => (
              <TabsContent value={org.name}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      Your Restaurant
                    </CardTitle>
                  </CardHeader>

                  <DetailsPage {...org} />
                </Card>
              </TabsContent>
            ))}
            <TabsContent value="delete" className="flex justify-center">
              {userOrgs.length === 0
                ? ""
                : userOrgs.map((org) => (
                    <Card className="lg:w-1/3 w-full">
                      <CardHeader>
                        <CardTitle className="text-center">
                          Delete {org.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <p>
                            Once you delete you restaurant, you can't undo this
                            action. All the information about your restaurant
                            will be dleted immediatelly
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="w-full">
                        <Button
                          className="w-full"
                          onClick={() => deleteRestaurantById(org._id)}
                        >
                          Delete Restaurant
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Page;
