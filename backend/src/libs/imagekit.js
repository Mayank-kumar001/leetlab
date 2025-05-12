import ImageKit from "imagekit"
import { apiError } from "./apiError.js";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

export const imagekitUploadFile = async (fileBuffer) => {
    try {
        const data = await imagekit.upload({
            file: fileBuffer,            
            fileName: `${Date.now()}_avatar.jpg`,  
            folder: "/avatars",               
        });
        return data;
    } catch (error) {
        console.log(error)
        new apiError(500, "Something went wrong while uploading the file to imagekit")
    }
}