"use client";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { RestaurantContext } from "@/context/RestaurantProvider";
import { CategoryContext } from "@/context/CategoryProvider";
import { Skeleton } from "@/components/ui/skeleton";

export function StepOne() {
  const [selectValue, setSelectValue] = useState<string | null>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { createRestaurant, isLoading } = useContext(RestaurantContext);
  const { categories } = useContext(CategoryContext);

  const addCategory = (e: string) => {
    const event = e;
    let categoriesArrayCopy = [...selectedCategories];
    categoriesArrayCopy.push(e);
    setSelectedCategories(categoriesArrayCopy);
  };

  const restaurantTypes = [
    "Korean Restaurant",
    "Sushi Restaurant",
    "Mediterranean Restaurant",
    "Fast Food Chain",
    "Ramen Restaurant",
    "Chinese Restaurant",
    "Buffet",
    "Coffee Shop",
    "Bakery",
    "Pub",
    "Pizza",
    "Chicken",
    "65fecee5f87c76",
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    category: Yup.array().required("Category is required"), // Adjusted to require a non-empty category
    address: Yup.string().required("Address is required"),
    description: Yup.string().required("Description is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      openTime: "",
      closeTime: "",
      address: "",
      description: "",
      phoneNumber: "",
      imgOne: File,
      imgTwo: File,
      imgThree: File,
      lat: "",
      lng: "",
    },

    // validationSchema,
    onSubmit: ({
      name,
      category,
      openTime,
      closeTime,
      address,
      description,
      phoneNumber,
      imgOne,
      imgTwo,
      imgThree,
      lat,
      lng,
    }) => {
      createRestaurant({
        name,
        category,
        openTime,
        closeTime,
        address,
        description,
        phoneNumber,
        imgOne,
        imgTwo,
        imgThree,
        lat,
        lng,
      });
    },
  });

  return (
    <div className="w-full flex flex-col justify-center items-center sm:justify-start">
      <Card className="w-[50%]">
        <CardHeader>
          <CardTitle>Add Restaurant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid  items-center gap-5 w-full">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                name="name"
<<<<<<< HEAD
                className="placeholder:text-primary bg-secondary"
=======
                className="placeholder:text-third w-24 lg:w-96 md:w-72 sm:w-24 xs:w-12"
>>>>>>> 16b6e85 (responsive edit)
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-700">{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2  w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <Label htmlFor="framework">Restaurant type</Label>
              <Select
                onValueChange={(e) => (
                  addCategory(e), formik.setFieldValue("category", e)
                )}
                name="category"
                value={formik.values.category}
              >
                <SelectTrigger className="bg-secondary ">
                  <SelectValue placeholder="Select Your Restaurant type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Restaurant Type</SelectLabel>

                    {!categories && <Skeleton className="h-4 w-[250px] " />}
                    {categories.map((category, i) => (
                      <SelectItem key={i} value={category?._id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid  items-center gap-4  w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <div className="flex flex-col gap-2">
                <Label htmlFor="framework">About restaurant</Label>
                <Input
                  placeholder="Tell us about your restaurant for example founded year, food types, environment and capacity"
                  name="description"
                  onChange={formik.handleChange}
                  className="placeholder:text-primary bg-secondary"
                  value={formik.values.description}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="framework">Phone Number</Label>
                <Input
                  placeholder="Phone Number"
                  className="placeholder:text-primary bg-secondary "
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="framework">Open Time</Label>
                <input
                  placeholder="open Time for example 10:00"
                  name="openTime"
                  type="time"
                  className="border border-1 p-2 rounded-md bg-secondary placeholder:text-primary"
                  onChange={formik.handleChange}
                  value={formik.values.openTime}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="framework">Close Time</Label>

                <input
                  placeholder="Close Time for example 20:00"
                  name="closeTime"
                  type="time"
                  className="border border-1 p-2 rounded-md bg-secondary"
                  onChange={formik.handleChange}
                  value={formik.values.closeTime}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full  w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <Label htmlFor="framework">Restaurant Full Address</Label>
              <Input
                placeholder="Restaurant Full Address: Disctrict, Street , Building No, Exact Location"
                name="address"
                className="placeholder:text-primary bg-secondary"
                onChange={formik.handleChange}
              />
            </div>
<<<<<<< HEAD
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="framework">Google latitude</Label>
=======
            <div className="flex flex-col gap-2 w-full  w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <Label htmlFor="framework">google lan</Label>
>>>>>>> 16b6e85 (responsive edit)
              <Input
                placeholder="Location latitude"
                name="lat"
                className="placeholder:text-primary bg-secondary"
                onChange={formik.handleChange}
              />
            </div>
<<<<<<< HEAD
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="framework">Google longitude</Label>
=======
            <div className="flex flex-col gap-2 w-full  w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <Label htmlFor="framework">google lng</Label>
>>>>>>> 16b6e85 (responsive edit)
              <Input
                placeholder="Locaton longitude"
                name="lng"
                className="placeholder:text-primary bg-secondary"
                onChange={formik.handleChange}
              />
            </div>
            <Button variant={"outline"} className="bg-secondary w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <input
                type="file"
              
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  formik.setFieldValue("imgOne", selectedFile);
                }}
              />
            </Button>
            <Button variant={"outline"} className="bg-secondary  w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <input
                type="file"
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  console.log("F", selectedFile);
                  formik.setFieldValue("imgTwo", selectedFile);
                }}
              />
            </Button>
            <Button variant={"outline"} className="bg-secondary w-16 lg:w-96 md:w-72 sm:w-24 xs:w-12">
              <input
                type="file"
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  formik.setFieldValue("imgThree", selectedFile);
                }}
              />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button
            onClick={() => formik.handleSubmit()}
            type="submit"
            className="w-full"
          >
            {isLoading === true ? "...loading" : "Upload"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
