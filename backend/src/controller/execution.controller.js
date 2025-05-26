import { apiError } from "../libs/apiError.js"
import { db } from "../libs/db.js";
import { submissionStatus } from "../generated/prisma/index.js";
import { createSubmissionBatch, getSubmissionResultBatch, getLanguageName } from "../libs/judge0Utility.js";
import { apiResponse } from "../libs/apiResponse.js";
export const executeCode = async (req, res) => {
    try {
        const { problemId, source_code, language_id, stdin, expected_output } = req.body;



        if (
            !Array.isArray(stdin) ||
            !Array.isArray(expected_output) ||
            stdin.length === 0 ||
            expected_output.length !== stdin.length
        ) {
            throw new apiError(400, "Invalid or missing testcases")
        }

        const submissions = stdin.map((input) => ({
            language_id,
            source_code,
            stdin: input,

        }))

        const createSubmission = await createSubmissionBatch(submissions);
        const tokens = createSubmission.map(({ token }) => token);
        const getSubmissionResult = await getSubmissionResultBatch(tokens);
        // console.log("return waala maal aaga gaya", getSubmissionResult);

        let allPassed = true;
        const detailedResult = getSubmissionResult.map((result, i) => {
            const stdout = result.stdout?.trim();
            const expectedOutput = expected_output[i]?.trim();
            const passed = (stdout === expectedOutput);
            if (!passed) {
                allPassed = false;
            }
            return {
                testCase: i + 1,
                passed,
                stdout,
                expected: expectedOutput,
                stderr: result.stderr || null,
                compile_output: result.compile_output || null,
                status: result.status.description,
                memory: result.memory ? `${result.memory} KB` : undefined,
                time: result.time ? `${result.time} s` : undefined,
            }

        })
        console.log("detailed result", detailedResult);

        const submission = await db.submission.create({
            data: {
                problemId,
                userId: req.user.id,
                language: getLanguageName(language_id),
                sourceCode: source_code,
                stdin: stdin.join("\n"),
                stdout: JSON.stringify(detailedResult.map((r) => r.stdout)),
                stderr: (detailedResult.map((r) => r.stderr))
                    ? JSON.stringify(detailedResult.map((r) => r.stderr))
                    : null,
                compileOutput: (detailedResult.map((r) => r.compile_output))
                    ? JSON.stringify(detailedResult.map((r) => r.compile_output))
                    : null,
                status: allPassed ? submissionStatus.ACCEPTED : submissionStatus.WRONG_ANSWER,
                memory: (detailedResult.some((r) => r.memory))
                    ? JSON.stringify(detailedResult.map((r) => r.memory))
                    : null,
                time: (detailedResult.some((r) => r.time))
                    ? JSON.stringify(detailedResult.map((r) => r.time))
                    : null,
            }
        })
        if (!submission) {
            throw new apiError(500, "Something went wrong while creating submission");
        }

        // if all testcases is passed --> allPasses -> true

        const problemDone = await db.problemSolved.upsert({
            where: {
                userId_problemId: { userId: req.user.id, problemId }
            },
            update: {},
            create: {
                userId: req.user.id,
                problemId,
            }
        })

        if (!problemDone) {
            throw new apiError(500, "Something went wrong while marking the problem done");
        }

        const testcaseResults = detailedResult.map((r) => {
            const status =  submissionStatus[((r.status).toUpperCase()) !== "ACCEPTED" ? "WRONG_ANSWER" :  "ACCEPTED"]
            console.log("mystatus", (r.status).toUpperCase())
            // const status = r.status
            console.log("status", status);
            return {
            testCase: r.testCase,
            submissionId: submission.id,
            passed:r.passed,
            stdout: r.stdout,
            expected: r.expected,
            stderr: r.stderr,
            compileOutput: r.compile_output,
            status: status,
            memory: r.memory,
            time: r.time,

        }})

        await db.testcase.createMany({
            data: testcaseResults
        });

        const submissionWithTestCase = await db.submission.findUnique({
            where: { id: submission.id },
            include: {
                testcase: true,
            }
        })
        res.status(200).json(new apiResponse(200, submissionWithTestCase, "submission created successfully"));



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
            message: "Something went wrong while execution of source code",
            success: false,
        })
    }
}