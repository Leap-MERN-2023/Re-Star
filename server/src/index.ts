import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";

import AuthRoutes from "./routes/auth";

dotenv.config();
const app: Application = express();

const MONGO_URL = process.env.MONGO_URL as string;

connectDB(MONGO_URL);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Re-Star");
});

app.use("/auth", AuthRoutes);

app.listen(PORT, () => console.log("Server is active at " + PORT));
