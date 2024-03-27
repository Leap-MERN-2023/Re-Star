"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import myAxios from "@/utils/myAxios";
import { Button } from "@/components/ui/button";
import { MdEmail, FaFacebook } from "@/components/icons";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { LoginSchema } from "@/schema";

import Swal from "sweetalert2";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = ({ email, password }: z.infer<typeof LoginSchema>) => {
    console.log(`email: ${email}, password:${password}`);

    login({ email, password });
  };

  const login = async ({ email, password }: any) => {
    try {
      const {
        data: { token, user },
      } = await myAxios.post("/auth/login", {
        userEmail: email,
        userPassword: password,
      });

      await Swal.fire({
        position: "center",
        title: "амжилттай Нэвтрэлээ",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      router.push("/");
    } catch (error: any) {
      toast.error(` Error ${(error?.response?.data?.message as string) || ""}`);
    }
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
