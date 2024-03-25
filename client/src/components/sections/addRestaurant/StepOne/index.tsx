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

export function StepOne() {
  const [selectValue, setSelectValue] = useState<string | null>();
  const [categories, setCategories] = useState<string[]>([]);

  const { createRestaurant, isLoading } = useContext(RestaurantContext);

  const addCategory = (e: string) => {
    console.log("e", e);
    const event = e;
    let categoriesArrayCopy = [...categories];
    categoriesArrayCopy.push(e);
    setCategories(categoriesArrayCopy);
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
      });
    },
  });

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Card className="w-1/2 flex flex-col  ">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid  items-center gap-4 w-full">
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                name="name"
                onChange={formik.handleChange}
                className="w-full"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-700">{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Restaurant type</Label>
              <Select
                onValueChange={(e) => (
                  addCategory(e), formik.setFieldValue("category", e)
                )}
                name="category"
                value={formik.values.category}
              >
                <SelectTrigger className=" w-2/3">
                  <SelectValue placeholder="Select Your Restaurant type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Restaurant Type</SelectLabel>
                    {restaurantTypes.map((event, i) => (
                      <SelectItem key={i} value={event}>
                        {event}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid  items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">About restaurant</Label>
                <Input
                  placeholder="Tell us about your restaurant for example founded year, food types, environment and capacity"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Phone Number</Label>
                <Input
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="framework">Open Time</Label>

                <input
                  placeholder="open Time for example 10:00"
                  name="openTime"
                  type="time"
                  className="border border-1 p-2"
                  onChange={formik.handleChange}
                  value={formik.values.openTime}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="framework">Close Time</Label>

                <input
                  placeholder="Close Time for example 20:00"
                  name="closeTime"
                  type="time"
                  className="border border-1 p-2"
                  onChange={formik.handleChange}
                  value={formik.values.closeTime}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="framework">Restaurant Full Address</Label>
              <Input
                placeholder="Restaurant Full Address: Disctrict, Street , Building No, Exact Location"
                name="address"
                onChange={formik.handleChange}
              />
            </div>
            <Button variant={"outline"} className="bg-slate-500">
              <input
                type="file"
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  formik.setFieldValue("imgOne", selectedFile); // Set the value in Formik state
                  console.log("Selected file:", selectedFile); // Log the selected file object
                }}
              />
            </Button>
            <Button variant={"outline"} className="bg-slate-500">
              <input
                type="file"
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  console.log("F", selectedFile);
                  formik.setFieldValue("imgTwo", selectedFile); // Set the value in Formik state
                  console.log("Selected file:", selectedFile); // Log the selected file object
                }}
              />
            </Button>
            <Button variant={"outline"} className="bg-slate-500">
              <input
                type="file"
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  formik.setFieldValue("imgThree", selectedFile); // Set the value in Formik state
                  console.log("Selected file:", selectedFile); // Log the selected file object
                }}
              />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
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
