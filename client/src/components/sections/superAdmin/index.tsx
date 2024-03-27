import React, { useContext } from "react";
import AddCategory from "./addCategory";
import { CategoryContext } from "@/context/CategoryProvider";

const SuperAdmin = () => {
  return (
    <div>
      <AddCategory />
    </div>
  );
};

export default SuperAdmin;
