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

export default function AddRestaurant() {
  const [activeStep, setActiveStep] = useState(1);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div className="p-7 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="self-center">
            Create Your Restaurant on RE-STAR
          </CardTitle>
          <CardDescription className="self-center">
            To create your restaurant we need to get your restaurant information
          </CardDescription>
        </CardHeader>
        <div className="w-full">
          {activeStep === 1 && (
            <div className="grid grid-cols-1 gap-10 justify-center">
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
