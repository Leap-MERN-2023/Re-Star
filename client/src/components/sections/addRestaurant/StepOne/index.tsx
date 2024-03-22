"use client";
import * as Yup from "yup";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { ChangeEvent, useState } from "react";

export function StepOne() {
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
  ];

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Username is required")
      .max(16, "Username must not be more than 16 characters"),
    category: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    openTime: Yup.string()
      .required("Password is required")
      .min(6, "Password must have at least 6 characters")
      .max(18, "Max password length is 18"),
    closeTime: Yup.string().required("Confirm password is required"),
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
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit(value) {
      toast.success("succes");
      console.log("aaaa", value);
    },
  });
  return (
    <Card className="">
      <CardContent>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                name="name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Restaurant type</Label>
              <Select
                onValueChange={(e) => formik.handleChange(e)}
                name="category"
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
          </div>
          <button type="submit" onClick={() => formik.handleSubmit()}>
            click
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
