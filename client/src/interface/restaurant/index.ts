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
}
