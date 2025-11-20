import { Router } from "express";
const router = Router();

// Controllers
import { Postsignup } from "../Controllers/Signup.js";
import { Postsignin } from "../Controllers/SignIn.js";
import { Avatarcreate } from "../controllers/Avatar.js";
import { Habitcreate } from "../controllers/Habit.js";

// Routes
router.post("/signup", Postsignup);
router.post("/signin", Postsignin);
router.post("/avatar/create", Avatarcreate);
router.post("/habit/create", Habitcreate);

export default router;
