export interface IUser {
  name: string;
  email: string;
  password?: string;
  rePassword?: string;
  avatarImg?: string;
}

export interface IUserContext {
  logout: () => void;
  loggedUser: ILoggedUser;
  changeUserProfile: ({ changedUser }: IChangeUserProfile) => {};
  token: string | null | undefined;
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
  password?: string;
  _id?: string;
  role: string;
}

export interface IForgotPassUser {
  email: string;
  password: string;
  rePassword?: string;
  otp: string;
}

export interface IChangeUserProfile {
  changedUser: { name: string; password: string; email: string };
}
