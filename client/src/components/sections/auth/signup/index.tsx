"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { MdEmail, FaFacebook } from "@/components/icons";

import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "@/context/UserProvider";

import { RegisterSchema } from "@/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "react-toastify";

export const SignupPage = () => {
  const { signup } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = ({
    name,
    email,
    password,
    confirmPassword,
  }: z.infer<typeof RegisterSchema>) => {
    setLoading(false);

    if (password !== confirmPassword) {
      return toast.error("password is not same");
    } else {
      console.log(
        `name: ${name}, email: ${email}, password:${password}, confirm : ${confirmPassword}`
      );
      if (signup) {
        signup({ name, email, password });
      }
    }
  };

  const checkPass = (password: string, confirmPassword: string) => {};
  return (
    <div className="bg-[#fdf4ed] md:flex justify-center  items-center h-screen gap-40 p-3">
      <div className="md:w-[500px] sm:w-full sm:mt-5  bg-[#fffefe] md:p-24 rounded-2xl flex flex-col md:gap-5">
        <div className="text-3xl self-center  font-serif">SIGN UP</div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 m-3"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Loading..." : "Register"}
            </Button>
          </form>
        </Form>
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
