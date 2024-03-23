"use client";

import React, { useContext } from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserProvider";

const Header = () => {
  const { loggedUser } = useContext(UserContext);

  const router = useRouter();
  return (
    <div className="bg-[#fdf4ed] w-[100%] mx-auto p-3  ">
      <div className="flex h-16 items-center px-4 bg-transparent justify-evenly">
        <img
          className="w-10 h-10"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/431436111_776097374089447_1764102623022154952_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w8Y_Wwi8k8wAX-WMOAr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR8HjZRZVAcNnMv0-xg1pCfS7GGuhw2aQgoKLARi28vqg&oe=6620F108"
          onClick={() => router.push("/")}
        />
        <div>
          <MainNav className="mx-6" />
        </div>
        <div className="flex items-center space-x-4 bg-transparent">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
