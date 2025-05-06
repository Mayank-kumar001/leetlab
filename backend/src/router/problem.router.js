import express from "express";
import { createProblem, deleteProblem, getAllProblems, getProblemById, getSolvedProblems, updateProblem } from "../controller/problem.controller.js";
import { isAdmin, isLoggedIn } from "../middleware/auth.middleware.js";

const problemRouter = express.Router();

problemRouter.post("/create-problem", isLoggedIn, isAdmin, createProblem);
problemRouter.get("/get-all-problems", isLoggedIn, getAllProblems);
problemRouter.get("/get-problem/:id", isLoggedIn, getProblemById);
problemRouter.put("/update-problem/:id", isLoggedIn, isAdmin, updateProblem);
problemRouter.delete("/delete-problem/:id", isLoggedIn, isAdmin, deleteProblem);
problemRouter.get("/get-Solved-problems", isLoggedIn, getSolvedProblems);


export default problemRouter;