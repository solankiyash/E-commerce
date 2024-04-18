import express from "express"
import { addproduct, deleteproduct, getallproducts } from "../controller/addproduct.js"

const router = express.Router()


router.post("/",addproduct)

router.post("/remove",deleteproduct)

router.get("/allproduct",getallproducts)


export default router