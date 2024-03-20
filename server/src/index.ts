import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import { connectDB } from "./config/db";

import AuthRoutes from "./routes/auth";
import OrgRoutes from "./routes/org";
import UserRoutes from "./routes/user";

const app: Application = express();

const MONGO_URL = process.env.MONGO_URL as string;
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Re-Star");
});

app.use("/auth", AuthRoutes);
app.use("/org", OrgRoutes);
app.use("/user", UserRoutes);

connectDB(MONGO_URL);

app.listen(PORT, () => console.log("Server is active at " + PORT));
