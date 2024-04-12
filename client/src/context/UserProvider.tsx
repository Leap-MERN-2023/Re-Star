"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import myAxios from "@/utils/myAxios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { IUserContext, ILoggedUser, IChangeUserProfile } from "../interface";
import { toast } from "react-toastify";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>("");

  const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
    name: "",
    email: "",
    _id: "",
    role: "",
  });
  const [refresh, setRefresh] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedUser({ name: "", email: "", _id: "", role: "" });
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
    } catch (error: any) {
      toast.error(`error ${error.response && error.response.data.message}`);
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

        changeUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
