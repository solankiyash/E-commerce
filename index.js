import mongoose from "mongoose";
import express, { Router } from "express"
import upload from "./Router/uploadrouter.js"
import product from "./Router/productrouter.js"
import userrouter from "./Router/userrouter.js"
import bodyParser from "body-parser";
import cors from "cors"
const app = express()

const port = 4000

const dbUrl = "mongodb+srv://yashsolanki:yashsolanki@cluster0.dpwnf3i.mongodb.net/E-commerce"
mongoose.connect(dbUrl)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log('MongoDB connection error:',error))

mongoose.connect("mongodb+srv://yashsolanki:yashsolanki@cluster0.dpwnf3i.mongodb.net/E-commerce")

// routes use
app.use(bodyParser.json())
app.use('/images', express.static('upload/images'));
app.use(cors())
app.use("/",upload)
app.use("/product",product)
app.use("/",userrouter)

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})


