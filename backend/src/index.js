import express from 'express';
import dotenv from "dotenv";
import authRouter from '../router/auth.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("api/v1/auth", authRouterr);

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}/`);
})