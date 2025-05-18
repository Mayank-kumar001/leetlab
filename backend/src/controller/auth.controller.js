import { authSource, userRole } from "../generated/prisma/index.js";
import { apiError } from "../libs/apiError.js";
import { apiResponse } from "../libs/apiResponse.js";
import { db } from "../libs/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import { sendMail } from "../libs/nodeMailerUtility.js";
import axios from "axios"
import { OAuth2Client } from "google-auth-library"
import { generateAccessAndRefreshToken } from "../libs/generateTokens.js";
import { getGoogleAuthUserData } from "../libs/googleAuthUserData.js";
import { imagekitUploadFile } from "../libs/imagekit.js";
import fs, { readFileSync } from "fs"
import { response } from "express";
import { create } from "domain";




export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await db.user.findUnique({
            where: {
                email: email,
            },
        })

        if (existingUser && existingUser.isVerified) {
            throw new apiError(400, "User already exists")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = crypto.randomBytes(3).toString("hex")
        await sendMail(email, verificationCode);

        const user = await db.user.upsert({
            where:{ email },
            create: {
                name,
                email,
                password: hashedPassword,
                verificationCode,
                role: userRole.USER,
                authProvider: authSource.LOCAL,
            },
            update:{
                verificationCode,
                password: hashedPassword,
            }
        })
        console.log("postgresql user", user);

        res.status(200).json(
            new apiResponse(201, {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                isVerified: user.isVerified,
            }, "verification code sent on email")
        )

    } catch (error) {
        console.log(error.message);

        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while registering the user",
            success: false,
        })
    }

};


export const verifyToken = async (req, res) => {
    try {
        const { email, verificationCode } = req.body;

        const user = await db.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new apiError(500, "user not found")
        }
        const isVerified = (verificationCode === user.verificationCode);

        if (!isVerified) throw new apiError(400, "Verification token is invalid");

        const token = generateAccessAndRefreshToken(user);

        const updatedUser = await db.user.update({
            where: {
                email,
            },
            data: {
                refreshToken: token.refreshToken,
                isVerified: true,
                verificationCode: null
            },

        })

        if (updatedUser) {
            res.cookie("accessToken", token.accessToken, {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV !== "development",

            });

            res.cookie("refreshToken", token.refreshToken, {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV !== "development",

            });

            res.status(200).json(new apiResponse(200, {
                id: updatedUser.id,
                email: updatedUser.email,
                name: updatedUser.name,
                role: updatedUser.role,
            }, "User verified successfully"))
        }
    } catch (error) {
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while verifying the user",
            success: false,
        })
    }

}

export const resendVerficationCode = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body)
        if(!email) throw new apiError(400,"Invalid or missing email");
        const verificationCode = crypto.randomBytes(3).toString("hex");
        await db.user.update({
            where:{ email },
            data:{
                verificationCode: verificationCode,
            }
        })
        await sendMail(email, verificationCode);
        res.status(200).json(new apiResponse(200, {}, "Verifcation token sent on email"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while sending verifcation code",
            success: false,
        })
    }

}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new apiError(400, "Email and password are required");
        }
        const user = await db.user.findUnique({
            where: { email },
        })
        if (!user) {
            throw new apiError(401, "User not found");
        }
        if (!user.isVerified) {
            throw new apiError(401, "Email is not verified");
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new apiError(401, "Invalid Credentials");
        }

        const token = generateAccessAndRefreshToken(user);
        const updatedUser = await db.user.update({
            where: {
                email,
            },
            data: {
                refreshToken: token.refreshToken,
                isVerified: true
            },

        })

        if (updatedUser) {
            res.cookie("accessToken", token.accessToken, {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV !== "development",
            });

            res.cookie("refreshToken", token.refreshToken, {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV !== "development",
            });

            res.status(200).json(new apiResponse(200, {
                id: updatedUser.id,
                email: updatedUser.email,
                name: updatedUser.name,
                role: updatedUser.role,
                isVerified: updatedUser.isVerified
            }, "User login succesfull"))
        }
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while the user try to login",
            success: false,
        })
    }

};

export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if(!email){
            throw new apiError(400, "invalid or missing email");
        }
        let user = await db.user.findUnique({
            where:{ email }
        })
        if(!user){
            throw new apiError(400, "invalid or missing email");
        }
        const verificationCode = crypto.randomBytes(3).toString("hex")
        await sendMail(email, verificationCode);

        user = await db.user.update({
            where: {
                email,
            },
            data: {
                verificationCode,
            }
        })

        res.status(200).json(new apiResponse(200, {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }, " verification code sent on email"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while sending verification code",
            success: false,
        })
    }

}
export const resetPassword = async (req, res) => {
    try {
        const { verificationCode, email, newPassword, confirmPassword } = req.body;
        const user = await db.user.findUnique({
            where: {
                email,
            }
        })
        if (verificationCode !== user.verificationCode) throw new apiError(400, "Verification code is invalid or missing");
        if (newPassword !== confirmPassword) throw new apiError(400, "Passwords does not match");

        const hashedPassword = await bcrypt.hash(confirmPassword, 10);

        const updatedUser = await db.user.update({
            where: {
                email,
            },
            data: {
                password: hashedPassword,
            }
        })

        res.status(200).json(new apiResponse(200, {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }, "Password updated"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while the user try to login",
            success: false,
        })
    }


}

export const logoutUser = (req, res) => {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
        });
        res.status(201).json(new apiResponse(201, {}, "User logged out"))
    } catch (error) {
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while the user try to login",
            success: false,
        })
    }
};
export const getUser = (req, res) => {
    return res.status(201).json(new apiResponse(201, req.user, "fectched user"))
};

export const registerByGoogleOAuth = async (req, res) => {
    try {
        const { code } = req.body
        const payload = await getGoogleAuthUserData(code);
        console.log(payload)
        console.log(payload.email)
        const { email, email_verified, name } = payload

        if (!email_verified) throw new apiError(400, "Invalid or missing email address");

        const existingUser = await db.user.findUnique({
            where: {
                email: email,
            },
        })

        if (existingUser) {
            throw new apiError(400, "User already exists")
        }


        const user = await db.user.create({
            data: {
                name,
                email,
                password: null,
                role: userRole.USER,
                authProvider: authSource.GOOGLE
            }
        })
        const token = generateAccessAndRefreshToken(user)
        await db.user.update({
            where: { email },
            data: {
                refreshToken: token.refreshToken,
                isVerified: true,
            }
        })
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",

        });

        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",

        });

        res.status(201).json(new apiResponse(201, {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }, "User created successfully"))






    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while generating tokens",
            success: false,
        })
    }
}

export const loginByGoogleOAuth = async (req, res) => {
    try {
        const { code } = req.body
        const payload = await getGoogleAuthUserData(code);
        console.log(payload)
        console.log(payload.email)
        const { email, email_verified, name } = payload
        if (!email_verified) throw new apiError(400, "Invalid or missing email address");

        const user = await db.user.findUnique({
            where: { email }
        })

        if (!user) throw new apiError(400, "Invalid or missing email address");

        const token = generateAccessAndRefreshToken(user);

        await db.user.update({
            where: { email },
            data: {
                refreshToken: token.refreshToken,
                isVerified: true,
            }
        })
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",

        });

        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",

        });

        res.status(200).json(new apiResponse(200, {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }, "User login successfull"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while the user try to login",
            success: false,
        })
    }
}

export const uploadImage = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email || !req.file) throw new apiError(400, "Invalid file or email");

        const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];
        if (!allowedTypes.includes(req.file.mimetype)) {
            throw new apiError(400, "Unsupported file type. Only images are allowed.");
        }

        const fileBuffer = readFileSync(req.file.path);
        const data = await imagekitUploadFile(fileBuffer);
        if (!data.url) throw new apiError(400, "Image upload failed");

        const user = db.user.update({
            where: {
                email
            },
            data: {
                avatar: data.url,
            }
        })

        res.status(200).json(new apiResponse(200, user.avatar, "avatar uploaded succesfully"))

    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while uploading file",
            success: false,
        })
    } finally {
        if (req.file?.path) {
            try {
                unlinkSync(req.file.path);
            } catch (err) {
                return res.status(500).json({
                    statusCode: 500,
                    message: "Something went wrong while unlinking the file from server",
                    success: false,
                })
            }
        }
    }
}




















