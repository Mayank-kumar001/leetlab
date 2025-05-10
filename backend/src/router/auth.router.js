import express from "express"
import {forgetPassword, getUser, loginUser, logoutUser, registerUser, resetPassword, verifyToken } from "../controller/auth.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/verify", verifyToken);
authRouter.post("/login", loginUser);
authRouter.post("/forget-password", isLoggedIn, forgetPassword);
authRouter.post("/reset-password", isLoggedIn, resetPassword);
authRouter.post("/logout",isLoggedIn, logoutUser);
authRouter.get("/me",isLoggedIn, getUser);

export default authRouter;