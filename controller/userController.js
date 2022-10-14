import mongoose from "mongoose";
import { User } from "../db/schema.js";

export const createUser = async (req, res) => {
  const newUser = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
  await newUser.save((err) => {
    if (err) res.status(500).json({ message: "failed to create new user" });
    else res.status(200).json({ message: "successfully created new user" });
  });
};

export const follow = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  user.following.push(req.body.following_id);

  user.save((err) => {
    if (err) res.status(500).json({ message: "failed to follow" });
    else res.status(200).json({ message: "successfully followed" });
  });
};

export const unFolollow = (req, res) => {
  res.json({ msg: "unfollow" });
};
