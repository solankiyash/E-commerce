import express from "express";
import uploadRouter from "../Router/uploadrouter.js";
import productRouter from "../Router/productrouter.js";
import userRouter from "../Router/userrouter.js";
import paymentrouter from "../Router/paymentrouter.js";

const router = express.Router();

router.use("/", uploadRouter);
router.use("/product", productRouter);
router.use("/", userRouter);
router.use("/", paymentrouter);

export default router;
