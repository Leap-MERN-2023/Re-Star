"use client";

import React, { useContext } from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserProvider";
import { ModeToggle } from "./themeThoggler";
import { ResponsiveNav } from "./responsive-nav";

const Header = () => {
  const { loggedUser } = useContext(UserContext);

  const router = useRouter();
  return (
    <div className=" w-[100%] mx-auto p-3 backdrop-blur-md fixed z-10 h-[80px]">
      <div className="flex h-16 items-center px-4 bg-transparent justify-evenly">
        <img
          className=" sm:w-6  w-6 md:w-10 h-12 lg:w-12 "
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/430382737_317224774711146_4452897880078353094_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZOlaC83G9A0AX82Df-k&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdXaa2A1hS8QUkM860gGxLhy6V8tVhH0hOsNDUoLz5tyHQ&oe=663486A3"
          onClick={() => router.push("/")}
        />
        <div className="justify-self-center ">
          <MainNav className="mx-6" />
        </div>
        <div className="flex items-center space-x-4 bg-transparent">
          <ResponsiveNav/>
          <UserNav />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
