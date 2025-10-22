import express from "express";

import { tokenVerify } from "../middlewares/tokenVerify.js";
import { updateUser, deleteUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.put("/update", tokenVerify, updateUser);
router.delete("/delete/:id", tokenVerify, deleteUser);
router.get("/:id", tokenVerify, getUser);

export default router;