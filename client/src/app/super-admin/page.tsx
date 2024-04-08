"use client";

import { NextRequest, NextResponse } from "next/server";

import React, { useEffect, useState } from "react";
import SuperAdmin from "@/components/sections/superAdmin";

import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

interface ILocalUser {
  role: string;
  createdAt: string;
  email: string;
  name: string;
  otp: string;
  _id: string;
}

const SuperPage = () => {
  const [localUser, setLocalUser] = useState<ILocalUser>({
    role: "",
    createdAt: "",
    email: "",
    name: "",
    otp: "",
    _id: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    setLocalUser(user);
    const role = localUser?.role;

    console.log("role in super", role, localUser.role);
    if (role != "admin") {
      redirect("/");
    }
  }, []);

  return (
    <div className="bg-secondary">
      <div className="mx:auto container">
        <SuperAdmin />
      </div>
    </div>
  );
};

export default SuperPage;
