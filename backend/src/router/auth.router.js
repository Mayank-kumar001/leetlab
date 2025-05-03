import express from "express"
import {getUser, loginUser, logoutUser, registerUser } from "../controller/auth.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout",isLoggedIn, logoutUser);
authRouter.get("/me",isLoggedIn, getUser);

export default authRouter;