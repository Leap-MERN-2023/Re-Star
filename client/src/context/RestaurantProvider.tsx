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
import { MenuContext } from "./MenuProvider";

export const RestaurantContext = createContext<IRestaurantContext>(
  {} as IRestaurantContext
);

const RestaurantProvider = ({ children }: PropsWithChildren) => {
  const [refetch, setRefetch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [org, setOrg] = useState<IOrg[]>([]);
  const [approvedOrgs, setApprovedOrgs] = useState<IOrg[]>([]);

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
    lat,
    lng,
  }: IRestaurant) => {
    try {
      setIsLoading(!isLoading);
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
      formdata.set("lat", lat);
      formdata.set("lng", lng);

      const data = await myAxios.post("/org/add", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("restaurant amjilttai uuslee");
      console.log("RES DATAAA====>", formdata);
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
          orgId: id,
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
        data: { allOrgs },
      } = await myAxios.get("/org");
      console.log("All Org :", allOrgs);
      setOrg(allOrgs);
    } catch (error: any) {
      toast.error(`Алдаа : ${error?.response?.data?.message} `);
      console.log("error", error);
    }
  };

  const getApprovedOrgs = async () => {
    try {
      const {
        data: { approvedOrgs },
      } = await myAxios.get("/org/get/approved");

      setApprovedOrgs(approvedOrgs);
    } catch (error: any) {
      toast.error(`Алдаа : ${error?.response?.data?.message} `);
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (token) {
      getRestaurant();
      getApprovedOrgs();
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
      setOrgById(findOrg);
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

  const getUserRestaurantById = async () => {
    try {
      const {
        data: { findOrg },
      } = await myAxios.get("/org/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserOrgs([findOrg]);
    } catch (error: any) {
      toast.error(
        `Алдаа : ${error.response ? error.response.data.message : error} `
      );
    }
  };

  const deleteRestaurantById = async (id: string) => {
    try {
      const {
        data: { findOrg },
      } = await myAxios.delete(`/org/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserOrgs([findOrg]);
      toast.success("deleted successfully");
    } catch (error: any) {
      toast.error(
        `Алдаа : ${error.response ? error.response.data.message : error} `
      );
    }
  };

  const changeOrgStatus = async (orgId: string, status: string) => {
    try {
      await myAxios.post(
        `/org/changeStatus`,
        {
          orgId,
          status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("successfully changed restaurant status");
      getRestaurant();
    } catch (error: any) {
      toast.error("error :", error);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        org,
        userOrgs,
        createRestaurant,
        isLoading,
        handleFetch,
        refetch,
        updateRestaurant,
        getRestaurantById,
        deleteRestaurantById,
        getUserRestaurantById,
        setOrgIdContext,
        orgById,
        changeOrgStatus,
        approvedOrgs,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
