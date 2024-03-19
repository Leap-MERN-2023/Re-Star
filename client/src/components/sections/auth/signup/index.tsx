import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { MdEmail, FaFacebook } from "@/components/icons";

import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "@/context/UserProvider";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const SignupPage = () => {
  const { signup } = useContext(UserContext);

  const validationSchema = z
    .object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
      rePassword: z.string(),
    })
    .nullable()
    .superRefine(
      (
        arg,
        ctx
      ): arg is {
        name: string;
        email: string;
        password: string;
        rePassword: string;
      } => {
        if (!arg) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "object should exist",
          });
        }
        if (arg.password !== arg.rePassword) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "object should exist",
          });
        }

        return z.NEVER;
      }
    );

  const formik = useFormik({
    onSubmit: ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
      rePassword?: string;
    }) => {
      if (signup) {
        signup({ name, email, password });
      }
    },
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  return (
    <div className="bg-[#fdf4ed] flex justify-center  items-center h-screen gap-40">
      <div className="w-[500px]  bg-[#fffefe] p-24 rounded-2xl flex flex-col gap-5">
        <div className="text-3xl self-center  font-serif">SIGN UP</div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            placeholder="name"
            name="name"
            onChange={formik.handleChange}
            aria-errormessage={formik.errors.name}
            value={formik.values.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            width={"400px"}
            name="email"
            onChange={formik.handleChange}
            aria-errormessage={formik.errors.email}
            value={formik.values.email}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            aria-errormessage={formik.errors.password}
            value={formik.values.password}
          />
        </div>
        <div>
          <Label htmlFor="re-password">Re-Password</Label>
          <Input
            type="re-password"
            id="re-password"
            placeholder="re-password"
            name="rePassword"
            onChange={formik.handleChange}
            aria-errormessage={formik.errors.rePassword}
            value={formik.values.rePassword}
          />
        </div>

        <Button className="w-full" onClick={formik.handleSubmit}>
          Sign in
        </Button>

        <p className="self-center">or</p>
        <div className="flex justify-around">
          <Button variant={"outline"} color="red">
            <MdEmail />
          </Button>
          <Button variant={"outline"} color="blue">
            <FaFacebook />
          </Button>
        </div>
      </div>
      <div>
        <img src={"/images/signup.png"} alt="pic" />
      </div>
    </div>
  );
};
