"use client";

import {
  IRestaurantContext,
  IRestaurant,
  IUpdateRestaurant,
  IOrg,
} from "@/interface";
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
  const [org, setOrg] = useState([]);

  const [userOrgs, setUserOrgs] = useState<IOrg[]>([]);
  const [orgById, setOrgById] = useState({});

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

  const updateRestaurant = async ({
    id,
    name,
    category,
    openTime,
    closeTime,
    address,
    description,
    phoneNumber,
  }: IUpdateRestaurant) => {
    try {
      const data = await myAxios.put(
        "/org/update",
        {
          id,
          newUpdate: {
            name,
            category,
            openTime,
            closeTime,
            address,
            description,
            phoneNumber,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(true);

      toast.success("restaurant amjilttai shinechlegdlee");

      setIsLoading(!isLoading);
    } catch (error) {
      toast.error(`Алдаа : ${error} `);
    }
  };

  const getRestaurant = async () => {
    try {
      const {
        data: { allOrg },
      } = await myAxios.get("/org/");
      console.log("orgfromback", allOrg);
      setOrg(allOrg);
    } catch (error: any) {
      toast.error(`Алдаа : ${error?.response?.data?.message} `);
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (token) {
      getRestaurant();
      console.log("token in RP", token);
    }
  }, [refetch, token]);

  const handleFetch = (reFetch: boolean) => {
    setRefetch(reFetch);
  };

  const [orgIdContext, setOrgIdContext] = useState("");

  const getRestaurantById = async () => {
    try {
      const {
        data: { findOrg },
      } = await myAxios.get(`/org/${orgIdContext}`);
      console.log("findOrg", findOrg);
      setOrgById([findOrg]);
    } catch (error: any) {
      toast.error(
        `Алдаа : ${error.response ? error.response.data.message : error} `
      );
    }
  };
  useEffect(() => {
    if (orgIdContext) {
      getRestaurantById();
    }
  }, [orgIdContext]);
  const deleteRestaurantById = async (id: string) => {
    const tokenInstance =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmJlMGEzYmIzOTBkZDc2YzY2ZmY3MCIsImlhdCI6MTcxMTUzMDI3NywiZXhwIjoxNzExNjE2Njc3fQ.jkAr2VVpXcAMprjlrxnJi8f6tgvSi7zinr8Z6UjZfUg";
    try {
      const {
        data: { findOrg },
      } = await myAxios.delete(`/org/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenInstance}`,
        },
      });

      setUserOrgs([findOrg]);
    } catch (error: any) {
      toast.error(
        `Алдаа : ${error.response ? error.response.data.message : error} `
      );
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        userOrgs,
        createRestaurant,
        isLoading,
        handleFetch,
        refetch,
        updateRestaurant,
        getRestaurantById,
        deleteRestaurantById,
        org,
        setOrgIdContext,
        orgById,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
