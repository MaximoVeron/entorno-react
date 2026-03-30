import { Router } from "express";
import {
  loginUser,
  logOutUser,
  registerUser,
} from "../controllers/auth.controller.js";

export const authRouter = Router();
authRouter.post("/auth/register", registerUser);
authRouter.post("/auth/login", loginUser);
authRouter.post("/auth/logout", logOutUser);
