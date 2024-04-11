"use client";

import React, { useEffect } from "react";
import SuperAdmin from "@/components/sections/superAdmin";

import { redirect } from "next/navigation";

const SuperPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user.role !== "admin") {
        redirect("/");
      }
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
