import express from "express"
import {login, singup} from "../Controller/userdata.js"

const router = express.Router()

router.post("/user",singup)
router.post("/login",login)


export default router