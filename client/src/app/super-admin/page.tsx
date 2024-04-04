"use client";

import { NextRequest, NextResponse } from "next/server";

import React from "react";
import SuperAdmin from "@/components/sections/superAdmin";

import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const SuperPage = () => {
  // useLayoutEffect(() => {
  //   // const isAuth = isAuthenticated;
  //   const user: any = localStorage.getItem("user");

  //   const { role } = user;

  //   if (role != "admin") {
  //     redirect("/");
  //   }
  // }, []);

  return (
    <div className="bg-[#fdf4ed]">
      <div className="mx:auto container">
        <SuperAdmin />
      </div>
    </div>
  );
};

export default SuperPage;
