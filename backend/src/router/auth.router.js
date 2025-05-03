import express from "express"
import { checkUser, loginUser, logoutUser, registerUser } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/check", checkUser);

export default authRouter;