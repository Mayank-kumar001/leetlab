import express from "express"
import { isLoggedIn } from "../middleware/auth.middleware.js"
import { createPaymentLink, registerPlaylistPurchase } from "../controller/payment.controller.js"

const paymentRouter = express.Router()

paymentRouter.post("/create-payment-link", isLoggedIn, createPaymentLink)
paymentRouter.post("/register-playlist-purchase", isLoggedIn, registerPlaylistPurchase)

export default paymentRouter