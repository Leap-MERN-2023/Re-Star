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

import * as Yup from "yup";
import { useFormik } from "formik";

export function EditOrganization() {
  const { categories } = useContext(CategoryContext);
  const { updateRestaurant } = useContext(RestaurantContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      openTime: "",
      closeTime: "",
      address: "",
      description: "",
      phoneNumber: "",
    },
    onSubmit: ({
      name,
      category,
      openTime,
      closeTime,
      address,
      description,
      phoneNumber,
    }) => {
      updateRestaurant({
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

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Edit Page</Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="self-center text-2xl">Edit Page</SheetTitle>
            <SheetDescription>
              Make changes to your business page here. Click save when you're
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input defaultValue="23" id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Open Hours" className="text-right">
                Open Hours
              </Label>
              <Input id="Close Hours" className="col-span-3" type="time" />
              <Label htmlFor="Close Hours" className="text-right">
                Close Hours
              </Label>
              <Input
                id="OperationHours"
                value=""
                className="col-span-3"
                type="time"
              />
            </div>
            <div className="">
              <Label htmlFor="Phone" className="text-right">
                Phone Number
              </Label>
              <Input id="Phone" value="" className="col-span-3" />
            </div>
            <div>
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                value="www.Website.mn"
                className="col-span-3"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input id="description" className="col-span-3" />
            </div>
            <div className="grid grid-cols-1 items-center gap-4 ">
              <Label htmlFor="Category" className="text-left">
                Select a Category
              </Label>
              <Select>
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
              <Button className="w-full" type="submit">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
