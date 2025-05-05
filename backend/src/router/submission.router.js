import express from  "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { getAllSubmission,getSubmissionsForProblem, getAllTheSubmissionsForProblem } from "../controller/submission.controller.js";

const submissionRouter = express.Router();
submissionRouter.get("/get-all-submissions" , isLoggedIn, getAllSubmission);
submissionRouter.get("/get-submission/:problemId" , isLoggedIn, getSubmissionsForProblem)
submissionRouter.get("/get-submissions-count/:problemId" , isLoggedIn, getAllTheSubmissionsForProblem)

export default submissionRouter