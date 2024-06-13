import express from "express"
import { stripepayment } from "../Controller/payment.js"

const router = express.Router()

router.post("/payment",stripepayment)

export default router

