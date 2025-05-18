import express from "express"
import {forgetPassword, getUser, loginByGoogleOAuth, loginUser, logoutUser, registerByGoogleOAuth, registerUser, resendVerficationCode, resetPassword, uploadImage, verifyToken } from "../controller/auth.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/verify", verifyToken);
authRouter.post("/resend-verificationCode", resendVerficationCode);
authRouter.post("/login", loginUser);
authRouter.post("/register-googleOAuth", registerByGoogleOAuth);
authRouter.post("/login-googleOAuth", loginByGoogleOAuth);
authRouter.post("/forget-password", forgetPassword);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/logout",isLoggedIn, logoutUser);
authRouter.post("/upload-image", upload.single('avatar'), uploadImage);
authRouter.get("/me",isLoggedIn, getUser);

export default authRouter;