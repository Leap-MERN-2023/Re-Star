"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useState, useEffect, ChangeEvent } from "react";

import { useFormik } from "formik";

import Stepper from "./Stepper";
import { StepOne } from "./StepOne";

export default function AddRestaurant() {
  const [activeStep, setActiveStep] = useState(1);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <div className="p-7 ">
      <Card>
        <CardHeader>
          <CardTitle className="self-center">
            Create Your Restaurant on RE-STAR
          </CardTitle>
          <CardDescription className="self-center">
            To create your restaurant we need to get your restaurant information
          </CardDescription>
        </CardHeader>
        <div>
          {activeStep === 1 && (
            <div className="grid grid-cols-1 gap-10">
              <ul className="steps w-10/12 ">
                <li className="step step-primary">Restaurant Information</li>
                <li className="step ">Restaurant Type & Timings</li>
                <li className="step ">Done</li>
              </ul>
              <div>
                <StepOne />
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
