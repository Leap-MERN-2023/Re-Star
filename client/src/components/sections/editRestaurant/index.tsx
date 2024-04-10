"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryContext } from "@/context/CategoryProvider";
import { RestaurantContext } from "@/context/RestaurantProvider";

import { GrEdit } from "@/components/icons";
import { useFormik } from "formik";

export function EditOrganization({ id }: { id: string }) {
  const { categories } = useContext(CategoryContext);
  const { updateRestaurant, userOrgs, getUserRestaurantById } =
    useContext(RestaurantContext);

  const formik = useFormik({
    initialValues: {
      id: id,
      name: userOrgs && userOrgs[0]?.name,
      category: userOrgs && userOrgs[0]?.category,
      openTime: userOrgs && userOrgs[0]?.openTime,
      closeTime: userOrgs && userOrgs[0]?.closeTime,
      address: userOrgs && userOrgs[0]?.address,
      description: userOrgs && userOrgs[0]?.description,
      phoneNumber: userOrgs && userOrgs[0]?.phoneNumber,
    },
    onSubmit: ({
      id,
      name,
      category,
      openTime,
      closeTime,
      address,
      description,
      phoneNumber,
    }) => {
      updateRestaurant({
        id,
        name,
        category,
        openTime,
        closeTime,
        address,
        description,
        phoneNumber,
      });
    },
  });

  useEffect(() => {
    getUserRestaurantById();
  }, []);

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-full bg-secondary text-primary gap-2  hover:bg-black hover:scale-105 transform transition-all hover:cursor-pointers">
            Edit Restaurant
            <GrEdit size={22} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="self-center text-2xl">Edit Page</SheetTitle>
            <SheetDescription>
              Make changes to your business page here. Click save when you are
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Open Hours" className="text-right">
                Open Hours
              </Label>
              <Input
                id="Close Hours"
                className="col-span-3"
                type="time"
                value={formik.values.openTime}
              />
              <Label htmlFor="Close Hours" className="text-right">
                Close Hours
              </Label>
              <Input
                id="OperationHours"
                value={formik.values.closeTime}
                name="closeTime"
                className="col-span-3"
                type="time"
              />
            </div>
            <div className="">
              <Label htmlFor="Phone" className="text-right">
                Phone Number
              </Label>
              <Input
                id="Phone"
                className="col-span-3"
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </div>
            <div>
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                className="col-span-3"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4 ">
              <Label htmlFor="Category" className="text-left">
                Select a Category
              </Label>
              <Select
                onValueChange={(e) => {
                  formik.setFieldValue("category", e);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Add Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((category, i) => (
                      <SelectItem value={category._id} key={i}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button
                className="w-full"
                type="submit"
                onClick={() => formik.handleSubmit()}
              >
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
