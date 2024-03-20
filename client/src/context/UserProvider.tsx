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
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import {
  IUserContext,
  ILoggedUser,
  IUser,
  ISignUp,
  ILogin,
} from "../interface";
import { Value } from "@radix-ui/react-select";
import { ref } from "yup";

export const UserContext = createContext<IUserContext>({
  loggedToken: "",
  login: async () => {},
  signup: async () => {},
  getUserFromLocalStrorage: async () => {},
  logout: () => {},

  user: {
    name: "",
    email: "",
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
    _id: "",
  });
  const [refresh, setRefresh] = useState(false);
  const { toast } = useToast();

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const router = useRouter();

  const signup = async ({ name, email, password }: ISignUp) => {
    try {
      console.log("data", name, email, password);
      await myAxios.post("/auth/signup", {
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
      toast({ description: `${error?.response?.data?.message as string}` });
    }
  };

  const login = async ({ email, password }: ILogin) => {
    try {
      console.log("User");
      const {
        data: { token, user },
      } = await myAxios.post("/auth/login", {
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
      setRefresh(!refresh);

      router.push("/");
    } catch (error: any) {
      toast({ description: ` Error ${error.response.data.message as string}` });
      console.log("err", error);
    }
  };

  const getUserFromLocalStrorage = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (!storedUser || !storedToken) {
        toast({ description: "go to signup " });
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
      toast({ description: "Get Error - " + error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setRefresh(!refresh);
    setLoggedUser({ name: "", email: "", _id: "" });
  };

  //   useEffect(() => {
  //     getUserFromLocalStrorage();
  //   }, [loggedToken]);

  useEffect(() => {
    getUserFromLocalStrorage();
  }, [refresh]);

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
