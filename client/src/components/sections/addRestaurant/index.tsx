"use client";

import {
  Card,
  CardContent,
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
    <div className="p-7 bg-secondary ">
      <div className="">
        {activeStep === 0 && (
          <div className="mt-10 bg-secondary text-center text-3xl flex justify-center items-center flex-col gap-6 font-medium">
            <div className="flex justify-center items-end bg-secondary rounded-full p-10">
              <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/432983801_791832539065929_2970134213591291201_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ac1haJLawqYAX_CSvEa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdVx1yr3qI3nvMlqAVzneYHRJWBFo-uaZAUqU6cZI9BUig&oe=663488AB"
                className="h-[250px]"
              />
              <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/433064389_310607505378288_8200503743178148176_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ka2X4dk2gBEAX-bBsrj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdXFvHLAxDWf-3FE9zTbBg8EIej-iajV5E1Ci790I2DeAg&oe=663493EA"
                className="h-[300px]"
              />
            </div>
            Add Your restaurant on Re-star
            <div className="grid grid-cols-2 gap-3">
              <Button onClick={handleNext} className="">
                Go to Home{" "}
              </Button>
              <Button onClick={handleNext} className="bg-primary">
                Next{" "}
              </Button>
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div className="grid grid-cols-1 gap-10 justify-center">
            <CardHeader className="">
              <CardTitle className="self-center ">
                Create Your Restaurant on RE-STAR
              </CardTitle>
              <CardDescription className="self-center ">
                To create your restaurant we need to get your restaurant
                information
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="flex justify-center">
              <ul className="steps w-[60%]">
                <li className="step step-primary">
                  Restaurant <br /> Information
                </li>
                <li className="step ">Restaurant Location</li>
                <li className="step ">Done</li>
              </ul>
            </CardContent> */}

            <div className="w-full">
              <StepOne />
            </div>
          </div>
        )}
        {activeStep === 2 && <StepTwo />}
        {activeStep === 3 && <StepThree />}
      </div>
    </div>
  );
}
