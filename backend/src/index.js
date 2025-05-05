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
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/problem", problemRouter);


app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}/`);
})