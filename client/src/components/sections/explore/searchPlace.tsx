import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SearchPlace = () => {
  return (
    <div className="">
      <div>
        <label className="input bg-white  flex items-center gap-2">
          <input
            type="text"
            className="grow "
            placeholder="Search restaurant"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex flex-col space-y-3 mt-10">
        <div className="space-y-2 bg-white h-28 w-full rounded-lg flex">
          <div>
            <img
              src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="h-24 rounded-lg "
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SearchPlace;
