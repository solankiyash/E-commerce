import express from "express"
import { getallproduct, products, removeproducts } from "../Controller/products.js"

const router = express.Router()

router.post("/addproduct",products)
router.post("/removeproduct",removeproducts)
router.get("/getallproduct",getallproduct)



export default router