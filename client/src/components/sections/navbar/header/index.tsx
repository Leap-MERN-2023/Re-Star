"use client";

import React, { useContext } from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserProvider";
import { ModeToggle } from "./themeThoggler";

const Header = () => {
  const { loggedUser } = useContext(UserContext);

  const router = useRouter();
  return (
    <div className="bg-secondary w-[100%] mx-auto p-3  ">
      <div className="flex h-16 items-center px-4 bg-transparent justify-evenly">
        <img
          className="w-10 h-10"
          src="./images/mainLogo.png"
          onClick={() => router.push("/")}
        />
        <div className="justify-self-center">
          <MainNav className="mx-6" />
        </div>
        <div className="flex items-center space-x-4 bg-transparent">
          <UserNav />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
