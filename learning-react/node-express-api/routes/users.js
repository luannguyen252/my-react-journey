import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// SHOW DATA
router.get("/", getUsers);

// CREATE DATA
router.post("/", createUser);

// GET USER ID
router.get("/:id", getUser);

// DELETE USER
router.delete("/:id", deleteUser);

// UPDATE DATA
router.patch("/:id", updateUser);

export default router;
