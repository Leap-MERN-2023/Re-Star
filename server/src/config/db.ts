import color from "colors";
import mongoose from "mongoose";

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log(color.bgGreen("Database is connected"));
  } catch (error) {
    console.log(`${error} occured`);
  }
};

{
  /*
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../model/user";

const setupPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.OAUTH_CLIENT_ID as string,
        clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
        sessionKey: "session-key-2024",
        callbackURL: "http://localhost:8080/auth/google/callback",
      },
      (accessToken, refreshToken, profile) => {
        const foundUser = User.findOne();
      }
    )
  );
};

export default setupPassport;


*/
}
