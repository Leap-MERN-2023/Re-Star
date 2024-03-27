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
  }: IRestaurant) => void;
  isLoading: Boolean;
  handleFetch: (reFetch: boolean) => void;
  refetch: boolean;
  updateRestaurant: ({
    name,
    category,
    openTime,
    closeTime,
    address,
    description,
    phoneNumber,
  }: IUpdateRestaurant) => void;
  getRestaurantById: () => void;
  userOrgs: IOrg[];
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
}

export interface IRestaurant {
  name: string;
  category: string;
  openTime: string;
  closeTime: string;
  address: string;
  description: string;
  phoneNumber: string;
  imgOne: File;
  imgTwo: File;
  imgThree: File;
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
}
