"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/utils/myAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  IUserContext,
  ILoggedUser,
  IUser,
  ISignUp,
  ILogin,
} from "../interface";
import { Value } from "@radix-ui/react-select";

export const UserContext = createContext<IUserContext>({
  loggedToken: "",
  login: async () => {},
  signup: async () => {},
  getUserFromLocalStrorage: async () => {},
  logout: () => {},

  user: {
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
    avatarImg: "",
  },
  loggedUser: {} as ILoggedUser,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [loggedToken, setLoggedToken] = useState<string | null>();
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
    name: "",
    email: "",
    address: "",
    _id: "",
  });

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });
  const router = useRouter();

  const signup = async ({ name, email, password }: ISignUp) => {
    try {
      await myAxios.post("http://localhost:8080/auth/signup", {
        email,
        name,
        password,
      });
      await Swal.fire({
        position: "center",
        title: "Та амжилттай бүртгүүллээ",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/login");
    } catch (error: any) {
      console.log("err", error);
      toast.error(`${error.response.data.message as string}`);
    }
  };

  const login = async ({ email, password }: ILogin) => {
    try {
      console.log("User");
      const {
        data: { token, user },
      } = await myAxios.post("http://localhost:8080/auth/login", {
        userEmail: email,
        userPassword: password,
      });

      await Swal.fire({
        position: "center",
        title: "амжилттай Нэвтрэлээ",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));

      router.push("/");
    } catch (error: any) {
      toast.error(` Error ${error.response.data.message as string}`);
      console.log("err", error);
    }
  };

  const getUserFromLocalStrorage = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      console.log("log", storedUser);
      if (!storedUser || !storedToken) {
        toast.error("go to signup ");
      }

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setLoggedUser(parsedUser);
      }

      if (storedToken) {
        try {
          const parsedToken = JSON.parse(storedToken);
          setLoggedToken(parsedToken);
        } catch (error) {
          console.error("Failed to parse token :", error);
        }
      }
    } catch (error: any) {
      alert("Get Error - " + error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  //   useEffect(() => {
  //     getUserFromLocalStrorage();
  //   }, [loggedToken]);

  return (
    <UserContext.Provider
      value={{
        login,
        signup,
        user,
        logout,
        getUserFromLocalStrorage,
        loggedUser,
        loggedToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
