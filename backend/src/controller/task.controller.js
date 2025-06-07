import express from "express"
import { db } from "../libs/db.js"
import { apiResponse } from "../libs/apiResponse.js"
import { apiError } from "../libs/apiError.js"

export const getAllTask = async (req, res) => {
    try {
        const tasks = await db.Task.findMany({
            where: {
                userId: req.user.id,
            }
        })
        res.status(200).json(new apiResponse(200, tasks, "All tasks fetched succesfully"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while fetching the tasks",
            success: false,
        })
    }
}
export const addTask = async (req, res) => {
    try {
        const { deadline, task, notifyAt } = req.body
        const addedTask = await db.Task.create({
            data: {
                userId: req.user.id,
                deadline,
                task
            }
        })
        res.status(200).json(new apiResponse(200, addedTask, "Task succesfully added"))

    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while adding the task",
            success: false,
        })
    }
}
export const removeTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        await db.Task.delete({
            where: {
                id: taskId,
                userId: req.user.id
            }
        })
        res.status(200).json(new apiResponse(200, {}, "taskRemoved succesfully"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while removing the task",
            success: false,
        })
    }
}
export const markTaskDone = async (req, res) => {
    try {
        const { taskId } = req.params;
        await db.task.update({
            where: {
                id: taskId,
                userId: req.user.id
            },
            data: {
                status: "COMPLETED"
            }
        })
        await db.Notification.deleteMany({
            where: {
                taskId,
                userId: req.user.id
            }
        })
        res.status(200).json(new apiResponse(200, {}, "Task marked done succesfully"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while marking the task done",
            success: false,
        })
    }
}

export const addNotifications = async (req, res) => {
    try {
        console.log("kese hoooo")
        const { taskId } = req.params
        console.log(req.body);
        const { notifications } = req.body

        const notificationData = notifications.map((elem) => ({
            notifyAt: elem,
            taskId,
            userId: req.user.id
        }))

        const newNotification = await db.Notification.createMany({
            data: notificationData
        })
        res.status(200).json(new apiResponse(200, newNotification, "Notification scheduled successfully"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong scheduling new notification",
            success: false,
        })
    }
}

export const removeNotification = async (req, res) => {
    try {
        const { taskId } = req.params
        await db.Notification.delete({
            where: {
                taskId,
                userId: req.user.id,
            }
        })
        res.status(200).json(new apiResponse(200, {}, "notification removed sucessfully"))
    } catch (error) {
        console.log(error)
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while removing notification",
            success: false,
        })
    }
}