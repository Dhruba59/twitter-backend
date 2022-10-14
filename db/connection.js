import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/twitter-clone");
  } catch (err) {
    req.status(500).send("Database connection error");
  }
};
