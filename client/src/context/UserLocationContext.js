"use client";
import { useState } from "react";

const { createContext } = require("react");

export const UserLocationContext = createContext(null);

const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({ lat: "", lng: "" });
  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
