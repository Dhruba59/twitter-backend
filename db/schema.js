import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  tweets: [mongoose.Schema.ObjectId],
  following: [mongoose.Schema.ObjectId],
});

export const tweetSchema = new mongoose.Schema(
  {
    text: String,
    author: [mongoose.Schema.ObjectId],
    tags: [mongoose.Schema.ObjectId],
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);
export const Tweet = new mongoose.model("Tweet", tweetSchema);
