"use client";

import { IRestaurantContext, IRestaurant } from "@/interface";
import myAxios from "@/utils/myAxios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserProvider";

export const RestaurantContext = createContext<IRestaurantContext>(
  {} as IRestaurantContext
);

const RestaurantProvider = ({ children }: PropsWithChildren) => {
  const [refetch, setRefetch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [org, setOrg] = useState({});

  const { token } = useContext(UserContext);

  const createRestaurant = async ({
    name,
    category,
    openTime,
    closeTime,
    address,
    description,
    phoneNumber,
    imgOne,
    imgTwo,
    imgThree,
  }: IRestaurant) => {
    try {
      const formdata = new FormData();

      formdata.set("name", name);
      formdata.set("category", category);
      formdata.set("openTime", openTime);
      formdata.set("closeTime", closeTime);
      formdata.set("address", address);
      formdata.set("description", description);
      formdata.set("phoneNumber", phoneNumber);
      formdata.append("images", imgOne);
      formdata.append("images", imgTwo);
      formdata.append("images", imgThree);

      const data = await myAxios.post("/org/add", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(true);

      toast.success("restaurant amjilttai uuslee");

      setIsLoading(!isLoading);
    } catch (error) {
      toast.error(`Алдаа : ${error} `);
    }
  };

  const gesRestaurant = async () => {
    try {
      console.log("storedToken", token);

      const {
        data: { allOrg },
      } = await myAxios.get("/org/");
      console.log("orgfromback", allOrg);
      setOrg(allOrg);
      toast.success("restaurant amjilttai uuslee");
    } catch (error: any) {
      toast.error(`Алдаа : ${error?.response?.data?.message} `);
      console.log("error", error);
    }
  };

  const handleFetch = (reFetch: boolean) => {
    setRefetch(reFetch);
  };

  useEffect(() => {
    gesRestaurant();
  }, [refetch, token]);

  return (
    <RestaurantContext.Provider
      value={{ createRestaurant, isLoading, handleFetch, refetch }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
