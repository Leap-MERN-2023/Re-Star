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
import Image from "next/image";

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
        title: "Log in successfully ",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      router.push("/");
      setTimeout(() => location.reload(), 1000);
    } catch (error: any) {
      toast.error(` Error ${(error?.response?.data?.message as string) || ""}`);
    }
  };

  return (
    <div className="  md:flex  justify-center items-center md:gap-40 bg-secondary ">
      <div className="mt-[100px] flex gap-20 p-20">
        <div>
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/434353573_2647516172097761_4183035951152431244_n.png?stp=dst-png_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bKmqRqGrJo4Ab73VYow&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdVDgEEwIhzqGMeU5LXt1YLL8jzYoLSv5kxPF4-5-THi8g&oe=663C7D73"
            alt="pic"
            className="h-[600px]"
          />
        </div>
        <div className="md:w-[500px] md:p-14 rounded-2xl bg-[#fbfbfb] flex flex-col gap-5 sm:w-full ">
          <p className="text-3xl self-center text-black font-serif">LOG IN</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="placeholder:text-primary"
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
                      <FormLabel className="text-black">Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="******"
                          className="placeholder:text-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full  bg-black text-white hover:bg-slate-600"
              >
                {loading ? "Loading..." : "Log in"}
              </Button>
            </form>
          </Form>
          <div>
            <Link
              href={"/resetPass"}
              className="p-0 m-0 hover:text-gray-600 text-black justify-end flex"
            >
              Forgot password
            </Link>
          </div>
          <p className="self-center text-secondary font-semibold">or</p>
          <div className="flex justify-around">
            <Button
              className="p-0 m-0 hover:text-primary hover:bg-slate-500 text-primary flex bg-secondary w-full text-center"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
