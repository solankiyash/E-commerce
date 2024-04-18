import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import cors from "cors"
import  uploadroute  from "./routes/uploadRoute.js"
import product from "./routes/product.js"

const port = 4000
const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://yashsolanki:yashsolanki@cluster0.dpwnf3i.mongodb.net/E-commerce")

app.get("/",(req,res) => {
    res.send("Exprees app is running")
})

app.use("/images",express.static("/upload/images"))


app.use("/upload",uploadroute)
app.use("/addproduct",product)


app.listen(port,(error) => {
    if(!error){
        console.log("Server Running on Port" + " " + port)
    }
    else{
        console.log("Error :"+error)
    }
})