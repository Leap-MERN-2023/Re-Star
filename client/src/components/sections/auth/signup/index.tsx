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
      console.log(
        `name: ${name}, email: ${email}, password:${password}, confirm : ${confirmPassword}`
      );
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
      console.log("Data :", data);
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
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/434153217_788234183216519_7255311917734673479_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B9c5dwTAMb0Ab7KIWKk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdUW2eNmHd6opBye3rdwZybNn4OEBfbemcJL4Qzikf5OBw&oe=6636DFAE"
          alt="pic"
        />
      </div>
      <div className="md:w-[500px] sm:w-full sm:mt-5 p-10 bg-[#fffefe] md:p-14 rounded-2xl flex flex-col md:gap-5 ">
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
    </div>
  );
};
