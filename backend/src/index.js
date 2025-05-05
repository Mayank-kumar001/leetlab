import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello world");
})

// importing routes
import authRouter from './router/auth.router.js';
import problemRouter from './router/problem.router.js';
import executionRouter from './router/execution.router.js';
import submissionRouter from './router/submission.router.js';
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/problem", problemRouter);
app.use("/api/v1/execute-code", executionRouter);
app.use("/api/v1/execute-code", executionRouter);
app.use("/api/v1/submission", submissionRouter);


app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}/`);
})