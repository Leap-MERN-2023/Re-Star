"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdEmail, FaFacebook } from "@/components/icons";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "react-toastify";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { LoginSchema } from "@/schema";
import { UserContext } from "@/context/UserProvider";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "99",
      password: "",
    },
  });

  const onSubmit = ({ email, password }: z.infer<typeof LoginSchema>) => {
    console.log(`email: ${email}, password:${password}`);

    login({ email, password });
  };

  return (
    <div className="bg-[#fdf4ed] md:flex h-screen justify-center items-center md:gap-40">
      <div className="">
        <img src={"/images/signup.png"} alt="pic" />
      </div>
      <div className="md:w-[500px] p-4  md:p-24 rounded-2xl bg-[#fbfbfb] flex flex-col gap-5 sm:w-full ">
        <p className="text-3xl self-center  font-serif">LOG IN</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Loading..." : "Log in"}
            </Button>
          </form>
        </Form>
        <div>
          <Link href={""} className="p-0 m-0 hover:text-gray-600">
            Forgot password
          </Link>
        </div>
        <p className="self-center">or</p>
        <div className="flex justify-around">
          <Button variant={"outline"} size={"icon"}>
            <MdEmail />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <FaFacebook />
          </Button>
        </div>
      </div>
    </div>
  );
};
