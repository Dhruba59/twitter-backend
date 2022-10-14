import express from "express";
import {
  createUser,
  follow,
  unFolollow,
} from "../controller/userController.js";

const router = express.Router();

router.post("/", createUser);

router.put("/:id/follow", follow);
router.put("/:id/unfollow", unFolollow);

export default router;
