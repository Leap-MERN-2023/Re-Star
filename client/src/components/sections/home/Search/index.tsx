import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div
      style={{
        background: "#fdf4ed",
      }}
      className="md:auto container"
    >
      <h1
        style={{ color: "#9f9dba", fontWeight: "bold", fontSize: "50px" }}
        className="flex justify-center "
      >
        Re-Star
      </h1>

      <p className="flex justify-center text-[40px] text-[#9f9dba]">
        Discover the best food & drinks in Mongolia
      </p>
      <div
        style={{
          background: "#fdf4ed",
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
          className=" w-[400px] h-[60px] text-[20px] "
        />
        <Input
          type="search"
          placeholder="Search for restaurant, cuisine or dish"
          className=" w-[400px] h-[60px] text-[20px] "
        />
      </div>

      <img src="./images/mainImage.png" className="md:w-[100%] mt-1" />
    </div>
  );
};

export default Search;
