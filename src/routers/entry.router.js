import express from "express";
import { signin, signup } from "../controllers/singController.js";
import { signUpValidator } from "../middlewares/entry.middleware.js";
import { signInValidator } from "../middlewares/entry.middleware.js";

const router = express.Router();

router.post("/signup", signUpValidator, signup);
router.post("/signin", signInValidator, signin);

export default router;
