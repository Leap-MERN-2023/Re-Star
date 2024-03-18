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
      <div>
        <h1
          style={{ color: "#9f9dba", fontWeight: "bold", fontSize: "60px" }}
          className="flex justify-center "
        >
          Re-Star
        </h1>

        <p className="flex justify-center text-[46px] text-[#9f9dba]">
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
          <Button
            variant="outline"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "30px",
              borderColor: "#7c84b8",
            }}
            className="sm:flex hidden"
          >
            <FaSearch style={{ fontSize: "20px" }} />
          </Button>
        </div>
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/431524812_337019292142019_8037532982556948092_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MG1035uQv7kAX_vlzte&_nc_oc=AQnRKRillC9wrqyd58l-ljrN1EQ85dYtK0lNr8Rh-7fmJt4UNkZ-H7WpWRqqN2r1JPyt4fI7EU8Kos7PBhjWng7a&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ5v-GIIRbgWUSXoYjaC0-jNnwBO1Kgq_2WlVFicD27dw&oe=661A65EF"
          className="md:w-[100%] mt-1"
        />
      </div>
    </div>
  );
};

export default Search;
