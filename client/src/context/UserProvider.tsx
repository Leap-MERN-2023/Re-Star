"use client";

import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/utils/myAxios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import {
  IUserContext,
  ILoggedUser,
  ISignUp,
  ILogin,
  IChangeUserProfile,
  IUser,
} from "../interface";
import { toast } from "react-toastify";
import { unknown } from "zod";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>("");

  const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
    name: "",
    email: "",
    _id: "",
  });
  const [refresh, setRefresh] = useState(false);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  useEffect(() => {
    getUserLocation();
  }, []);

  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedUser({ name: "", email: "", _id: "" });
  };

  const callSetRefresh = (boolean: boolean) => {
    setRefresh(boolean);
  };

  const changeUserProfile = async ({ changedUser }: IChangeUserProfile) => {
    try {
      const { data } = await myAxios.put(
        "/user",
        {
          changedUser,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      await Swal.fire({
        position: "center",
        title: "User profile successfully changed",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.removeItem("user");
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...loggedUser,
          name: changedUser.name,
          email: changedUser.email,
        })
      );
      callSetRefresh(!refresh);
    } catch (error) {
      toast.error(`error ${error}`);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const pToken = localStorage.getItem("token");
    setLoggedUser(user);
    setToken(pToken);
  }, [refresh]);

  return (
    <UserContext.Provider
      value={{
        token,
        logout,
        loggedUser,
        userLocation,
        changeUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
