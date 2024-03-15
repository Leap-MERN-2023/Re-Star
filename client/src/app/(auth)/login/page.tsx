import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdEmail, FaFacebook } from "@/components/icons";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#fdf4ed] flex h-screen justify-center items-center gap-40">
      <div>
        <img src={"/images/signup.png"} alt="pic" />
      </div>
      <div className="w-96  p-24 rounded-2xl bg-[#fbfbfb] flex flex-col gap-5">
        <div className="text-3xl self-center  font-serif">LOG IN</div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" width={"400px"} />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="password" />
        </div>
        <div>
          <Button className="w-full">Log in</Button>
          <Link href={""} className="p-0 m-0 hover:text-gray-600">
            Forgot password
          </Link>
        </div>
        <p className="self-center">or</p>
        <div className="flex justify-around">
          <Button size={"icon"}>
            <MdEmail />
          </Button>
          <Button size={"icon"}>
            <FaFacebook />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
