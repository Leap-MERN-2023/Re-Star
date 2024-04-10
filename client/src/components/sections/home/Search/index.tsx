"use client";

import { useRouter } from "next/navigation";

import React from "react";
import { Input } from "@/components/ui/input";

const Search = () => {
  const router = useRouter();
  return (
    <div className="md:auto container bg-secondary mt-[90px]">
      <h1
        style={{ fontWeight: "bold", fontSize: "50px" }}
        className="flex justify-center "
      >
        Re-Star
      </h1>
      <p className="flex justify-center text-[40px] text-primary items-center">
        Discover the best food & drinks in Mongolia
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Input
          type="search"
          placeholder="Search location"
          className=" w-[800px] h-[60px] text-[20px] placeholder:text-primary rounded-lg"
          onClick={() => router.push("/explore")}
        />
      </div>

      <img src="./images/mainImage.png" className="md:w-[100%] mt-1" />
    </div>
  );
};

export default Search;
