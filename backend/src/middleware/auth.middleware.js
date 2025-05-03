import { apiError } from "../libs/apiError.js"
import jwt from "jsonwebtoken"
import { db } from "../libs/db.js";

export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        console.log(token);
        if(!token){
            throw new apiError(401, "Unauthorized user");
        }
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    
        const user = await db.user.findUnique({
            where:{id: decodedToken.id},
            select:{
                id: true,
                avatar: true,
                name: true,
                email: true,
                role: true,
            },
        })
        if(!user){
            throw new apiError(401, "User not found"); 
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        if(error instanceof apiError){
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