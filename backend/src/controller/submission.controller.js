import { db } from "../libs/db.js";
import { apiError } from "../libs/apiError.js";
import { apiResponse } from "../libs/apiResponse.js";

export const getAllSubmission = async (req, res) => {
    try {
        const allSuubmissions =  await db.submission.findMany({
            where:{
                userId:req.user.id
            }
        })
        res.status(200).json(new apiResponse(200, allSuubmissions, "submission fetched successfully"));
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
            message: "Something went wrong while fetching submissions",
            success: false,
        })
    }
}

export const getSubmissionsForProblem = async (req, res) => {
    try {
        const problemId = req.params.problemId;
        const submission = await db.submission.findMany({
            where:{
                    userId:req.user.id,
                    problemId:problemId 
            },
            include: {
                testcase: true,
            },
            orderBy: {
                createdAt: 'desc',
            }
            
        })
        res.status(200).json(new apiResponse(200, submission, "submission fetched successfully"));
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
            message: "Something went wrong while fetching submissions",
            success: false,
        })
    }
}

export const getAllTheSubmissionsForProblem = async (req, res) => {
    try {
        const problemId = req.params.problemId;
        const submissions = await db.submission.findMany({
            where:{
                    problemId:problemId
            },
            include:{
                testcase : true
            }
        })
        res.status(200).json(new apiResponse(200, submissions, "submission fetched successfully"));
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
            message: "Something went wrong while fetching submissions",
            success: false,
        })
    }
}