import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdEmail, FaFacebook } from "@/components/icons";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#fdf4ed] flex justify-center  items-center h-screen gap-40">
      <div className="w-[500px]  bg-[#fffefe] p-24 rounded-2xl flex flex-col gap-5">
        <div className="text-3xl self-center  font-serif">SIGN UP</div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" width={"400px"} />
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="name" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="password" />
        </div>
        <div>
          <Label htmlFor="re-password">Re-Password</Label>
          <Input
            type="re-password"
            id="re-password"
            placeholder="re-password"
          />
        </div>

        <Button className="w-full">Sign in</Button>

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

export default Page;
