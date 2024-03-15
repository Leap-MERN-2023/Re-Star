import React from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

const Header = () => {
  return (
    <div className="absolute w-[100%] container ">
      <div className="flex h-16 items-center px-4 bg-transparent justify-evenly">
        <img className="w-20 h-auto" src="/images/logo.png" />
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
