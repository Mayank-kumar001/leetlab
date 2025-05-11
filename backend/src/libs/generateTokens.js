import jwt from "jsonwebtoken"
export const generateAccessAndRefreshToken = (user) => {
    return {

        accessToken: jwt.sign({ id: user.id }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN }),
        refreshToken: jwt.sign({ id: user.id }, process.env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN })
    }
}