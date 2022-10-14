import express from "express";
import * as dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import tweetRoutes from "./routes/tweetRoutes.js";
import { connectDB } from "./db/connection.js";

dotenv.config();

const app = express();

connectDB();
app.use(express.json());

app.use("/tweet", tweetRoutes);
app.use("/user", userRoutes);

app.listen(process.env.PORT ?? 5000, () =>
  console.log(`Started listening on port ${process.env.PORT}`)
);
