"use client";

import { useContext } from "react";
import { PasswordContext } from "./PasswordContext";
import { useFormik } from "formik";

import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const MyStepper = () => {
  const { activeStep, handleFirstStep, handleSecondStep, handleThirdStep } =
    useContext(PasswordContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      rePassword: "",
      password: "",
      otp: "",
    },

    onSubmit: ({ email, rePassword, password, otp }) => {
      {
        activeStep === 1 && handleFirstStep(email);
        console.log("mail", email);
      }
      {
        activeStep === 2 && handleSecondStep(email, otp);
      }
      {
        activeStep === 3 && handleThirdStep({ email, password, rePassword });
      }
    },
  });

  return (
    <div className=" flex justify-center items-center my-20">
      {activeStep === 1 && (
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => formik.handleSubmit()} type="submit">
              Next 1
            </Button>
          </CardFooter>
        </Card>
      )}
      {activeStep === 2 && (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Reset Password Step 2</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">
                    Enter code that is sent to your Email
                  </Label>
                  <Input
                    id="otp"
                    placeholder="Enter code"
                    name="otp"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => formik.handleSubmit()}>Next</Button>
          </CardFooter>
        </Card>
      )}
      {activeStep === 3 && (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Reset Password Step 3</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Create New Password</Label>
                  <Input
                    id="password"
                    placeholder="new password"
                    name="password"
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="rePassword"
                    placeholder="repeat new password"
                    name="rePassword"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => formik.handleSubmit()}>Deploy</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
