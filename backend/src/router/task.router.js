import express from "express"
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { addNotifications, addTask, getAllTask, markTaskDone, removeTask } from "../controller/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/all-tasks",isLoggedIn, getAllTask)
taskRouter.post("/add-task",isLoggedIn, addTask)
taskRouter.delete("/remove-task/:taskId",isLoggedIn, removeTask)
taskRouter.get("/mark-task-done/:taskId",isLoggedIn, markTaskDone)
taskRouter.post("/add-notification/:taskId",isLoggedIn, addNotifications)

export default taskRouter