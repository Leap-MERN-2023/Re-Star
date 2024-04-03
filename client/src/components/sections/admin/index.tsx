"use client";
import { RestaurantContext } from "@/context/RestaurantProvider";
import React, { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as emptyBasket from "../../../../public/images/empty.json";

import myAxios from "@/utils/myAxios";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { UserContext } from "@/context/UserProvider";
import { toast } from "react-toastify";
import { AdminPicView } from "./adminPicView";
import AdminCoreView from "./adminCoreView";
import { AdminMenuView } from "./adminMenuView";

export const AdminPage = () => {
  const { getUserRestaurantById, userOrgs, deleteRestaurantById } =
    useContext(RestaurantContext);

  const { token } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getUserRestaurantById();
    }
  }, [token]);

  const defaultOption = {
    animationData: emptyBasket,
    loop: true,
    autoplay: true,
  };

  return (
    <div className="container mx-auto  ">
      <div className="flex">
        <h1 className="text-3xl p-3 text-bold text-center flex-1">
          Admin Page{" "}
        </h1>
      </div>
      <div>
        {userOrgs.length === 0 ? (
          <div className=" justify-center">
            <Lottie options={defaultOption} height={400} width={400} />
            <h3 className="text-center text-2xl">
              {" "}
              Та байгууллага бүртгээгүй байна
            </h3>
          </div>
        ) : (
          <AdminTab />
        )}
      </div>
    </div>
  );
};

export const AdminTab = () => {
  const { getUserRestaurantById, userOrgs, deleteRestaurantById } =
    useContext(RestaurantContext);

  const { token } = useContext(UserContext);
  const [pass, setPass] = useState<string>("");

  useEffect(() => {
    if (token) {
      getUserRestaurantById();
    }
  }, [token]);

  const checkPassword = async (pass: string, orgId: string) => {
    try {
      const {
        data: { isValid },
      } = await myAxios.post(
        `/user/check`,
        { pass },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (isValid === true) {
        deleteRestaurantById(orgId);
      } else {
        toast.error("wrong password");
      }
    } catch (error: any) {
      toast.error("aldaa", error.response.data.message);
    }
  };
  return (
    <Tabs defaultValue={userOrgs[0]?.name} className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-[#858484]">
        {userOrgs.map((org) => (
          <TabsTrigger value={org.name} className="text-white">
            Admin Page
          </TabsTrigger>
        ))}

        <TabsTrigger value="delete" className="text-white">
          Delete Restaurant
        </TabsTrigger>
      </TabsList>
      {userOrgs.map((org) => (
        <TabsContent value={org.name}>
          <CardHeader>
            <CardTitle className="text-center">Your Restaurant</CardTitle>
          </CardHeader>
          <AdminPicView />
          <AdminCoreView {...org} />
          <AdminMenuView {...org} />
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
                      action. All the information about your restaurant will be
                      dleted immediatelly
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Delete Organization</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        Type password that is used for login
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="password" className="text-right">
                            Password
                          </Label>
                          <Input
                            id="password"
                            value={pass}
                            className="col-span-3"
                            name="pass"
                            onChange={(e) => setPass(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          className="w-full"
                          onClick={() => checkPassword(pass, org._id)}
                        >
                          Check Password
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
      </TabsContent>
    </Tabs>
  );
};
