import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Set-Cookie', '*']
}))

app.get("/", (req, res) => {
    res.send("Hello world");
})

// importing routes
import authRouter from './router/auth.router.js';
import problemRouter from './router/problem.router.js';
import executionRouter from './router/execution.router.js';
import submissionRouter from './router/submission.router.js';
import playlistRouter from './router/playlist.router.js';
import paymentRouter from './router/payment.router.js';
import taskRouter from './router/task.router.js';
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/problem", problemRouter);
app.use("/api/v1/execute-code", executionRouter);
app.use("/api/v1/execute-code", executionRouter);
app.use("/api/v1/submission", submissionRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/task", taskRouter);


app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}/`);
})