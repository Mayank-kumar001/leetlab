import express from  "express"
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { executeCode } from "../controller/execution.controller.js";

const executionRouter = express.Router();

executionRouter.post("/", isLoggedIn, executeCode);

export default executionRouter
