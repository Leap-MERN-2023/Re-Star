"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const Stepper = () => {
  const [firstFile, setFirstFile] = useState<File | null>(null);
  const [secondFile, setSecondFile] = useState<File | null>(null);
  const [thirdFile, setThirdFile] = useState<File | null>(null);

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
    onSubmit({ name, category, openTime, closeTime, address, description }) {
      toast.success("succes");
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("FFF", e.currentTarget.files![0]);
    setFirstFile(e.currentTarget.files![0]);
  };

  return (
    <div>
      <Card className="w-10/12">
        <CardContent className="">
          <div className="grid w-2/3 items-center gap-4">
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
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="framework">Open Time</Label>

                <input
                  placeholder="open Time for example 10:00"
                  name="open Time"
                  type="number"
                  className="border border-1 p-2"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="framework">Close Time</Label>
                <input
                  placeholder="Close Time for example 20:00"
                  name="open Time"
                  type="number"
                  className="border border-1 p-2"
                  onChange={formik.handleChange}
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
              <input type="file" name="image" onChange={formik.handleChange} />
            </Button>
            <Button variant={"outline"} className="bg-slate-500">
              <input type="file" name="image" onChange={formik.handleChange} />
            </Button>
            <Button variant={"outline"} className="bg-slate-500">
              <input
                type="file"
                name="image"
                id="image"
                onChange={formik.handleChange}
              />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => formik.handleSubmit()} type="submit">
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Stepper;
