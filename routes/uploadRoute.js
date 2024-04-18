import express from "express"
import  { uploadController }  from "../controller/upload.js";
import {uplodmiddlewere} from "../Middlewere/uplodmiddlewere.js"
const router = express.Router();

router.post('/',uplodmiddlewere.single("product"),  uploadController);


export default router;
