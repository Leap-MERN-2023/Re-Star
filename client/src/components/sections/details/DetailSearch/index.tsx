import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaSearch } from "react-icons/fa";

const DetailSearch = () => {
  return (
    <div
      style={{
        background: "#fdf4ed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Input
        type="search"
        placeholder="Search location"
        className=" w-[400px] h-[60px] text-[20px]  "
      />
      <Input
        type="search"
        placeholder="Search for restaurant, cuisine or dish"
        className=" w-[400px] h-[60px] text-[20px] "
      />
      <Button
        variant="outline"
        style={{
          height: "60px",
          width: "60px",
          borderRadius: "30px",
          borderColor: "#7c84b8",
        }}
      >
        <FaSearch style={{ fontSize: "20px", color: "" }} />
      </Button>
    </div>
  );
};

export default DetailSearch;
