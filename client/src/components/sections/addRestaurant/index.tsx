"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useState } from "react";

import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import StepTwo from "./stepTwo";

import { IoFastFood } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function AddRestaurant() {
  const [activeStep, setActiveStep] = useState(0);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div className="p-7 w-full bg-[#fdf4ed]">
      <Card>
        <div className="w-full">
          {activeStep === 0 && (
            <div className="py-[10%] w-screen bg-[#fdf4ed] text-center text-3xl font-serif flex justify-center items-center flex-col gap-6">
              <div className="flex justify-center">
                <IoFastFood size={200} color="green" />
              </div>
              Add Your restaurant on Re-star
              <div className="grid grid-cols-2 gap-3">
                <Button onClick={handleNext} variant={"outline"} className="">
                  Go to Home{" "}
                </Button>
                <Button onClick={handleNext}>Next </Button>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="grid grid-cols-1 gap-10 justify-center">
              <CardHeader className="bg-[#fdf4ed]">
                <CardTitle className="self-center ">
                  Create Your Restaurant on RE-STAR
                </CardTitle>
                <CardDescription className="self-center ">
                  To create your restaurant we need to get your restaurant
                  information
                </CardDescription>
              </CardHeader>
              <ul className="steps w-full  ">
                <li className="step step-primary">Restaurant Information</li>
                <li className="step ">Restaurant Location</li>
                <li className="step ">Done</li>
              </ul>
              <div className="w-full">
                <StepOne />
              </div>
            </div>
          )}
          {activeStep === 2 && <StepTwo />}
          {activeStep === 3 && <StepThree />}
        </div>
      </Card>
    </div>
  );
}
