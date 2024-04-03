import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="md:auto container bg-secondary">
      <h1
        style={{ fontWeight: "bold", fontSize: "50px" }}
        className="flex justify-center "
      >
        Re-Star
      </h1>

      <p className="flex justify-center text-[40px] text-primary]">
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
