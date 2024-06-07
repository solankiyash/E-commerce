import express from "express"
import { getallproduct, products, removeproducts ,updateproduct  } from "../Controller/products.js"

const router = express.Router()

router.post("/addproduct",products)
router.post("/removeproduct",removeproducts)
router.put("/updateproduct/:id",updateproduct)
router.get("/getallproduct",getallproduct)



export default router