import { apiError } from "../libs/apiError.js"
import jwt, { decode } from "jsonwebtoken"
import { db } from "../libs/db.js";
import { generateAccessAndRefreshToken } from "../libs/generateTokens.js";



export const isLoggedIn = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken
        const refreshToken = req.cookies.refreshToken

        if (!refreshToken) throw new apiError(401, "Unauthorized user");

        let decodedToken;

        try {
            decodedToken = await jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET);
        } catch (error) {
            const refreshDecodedToken = await jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
            const user = await db.user.findUnique({
                where: {
                    id: refreshDecodedToken.id
                },
                select: {
                    refreshToken: true,
                }
            })
            if (!user || user.refreshToken != refreshToken) throw new apiError(403, "Invalid or missing refresh token");

            const token = generateAccessAndRefreshToken(user);

            await db.user.update({
                where: {
                    id: refreshDecodedToken.id,
                },
                data: {
                    refreshToken: token.refreshToken,
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

            decodedToken = { id: refreshDecodedToken.id };

        }

        const user = await db.user.findUnique({
            where: { id: decodedToken.id },
            select: {
                id: true,
                avatar: true,
                name: true,
                email: true,
                role: true,
            },
        })
        if (!user) {
            throw new apiError(401, "User not found");
        }
        req.user = user;
        next();
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

}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await db.user.findUnique({
            where: { id: req.user.id }
        })
        if (!user || user.role !== "ADMIN") {
            throw new apiError(403, "Access denied - Admins only");
        }
        next();
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
            message: "Admins are only Allowed to access",
            success: false,
        })
    }
}