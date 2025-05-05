import { getLanguageId, createSubmissionBatch, getSubmissionResultBatch } from "../libs/judge0Utility.js";
import { apiError } from "../libs/apiError.js";
import { apiResponse } from "../libs/apiResponse.js";
import { db } from "../libs/db.js";

export const createProblem = async (req, res) => {
    try {
        const { title, description, difficulty, tags, examples, constraints, hints, editorials, testCases, codesnippets, referenceSolution } = req.body;

        if (req.user.role !== "ADMIN") {
            throw new apiError(403, "Only admins are allowed");
        }

        for (const [language, solutionCode] of Object.entries(referenceSolution)) {
            const languageId = getLanguageId(language);
            if (!languageId) {
                throw new apiError(400, `${language} language is not supported`);
            }

            const submissions = testCases.map(({ input, output }) => {
                return {
                    language_id: languageId,
                    source_code: solutionCode,
                    stdin: input,
                    expected_output: output,
                }
            })

            const createSubmission = await createSubmissionBatch(submissions);

            const tokens = createSubmission.map(({ token }) => token);

            const getSubmissionResult = await getSubmissionResultBatch(tokens);

            console.log("return waala maal aaga gaya", getSubmissionResult);

            for (let i = 0; i < getSubmissionResult.length; i++) {
                if (getSubmissionResult[i].status_id !== 3) {
                    throw new apiError(400, `Test case ${i + 1} failed for ${language} language`);
                }
            }
        }

        const newProblem = await db.problem.create({
            data: {
                title,
                description,
                difficulty,
                tags,
                examples,
                constraints,
                testCases,
                hints, 
                editorials,
                codesnippets,
                referenceSolution,
                userId: req.user.id,
            }
        })
        if(!newProblem){
            throw new apiError(500, "Problem not created"); 
        }
        return res.status(201).json(new apiResponse(201, {
            title,
            description,
            difficulty,
            tags,
            examples,
            constraints,
            testCases,
            hints, 
            editorials,
            codesnippets,
            referenceSolution,
            userId: req.user.id,
        }, "newProblem created succesfully"))


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
            message: "Something went wrong while the user try to create problem",
            success: false,
        })
    }
}
export const getAllProblems = async (req, res) => {
    try {

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
}
export const getProblemById = async (req, res) => {
    try {

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
}
export const updateProblem = async (req, res) => {
    try {

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
}
export const deleteProblem = async (req, res) => {
    try {

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
}
export const getSolvedProblems = async (req, res) => {
    try {

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
}