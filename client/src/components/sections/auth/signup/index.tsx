"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import myAxios from "@/utils/myAxios";

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

import { RegisterSchema } from "@/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "react-toastify";
import { ISignUp } from "@/interface";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";
export const SignupPage = () => {
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
  const router = useRouter();

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
      if (signup) {
        signup({ name, email, password });
      }
    }
  };

  const signup = async ({ name, email, password }: ISignUp) => {
    try {
      const data = await myAxios.post("/auth/signup", {
        email,
        name,
        password,
      });

      await Swal.fire({
        position: "center",
        title: "Sign up successffully",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/login");
    } catch (error: any) {
      console.log("err", error);
      toast.error(`${error?.response?.data?.message as string}`);
    }
  };

  return (
    <div className="bg-secondary md:flex justify-center  items-center h-screen gap-40 p-3">
      <div>
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/434269528_1078973929854025_8067944200692202315_n.png?stp=dst-png_s403x403&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Gbbj_JDKuaoAb5DryQ7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdVzqZOWpwDeLxuuoxoYCzLGPJjetJJNnFxbe7L2ju2FvA&oe=663C8694"
          alt="pic"
          className="h-[600px]"
        />
      </div>
      <div className="md:w-[500px] sm:w-full sm:mt-5 p-10 bg-[#fffefe] md:p-14 rounded-2xl flex flex-col md:gap-5 ">
        <div className="text-3xl self-center  font-serif text-black">
          SIGN UP
        </div>

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
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="placeholder:text-white"
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
                    <FormLabel className="text-black">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your name..."
                        className="placeholder:text-white"
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
                        className="placeholder:text-white"
                      />
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
                    <FormLabel className="text-black">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="******"
                        className="placeholder:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-slate-800"
            >
              {loading ? "Loading..." : "Register"}
            </Button>
          </form>
        </Form>
        <p className="self-center font-semibold text-black">or</p>
        <div className="flex justify-around">
          <Button variant={"outline"} size={"icon"} className="text-[30px]">
            <MdEmail />
          </Button>
          <Button variant={"outline"} size={"icon"} className="text-[30px]">
            <FaFacebook />
          </Button>
        </div>
      </div>
    </div>
  );
};
