import { Dispatch, SetStateAction } from "react";

export interface IRestaurantContext {
  createRestaurant: ({
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
  }: IRestaurant) => void;
  isLoading: Boolean;
  handleFetch: (reFetch: boolean) => void;
  refetch: boolean;
  changeOrgStatus: (orgId: string, status: string) => void;
  updateRestaurant: ({
    name,
    category,
    openTime,
    closeTime,
    address,
    description,
    phoneNumber,
  }: IUpdateRestaurant) => void;
  getRestaurantById: (id: string) => void;
  userOrgs: IOrg[];
  deleteRestaurantById: (id: string) => void;
  setOrgIdContext: Dispatch<SetStateAction<string>>;
  orgById: any;
  org: IOrg[];
  getUserRestaurantById: () => void;
  approvedOrgs: IOrg[];
}

export interface IUpdateRestaurant {
  id: string;
  name?: string;
  category?: string;
  openTime?: string;
  closeTime?: string;
  address?: string;
  description?: string;
  phoneNumber?: string;
  image?: any;
}

export interface IRestaurant {
  name: string;
  category: string;
  openTime: string;
  closeTime: string;
  address: string;
  description: string;
  phoneNumber: string;
  imgOne: any;
  imgTwo: any;
  imgThree: any;
  lat: string;
  lng: string;
}

export interface IOrg {
  name: string;
  category: string;
  openTime: string;
  closeTime: string;
  address: string;
  description: string;
  phoneNumber: string;
  images: [];
  _id: string | any;
  role: string;
}

export interface IInfo {
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
  description: string;
  phoneNumber: string;
  _id: string;
  category: any;
}

export interface IMenuContext {
  getMenuByOrgId: (orgId: string) => Promise<void>;
  DeleteMenuByOrgId: (orgId: string, deleteId: string) => Promise<void>;

  menus: IMenu[];
  getMenus: (name: string) => void;
  orgMenus: IMenu[] | null;
}
export interface IMenu {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  organization: string;
  _id: string;
}
