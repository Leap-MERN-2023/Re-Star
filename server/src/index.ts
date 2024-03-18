import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Re-Star");
});

const MONGO_URL = process.env.MONGO_URL as string;

connectDB(MONGO_URL);

app.listen(PORT, () => console.log("Server is active at " + PORT));
