import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { connectDB } from "./config/db";

import AuthRoutes from "./routes/auth";
import OrgRoutes from "./routes/org";
import UserRoutes from "./routes/user";
import ReviewRoutes from "./routes/review";
import ResetPassRoutes from "./routes/ResetPass";
import CategoryRoutes from "./routes/category";
import UploadRoutes from "./routes/upload";
import errorHandler from "./middleware/errorHandler";
import FavoriteRoutes from "./routes/favorite";
import MenuRoutes from "./routes/menu";

const app: Application = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Re-Star It is Review giving website");
});

app.use("/auth", AuthRoutes);
app.use("/category", CategoryRoutes);
app.use("/org", OrgRoutes);
app.use("/review", ReviewRoutes);
app.use("/menu", MenuRoutes);
app.use("/user", UserRoutes);
app.use("/upload", UploadRoutes);
app.use("/api/resetPass", ResetPassRoutes);
app.use("/favorite", FavoriteRoutes);

app.use(errorHandler);

const MONGO_URL = process.env.MONGO_URL as string;
connectDB(MONGO_URL);

app.listen(PORT, () => console.log("Server is active at " + PORT));
