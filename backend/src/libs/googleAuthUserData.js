import { apiError } from "./apiError.js"
import axios from "axios"
import { OAuth2Client } from "google-auth-library"
export const getGoogleAuthUserData = async (code) => {
    try {
        
            console.log("mycodeeeeeee", code)
            if (!code) throw new apiError(400, "Invalid or missing google auth code")
            const params = new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                code,
                grant_type: "authorization_code",
            })
    
            const { data } = await axios.post("https://oauth2.googleapis.com/token", params, { headers: { "Content-Type": "application/x-www-form-urlencoded", } })
    
            // decoding token
            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: data.id_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
    
            const payload = ticket.getPayload();

            return payload;
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            throw new apiError(error.statusCode, error.message)
        }
        throw new apiError(500, "something went wrong while fetching user data")
    }
}