import { userRole } from "../generated/prisma/index.js";
import { apiError } from "../libs/apiError.js";
import { apiResponse } from "../libs/apiResponse.js";
import { db } from "../libs/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await db.user.findUnique({
            where: {
                email: email,
            },
        })

        if (existingUser) {
            throw new apiError(400, "User already exists")  
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: userRole.USER
            }
        })
        console.log("postgresql user", user);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
        })
        res.status(201).json(
            new apiResponse(201, {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            }, "User created")
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
export const loginUser = (req, res) => {
    
};
export const logoutUser = (req, res) => {

};
export const checkUser = (req, res) => {

};