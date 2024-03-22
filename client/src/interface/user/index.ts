export interface IUser {
  name: string;
  email: string;
  password?: string;
  rePassword?: string;
  avatarImg?: string;
}

export interface IUserContext {
  user: IUser;
  login: ({ email, password }: ILogin) => {};
  logout: () => void;
  signup?: ({ name, email, password }: ISignUp) => {};
  getUserFromLocalStrorage: () => {};
  loggedUser: ILoggedUser;
  loggedToken: string | null | undefined;
}
export interface ISignUp {
  name: string;
  password: string;
  email: string;
}

export interface ILogin {
  password: string;
  email: string;
}

export interface ILoggedUser {
  name: string;
  email: string;
  _id: string;
}

export interface IForgotPassUser {
  email: string;
  password: string;
  rePassword?: string;
  otp: string;
}
