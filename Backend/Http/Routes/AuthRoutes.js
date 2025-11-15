import { Router } from "express";
const router = Router();

// ✅ Correct relative paths
import { Postsignup } from "../controllers/Signup.js";
import { Avatarcreate } from "../controllers/Avatar.js";

// Routes
router.post("/signup", Postsignup);
router.post("/avatar/create", Avatarcreate);

export default router;
