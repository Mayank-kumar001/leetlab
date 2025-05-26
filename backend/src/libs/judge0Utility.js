import axios from "axios";
import { apiError } from "./apiError.js";

export const getLanguageId = (language) => {
    const languageMap = {
        "JAVA": 62,
        "JAVASCRIPT": 63,
        "PYTHON": 71,
    }
    return languageMap[language.toUpperCase()];
}
export const createSubmissionBatch = async (submissions) => {
    console.log("submission", submissions)
    try {
        const { data } = await axios.post(`${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`, { submissions, })
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        console.log("helllo kids", error);
        throw new apiError(500, "Something went wrong while creating submmissions batch on judge0");
        // console.log(error);
        // return res.status(500).json({
        //     statusCode: 500,
        //     message: "Something went wrong while creating submmissions batch on judge0",
        //     success: false,
        // })
    }
}

const sleep = async (time) => {
    await new Promise((resolve) => setTimeout(resolve, time));
}

export const getSubmissionResultBatch = async (tokens) => {
    //will do polling here
    const tokenStr = tokens.join(",");

    while (true) {
        try {
            const result = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/batch?tokens=${tokenStr}&base64_encoded=false&fields=token,stdout,stderr,status_id,language_id,time,memory,compile_output,message,status`)
            // const result = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/batch`,{
            //     params:{
            //         tokens:tokenStr,
            //         base64_encoded:false,
            //     }
            // })


            const filterobj = result.data.submissions.filter((e) => (e.status_id === 1 || e.status_id === 2));


            if (filterobj.length === 0) {

                return result.data.submissions;

            }
            await sleep(2000);

        } catch (error) {
            console.log(error);
            throw new apiError(500, "Something went wrong while getting submmissions batch(polling) on judge0");
        }
    }



}
export const getLanguageName = (languageId) => {
    const LANGUAGE_NAMES = {
        74: "TypeScript",
        63: "JavaScript",
        71: "Python",
        62: "Java",
    }

    return LANGUAGE_NAMES[languageId] || "Unknown"
}